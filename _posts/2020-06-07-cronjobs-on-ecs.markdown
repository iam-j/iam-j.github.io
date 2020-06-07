---
layout: post
title: Cron jobs on Amazon ECS
date: 2020-06-07 05:31:59
tags: aws ecs cloudwatch
categories: jobs
image: /schedule/job3.jpg
---

We have a scenario where we just need to run a task on scheduled time of a day or repeat every few hours inside AWS.Our first instinct would be to have the task in *Lambda* and schedule it in Cloudwatch or if the binaries have dependencies and need to be run inside container,the choice would be *AWS Batch*

But there is lesser known and easier option, to run the task in ECS cluster on schedule.

Assuming you are already aware of using ECS tasks and clusters,lets dive into it.

* TOC 
{:toc}


# Create Task definiton

With container already ready and pushed to the *ECR* we can create simple task definition to run our container in ECS cluster.

Mention the memory ,cpu requirements and entrypoint and we are good to go.
 

![job0][job0]


# ECS cluster

Have atleast one ECS cluster ready to run our task.If not available create a Fargate or EC2 cluster with default options.

We can skip scaling and load balancer options as we already aware of the capacity and the schedule for the task or job to run.

# Scheduling the task

We reached to a point where we are actually going to schedule the task in ECS. On the cluster we have created,you should be seeing a tab called **Scheduled Tasks**

![job1][job1]

Use this tab to create our schedule task,you can directly specify **Cron expression** or selecting the **Run at fixed interval** would auto create the same for you.

![job2][job2]

You can see created job under scheduled tasks.

![job3][job3]

As mentioned earlier,above steps automatically creates the required rule and targets inside the Cloudwatch for our job to run.

![job4][job4]

# Note

I have assumed a lot of prerequisites existing in your AWS account to make the process simple,let me capture them here.

- Working container with scripts or binaries needed to complete the our actual task.
- Image of above container pushed in repository.
- Valid IAM role to run ECS task.
- Valid IAM role for cloudwatch to run ECS task.



[job0]: {{"/schedule/job0.jpg" | prepend: site.imgrepo }}
[job1]: {{"/schedule/job1.jpg" | prepend: site.imgrepo }}
[job2]: {{"/schedule/job2.jpg" | prepend: site.imgrepo }}
[job3]: {{"/schedule/job3.jpg" | prepend: site.imgrepo }}
[job4]: {{"/schedule/job4.jpg" | prepend: site.imgrepo }}
