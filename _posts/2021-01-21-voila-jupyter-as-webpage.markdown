---
layout: post
title: Voila:Host your Jupyter Notebook as webpage
date: 2021-01-21
tags: aws ec2 s3 jupyter
categories: jupyter
image: /voila/voila1.jpg
---

**Scenario:** As a continuation from previous post [here](https://iam-j.github.io/s3/s3-browse-download-no-publicaccess/https://iam-j.github.io/s3/s3-browse-download-no-publicaccess/) where users have to access a Jupyter Notebook to browse the files,we now have to create a website/webpage to have seamless experience hiding the code and notebook interface.

To achieve this we are going to use [Voila](https://github.com/voila-dashboards/voila/tree/stable), an opensource tool/extension.

Lets see how to build web server,serving the notebook.

* TOC 
{:toc}

### Preparing EC2 to host Jupyter

We are going repeat the same steps in previous to have an EC2 with Jupyter prerequisites installed.

Create an EC2 to serve as a Bastion host with
- Jupyter Notebook
- AWS CLI
- Python Boto3

This can be achieved by steps mentioned [here](https://dataschool.com/data-modeling-101/running-jupyter-notebook-on-an-ec2-server/)

### Install Voila

We will run voila server standalone with out using the extension,so proceed directly installing from **Pip**

{% highlight bash %}

pip3 install voila

{% endhighlight %}

### Update Notebook

Update the earlier notebook with the below Python code to access the S3 files.This code will prompt user for the bucket name and lists all the files available.

{% highlight python %}

from ipywidgets import widgets
import boto3

lbl1 = widgets.Label("Enter Bucket Name")
display(lbl1)
text1 = widgets.Text()
display(text1)
btn = widgets.Button(description = "List")
out = widgets.Output()

def list_files(_):    
    
    s3 = boto3.resource('s3')
    my_bucket = s3.Bucket(str(text1.value))
   
    with out:        
        out.clear_output()
        for my_bucket_object in my_bucket.objects.all():
            print(my_bucket_object.key)
        

    
btn.on_click(list_files)

widgets.VBox([btn,out])

{% endhighlight %}

![voila2][voila2]

Note that the code can be extended to show all the buckets and then asking the user to select the one he needs.

### Launch Voila

Next, navigate to the folder where the notebook exists and launch voila.

{% highlight bash %}

voila

{% endhighlight %}

This will start a webserver hosting all the notebooks available.We can even add a Ngnix server in front of this service to serve multiple requests.

![voila4][voila4]

### Notebook as Webpage

Once the link to notebook has been clicked,you would notice that Voila would run all the cells and gives an output as webpage.In our case it displays a text box and prompts for user input for *bucket name*.

![voila1][voila1]

Enter the bucket name and click *List*,you should have the required output

![voila3][voila3]

Please note that the burden to show the UI and widgets falls on us to ease the look and experience.In this example, i have used simple *Ipywidgets* to get the job done.we have a lot of complex available in the official Voila gallery [here](https://voila-gallery.org/) with their source code.

### Conclusion

So, Using this we can make and serve simple web apps using Jupyter notebooks.This will be very useful when the users are not comfortable enough to run notebooks and we have limited time to create a webapp.

[voila1]: {{"/voila/voila1.jpg" | prepend: site.imgrepo }}
[voila2]: {{"/voila/voila2.jpg" | prepend: site.imgrepo }}
[voila3]: {{"/voila/voila3.jpg" | prepend: site.imgrepo }}
[voila4]: {{"/voila/voila4.jpg" | prepend: site.imgrepo }}