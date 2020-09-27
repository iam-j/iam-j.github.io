---
layout: post
title: AWS Step function to run ECS task
date: 2020-09-27
tags: aws ecs 
categories: ecs pipelines
image: /awstep0.jpg
---

Step functions are very useful, if you are planning to build a workflow across multiple AWS services. It connects different AWS resources and gives us control over the execution path based on predefined conditions and feedback.

If you have been using ECS to run a task as a job or on schedule,there is a better way to run and handle the execution using the [Step functions](https://aws.amazon.com/step-functions/).

In this post we will create simple Step function

- Which triggers an ECS task.
- Check the result of the execution.
- Retry the task on failure.

The execution workflow is as below.

![awstep1][awstep1]

* TOC 
{:toc}

### ECS task details

Assuming you already have an ECS cluster and corresponding Task definition to run the task,get the necessary details to use inside step functions like

- ECS Cluster ARN
- ECS task ARN

They are required to call the ECS activities from the Step Function.


### Prepare Step Function

Once you have the details use the sample JSON definition for the function.

The definition **Runs** the ECS task and check the error type *TaskFailed* , retires after 10 seconds and tries 3 more times until success.

{% highlight json %}
{
        "Version": "1.0",
        "Comment": "Run ECS/Fargate tasks",
        "TimeoutSeconds": 1200,
        "StartAt": "RunTask",
        "States": {
          "RunTask": {
            "Type": "Task",
            "Resource": "arn:aws:states:::ecs:runTask.sync",
            "Parameters": {
              "LaunchType": "EC2",
              "Cluster": "arn:aws:ecs:ap-southeast-1:XXXXXXXXXX:cluster/workflow",
              "TaskDefinition": "arn:aws:ecs:ap-southeast-1:XXXXXXXXXX:task-definition//task_name:3"
             
            },
            "Retry": [
              {
                "ErrorEquals": [
                  "States.TaskFailed"
                ],
                "IntervalSeconds": 10,
                "MaxAttempts": 3,
                "BackoffRate": 2
              }
            ],
            "End": true
          }
        }
      }

{% endhighlight %}

### Trigger Step function

Once the definition and function are ready, you see a flow graph of the execution and ready to be run.

![awstep0][awstep0]

### Finally

In this example we took an ECS task and added an simple feedback loop to handle the task failure with logging.

This can be further extended to run between different services especially connection Lambda, creating a continuous execution flow.

[awstep1]: {{"/awstep1.jpg" | prepend: site.imgrepo }}
[awstep0]: {{"/awstep0.jpg" | prepend: site.imgrepo }}