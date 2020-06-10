---
layout: post
title: How much is your service on Amazon ECS costing you?
date: 2020-06-09
tags: aws ecs costexplorer
categories: optimizing
image: /tagging/tag4.jpg
---

Consider all your workload is running inside ECS of your AWS account and you received a bill by the end of the month.

You tried to use Cost Explorer and captured the amount spent EC2 Container services,but you find that there no way of knowing which one among ECS services is costlier to maintain or the one efficient.

* TOC 
{:toc}

Here we will explore our options to get the detailed cost of running your ECS service.


### Tagging your resources

Amazon suggested solution to the problem, **tag your resources and use it in Cost Explorer to drill down expenses**

Tagging a resource is straight forward method,select the appropriate *key,value* pair and go ahead.

The **problem**, tagging a service needs a migration to the new ARN format.

![tag1][tag1]


### Moving to new ARN format

ARN or Amazon Resource Names uniquely identify AWS and explained in detail [here](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) 

At the high level you need to optin using *Account Settings* in ECS and you are good to go for all the new services created then on.

![tag2][tag2]

For *the existing services*,the only option is to recreate the service.Your task definition and cluster need not to be changed.

Amazon has proposed solution for migrating existing resources [here](https://aws.amazon.com/blogs/compute/migrating-your-amazon-ecs-deployment-to-the-new-arn-and-resource-id-format-2/)

### Using the tags

Once you are done with optin,you can proceed tagging the resources as per the need and predefined specification.It's always advised to have a proper and uniform tagging convention followed across the account.

Then proceed to Cost allocation tags in the Billing section.

![tag3][tag3]

Here you should see the created tag and activate the same for considering in mapping of usage and cost.


### Checking the cost

If you have followed all the steps you are good to view your cost per service.

First filter on the *EC2 Container service* then proceed to filter on the *Tags*.

You should now have cost per service calculated.

![tag4][tag4]


[tag1]: {{"/tagging/tag1.jpg" | prepend: site.imgrepo }}
[tag2]: {{"/tagging/tag2.jpg" | prepend: site.imgrepo }}
[tag3]: {{"/tagging/tag3.jpg" | prepend: site.imgrepo }}
[tag4]: {{"/tagging/tag4.jpg" | prepend: site.imgrepo }}