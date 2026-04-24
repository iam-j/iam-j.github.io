---
layout: page
title: Readio
permalink: /readio/
icon: octicon-unmute
isNavItem: false
isAppPage: true
use_card: false
---

<style>
  /* ===== Readio landing page ===== */
  .readio-hero {
    background: linear-gradient(135deg, #0e4e86 0%, #1a6bb5 100%);
    color: #fff;
    padding: 4.5rem 2rem 5rem;
    border-radius: 24px;
    margin-bottom: 3rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .readio-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 0%, transparent 50%);
  }
  .readio-hero > * { position: relative; z-index: 1; }
  .readio-hero-eyebrow {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    font-weight: 600;
    opacity: 0.85;
    margin-bottom: 1rem;
  }
  .readio-hero h1 {
    font-size: 3rem;
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.1;
    margin: 0 0 1rem;
    color: #fff;
  }
  .readio-hero p {
    font-size: 1.2rem;
    line-height: 1.6;
    max-width: 620px;
    margin: 0 auto 2rem;
    opacity: 0.95;
  }
  .readio-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: #fff;
    color: #0e4e86;
    padding: 0.85rem 1.75rem;
    border-radius: 100px;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .readio-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
    color: #0e4e86;
    text-decoration: none;
  }

  /* Intro story */
  .readio-intro {
    max-width: 720px;
    margin: 0 auto 4rem;
    font-size: 1.05rem;
    line-height: 1.75;
    color: #374151;
  }
  .readio-intro p { margin-bottom: 1.25rem; }
  .readio-intro strong { color: #0e4e86; font-weight: 700; }

  /* Feature rows - alternating two-column */
  .readio-feature {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    margin-bottom: 4.5rem;
  }
  .readio-feature.reverse .readio-feature-text { order: 2; }
  .readio-feature.reverse .readio-feature-visual { order: 1; }
  .readio-feature-text h2 {
    font-size: 1.85rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #1a1a1a;
    margin: 0 0 1rem;
    line-height: 1.25;
  }
  .readio-feature-eyebrow {
    display: inline-block;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-weight: 700;
    color: #0e4e86;
    background: #e8f0fe;
    padding: 4px 12px;
    border-radius: 100px;
    margin-bottom: 0.75rem;
  }
  .readio-feature-text p {
    font-size: 1rem;
    line-height: 1.7;
    color: #4b5563;
    margin: 0 0 0.9rem;
  }
  .readio-feature-visual {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .readio-feature-visual img {
    max-width: 300px;
    width: 100%;
    border-radius: 0 !important;
    box-shadow: none !important;
    background: transparent;
    overflow: visible;
    filter: drop-shadow(0 20px 30px rgba(14,78,134,0.18)) drop-shadow(0 4px 8px rgba(0,0,0,0.08));
    transition: transform 0.3s ease;
  }
  .readio-feature-visual img:hover { transform: translateY(-4px); }
  .readio-feature-visual-pair {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    max-width: 420px;
  }
  .readio-feature-visual-pair img {
    max-width: 100%;
    border-radius: 0 !important;
    box-shadow: none !important;
    background: transparent;
    overflow: visible;
    filter: drop-shadow(0 12px 24px rgba(14,78,134,0.15));
  }

  /* Privacy / what it doesn't do - grid of cards */
  .readio-privacy {
    background: #f8fafc;
    border-radius: 24px;
    padding: 3rem;
    margin-bottom: 4rem;
  }
  .readio-privacy h2 {
    text-align: center;
    font-size: 1.85rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #1a1a1a;
    margin: 0 0 2rem;
  }
  .readio-privacy h2 em { color: #0e4e86; font-style: normal; }
  .readio-privacy-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.25rem;
  }
  .readio-privacy-item {
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    padding: 1.5rem;
  }
  .readio-privacy-item strong {
    display: block;
    color: #0e4e86;
    font-size: 1.05rem;
    font-weight: 700;
    margin-bottom: 0.4rem;
  }
  .readio-privacy-item span {
    font-size: 0.92rem;
    line-height: 1.55;
    color: #4b5563;
  }

  /* Final CTA */
  .readio-final {
    text-align: center;
    padding: 3rem 2rem;
    border-top: 1px solid #e5e7eb;
    margin-bottom: 2rem;
  }
  .readio-final h2 {
    font-size: 1.85rem;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0 0 0.75rem;
    letter-spacing: -0.02em;
  }
  .readio-final p {
    color: #6b7280;
    font-size: 1.05rem;
    max-width: 540px;
    margin: 0 auto 2rem;
    line-height: 1.6;
  }
  .readio-colophon {
    text-align: center;
    font-size: 0.85rem;
    color: #9ca3af;
    font-style: italic;
  }
  .readio-colophon a { color: #6b7280; text-decoration: underline; }

  /* Mobile */
  @media (max-width: 768px) {
    .readio-hero { padding: 3rem 1.5rem; border-radius: 16px; }
    .readio-hero h1 { font-size: 2rem; }
    .readio-hero p { font-size: 1.05rem; }
    .readio-feature { grid-template-columns: 1fr; gap: 1.5rem; margin-bottom: 3rem; }
    .readio-feature.reverse .readio-feature-text { order: 2; }
    .readio-feature.reverse .readio-feature-visual { order: 1; }
    .readio-feature-text h2 { font-size: 1.5rem; }
    .readio-privacy { padding: 2rem 1.5rem; border-radius: 16px; }
  }
</style>

<section class="readio-hero">
  <div class="readio-hero-eyebrow">For iPhone · iPad · CarPlay</div>
  <h1>Turn the web into your podcast feed</h1>
  <p>Readio listens to any article for you. No account. No subscription. No cloud. Just paste a link, hit play, and keep living your life.</p>
  <a class="readio-cta" href="https://apps.apple.com/app/readio-listen-to-the-web/id6762374434" target="_blank">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
    Download on the App Store
  </a>
</section>

<div class="readio-intro">
  <p>I read a lot online. Long essays, research papers, deep-dive blog posts I bookmarked and never got back to. I <em>also</em> spend a lot of time doing things where I can't look at a screen - commuting, cooking, walking, at the gym.</p>
  <p>Every text-to-speech app I tried wanted a subscription, needed an account, shipped my articles to somebody's cloud TTS, or buried the one feature I cared about under three paywalls. Safari's "Listen to Page" works but has no queue, no playlists, no resume, no speed memory, and forgets everything the moment you close the tab.</p>
  <p>So I built <strong>Readio</strong> - the app I wish had already existed. Built on Apple's on-device speech engine. No backend. No account. No subscription.</p>
</div>

<section class="readio-feature">
  <div class="readio-feature-text">
    <span class="readio-feature-eyebrow">Library</span>
    <h2>Your articles, as a listening library</h2>
    <p>The home screen borrows from something that already works: Apple Music. Articles are tracks, playlists are playlists, and the stuff you added yesterday sits right where you'd expect "Recently Added" to sit.</p>
    <p>No new mental model - you already know how this works. Swipe to delete, drag to reorder, tap to listen. That's it.</p>
  </div>
  <div class="readio-feature-visual">
    <img src="{{ '/static/img/readio/library.png' | relative_url }}" alt="Readio library view">
  </div>
</section>

<section class="readio-feature reverse">
  <div class="readio-feature-text">
    <span class="readio-feature-eyebrow">Now Playing</span>
    <h2>A player that respects the source</h2>
    <p>Big artwork pulled from the article's OG image. Title, source, scrubbable progress. Speed chip (0.5× through 2×), voice chip (pick any Siri voice - including the premium neural voices most apps hide), and a reader chip to flip to the text mid-listen.</p>
    <p>Lock screen, Control Center, AirPods squeeze, CarPlay - everything just works, because Readio routes through the same <code style="background:#e8f0fe;color:#0e4e86;padding:2px 8px;border-radius:6px;font-size:0.9em;">MPNowPlayingInfoCenter</code> plumbing Apple Music uses.</p>
  </div>
  <div class="readio-feature-visual">
    <img src="{{ '/static/img/readio/nowplaying.png' | relative_url }}" alt="Readio now playing screen">
  </div>
</section>

<section class="readio-feature">
  <div class="readio-feature-text">
    <span class="readio-feature-eyebrow">Follow Along</span>
    <h2>Karaoke for articles</h2>
    <p>Every sentence highlights as it's spoken. Glance down, find your place, keep going. Tap a line to jump there.</p>
    <p>It's the same interaction Apple Music uses for lyrics, applied to prose - and once you have it, going back to a podcast app that can't do this feels broken.</p>
  </div>
  <div class="readio-feature-visual">
    <img src="{{ '/static/img/readio/lyrics.png' | relative_url }}" alt="Readio lyric-style follow-along">
  </div>
</section>

<section class="readio-feature reverse">
  <div class="readio-feature-text">
    <span class="readio-feature-eyebrow">Reader View</span>
    <h2>Clean text, when you want to read</h2>
    <p>Sometimes you just want the clean text without the chrome, cookie banners, and newsletter modals. Readio parses articles with a Readability-style extractor the moment you add them, so the reader view is ready offline - with Dynamic Type, Dark Mode, and a few paper-inspired themes for eye comfort.</p>
    <p>Listening and reading aren't separate modes. You can switch at any point and pick up exactly where the audio was.</p>
  </div>
  <div class="readio-feature-visual">
    <div class="readio-feature-visual-pair">
      <img src="{{ '/static/img/readio/reader.png' | relative_url }}" alt="Readio reader view">
      <img src="{{ '/static/img/readio/themes.png' | relative_url }}" alt="Readio reader themes">
    </div>
  </div>
</section>

<section class="readio-feature">
  <div class="readio-feature-text">
    <span class="readio-feature-eyebrow">Share</span>
    <h2>Share a great line, instantly</h2>
    <p>Hit a line that stuck with you? Tap a sentence, export a snapshot - the quote, the source, the Readio watermark - and send it to a friend.</p>
    <p>It's the feature Spotify added to music and Kindle added to books. Articles deserved it too.</p>
  </div>
  <div class="readio-feature-visual">
    <img src="{{ '/static/img/readio/snapshot.png' | relative_url }}" alt="Readio quote snapshot">
  </div>
</section>

<section class="readio-privacy">
  <h2>What Readio does <em>not</em> do</h2>
  <div class="readio-privacy-grid">
    <div class="readio-privacy-item">
      <strong>No backend</strong>
      <span>Articles never leave your device except when Readio fetches the original HTML.</span>
    </div>
    <div class="readio-privacy-item">
      <strong>No account</strong>
      <span>Nothing to sign up for. There isn't even an email field.</span>
    </div>
    <div class="readio-privacy-item">
      <strong>No subscription</strong>
      <span>One-time App Store purchase. That's the whole transaction.</span>
    </div>
    <div class="readio-privacy-item">
      <strong>No tracking</strong>
      <span>No analytics, no ads. I genuinely don't know how many people use it.</span>
    </div>
    <div class="readio-privacy-item">
      <strong>No cloud TTS bill</strong>
      <span>Readio uses Apple's on-device voices - free, private, and work on the subway with no signal.</span>
    </div>
  </div>
</section>

<section class="readio-final">
  <h2>Who it's for</h2>
  <p>Power readers who already have a pile of bookmarks, already pay for the iPhone, already have AirPods - and don't want to rent a fifth subscription to turn text into sound.</p>
  <a class="readio-cta" href="https://apps.apple.com/app/readio-listen-to-the-web/id6762374434" target="_blank">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
    Get Readio on the App Store
  </a>
</section>

<p class="readio-colophon">Built by <a href="{{ '/about/' | relative_url }}">J</a> - Swift 6, SwiftUI, SwiftData, AVSpeechSynthesizer. Zero third-party dependencies except SwiftSoup for HTML parsing.</p>
