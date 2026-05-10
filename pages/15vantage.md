---
layout: page
title: Vantage
permalink: /vantage/
icon: octicon-pin
isNavItem: false
isAppPage: true
use_card: false
---

<style>
  /* ===== Vantage landing page ===== */
  .vantage-hero {
    background:
      radial-gradient(circle at 20% 25%, rgba(201,168,106,0.18) 0%, transparent 55%),
      radial-gradient(circle at 80% 80%, rgba(201,168,106,0.10) 0%, transparent 50%),
      linear-gradient(135deg, #0a0a0a 0%, #15161a 55%, #1a1c20 100%);
    color: #f2e9d6;
    padding: 4.5rem 2rem 5rem;
    border-radius: 24px;
    margin-bottom: 3rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .vantage-hero::before {
    /* subtle concentric rings, anchored bottom-right */
    content: '';
    position: absolute;
    right: -120px;
    bottom: -120px;
    width: 360px;
    height: 360px;
    border-radius: 50%;
    border: 1px solid rgba(201,168,106,0.15);
    box-shadow:
      inset 0 0 0 60px rgba(201,168,106,0.05),
      inset 0 0 0 120px rgba(201,168,106,0.04);
  }
  .vantage-hero > * { position: relative; z-index: 1; }
  .vantage-hero-eyebrow {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-weight: 600;
    color: #c9a86a;
    margin-bottom: 1.25rem;
  }
  .vantage-hero h1 {
    font-family: "Iowan Old Style", "Palatino", Georgia, serif;
    font-size: 3rem;
    font-weight: 400;
    letter-spacing: -0.01em;
    line-height: 1.1;
    margin: 0 0 1rem;
    color: #f2e9d6;
  }
  .vantage-hero h1 em {
    font-style: italic;
    color: #c9a86a;
  }
  .vantage-hero p {
    font-size: 1.15rem;
    line-height: 1.6;
    max-width: 620px;
    margin: 0 auto 2rem;
    color: #d4cab6;
  }
  .vantage-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: #c9a86a;
    color: #0a0a0a;
    padding: 0.85rem 1.75rem;
    border-radius: 100px;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .vantage-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(201,168,106,0.3);
    color: #0a0a0a;
    text-decoration: none;
  }
  .vantage-cta.disabled {
    background: rgba(201,168,106,0.18);
    color: #d4cab6;
    cursor: default;
    border: 1px solid rgba(201,168,106,0.4);
  }
  .vantage-cta.disabled:hover {
    transform: none;
    box-shadow: none;
    color: #d4cab6;
  }

  /* Intro story */
  .vantage-intro {
    max-width: 720px;
    margin: 0 auto 4rem;
    font-size: 1.05rem;
    line-height: 1.75;
    color: #374151;
  }
  .vantage-intro p { margin-bottom: 1.25rem; }
  .vantage-intro strong { color: #8a6f3a; font-weight: 700; }

  /* Feature rows - alternating two-column */
  .vantage-feature {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    margin-bottom: 4.5rem;
  }
  .vantage-feature.reverse .vantage-feature-text { order: 2; }
  .vantage-feature.reverse .vantage-feature-visual { order: 1; }
  .vantage-feature-text h2 {
    font-family: "Iowan Old Style", "Palatino", Georgia, serif;
    font-size: 1.85rem;
    font-weight: 400;
    letter-spacing: -0.01em;
    color: #1a1a1a;
    margin: 0 0 1rem;
    line-height: 1.25;
  }
  .vantage-feature-text h2 em {
    font-style: italic;
    color: #8a6f3a;
  }
  .vantage-feature-eyebrow {
    display: inline-block;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-weight: 700;
    color: #8a6f3a;
    background: #f4ead2;
    padding: 4px 12px;
    border-radius: 100px;
    margin-bottom: 0.85rem;
  }
  .vantage-feature-text p {
    font-size: 1rem;
    line-height: 1.7;
    color: #4b5563;
    margin: 0 0 0.9rem;
  }
  .vantage-feature-visual {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .vantage-feature-visual img,
  .vantage-shot {
    max-width: 300px;
    width: 100%;
    border-radius: 0 !important;
    box-shadow: none !important;
    background: transparent;
    overflow: visible;
    filter: drop-shadow(0 20px 30px rgba(201,168,106,0.18)) drop-shadow(0 4px 8px rgba(0,0,0,0.08));
    transition: transform 0.3s ease;
  }
  .vantage-feature-visual img:hover,
  .vantage-shot:hover { transform: translateY(-4px); }
  .vantage-feature-visual-pair {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    max-width: 420px;
  }
  .vantage-feature-visual-pair img,
  .vantage-feature-visual-pair .vantage-shot {
    max-width: 100%;
    filter: drop-shadow(0 12px 24px rgba(201,168,106,0.18));
  }

  /* Screenshot placeholder — swap with <img src="..."> when ready */
  .vantage-shot {
    aspect-ratio: 9 / 19.5;
    background:
      repeating-linear-gradient(
        135deg,
        rgba(201,168,106,0.08) 0,
        rgba(201,168,106,0.08) 12px,
        transparent 12px,
        transparent 24px
      ),
      linear-gradient(180deg, #1a1c20 0%, #0a0a0a 100%);
    border: 1px solid rgba(201,168,106,0.25);
    border-radius: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #c9a86a;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    text-align: center;
    padding: 2rem 1rem;
  }
  .vantage-feature-visual-pair .vantage-shot { aspect-ratio: 9 / 16; border-radius: 24px; }

  /* Privacy / what it doesn't do - grid of cards */
  .vantage-privacy {
    background: #fbf8f1;
    border-radius: 24px;
    padding: 3rem;
    margin-bottom: 4rem;
    border: 1px solid #e9e2d0;
  }
  .vantage-privacy h2 {
    font-family: "Iowan Old Style", "Palatino", Georgia, serif;
    text-align: center;
    font-size: 1.85rem;
    font-weight: 400;
    letter-spacing: -0.01em;
    color: #1a1a1a;
    margin: 0 0 2rem;
  }
  .vantage-privacy h2 em { color: #8a6f3a; font-style: italic; }
  .vantage-privacy-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.25rem;
  }
  .vantage-privacy-item {
    background: #fff;
    border: 1px solid #e9e2d0;
    border-radius: 16px;
    padding: 1.5rem;
  }
  .vantage-privacy-item strong {
    display: block;
    color: #8a6f3a;
    font-size: 1.05rem;
    font-weight: 700;
    margin-bottom: 0.4rem;
  }
  .vantage-privacy-item span {
    font-size: 0.92rem;
    line-height: 1.55;
    color: #4b5563;
  }

  /* Final CTA */
  .vantage-final {
    text-align: center;
    padding: 3rem 2rem;
    border-top: 1px solid #e9e2d0;
    margin-bottom: 2rem;
  }
  .vantage-final h2 {
    font-family: "Iowan Old Style", "Palatino", Georgia, serif;
    font-size: 1.85rem;
    font-weight: 400;
    color: #1a1a1a;
    margin: 0 0 0.75rem;
    letter-spacing: -0.01em;
  }
  .vantage-final h2 em { font-style: italic; color: #8a6f3a; }
  .vantage-final p {
    color: #6b7280;
    font-size: 1.05rem;
    max-width: 540px;
    margin: 0 auto 2rem;
    line-height: 1.6;
  }
  .vantage-colophon {
    text-align: center;
    font-size: 0.85rem;
    color: #9ca3af;
    font-style: italic;
  }
  .vantage-colophon a { color: #6b7280; text-decoration: underline; }

  /* Mobile */
  @media (max-width: 768px) {
    .vantage-hero { padding: 3rem 1.5rem; border-radius: 16px; }
    .vantage-hero h1 { font-size: 2.1rem; }
    .vantage-hero p { font-size: 1.05rem; }
    .vantage-feature { grid-template-columns: 1fr; gap: 1.5rem; margin-bottom: 3rem; }
    .vantage-feature.reverse .vantage-feature-text { order: 2; }
    .vantage-feature.reverse .vantage-feature-visual { order: 1; }
    .vantage-feature-text h2 { font-size: 1.5rem; }
    .vantage-privacy { padding: 2rem 1.5rem; border-radius: 16px; }
  }
</style>

<section class="vantage-hero">
  <div class="vantage-hero-eyebrow">For iPhone · iOS 18+</div>
  <h1>Repeat photography, <em>stitched.</em></h1>
  <p>Pick a fixed subject. Photograph it again across hours, days, or seasons. Vantage stitches your captures into a single frame - wedges, grids, strips, crossfades, sliders, or a short time-lapse movie.</p>
  <a class="vantage-cta disabled" aria-disabled="true">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
    Coming soon to the App Store
  </a>
</section>

<div class="vantage-intro">
  <p>There's a particular kind of photograph I keep wanting to take and never quite manage. The same tree, four seasons. The same overlook, dawn through dusk. The same doorway, every time the light changes. <em>Repeat photography</em> - one place, many moments, side by side in a single frame.</p>
  <p>Every app I tried for it wanted an account, shipped my photos to somebody's cloud, gated the good composite styles behind a subscription, or had no answer for the part that's actually hard: <strong>lining up the next shot</strong> three weeks after the first one. Just freehand it and hope your hand was steady? That doesn't work.</p>
  <p>So I built <strong>Vantage</strong> - the app I wished had already existed. Built on Apple's Vision framework. No backend. No account. No subscription.</p>
</div>

<section class="vantage-feature">
  <div class="vantage-feature-text">
    <span class="vantage-feature-eyebrow">Ghost overlay</span>
    <h2>Line up the next shot in <em>seconds</em></h2>
    <p>On every return capture, your first photo appears as a translucent ghost on top of the live camera. Frame the new shot to match the ghost before tapping the shutter - that's how you stay aligned across visits.</p>
    <p>An anchor crosshair shows where the wedge composite will pivot. Toggle the ghost on or off if it gets in the way; the alignment runs in the background regardless.</p>
  </div>
  <div class="vantage-feature-visual">
    <!-- replace with: <img src="{{ '/static/img/vantage/ghost.png' | relative_url }}" alt="Vantage ghost overlay during return capture"> -->
    <div class="vantage-shot">Screenshot<br>Ghost overlay</div>
  </div>
</section>

<section class="vantage-feature reverse">
  <div class="vantage-feature-text">
    <span class="vantage-feature-eyebrow">Six composite styles</span>
    <h2>One subject, six ways to <em>tell the story</em></h2>
    <p><strong>Wedge</strong> - radial slices around an anchor point. The signature look. <strong>Grid</strong> - 2&times;2 quadrants for direct side-by-side comparison. <strong>Strips</strong> - vertical bands, like a thin time-lapse. <strong>Crossfade</strong> - smooth painterly blend.</p>
    <p><strong>Slider</strong> with a draggable divider, then export. <strong>Time-lapse</strong> renders a short MP4 of your spot evolving - crossfade or wedge sweep, 6 to 10 seconds. Subject masking keeps your foreground locked while the world around it changes.</p>
  </div>
  <div class="vantage-feature-visual">
    <!-- replace with: <img src="{{ '/static/img/vantage/wedge.png' | relative_url }}" alt="Vantage wedge composite"> -->
    <div class="vantage-shot">Screenshot<br>Wedge composite</div>
  </div>
</section>

<section class="vantage-feature">
  <div class="vantage-feature-text">
    <span class="vantage-feature-eyebrow">AI alignment</span>
    <h2>Vision corrects what your hand <em>can't</em></h2>
    <p>Apple's Vision framework runs translational and homographic registration against your reference photo on every return capture, then warps the image in the composite renderer to correct small handheld drift. All on-device, no cloud round-trip.</p>
    <p>Each capture shows a confidence badge - <strong>STRONG</strong>, <strong>FAIR</strong>, <strong>WEAK</strong>, <strong>OFF</strong> - so you know exactly what landed before you compose. If a shot drifted too far, Vantage prompts you to retake before leaving the camera.</p>
  </div>
  <div class="vantage-feature-visual">
    <!-- replace with: <img src="{{ '/static/img/vantage/alignment.png' | relative_url }}" alt="Capture grid with alignment confidence badges"> -->
    <div class="vantage-shot">Screenshot<br>Alignment badges</div>
  </div>
</section>

<section class="vantage-feature reverse">
  <div class="vantage-feature-text">
    <span class="vantage-feature-eyebrow">Golden hour</span>
    <h2>Know when the light is <em>worth it</em></h2>
    <p>Drop a spot at a real place and Vantage shows the day's sunrise and sunset under the title. The return-capture banner flips to a gold countdown when you're inside a golden-hour window: <em>~14 min left</em>.</p>
    <p>Pure on-device math - the standard NOAA solar algorithm, accurate to the minute for any latitude. No weather API, no network. Sun position only; the sky itself is up to you.</p>
  </div>
  <div class="vantage-feature-visual">
    <div class="vantage-feature-visual-pair">
      <!-- replace: <img src="{{ '/static/img/vantage/golden-detail.png' | relative_url }}" alt="Spot detail with golden hour timeline"> -->
      <div class="vantage-shot">Screenshot<br>Golden timeline</div>
      <!-- replace: <img src="{{ '/static/img/vantage/map.png' | relative_url }}" alt="Spot map view"> -->
      <div class="vantage-shot">Screenshot<br>Spot map</div>
    </div>
  </div>
</section>

<section class="vantage-feature">
  <div class="vantage-feature-text">
    <span class="vantage-feature-eyebrow">Export</span>
    <h2>Save it. Share it. <em>Anywhere.</em></h2>
    <p>Save composites to Photos at 1080&times;1080. Tap the portrait icon for a 9:16 Instagram-story export with the spot name in serif and a Vantage watermark. Time-lapses save as MP4 at 24fps.</p>
    <p>Everything runs on-device. The composite never touches a server. The story export never asks for an account. The time-lapse never waits in a queue.</p>
  </div>
  <div class="vantage-feature-visual">
    <!-- replace with: <img src="{{ '/static/img/vantage/export.png' | relative_url }}" alt="Result screen with save and share buttons"> -->
    <div class="vantage-shot">Screenshot<br>Result screen</div>
  </div>
</section>

<section class="vantage-privacy">
  <h2>What Vantage does <em>not</em> do</h2>
  <div class="vantage-privacy-grid">
    <div class="vantage-privacy-item">
      <strong>No backend</strong>
      <span>Captures, masks, composites, time-lapses, locations - all stay on your device.</span>
    </div>
    <div class="vantage-privacy-item">
      <strong>No account</strong>
      <span>Nothing to sign up for. There isn't even an email field.</span>
    </div>
    <div class="vantage-privacy-item">
      <strong>No subscription</strong>
      <span>Every feature is free. A one-time tip removes the export watermark, that's the whole transaction.</span>
    </div>
    <div class="vantage-privacy-item">
      <strong>No tracking</strong>
      <span>No analytics, no ads, no crash reporter. I genuinely don't know how many people use it.</span>
    </div>
    <div class="vantage-privacy-item">
      <strong>No cloud vision</strong>
      <span>Subject masking and alignment use Apple's on-device Vision framework. Your photos never leave the phone.</span>
    </div>
    <div class="vantage-privacy-item">
      <strong>No cropping required</strong>
      <span>Vantage works with the photo you took, not a watered-down preview. Original resolution, fully aligned.</span>
    </div>
  </div>
</section>

<section class="vantage-final">
  <h2>Who it's <em>for</em></h2>
  <p>People who keep returning to a place - a tree, a doorway, a horizon, a single corner of a single building - and have always wished they could see all those visits in a single frame. The trip you take every year. The construction project across the street. The window that catches different light every morning.</p>
  <a class="vantage-cta disabled" aria-disabled="true">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
    Coming soon to the App Store
  </a>
</section>

<p class="vantage-colophon">Built by <a href="{{ '/about/' | relative_url }}">J</a> - Swift 6, SwiftUI, SwiftData, Vision, AVFoundation. Zero third-party dependencies.</p>
