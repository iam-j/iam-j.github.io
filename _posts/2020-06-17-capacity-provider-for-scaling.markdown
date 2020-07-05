---
layout: post
title: Capacity Provider for scaling ECS clusters
date: 2020-06-17 05:31:59
tags: aws ecs scaling terraform
categories: ecs
image: /capacity/capacity3.jpg
---

Before Capacity Providers, we had to make sure that the resources are available up and running before the task could be run.This constraint some times left us with unused capacity or uneven scaling of EC2 resources inside the cluster.

With Capacity Provider the ECS cluster management takes new turn,lets see how..

* TOC 
{:toc}

### What are Capacity Providers

At the higher level it is a tool to provide compute resources for our cluster,with out us managing or configuring scaling manually.[Released](https://aws.amazon.com/about-aws/whats-new/2019/12/amazon-ecs-capacity-providers-now-available/) 6 months back,it allows us to mix and match EC2 On demand,Spot or Fargate and Fargate Spot.

### Configuring Capacity Provider

Configuring Capacity Provider has been made simple to create,only prerequisite is to have an existing

- ECS cluster running on EC2
- EC2 Auto scaling group


Proceed to the cluster details to see the tab for providers.

![capacity1][capacity1]

Click on the tab and you are good to create new Provider.

![capacity2][capacity2]


Fill the details of the provider, ASG and make sure to enable *Managed scaling* for the ECS to maintain scaling of the EC2 machines and their termination.

*Target Capacity %* helps us to define the amount of utilization of our capacity which in turn is used to define Cloudwatch Alarms.

### How does it scale

Once a capacity provider is created we have Cloudwatch alarms automatically created.In this case setting a *Target Capacity %* of 90 percent, we see below alarms.


So the Provider makes sure to increase or decrease the number of EC2 machines in the cluster to maintain the reservation between 81 and 90 percent.

![capacity4][capacity4]

![capacity5][capacity5]

Only one thing we need to make sure, the ASG should have the minimum and maximum values sufficiently set to handle our ECS workload.

### Creation from Terraform

With the bugs[1](https://github.com/aws/containers-roadmap/issues/632#event-3450950532) and [2](https://github.com/terraform-providers/terraform-provider-aws/issues/11286#issuecomment-645063796) in creating and destroying the Capacity provider from CLI/API fixed , we can start using them in our Terraform scripts while creating a cluster as below

Assuming you have existing ASG we can create cluster with Capacity Provider using the script below

{% highlight hcl %}

resource "aws_ecs_cluster" "my_ec2_cluster" {
  name = "my-ec2-cluster"
  capacity_providers = [aws_ecs_capacity_provider.my_ec2_provider.name]
	default_capacity_provider_strategy {
	capacity_provider = aws_ecs_capacity_provider.my_ec2_provider.name
	weight = 1
	base = 0
  }
}

resource "aws_ecs_capacity_provider" "my_ec2_provider" {
  name = "my-ec2-provider"
  auto_scaling_group_provider {
    auto_scaling_group_arn         = aws_autoscaling_group.my_ec2_asg.arn
    managed_termination_protection = "DISABLED"
    managed_scaling {
      maximum_scaling_step_size = 1000
      minimum_scaling_step_size = 1
      status                    = "ENABLED"
      target_capacity           = 90
    }
  }
}

{% endhighlight %}

Note:We can attach multiple Providers to a single cluster.

### Conclusion.

We can achieve smooth scale in and scale out of the resources in the cluster and more importantly we now have a new state for ECS called **PROVISIONING** which makes sure to keep the task in waiting state until we have the sufficient capacity scaled out, instead of failing with **Insufficient resources** , which was the case previously.

![capacity3][capacity3]

This [post](https://aws.amazon.com/blogs/containers/deep-dive-on-amazon-ecs-cluster-auto-scaling/) from AWS goes in to the hidden details of Capacity Providers and has much more information, if interested.

*Update:*

If your tasks are not going to provisioning state while using Capacity Provider,make sure you are using capacity provider strategy instead of launch_type in your service as mentioned [here](https://github.com/aws/containers-roadmap/issues/653#issuecomment-568284219)

![capacity6][capacity6]

[capacity1]: {{"/capacity/capacity1.jpg" | prepend: site.imgrepo }}
[capacity2]: {{"/capacity/capacity2.jpg" | prepend: site.imgrepo }}
[capacity3]: {{"/capacity/capacity3.jpg" | prepend: site.imgrepo }}
[capacity4]: {{"/capacity/capacity4.jpg" | prepend: site.imgrepo }}
[capacity5]: {{"/capacity/capacity5.jpg" | prepend: site.imgrepo }}
[capacity6]: {{"/capacity/capacity6.jpg" | prepend: site.imgrepo }}