---
layout: post
title: Policy-as-code for Infrastructure
date: 2023-07-19
tags: iac cloudformation
categories: iac
image: /pac/pac.jpg
---

If your infrastructure has been deployed and maintained as code, chances are that you might be using Terraform or CloudFormation.In those cases most probably the enforcement of policies is after thought or takes backseat.

[Checkov](https://www.checkov.io/) is the tool with most common policies and checks, available as code to run and scan on the most Infrastructure as code files and return us misconfiguration or missing best practices.

* TOC
{:toc}

The steps from [Checkov Quick Start](https://www.checkov.io/1.Welcome/Quick%20Start.html#install-checkov-from-pypi) are straight forward and I see no point in repeating them here again.

In additon there is a scope for expanding the functionality of the basic tool by defining your own personal/enterprise rules as [custom policies](https://www.checkov.io/3.Custom%20Policies/Custom%20Policies%20Overview.html).

If you insist on better visualisation or centralised location to track the IAC scan results, they have provided a [basic web visualization](https://www.checkov.io/2.Basics/Visualizing%20Checkov%20Output.html)

Go ahead and give a try to see how compliant is your current Infrastructure as Code.

Few screenshots from my run on the cloud formation scripts from  [here](https://github.com/aws-quickstart/quickstart-atlassian-jira)are below

*Running checkov*

![pac][pac]

*Sample Result from the run*

![pac][pac1]


[pac]: {{"/pac/pac.png" | prepend: site.imgrepo }}
[pac1]: {{"/pac/pac1.png" | prepend: site.imgrepo }}
