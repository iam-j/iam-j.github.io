---
layout: post
title: Building simple Telegram Bot in Python
date: 2020-06-28
tags: python telegram
categories: alerting
image: /telegram/telegram5.jpg
---

Telegram can be used for chatops using the extensive Bot [API](https://core.telegram.org/bots/api) provided.Its user base,availability of mobile and web app support makes it good candidate for personal and small business use,if not enterprise.

Let's build a sample *Bot which send us random photo from [Unsplash](https://unsplash.com/)* using Python,inspired by this [post](https://www.freecodecamp.org/news/learn-to-build-your-first-bot-in-telegram-with-python-4c99526765e4/)

* TOC 
{:toc}

### Create Telegram Bot 

Interestingly Telegram provides us an official Bot [BotFather](https://telegram.me/BotFather) to request our Bot creation.Open the [link](https://telegram.me/BotFather) in Telegram and request your Bot.

![telegram4][telegram4]

### Request Unsplash API key

With the Bot now available we need Unsplash API key for our Bot to access and request images.The procedure is simple.
- Visit Unsplash Developer [page](https://unsplash.com/developers)
- Register and request API key for your account.

![telegram1][telegram1]

Additonal documentation on using API is available [here](https://unsplash.com/documentation)


### Install dependencies

With Telegram Bot and Unsplash API key its now time to prepare your Python environment.Install the Telegram Bot [library](https://github.com/python-telegram-bot/python-telegram-bot/) using

{% highlight python %}
pip3 install python-telegram-bot
{% endhighlight %}

### Main Program

With our unique URL we can fetch the random image details as a JSON which will be used by our Bot to respond to the User.

![telegram2][telegram2]

Below is the sample program to create a Bot.I have updated the script in the source to use latest Bot API.



{% highlight python %}

##Libraries need for the Bot

from telegram.ext import Updater, InlineQueryHandler, CommandHandler, CallbackContext
from telegram import Update, Bot
import requests
import re

##Function to fetch the image from the Unsplash API

def get_url():
    contents = requests.get('https://api.unsplash.com/photos/random/?client_id=YOUR_CLIENT_ID_HERE').json()    
    url = contents['urls']
## Fetching regular size image from the returned JSON file    
    image = url["regular"]
    return image

##Function to send the image the user using the Chat ID
def pic(update: Update, context: CallbackContext):
    url = get_url()
    chat_id = update.message.chat_id
    context.bot.send_photo(chat_id=chat_id, photo=url)

##Main call to run the script which polls Telegram API to fetch requests and respond
def main():
    updater = Updater('YOUR_TELEGRAM_API_HERE', use_context=True )
    dp = updater.dispatcher
    dp.add_handler(CommandHandler('pic',pic))
    updater.start_polling()
    updater.idle()

if __name__ == '__main__':
    main()

{% endhighlight %}

### Using Bot

We are now ready to use our Bot.

- Run the Python script above.
- Start conversation with our Bot from Mobile or Web.
- Send **/pic** as message
- The Bot responds with random image.

Congrats you have built your first usable Telegram Bot.

![telegram3][telegram3]

### What's Missing

You might have started noticing the limitations in your script and Bot,the availability,memory usage,timeouts etc.

To overcome the same,we need to

- Design and run the Python requests as a service and Flask is best choice.
- Host the service on a dedicated Server or cloud to make it available and scale.

### Conclusion

This was a simple exercise to create a Telegram Bot and to show its capability.You can extend this to create a chatbot which can serve as your personal assistant.



[source](https://www.freecodecamp.org/news/learn-to-build-your-first-bot-in-telegram-with-python-4c99526765e4/)

[telegram1]: {{"/telegram/telegram1.jpg" | prepend: site.imgrepo }}
[telegram2]: {{"/telegram/telegram2.jpg" | prepend: site.imgrepo }}
[telegram3]: {{"/telegram/telegram3.jpg" | prepend: site.imgrepo }}
[telegram4]: {{"/telegram/telegram4.jpg" | prepend: site.imgrepo }}