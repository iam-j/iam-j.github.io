---
layout: post
title: Classic Load Balancer migration to ALB
date: 2022-04-16
tags: aws iac
categories: aws
image: /clb1.jpg
---

AWS Classic Load Balancers have already been retired and the official [deadline](https://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/#:~:text=On%20October%2030%2C%202021%20we,Reserved%20Instances%20for%20EC2%2DClassic.) for migrating is coming up.

We have a quick migration option available in the AWS management console but is not useful for Projects and Infra which are deployed/maintained using the Infrastructure as Code.

![clb2][clb2]

In this post we will go through the steps necessary to perform the migration with zero downtime using Cloudformation templates on a sample application.

Note:This sample application and cloud formation templates are internet facing and required further configuration and testing before using in live or prodcution environments.

* TOC
{:toc}


### Steps inovlved in the migration

- Check and validate your existing Cloudformation template against exsiting Infrastructure.
- Update the template with Application Load balancer changes.
- Create new ALB while still serving traffic through the old Classic load balancer.
- Slowly divert traffic to the new ALB.
- Delete old classic load balancer using the Cloud formation.

I have executed above steps with a sample application and explained below

### Prepare Sample application

The Cloudformation template [here](https://gist.github.com/iam-j/9f20795093061aedb1763f692e34be5a) will create a Classic load balancer pointing to our sample application hosted on EC2.

The output of the same should be as below.

![clb3][clb3]

### Deploy ALB with out deletion of the Classic Load balancer

This CF [template](https://gist.github.com/iam-j/b3876fe8f5f34673db5a6ce42d21cb32) will create a new Application load balancer which is going to replace our Classic load balancer created in step one.This is to ensure our new URL is ready and serving traffic before deleting the old endpoint.

The new URL should be serving our app.

![clb4][clb4]

### Clean Old Classic Load Balancer

Once we are sure that the traffic is moved to the new URL i.e Application Load Balancer,we are good to run the last [template](https://gist.github.com/iam-j/ea936dcdd5922b76e2cd720895899a08) which would delete our Classic Load Balancer.

![clb5][clb5]

### Conclusion

Using this 3 step process we could easily migrate off from the Classic load balancer to Applcation load balancer with zero down time, which is very much need and appreciated on production environments.

[clb1]: {{"/clb/clb1.jpg" | prepend: site.imgrepo }}
[clb2]: {{"/clb/clb2.jpg" | prepend: site.imgrepo }}
[clb3]: {{"/clb/clb3.jpg" | prepend: site.imgrepo }}
[clb4]: {{"/clb/clb4.jpg" | prepend: site.imgrepo }}
[clb5]: {{"/clb/clb5.jpg" | prepend: site.imgrepo }}
