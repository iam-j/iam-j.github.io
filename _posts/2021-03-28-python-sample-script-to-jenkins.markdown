---
layout: post
title: Python sample script to fetch data from Jenkins API
date: 2021-03-28
tags: python jenkins
categories: jenkins
image: /jenapi/jenapi1.jpg
---

While working with Jenkins,there was a requirement to collect details of the Jobs/builds that had been run on the Server and derive statistics like

- Total Runs of a job:
- Total Success:
- Total Failures and etc.

![jenapi2][jenapi2]

There could be different approaches to capture the information and the UI also shows the few trends directly,but I took the help of Python and Jenkins API to get it done.

* TOC 
{:toc}

### Jenkins API

Jenkins provides REST Api which allows us to perform most of the actions and fetch the information which is usually available in the UI, programmatically.We can use the official Jenkins Builds [URL](https://ci.jenkins.io/) and its corresponding [api](https://ci.jenkins.io/api/) as an example to go through the options available.

**Note:** Do remember the official Jenkins server has restricted access to view build and job details from api.You should have full information available on your self hosted server though as shown below

![jenapi3][jenapi3]

### Access token

Although the ..../API/json details can be seen on the browser,you actually need configure an access token to capture them programmatically.So please go ahead and generate it using the steps already detailed on official [guide](https://support.cloudbees.com/hc/en-us/articles/115003090592-How-to-re-generate-my-Jenkins-user-token)

### Script

Now lets come to the actual script which has been written in haste to complete the task, but it should be an useful snippet for a project to build up on.

For every URL we see in the Jenkins UI, we can append **/api/json** to see its JSON equivalent.In this script,we are fetching JSON data from the URL's of the job and its executed builds.

First,we get the latest build ran and go through all its runs to get the statuses.So the complete script follows


{% highlight python %}
import requests
import json

#Your jenkins URL and credentials goes here
url = 'https://jenkins-server.com/job/folder/job/Jobname/api/json'
username = 'username'
password = 'you access token'


#Use the 'auth' parameter to send requests with HTTP Basic Auth:
#Accessing the Job page to get the latest Build ran.
response = requests.post(url, auth = (username, password),verify=False)

try:
    buildnumberJson = json.loads(response.text)
except:
    print ("Failed to parse json")

if "lastBuild" in buildnumberJson:  
    totalbuilds = buildnumberJson["lastBuild"]
    runs = totalbuilds["number"]
    
else:
    print ("Failed to get build")

#Iterate over the job build runs to get the build status for each

totalsuccess = totalfailure = totalmissing = 0

for build in range(1,runs):
    buildurl= 'https://jenkins-server.com/job/folder/job/Jobname/api/json' + str(build) + '/api/json'
    print(buildurl)
    buildstatus = []
    try:
        response = requests.post(buildurl, auth = (username, password),verify=False)
        buildstatus = json.loads(response.text)
    except Exception as e:
        totalmissing =  totalmissing + 1  
    if "result" in buildstatus:
        if buildstatus["result"] == "SUCCESS" :
            totalsuccess = totalsuccess + 1
        if buildstatus["result"] == "FAILURE" :
            totalfailure = totalfailure + 1


#Generate Output numbers

print(f"total builds:{runs}")
print(f"total succeeded builds:{totalsuccess}")
print(f"total failed builds:{totalfailure}")
print(f"total skipped builds:{totalmissing}")

{% endhighlight %}


### What's next

This script can be extended to get details of the jobs on *server* and their success,time to run etc and build custom stats which are not available by default in Jenkins.Also we can start managing jobs programmatically with out manually logging into the console.

[jenapi1]: {{"/jenapi/jenapi1.jpg" | prepend: site.imgrepo }}
[jenapi2]: {{"/jenapi/jenapi2.jpg" | prepend: site.imgrepo }}
[jenapi3]: {{"/jenapi/jenapi3.jpg" | prepend: site.imgrepo }}