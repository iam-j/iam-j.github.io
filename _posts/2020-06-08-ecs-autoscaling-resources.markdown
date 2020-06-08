---
layout: post
title: ECS autoscaling resources
date: 2020-06-08 05:31:59
tags: aws ecs scaling
categories: troubleshooting
---

Autoscaling resources on ECS is simple but optimizing it for the cost and capacity becomes a difficult task once the scale of workload increases.

Below are few interesting resources which are helpful and good to know


### [Set it and Forget it Auto Scaling Target Tracking Policies](https://www.youtube.com/watch?v=srofVz6xvkE)

Nice video explaining Target tracking policy,how to estimate and plan for the target to be tracked.


### [Deep Dive on Amazon ECS Cluster Auto Scaling](https://aws.amazon.com/blogs/containers/deep-dive-on-amazon-ecs-cluster-auto-scaling/)

Article on official Amazon blog explaining the details of ECS autoscaling.


### [When AWS Autoscale Doesn’t](https://segment.com/blog/when-aws-autoscale-doesn-t/)

This article shows us the inticracies of scale up and scale down and prepares us for the surprises hidden beneath.

I strongly suggest giving some time to go through them before planning on scaling your cluster.