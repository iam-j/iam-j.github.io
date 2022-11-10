---
layout: post
title: Track CloudFormation Stack Changes Using EventBridge
date: 2022-11-09
tags: iac cloudformation
categories: iac
image: /eventbridge/eventbridge1.jpg
---

If you are handling your infrastructure as code using CloudFormation stacks and is managed by multiple users, you could have run into a scenario where one of them might have run the stack or modified the stack and no one is aware of change. To track and get alert on those scenarios we now have support for CloudFormation [events](https://aws.amazon.com/about-aws/whats-new/2022/07/aws-cloudformation-event-notifications-amazon-eventbridge-event-driven-applications/) in the EventBridge which can be piped to SNS or custom alert system.

Let us create a sample event to track Changes to one of the stacks.
Most of the steps are clearly described [here](https://aws.amazon.com/blogs/devops/using-cloudformation-events-to-build-custom-workflows-for-post-provisioning-management/) but the JSON here have few additional fields and statuses.


* TOC
{:toc}

### JSON for our custom event

Below JSON will help us in creating an alert for different statuses like

- Creation Complete/Failed
- Update Complete/Failed
- Delete Failure

{% highlight json %}

{
  "source": ["aws.cloudformation"],
  "detail-type": ["CloudFormation Resource Status Change"],
  "resources": ["arn:stack_Arn_here"],
  "detail": {
    "stack-id": ["arn:stack_Arn_here"],
    "status-details": {
      "status": ["CREATE_COMPLETE", "CREATE_FAILED", "UPDATE_FAILED", "DELETE_FAILED", "UPDATE_COMPLETE"]
    }
  }
}

{% endhighlight %}
### EventBridge Rule

Open AWS EventBridge and create a new rule with Custom Pattern as shown in the screenshot below

![eventbridge1][eventbridge1]

Select your target which has to be SNS if you need to receive a notification

![eventbridge2][eventbridge2]

Once done create a rule and we should be good to receive the alert whenever a stack has been modified.


[eventbridge1]: {{"/eventbridge/eventbridge1.jpg" | prepend: site.imgrepo }}
[eventbridge2]: {{"/eventbridge/eventbridge2.jpg" | prepend: site.imgrepo }}
