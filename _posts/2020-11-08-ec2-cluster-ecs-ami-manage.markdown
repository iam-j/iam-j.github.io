---
layout: post
title: Managing EC2 AMI used in ECS clusters
date: 2020-11-08
tags: aws ec2 autoscale
categories: ecs
image: /awsami1.jpg
---

People using EC2 backed ECS cluster can understand the pain which goes in to maintaining and patching the base machines running our ECS containers.We usually pick two paths

- Use ECS optimized AMI maintained by AWS.
- Use custom AMI with patching on our convenience.

Let us the see pros and cons with both the methods.

* TOC 
{:toc}

### ECS optimized AMI images

![awsami1][awsami1]

Pros:

- AWS updates base AMI periodically for us with latest security patches.
- AWS regularly pushes AMI with updated ECS agent,Docker versions and dependencies.

Cons:

- Older AMI's disappears and will not available.
- If you have hardcoded your Launch template/Configuration,cluster goes down when AMI is no longer available.
- Compatibility issues may occur with the newer versions,especially in case of Windows Containers.


**Solution to prevent hard coded AMI names using Terraform.**

We can create Terraform resource as below to always fetch latest ECS optimized image provided by Amazon and then use it in our launch configuration or template


{% highlight hcl %}

data "aws_ami" "windows" {
  most_recent = true
  owners      = ["amazon"]
  filter {
    name   = "name"
    values = ["Windows_Server-2019-English-Full-ECS_Optimized-*"]
  }
}

resource "aws_launch_configuration" "windows_ecs" {
  associate_public_ip_address = "true"
  enable_monitoring           = "true"
  iam_instance_profile        = "arn:aws:iam::XXXXXXXX"
  image_id                    = data.aws_ami.windows.id
  instance_type               = "t3.xlarge"
  key_name                    = "my key
  name_prefix                 = "ecs-windows"
  root_block_device {
    delete_on_termination = "true"
    encrypted             = "false"
    iops                  = "0"
    volume_size           = "50"
    volume_type           = "gp2"
  }

  lifecycle { create_before_destroy = true }
}

{% endhighlight %}

### Self managed ECS AMI

Pros:

- We can retain total control of ownership and maintenance of the AMI image.
- We can enforce additional security and custom patching cycles.

Cons:

- Obviously the burden to maintain the images falls on us.
- AMI storage cost might increase depending on our versioning strategy.
- Resources are required to pick latest ECS agent, docker version etc., test and update.


### Finally

Whichever path we pick , the burden to change and upgrade our ECS cluster launch configuration falls on us.Although using and IAC like Terraform would make it easy to quickly update.

Do let me know if there are bette ways to maintain the AMI and EC2 backed ECS clusters.

[awsami1]: {{"/awsami1.jpg" | prepend: site.imgrepo }}