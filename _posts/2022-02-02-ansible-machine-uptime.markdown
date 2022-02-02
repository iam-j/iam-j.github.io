---
layout: post
title: Simple Ansible playbook to get the Linux host uptime
date: 2022-02-02
tags: iac ansible
categories: iac
image: /uptime1.jpg
---

While working with EC2 Linux instances there could be a requirement to get the list of all the machines which had not been rebooted over months or for a particular number of days.The reason could be for audit or to the check the status of instances.

* TOC
{:toc}

I have put together tasks to accomplish it as an Ansible Playbook below.

### Assumptions

You have an working Ansible environment with a proper inventory file with all the details of hosts being managed.

### Script

{% highlight yaml %}

- name: Get the list of all the nodes which are running over a month
  hosts: all
  gather_facts: false
  tasks:

      - name: Show hostname for sanity check (or just use -v flag for verbose)
        command: hostname
        register: hostname
      - debug: var=hostname.stdout_lines

      - name: Check uptime prior reboot
        shell: cut -d ' ' -f1 /proc/uptime
        register: UPTIME_PRE_REBOOT

      - name: Setting fact for number of days
        set_fact:
          uptime_days: "{ { (UPTIME_PRE_REBOOT.stdout | int / 86400) | round(0) } }"

      - name: Hosts to be rebooted.
        debug:
          msg: "{{ hostname.stdout_lines }} has not been rebooted since {{ uptime_days }} days,which is older than a month"
        when: (uptime_days | int) > 30

{% endhighlight %}

This simple playbook fetches the uptime and converts to days,which can be used as condition.

![uptime1][uptime1]

### What's next

This script can be extended to take an action on the hosts which have not been rebooted.

[uptime1]: {{"/uptime1.jpg" | prepend: site.imgrepo }}
