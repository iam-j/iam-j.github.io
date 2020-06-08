---
layout: post
title: Cloudwatch logs for Windows containers on Amazon ECS
date: 2020-06-08 
tags: aws ecs cloudwatch windows
categories: troubleshooting
image: /logging/log4.jpg
---

If you already have or planning to use Windows workloads on Amazon ECS, you should be aware that it is not as feature complete as Linux counterpart.

Even basic options like logging needs an additonal configuration to be made.In addtion to this, the errors thrown at us are not very informative.

So lets see how the ECS Cloudwatch logs can be enabled for Windows containers

* TOC 
{:toc}


### Enabling Logs from UI

In ECS task definiton while declaring options for the container we have an option for **Storage and Logging** , go ahead and fill the values as per your requirements.

![log1][log1]

Save the task definition.

### Error on launch

With the option set if you try to launch the task on the Windows EC2 cluster you will see an error.

>Run tasks failed
>Reasons : ["ATTRIBUTE"]

The actual reason behind the error which AWS does not explain to us, is the missing configuration on the Host EC2 which we will doing in the next step.


### Enable Support on EC2

The Host runnning the container should have the environmental variables defined for the *ECS agent* to start sending logs to Cloudwatch.

{% highlight powershell %}

[Environment]::SetEnvironmentVariable("ECS_ENABLE_AWSLOGS_EXECUTIONROLE_OVERRIDE",$TRUE, "Machine")

{% endhighlight %}

Above statement would set the environmental variable which in turn provides the ATTRIBUTE needed for ECS.

![log2][log2]

### Modify Userdata

The option mentioned above should be added in the **Userdata** of the **Launch Configuration** for the cluster scaling groups to have it enabled for all the future machines being placed inside the Windows Cluster.

![log3][log3]


Once the setup is complete you should be able to see all the containers logs running in the cluster inside Cloudwatch 

![log4][log4]



[source](https://github.com/aws/amazon-ecs-agent/issues/1395)


[log1]: {{"/logging/log1.jpg" | prepend: site.imgrepo }}
[log2]: {{"/logging/log2.jpg" | prepend: site.imgrepo }}
[log3]: {{"/logging/log3.jpg" | prepend: site.imgrepo }}
[log4]: {{"/logging/log4.jpg" | prepend: site.imgrepo }}

