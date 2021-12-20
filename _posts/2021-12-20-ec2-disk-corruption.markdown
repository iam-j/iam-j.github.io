---
layout: post
title: Mitigating file system failures on root EBS volume
date: 2021-12-20
tags: aws ec2 ebs
categories: aws
image: /ebs/ebs1.jpg
---

Below scenario explains the troubleshooting steps to get the EC2 recovered from EBS boot failiures.

Issue: System root has failed consistency check and instance was no longer able to boot.

![ebs1][ebs1]

* TOC
{:toc}

Procedure to be followed for bringing the EC2 instance back.

- Capture the current EBS volume metadata from AWS console,especially the device mount name.
  ![ebs2][ebs2]

- Stop the EC2 instance which needs to be troubleshooted.

- Detach the volume which has to be fixed from the AWS management console.
  ![ebs3][ebs3]

- Use the same console to attach the volume to the rescue machine as a secondary device **(/dev/sdf)**.

- Check if the disk available on the rescue EC2 instance using
    {% highlight bash %}
    lsblk
    {% endhighlight %}

- Run the *fsck* on the drive to fix the errors.
    {% highlight bash %}
    fsck <mount>
    {% endhighlight %}

    Ex: fsck /dev/nvme2n1

- If you see an error with the above command, run fsck directly.
    {% highlight bash %}
    fsck
    {% endhighlight %}

- Above commands can be run with -N flag as a dry run to see the changes to be made.

- Once the file errors are fixed,detach the EBS volume from the rescue EC2 instance and attach to the instance which has been taken down for maintenance.

- Start the EC2 instance and check the system log.

- If the process is successful we should be able to boot into the instance and the services would be running again.


This [url](https://aws.amazon.com/premiumsupport/knowledge-center/ec2-linux-status-check-failure-os-errors/) has additional troubleshooting for EBS volumes.


[ebs1]: {{"/ebs/ebs1.jpg" | prepend: site.imgrepo }}
[ebs2]: {{"/ebs/ebs2.jpg" | prepend: site.imgrepo }}
[ebs3]: {{"/ebs/ebs3.jpg" | prepend: site.imgrepo }}