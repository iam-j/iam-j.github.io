---
layout: post
title: Terraform multiregion deployment
date: 2020-06-04 12:31:59
tags: terraform aws
categories: Iac
---

We might come across a scenario where we need to deploy resources in multiple AWS regions as a disastor recovery or backup plan.

* TOC 
{:toc}

Using Terraform for infrastructure as code we can achieve this using **alias** in Provider.


# Primary region

Declare the provider with primary region as usual.

{% highlight hcl %}

provider "aws" { 
  version = "~> 2.0"
  region  = us-east-1
  profile = "default"
}

{% endhighlight %}

# Backup region

Declare the second provider with alias which can be used while creating resources.

{% highlight hcl %}

provider "aws" { 
  alias = "backup" 
  region = ap-southeast-1
  }

{% endhighlight %}

# Full terraform sample

Now we can proceed using the alias to create resources in primary and backup regions in our case its us-east-1 and ap-southeast-1

{% highlight hcl %}

provider "aws" { 
  version = "~> 2.0"
  region  = us-east-1
  profile = "default"
}

provider "aws" { 
  alias = "backup" 
  region = ap-southeast-1

  }

resource "aws_instance" "Primary-EC2" {
    ami = var.ami
    instance_type = "t2.micro"
    tags = {
        Name = "Primary-EC2"
    }
}

resource "aws_instance" "Secondary-EC2" {
    provider = aws.backup
    ami = var.ami
    instance_type = "t2.micro"
    tags = {
        Name = "Secondary-EC2"
    }
}


variable "ami" {
  default = "ami-01d025118d8e760db"
}

variable "ami_backup" {
  default = "ami-0fe1ff5007e7820fd"
}


{% endhighlight %}

Apply the terraform script to have EC2 machines created in two regions.


[source](https://www.reddit.com/r/Terraform/comments/a4aeqn/how_do_i_deploy_to_multiple_regions/)

