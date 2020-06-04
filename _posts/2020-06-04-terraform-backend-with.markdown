---
layout: post
title: Terraform backend with Dynamo DB
date: 2020-06-04 11:31:59
tags: terraform aws
categories: Iac
---

This is simple and most often googled thing on web,creating a backend for Terraform for deployments in AWS cloud with a provision for locking the state file.

* TOC 
{:toc}


# Create DynamoDB

Use the terraform script to create DynamoDB to lock the state of the file terraform.tfstate

{% highlight hcl %}
provider "aws" {
   region = "us-east-2"
}


resource "aws_dynamodb_table" "dynamodb-terraform-lock" {
   name = "terraform-lock"
   hash_key = "LockID"
   read_capacity = 20
   write_capacity = 20

   attribute {
      name = "LockID"
      type = "S"
   }

   tags {
     Name = "Terraform Lock Table"
   }
}

{% endhighlight %}

# Create Terraform backend

Below code sample creates the backend assuming you existing S3 bucket and DyanamoDb.

{% highlight hcl %}
terraform {
  backend "s3" {
    bucket = "terraform-s3-tfstate"
    region = "us-east-2"
    key = "ec2-example/terraform.tfstate"
    dynamodb_table = "terraform-lock"
    encrypt = true
  }
}

provider "aws" {
  region = "us-east-2"
}

resource "aws_instance" "ec2-example" {
  ami = "ami-a4c7edb2"
  instance_type = "t2.micro"    
}

{% endhighlight %}

With the code added in your terraform scripts you are all set up with tamper proof backend in AWS.


[source](https://stackoverflow.com/questions/43209940/terraform-state-locking-using-dynamodb)

