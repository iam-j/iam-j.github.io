---
layout: post
title: Corrupted Terraform S3 backend
date: 2020-06-12
tags: terraform aws
categories: iac
---

If you are using a S3 backend to save the state and lock the changes,something like [here](https://iam-j.github.io/iac/terraform-backend-with/).Chances are you might see errors rarely while initiating backend,this could happen when

- State file is corrupted.
- State file modified out of the Terraform workflow.

* TOC 
{:toc}


### Consequence

The Dynamodb table used in the backend configured. stores the **md5** of the state file at any point of time.When the state file is tampered, resulting in md5 difference causing below error.

>Error refreshing state: state data in S3 does not have the expected content.

>This may be caused by unusually long delays in S3 processing a previous state
update. Please wait for a minute or two and try again. If this problem
persists, and neither S3 nor DynamoDB are experiencing an outage, you may need
to manually verify the remote state and update the Digest value stored in the
DynamoDB table to the following value:


![error][error]


### The fix

Get the *md5* from the error displayed,go ahead and update the Dynamo db.

Do remember, this is a workaround to proceed across the blocker and to be used as a **last resort**

- after investigating the state changes
- on failure of reverting the state file to previous version.


[source](https://github.com/hashicorp/terraform/issues/15380#issuecomment-310800265)

[error]: {{"/dynamoerror.jpg" | prepend: site.imgrepo }}