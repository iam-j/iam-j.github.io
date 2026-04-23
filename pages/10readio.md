---
layout: page
title: Readio
permalink: /readio/
icon: octicon-unmute
isNavItem: true
use_card: true
---

### The missing app I wanted on my phone

I read a lot online. Long essays, research papers, deep-dive blog posts I bookmarked and never got back to. I *also* spend a lot of time doing things where I can't look at a screen — commuting, cooking, walking, at the gym.

Every text-to-speech app I tried wanted a subscription, needed an account, shipped my articles to somebody's cloud TTS, or buried the one feature I cared about under three paywalls. Safari's "Listen to Page" works but has no queue, no playlists, no resume, no speed memory, and forgets everything the moment you close the tab.

So I built **Readio** — the app I wish had already existed.

<p class="mb-2"><strong>Readio</strong> turns any web article into audio you can listen to, built on Apple's on-device speech engine. No backend. No account. No subscription. Paste a link, hit play, keep living your life.</p>

<a class="hero-link" href="https://apps.apple.com/app/readio-listen-to-the-web/id6762374434">Get Readio on the App Store →</a>

---

### Your articles, as a listening library

<img src="{{ '/static/img/readio/library.png' | relative_url }}" alt="Readio library view" style="max-width: 320px; width: 100%; border-radius: 16px; margin: 1rem 0;">

The home screen borrows from something that already works: Apple Music. Articles are tracks, playlists are playlists, and the stuff you added yesterday sits right where you'd expect "Recently Added" to sit. No new mental model — you already know how this works.

Swipe to delete, drag to reorder, tap to listen. That's it.

---

### A Now Playing screen that respects the source

<img src="{{ '/static/img/readio/nowplaying.png' | relative_url }}" alt="Readio now playing" style="max-width: 320px; width: 100%; border-radius: 16px; margin: 1rem 0;">

Big artwork pulled from the article's OG image. Title, source, scrubbable progress. Speed chip (0.5× through 2×), voice chip (pick any Siri voice installed on your device — including the premium neural voices most apps hide from you), and a reader chip to flip to the text mid-listen.

Lock screen, Control Center, AirPods squeeze, CarPlay — everything just works, because Readio routes through the same `MPNowPlayingInfoCenter` plumbing Apple Music uses.

---

### Follow along, karaoke-style

<img src="{{ '/static/img/readio/lyrics.png' | relative_url }}" alt="Readio lyric-style follow-along" style="max-width: 320px; width: 100%; border-radius: 16px; margin: 1rem 0;">

Every sentence highlights as it's spoken. Glance down, find your place, keep going. Tap a line to jump there. It's the same interaction Apple Music uses for lyrics, applied to prose — and once you have it, going back to a podcast app that can't do this feels broken.

---

### A proper reader view when you just want to read

<img src="{{ '/static/img/readio/reader.png' | relative_url }}" alt="Readio reader view" style="max-width: 320px; width: 100%; border-radius: 16px; margin: 1rem 0;">
<img src="{{ '/static/img/readio/themes.png' | relative_url }}" alt="Readio reader themes" style="max-width: 320px; width: 100%; border-radius: 16px; margin: 1rem 0;">

Sometimes you just want the clean text without the chrome, cookie banners, and newsletter modals. Readio parses articles with a Readability-style extractor the moment you add them, so the reader view is ready offline — with Dynamic Type, Dark Mode, and a few paper-inspired themes for eye comfort.

Listening and reading aren't separate modes. You can switch at any point and pick up exactly where the audio was.

---

### Share it anywhere

<img src="{{ '/static/img/readio/snapshot.png' | relative_url }}" alt="Readio quote snapshot" style="max-width: 320px; width: 100%; border-radius: 16px; margin: 1rem 0;">

Hit a line that stuck with you? Tap a sentence, export a snapshot — the quote, the source, the Readio watermark — and send it to a friend. It's the feature Spotify added to music and Kindle added to books; articles deserved it too.

---

### What Readio does *not* do

- **No backend.** Articles never leave your device except when Readio fetches the original HTML.
- **No account.** There is nothing to sign up for. There isn't even an email field.
- **No subscription.** One-time App Store purchase. That's the whole transaction.
- **No tracking, no analytics, no ads.** I genuinely don't know how many people use it, and I'm fine with that.
- **No cloud TTS bill passed to you.** Readio uses Apple's on-device voices — the same ones VoiceOver uses — which means the voices are free, private, and work on the subway with no signal.

---

### Who it's for

Power readers who already have a pile of bookmarks, already pay for the iPhone, already have AirPods — and don't want to rent a fifth subscription to turn the text into sound.

If that's you: [**Readio is on the App Store**](https://apps.apple.com/app/readio-listen-to-the-web/id6762374434).

---

*Built by [J]({{ '/about/' | relative_url }}) — Swift 6, SwiftUI, SwiftData, AVSpeechSynthesizer. Zero third-party dependencies except SwiftSoup for HTML parsing.*
