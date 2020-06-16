---
title: Speeding up a Git monorepo at Dropbox with &lt;200 lines of code - Dropbox
category: optimizing 
tags: git
layout: post
date: 2020-06-16 03:30:09
link: https://dropbox.tech/application/speeding-up-a-git-monorepo-at-dropbox-with--200-lines-of-code
---
>We settled on shipping a wrapper on top of Git that would automatically tweak configs and enable fsmonitor for developers (if it wasn’t already turned on) only for a whitelisted set of repositories

Dropbox explains how they improved git performance with fsmonitor