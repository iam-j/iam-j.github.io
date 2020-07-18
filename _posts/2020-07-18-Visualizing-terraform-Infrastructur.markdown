---
layout: post
title: Visualizing Terraform Infrastructure
date: 2020-07-18 12:31:59
tags: terraform aws
categories: iac
image: /blast/blast2.jpg
---

Consider, we have deployed an infrastructure successfully using Terraform scripts.Now, you want to visualize your infrastructure and see the relation between resources created and how they are dependent on each other.

Lets explore different ways of achieving that..

* TOC 
{:toc}

### Terraform Graph

This is the default option provided by the Terraform.The output generates a *dot* file.

>dot - “hierarchical” or layered drawings of directed graphs. This is the default tool to use if edges have directionality.

We need to use the [GraphViz](https://www.graphviz.org/) to convert the *dot* file to a .svg to view it as an image.

Once you have GraphViz installed,we can directly generate the view using below command.

{% highlight powershell %}
terraform graph | dot -Tsvg > graph.svg
{% endhighlight %}

The view inside the graph.svg would be as below.In my case with huge number of resources,multiple relations can be seen from the root node.

![blast1][blast1]

Cons: The graph representation becomes complicated and difficult to read once your infrastructure grows.


### Blast radius

[Blast radius](https://github.com/28mm/blast-radius) is an open source tool,which comes to our rescue for solve the readability of the default Terraform graph output.

- It color codes the resources with the type.
- We can zoom in and out across the graph.
- Tooltips on all the resources.
![blast2][blast2]
- Filter the graph on a particular resources.
![blast3][blast3]
- It runs as a service and needs Flask library.

To use blast radius,using pip
- Install Flask.
- Install blast-radius
  
Run the command below to start the service.

{% highlight powershell %}
python.exe blast-radius --serve <path to your Terraform directory>
{% endhighlight %}

As you can see the same graph from Terraform is more readable with Blast radius.

### Inframap

[Inframap](https://github.com/cycloidio/inframap) is the latest to tool for Terraform infrastructure visualization.Similar to Blast radius it allows to view the graphs per module or resource level.

A sample view from the Inframap is show below,taken from the project description.

![blast4][blast4]


### Conclusion

So we have different ways to look into our infrastructure using the tools above.This helps in quickly finding and sharing the dependencies or track down a specific resource type.In my use,I have found best use with Blast Radius.
 
[blast1]: {{"/blast/blast1.jpg" | prepend: site.imgrepo }}
[blast2]: {{"/blast/blast2.jpg" | prepend: site.imgrepo }}
[blast3]: {{"/blast/blast3.jpg" | prepend: site.imgrepo }}
[blast4]: {{"/blast/blast4.jpg" | prepend: site.imgrepo }}




