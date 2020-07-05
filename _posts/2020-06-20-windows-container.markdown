---
layout: post
title: Windows container workloads in AWS Cloud
date: 2020-06-20
tags: aws ecs windows
categories: ecs
image: /wincon.jpg
---

You have a Windows Legacy application or compatible version which needs to be part of digital transformation and you cannot afford rewriting the same.So you are left with limited options.

- Move to Windows EC2 machines.
- Use the application inside containers.

Yes,you can run windows containers and Microsoft provides official base [images](https://docs.microsoft.com/en-us/virtualization/windowscontainers/manage-containers/container-base-images).

* TOC 
{:toc}

### Why Windows Containers

Running Windows application in container gives us 

- Portability : Unlike applications installed on Host machines we can move from one to one,carrying our container image with us.
- Scalability : One application instance is not sufficient?scale up by just launching multiple containers.
- Distribution : Application distribution becomes easier by the way of Images and Repositories.
- Consistency : By the using Docker files for building and images for distribution we gain consistency across the environments.

Of course you might have heard these benefits for Linux applications but the same can be achieved with Windows too.

### Types of Windows base images

Microsoft gives us  four major image types based on application dependency and compatibility.

- [Windows Server Core](https://hub.docker.com/_/microsoft-windows-servercore) : For traditional .NET framework applications.
- [Nano Server](https://hub.docker.com/_/microsoft-windows-nanoserver) : For .NET core applications
- [Windows](https://hub.docker.com/_/microsoft-windows) : Full Windows API
- [Windows IOT Core](https://hub.docker.com/_/microsoft-windows-iotcore) : For IOT applications

### Where Should I run them

Traditional way of hosting EC2 machines with Docker installed always work.But let us explore different ways of running them on **AWS Cloud**.

**Limitations**

Let us first begin with the limitations preventing us from using AWS managed container services in full fledge.

- Windows Containers runs only on Windows host : seems obvious but we need to build and maintain compatible Windows server 2016 and 2019 machines to run them unlike Linux where we are free to choose.
- Image Size: Completely built Windows containers runs in to Gigabytes unlike Linux in MegaBytes.

With above constraint lets see where AWS services fails us with Windows.

- *Code Build* : Our first hurdle starts with building an Windows image from Docker file,the AWS service used most often does not offer any support for building Windows container images.
  
- *AWS Batch* : Nice to use AWS service which allows us to run container workload as Jobs, has no support for Windows containers too.
  
- *EKS* : Never tried Windows in Kubernetes.
  
- *ECS* : You might have sensed limitations with Amazon Elastic Container Service too, yes it has its own constraints.

  Beginning with FARGATE, which is completely out of scope for Windows workloads.**Our only option is to run on Windows EC2 clusters.**


So assuming you have Windows Container image and EC2 cluster created in ECS, we can proceed with running by creating

- Task definition
- Service

Once you start running the service you will find few more constraints while defining a task.

- Soft Limit of resources cannot be defined.
- All network options not supported.

The documentation [here](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_Windows.html) has few more caveats.




### Finally

I can understand and appreciate your efforts and the needy situation which makes you to go through the constraints.
But once you have them running ,all the benefits mentioned above Portability,Scalability,Distribution and Consistency are as good as *Linux containers*.

