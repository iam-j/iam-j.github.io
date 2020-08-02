---
layout: post
title: Windows container pipeline for ECS with Jenkins and Terraform
date: 2020-08-02
tags: aws ecs windows jenkins terraform
categories: ecs pipelines
image: /winecs.jpg
---

If you have used Windows container workloads on AWS as mentioned [here](https://iam-j.github.io/ecs/windows-container/),then you might be aware that implementing a code build and deployment pipeline is not a straight forward task.

Lets see one way to achieve Continuous integration and deployment using Jenkins and Terraform,in to the ECS for Windows service.

* TOC 
{:toc}

The architecture diagram for the workflow is as below.

![winecs][winecs]

### Infrastructure

- GitHub for Docker image and Terraform infrastructure scripts.
- Jenkins server with Windows agent.
- Elastic Container Registry for storing the Docker image.
- Elastic Container Service to run the Docker container with Windows service.
- Windows EC2 cluster attached to above ECS service.

Lets go through each step one by one.


### Push app/version changes to repo

Assuming your complete code is available on GitHub, the first step is to push the local changes from developer laptop to the remote repository.
This includes changes in the application to be included in the Docker image or the changes in the actual infrastructure running it.
Once the changes are committed,the build job can be triggered manually or using a web hook on a particular branch.

### Trigger Build Job

The job runs on **Jenkins** server as a workaround to **Code Build** limitation to build Windows Docker images.
Make sure that the version of the Jenkins Windows agent server is up to date compared to the Windows Docker image version we are using as a base.

### Build and push image to ECR

Once the Image is build and ready, the next step is to push it to the Amazon ECR service with specific version tag.In my case the tag used is the Jenkins Build number to maintain uniqueness.
With the Docker image available in the ECR,the next step is to update the ECS task definition to pick the latest image.

### Update image version in Terraform config

This is the crucial step,the Terraform scripts can handle changes in
- Infrastructure i.e Windows Ec2 Cluster,ECS scaling etc
- Docker image versions in the Task definition of ECS

So in the above step,post building and uploading image to Amazon ECR we are updating **terraform.tfvars** with build Tag.This change will be seem Terraform which in turn would update the ECS service **Task definition**

### Terraform Apply

Following the steps above,we have required version changes in place.The next step is to prepare Terraform Plan and Apply the changes.
To prevent unintentional modifications we can add a manual plan approval process before applying Terraform changes.

On applying the scripts we have the latest version of application updated in the ECS service.

### Commit image changes to repo

We now have the latest application running in ECS but we need to ensure that the latest Docker image **Tag** modified in **terraform.tfvars** is saved in GitHub.
So we add a step in the Jenkins job which commits the changes back to the repo and our infrastructure code is up to date for future build and deployment jobs.

### Finally

We started with changes from developer's laptop and ended up with deploying them on the Amazon AWS environment.The post has been deliberately written with out describing actual scripts or minute implementation details.The intention was to showcase the workflow to have continuous and automatic build deployments for Windows workloads.

With these details people can further explore alternatives and improvements for their pipelines.


[winecs]: {{"/winecs.jpg" | prepend: site.imgrepo }}