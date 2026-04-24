---
layout: page
title: ThisDay
permalink: /thisday/
icon: octicon-calendar
isNavItem: true
use_card: false
---

<style>
  /* ===== ThisDay landing page ===== */
  .thisday-hero {
    background: linear-gradient(135deg, #3b1002 0%, #7c2d12 45%, #c2410c 100%);
    color: #fff;
    padding: 4.5rem 2rem 5rem;
    border-radius: 24px;
    margin-bottom: 3rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .thisday-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 20% 20%, rgba(255,255,255,0.12) 0%, transparent 55%),
                radial-gradient(circle at 80% 80%, rgba(255,200,120,0.12) 0%, transparent 55%);
  }
  .thisday-hero > * { position: relative; z-index: 1; }
  .thisday-hero-eyebrow {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    font-weight: 600;
    opacity: 0.85;
    margin-bottom: 1rem;
  }
  .thisday-hero h1 {
    font-size: 3rem;
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.1;
    margin: 0 0 1rem;
    color: #fff;
  }
  .thisday-hero p {
    font-size: 1.2rem;
    line-height: 1.6;
    max-width: 640px;
    margin: 0 auto 2rem;
    opacity: 0.95;
  }
  .thisday-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: #fff;
    color: #7c2d12;
    padding: 0.85rem 1.75rem;
    border-radius: 100px;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .thisday-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
    color: #7c2d12;
    text-decoration: none;
  }

  /* Intro story */
  .thisday-intro {
    max-width: 720px;
    margin: 0 auto 4rem;
    font-size: 1.05rem;
    line-height: 1.75;
    color: #374151;
  }
  .thisday-intro p { margin-bottom: 1.25rem; }
  .thisday-intro strong { color: #c2410c; font-weight: 700; }

  /* Feature rows - alternating two-column */
  .thisday-feature {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    margin-bottom: 4.5rem;
  }
  .thisday-feature.reverse .thisday-feature-text { order: 2; }
  .thisday-feature.reverse .thisday-feature-visual { order: 1; }
  .thisday-feature-text h2 {
    font-size: 1.85rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #1a1a1a;
    margin: 0 0 1rem;
    line-height: 1.25;
  }
  .thisday-feature-eyebrow {
    display: inline-block;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-weight: 700;
    color: #c2410c;
    background: #fff1e6;
    padding: 4px 12px;
    border-radius: 100px;
    margin-bottom: 0.75rem;
  }
  .thisday-feature-text p {
    font-size: 1rem;
    line-height: 1.7;
    color: #4b5563;
    margin: 0 0 0.9rem;
  }
  .thisday-feature-visual {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .thisday-feature-visual img {
    max-width: 320px;
    width: 100%;
    border-radius: 0 !important;
    box-shadow: none !important;
    background: transparent;
    overflow: visible;
    filter: drop-shadow(0 20px 30px rgba(124,45,18,0.22)) drop-shadow(0 4px 8px rgba(0,0,0,0.08));
    transition: transform 0.3s ease;
  }
  .thisday-feature-visual img:hover { transform: translateY(-4px); }
  .thisday-feature-visual-pair {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    max-width: 440px;
  }
  .thisday-feature-visual-pair img {
    max-width: 100%;
    border-radius: 0 !important;
    box-shadow: none !important;
    background: transparent;
    overflow: visible;
    filter: drop-shadow(0 12px 24px rgba(124,45,18,0.18));
  }

  /* Missing-in-other-apps grid */
  .thisday-gap {
    background: #fff8f3;
    border-radius: 24px;
    padding: 3rem;
    margin-bottom: 4rem;
    border: 1px solid #ffe0c9;
  }
  .thisday-gap h2 {
    text-align: center;
    font-size: 1.85rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #1a1a1a;
    margin: 0 0 0.75rem;
  }
  .thisday-gap h2 em { color: #c2410c; font-style: normal; }
  .thisday-gap-sub {
    text-align: center;
    color: #6b7280;
    max-width: 560px;
    margin: 0 auto 2rem;
    font-size: 1rem;
    line-height: 1.6;
  }
  .thisday-gap-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.25rem;
  }
  .thisday-gap-item {
    background: #fff;
    border: 1px solid #ffe0c9;
    border-radius: 16px;
    padding: 1.5rem;
  }
  .thisday-gap-item strong {
    display: block;
    color: #c2410c;
    font-size: 1.05rem;
    font-weight: 700;
    margin-bottom: 0.4rem;
  }
  .thisday-gap-item span {
    font-size: 0.92rem;
    line-height: 1.55;
    color: #4b5563;
  }

  /* Privacy / what it doesn't do */
  .thisday-privacy {
    background: #f8fafc;
    border-radius: 24px;
    padding: 3rem;
    margin-bottom: 4rem;
  }
  .thisday-privacy h2 {
    text-align: center;
    font-size: 1.85rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #1a1a1a;
    margin: 0 0 2rem;
  }
  .thisday-privacy h2 em { color: #c2410c; font-style: normal; }
  .thisday-privacy-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.25rem;
  }
  .thisday-privacy-item {
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    padding: 1.5rem;
  }
  .thisday-privacy-item strong {
    display: block;
    color: #c2410c;
    font-size: 1.05rem;
    font-weight: 700;
    margin-bottom: 0.4rem;
  }
  .thisday-privacy-item span {
    font-size: 0.92rem;
    line-height: 1.55;
    color: #4b5563;
  }

  /* Final CTA */
  .thisday-final {
    text-align: center;
    padding: 3rem 2rem;
    border-top: 1px solid #e5e7eb;
    margin-bottom: 2rem;
  }
  .thisday-final h2 {
    font-size: 1.85rem;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0 0 0.75rem;
    letter-spacing: -0.02em;
  }
  .thisday-final p {
    color: #6b7280;
    font-size: 1.05rem;
    max-width: 560px;
    margin: 0 auto 2rem;
    line-height: 1.6;
  }
  .thisday-colophon {
    text-align: center;
    font-size: 0.85rem;
    color: #9ca3af;
    font-style: italic;
  }
  .thisday-colophon a { color: #6b7280; text-decoration: underline; }

  /* Mobile */
  @media (max-width: 768px) {
    .thisday-hero { padding: 3rem 1.5rem; border-radius: 16px; }
    .thisday-hero h1 { font-size: 2rem; }
    .thisday-hero p { font-size: 1.05rem; }
    .thisday-feature { grid-template-columns: 1fr; gap: 1.5rem; margin-bottom: 3rem; }
    .thisday-feature.reverse .thisday-feature-text { order: 2; }
    .thisday-feature.reverse .thisday-feature-visual { order: 1; }
    .thisday-feature-text h2 { font-size: 1.5rem; }
    .thisday-gap, .thisday-privacy { padding: 2rem 1.5rem; border-radius: 16px; }
  }
</style>

<section class="thisday-hero">
  <div class="thisday-hero-eyebrow">For iPhone · iPad · Widgets</div>
  <h1>What happened on this day, every year you've had a camera.</h1>
  <p>A calmer way to revisit your past. Just today's date, across every year. No slideshows. No soundtracks. No AI. All on your device.</p>
  <a class="thisday-cta" href="https://apps.apple.com/app/thisday/id6753014959" target="_blank">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
    Download on the App Store
  </a>
</section>

<div class="thisday-intro">
  <p>Apple's Memories is a miracle of engineering that almost nobody loves. It picks your photos for you, wraps them in a Ken Burns slideshow, plays a soundtrack you didn't choose, and every few months surfaces a photo of someone you'd rather not be reminded about. There's no way to say "just give me the pictures from this date - and only the ones I want."</p>
  <p>Google Photos does the same thing with more machine learning. Timehop does it with ads and a login. Every app in the category <strong>adds</strong> when what you actually want is <strong>subtraction</strong>.</p>
  <p>So I built <strong>ThisDay</strong> - the memories app I wish had already existed. Open it, see exactly what happened on today's date across every year. Hide a date. Skip a photo. Turn off screenshots. That's it.</p>
</div>

<section class="thisday-feature">
  <div class="thisday-feature-text">
    <span class="thisday-feature-eyebrow">The Feed</span>
    <h2>One day, every year, top to bottom</h2>
    <p>Each year's memories sit in their own row, newest at the top, with a giant faded year typography behind the card - the editorial feel of a magazine spread, not a photo grid.</p>
    <p>Tap any photo to go fullscreen. Swipe between years. A streak badge appears when you've got 3+ consecutive years of memories on this date.</p>
  </div>
  <div class="thisday-feature-visual">
    <img src="{{ '/static/img/thisday/mainpage_framed.png' | relative_url }}" alt="ThisDay main feed showing years of memories">
  </div>
</section>

<section class="thisday-feature reverse">
  <div class="thisday-feature-text">
    <span class="thisday-feature-eyebrow">Explore Any Day</span>
    <h2>Wander through your past on your terms</h2>
    <p>Pick any date - your wedding, the day you moved, the weekend that changed everything - and see what your camera roll looked like on that day across every year.</p>
    <p>Hit <strong>Surprise Me</strong> for a random past date. It's the feature Apple Memories will never build, because randomness doesn't drive engagement metrics. It's also the most fun way to use the app.</p>
  </div>
  <div class="thisday-feature-visual">
    <img src="{{ '/static/img/thisday/exploreday_framed.png' | relative_url }}" alt="ThisDay date explorer">
  </div>
</section>

<section class="thisday-feature">
  <div class="thisday-feature-text">
    <span class="thisday-feature-eyebrow">Curation</span>
    <h2>Finally - a mute button for your past</h2>
    <p>Hide a date forever (grief, breakups, mistakes - whatever you don't want to relive every year). Hide a specific photo. Exclude a whole album. Skip screenshots. Show only your Favorites.</p>
    <p>None of it touches Photos. ThisDay just quietly ignores what you told it to. You can unhide anything at any time.</p>
  </div>
  <div class="thisday-feature-visual">
    <img src="{{ '/static/img/thisday/options1_framed.png' | relative_url }}" alt="ThisDay curation settings">
  </div>
</section>

<section class="thisday-feature reverse">
  <div class="thisday-feature-text">
    <span class="thisday-feature-eyebrow">Widgets &amp; Notifications</span>
    <h2>Gentle, optional, exactly as you want it</h2>
    <p>A widget for your home screen in three sizes. A notification at the time of day you pick - and <em>only</em> on days with something to show. If you hid a date, notifications respect it. If the day has nothing, the app doesn't ping.</p>
    <p>Every filter in the app applies to the widget and the notification equally. No parity gap, no "why does the widget show this photo I hid" moments.</p>
  </div>
  <div class="thisday-feature-visual">
    <img src="{{ '/static/img/thisday/options2_framed.png' | relative_url }}" alt="ThisDay widget and notification settings">
  </div>
</section>

<section class="thisday-feature">
  <div class="thisday-feature-text">
    <span class="thisday-feature-eyebrow">Anniversaries</span>
    <h2>Name the days that matter</h2>
    <p>Tag up to five dates with a label - "Wedding Day", "Moved to Austin", "Dad's birthday". When that date rolls around, ThisDay changes its title to match. Subtle. No notification spam, no cross-year analysis, no "on this day in 2018 you…" slideshow.</p>
    <p>Just a quiet acknowledgment that today is, to you, that day.</p>
  </div>
  <div class="thisday-feature-visual">
    <img src="{{ '/static/img/thisday/Anniversaries_framed.png' | relative_url }}" alt="ThisDay anniversaries">
  </div>
</section>

<section class="thisday-gap">
  <h2>Things the big apps <em>still</em> won't do</h2>
  <p class="thisday-gap-sub">Every one of these is a top complaint about Apple Memories and Google Photos. ThisDay ships them as defaults.</p>
  <div class="thisday-gap-grid">
    <div class="thisday-gap-item">
      <strong>Hide a date forever</strong>
      <span>The loss, the breakup, the thing you don't want surfaced every year. One long-press, gone. Reversible in Settings.</span>
    </div>
    <div class="thisday-gap-item">
      <strong>Skip screenshots</strong>
      <span>Your memories shouldn't be half receipts and whiteboards. One toggle. Done.</span>
    </div>
    <div class="thisday-gap-item">
      <strong>Exclude entire albums</strong>
      <span>"Work", "Medical", "Memes" - skip them forever without deleting anything.</span>
    </div>
    <div class="thisday-gap-item">
      <strong>No auto-slideshow</strong>
      <span>No music, no Ken Burns, no forced storytelling. Your photos, as photos.</span>
    </div>
    <div class="thisday-gap-item">
      <strong>Gap years, quietly</strong>
      <span>Years with no photos still exist. ThisDay lists them without drama instead of pretending they never happened.</span>
    </div>
    <div class="thisday-gap-item">
      <strong>A real "Today" button</strong>
      <span>Wandered to 2015? One tap home. The app trusts you to navigate without getting lost.</span>
    </div>
  </div>
</section>

<section class="thisday-privacy">
  <h2>What ThisDay does <em>not</em> do</h2>
  <div class="thisday-privacy-grid">
    <div class="thisday-privacy-item">
      <strong>No backend</strong>
      <span>Your photos never leave your phone. ThisDay talks to Apple's Photos framework - that's it.</span>
    </div>
    <div class="thisday-privacy-item">
      <strong>No account</strong>
      <span>Nothing to sign up for. There isn't even an email field.</span>
    </div>
    <div class="thisday-privacy-item">
      <strong>No subscription</strong>
      <span>Free. A tip jar in Settings if you want to say thanks. No feature is ever gated.</span>
    </div>
    <div class="thisday-privacy-item">
      <strong>No tracking</strong>
      <span>No analytics, no ads, no third-party SDKs. I genuinely don't know how many people use it.</span>
    </div>
    <div class="thisday-privacy-item">
      <strong>No AI</strong>
      <span>No "face of your pet over time" reels. No automated albums. Just the photos you took, on the date you took them.</span>
    </div>
  </div>
</section>

<section class="thisday-final">
  <h2>Who it's for</h2>
  <p>People with a camera roll older than their current phone. People who want to revisit their past without an algorithm curating it for them. People who'd rather subtract than add.</p>
  <a class="thisday-cta" href="https://apps.apple.com/app/thisday/id6753014959" target="_blank">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
    Get ThisDay on the App Store
  </a>
</section>

<p class="thisday-colophon">Built by <a href="{{ '/about/' | relative_url }}">J</a> - Swift 6, SwiftUI, PhotoKit, WidgetKit. On-device only. Zero third-party dependencies.</p>
