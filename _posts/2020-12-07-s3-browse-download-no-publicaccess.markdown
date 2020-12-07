---
layout: post
title: Browse and download S3 files with out public access to Bucket
date: 2020-12-07
tags: aws ec2 s3
categories: s3
image: /s3note/s3note1.jpg
---

**Scenario:** Users have to access and download files from a S3 bucket but not upload or change the contents of the same.

We can address the requirement by following official documented steps [here](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteAccessPermissionsReqd.html)

>To make your bucket publicly readable, you must disable block public access settings for the bucket and write a bucket policy that grants public read access. If your bucket contains objects that are not owned by the bucket owner, you might also need to add an object access control list (ACL) that grants everyone read access.

But for my use case the bucket cannot be made public, users should be able to browse the files in S3 as good as any person with AWS login credentials with CLI or Python while retaining the read only access.

Hence, Jupyter Notebooks comes to my rescue to build a solution as described in this post.

* TOC 
{:toc}

### Preparing EC2 to host Jupyter

Create an EC2 to serve as a Bastion host with
- Jupyter Notebook
- AWS CLI
- Python Boto3

This can be achieved by steps mentioned [here](https://dataschool.com/data-modeling-101/running-jupyter-notebook-on-an-ec2-server/)

At the end, we have a Jupyter notebook **URL** generated which users can access from any browser.


### Create S3 read only instance role

Next create EC2 instance role with read only access policy for the S3 as below.

{% highlight json %}

{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:Get*",
                "s3:List*"
            ],
            "Resource": "*"
        }
    ]
}


{% endhighlight %}

Attach this role to the EC2 and we are good to access all the S3 files from it.But wait we are not going to give EC2 access directly to the user.

### Create default Notebook

Jupyter URL generated in the first step now act as a webservice running on our Bastion Ec2 and allows required S3 access to the users.

Now, to make the work easy for non-technical user.We can create a notebook with all the required S3 commands and save it in the default directory

![s3note1][s3note1]

The notebook has Commands to 
- Browse files in S3.
- Copy files from S3 to temp directory on EC2 machine.

### Download Files

Once we have followed all the steps, we should see our required file from the S3 available to download in temp directory.

![s3note2][s3note2]

Select the file, click download and we are good to use the file.

![s3note3][s3note3]

### Conclusion

There might be better ways to achieve the same result and this could have downside of user misusing the EC2 machine.But at the end,it is quick and easiest solution I could put together and get working.

Also, Jupyter Hub can be used instead of notebook for more granular control and scaling for multiple users.


[s3note1]: {{"/s3note/s3note1.jpg" | prepend: site.imgrepo }}
[s3note2]: {{"/s3note/s3note2.jpg" | prepend: site.imgrepo }}
[s3note3]: {{"/s3note/s3note3.jpg" | prepend: site.imgrepo }}