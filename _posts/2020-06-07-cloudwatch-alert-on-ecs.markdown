---
layout: post
title: Cloudwatch alert on ECS event
date: 2020-06-07
tags: aws ecs cloudwatch
categories: monitoring
---

Consider a use case where a ECS task could not be placed or started on a cluster and fails silently.

* TOC 
{:toc}

The failure could be due to 

- Insufficient resources
- ECS agent crash or not responding

In a production system this failure has to be alerted and we have a way to achieve this, using Cloudwatch to monitor [ECS service action events](https://aws.amazon.com/about-aws/whats-new/2019/11/amazon-ecs-service-events-now-available-as-cloudwatch-events/) and alerts us when it finds a match.

Lets see how to use it

# Capture ECS event

Before starting with alert we need to capture a sample event of the ECS failure.

In our case its **task not started** event/message which would be as below

{% highlight json %}

{
  "source": [
    "aws.ecs"
  ],
  "detail": {
    "stoppedReason": [
      "Task failed to start"
    ],
    "stopCode": [
      "TaskFailedToStart"
    ],
    "clusterArn": [
      "arn:aws:ecs:us-east-1:%youraccountid%:cluster/%yourclustername%"
    ]
  }
}

{% endhighlight %}


This Json sample can then be used to setup cloudwatch alert to trigger a lambda or SNS notification.

# Setting up alert

With JSON in place to capture the events we can direclty jump to cloudwatch rule and setup a new one to alert us.

The way to setup simple is easy as shown below if you already have a lambda or SNS setup to send a mail or take an action.

![event][event]

# Other ECS events

Example shown here is just one of the many cases you come across while working with ECS,for additional events and customization please go through the official documentation [here](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_cwe_events.html)



[event]: {{"/event.jpg" | prepend: site.imgrepo }}
