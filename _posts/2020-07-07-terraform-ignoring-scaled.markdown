---
layout: post
title: Ignoring auto scaled changes in Terraform
date: 2020-07-07 11:31:59
tags: terraform aws
categories: iac
---

If you are using Terraform to deploy the infrastructure in AWS and if it includes auto scaling groups and policies set on EC2 machines and ECS services,you have to prevent resetting the **Desired Count** of the scaled up services on every IAC deployment.

* TOC 
{:toc}

### Consequence

If no action is taken,it would be disastrous in the Production environment for the service which is up and running on full capacity.Deploying your Terraform updates would abruptly bring down the service count to initial capacity mentioned in the scripts.

### Prevention

To prevent above scenario we need to use the Terraform argument **lifecycle** with *ignore_changes* set as shown in below example.


**For ECS Service**

{% highlight hcl %}
resource "aws_ecs_service" "example" {
  # ... other configurations ...

  # Example: Create service with 2 instances to start
  desired_count = 2

  # Optional: Allow external changes without Terraform plan difference
  lifecycle {
    ignore_changes = ["desired_count"]
  }
}
{% endhighlight %}

**For EC2 Auto Scaling Group**

{% highlight hcl %}
resource "aws_autoscaling_group" "bar" {
  name                      = "foobar3-terraform-test"
  max_size                  = 5
  min_size                  = 2
  health_check_grace_period = 300
  health_check_type         = "ELB"
  desired_capacity          = 4
  # ... other configurations ...

  lifecycle {
    ignore_changes = ["desired_capacity"]  }
}
{% endhighlight %}


### Conclusion


With the *lifecycle* set as above,we could prevent deployments overriding the running count and it also allows to tweak the scaling count out of our IAC pipeline.


[source](https://www.terraform.io/docs/configuration/resources.html#ignore_changes)

