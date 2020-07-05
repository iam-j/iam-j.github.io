---
layout: post
title: Simplest Dashboard setup for learning Kubernetes
date: 2020-06-15 09:31:59
tags: kubernetes
categories: infrastructure
image: /dashboard/dashboard3.jpg
---

I hope you have built your Kubernetes test cluster using the steps mentioned in the first part [Simplest cluster setup for learning Kubernetes]().We will now add Dashboard to our cluster which helps us to manage using user interface and have minimal monitoring capacity.

* TOC 
{:toc}

Assuming you already have 
- running Kubernetes cluster
- required ports open in security groups or Firewalls.

Lets begin..

### Installing the Dashboard

Visit this [page](https://github.com/kubernetes/dashboard/releases) to see the latest available version of the Dashboard.

To install it ,run the following command

{% highlight bash %}
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0/aio/deploy/recommended.yaml
{% endhighlight %}

This will install the Dashboard with default settings.

Running below command should set you up with Dashboard on localhost at *http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/*

{% highlight bash %}
kubectl proxy
{% endhighlight %}

As you might you have noticed ,this URL will only work from the cluster.we need expose it to outside using below command.

{% highlight bash %}
kubectl proxy --address EC2Ipaddr --accept-hosts '^.*$' --port=8001
{% endhighlight %}

### User Login for testing

**Please note** that the instructions below would give full access to the cluster with out any authentication so use it only for testing and never on Production.

**Enable Skip Login**

we can completely bypass authentication you adding flag in the args for easy login.To have that follow steps below

{% highlight bash %}
kubectl edit deployment/kubernetes-dashboard --namespace=kubernetes-dashboard
{% endhighlight %}

In VI editor add *--enable-skip-login* as below

![dashboard1][dashboard1]

Rerun the proxy command in previous command,you should see skip button as below.

![dashboard2][dashboard2]

 **Enable role for the user**

Although we could bypass login,We need to give additional permissions for avoiding *Forbidden user errors*. This [post](https://mohamedradwan.com/2019/06/05/how-to-solve-forbidden-user-error-kubernetes-web-dashboard-for-kubernetes-clusters/) helped me in resolving the issues.

First delete exsiting role for *kubernetes-dashboard* using

{% highlight bash %}
kubectl delete clusterrolebinding kubernetes-dashboard -n kubernetes-dashboard
{% endhighlight %}

Then create with admin role using this

{% highlight bash %}
kubectl create clusterrolebinding kubernetes-dashboard -n kubernetes-dashboard --clusterrole=cluster-admin --serviceaccount=kubernetes-dashboard:kubernetes-dashboard
{% endhighlight %}

Rerun the proxy command in previous command,you should be able to login and see all the options

{% highlight bash %}
kubectl proxy --address EC2Ipaddr --accept-hosts '^.*$' --port=8001
{% endhighlight %}

### Conclusion

With this setup we should be able see the details of the Nodes,Pods,Clusters,deployments and etc.As your cluster complexity increases Kubernetes Dashboard would be very useful to track the resources.

![dashboard3][dashboard3]


[source](https://www.devdiaries.net/blog/Single-Node-Kubernetes-Cluster-Part-3/)

[dashboard1]: {{"/dashboard/dashboard1.jpg" | prepend: site.imgrepo }}
[dashboard2]: {{"/dashboard/dashboard2.jpg" | prepend: site.imgrepo }}
[dashboard3]: {{"/dashboard/dashboard3.jpg" | prepend: site.imgrepo }}