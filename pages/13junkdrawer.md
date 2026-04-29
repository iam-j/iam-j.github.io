---
layout: page
title: Junk Drawer
permalink: /junkdrawer/
icon: octicon-archive
isNavItem: false
isAppPage: true
use_card: false
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..700&display=swap" rel="stylesheet">

<style>
  /* ===== Junk Drawer landing page ===== */
  /* Deviates from the site's blue palette to match the app's
     warm-paper aesthetic — same screenshots, same identity, in
     the page chrome too. Inter still does the body work; Fraunces
     handles the italic "drawer" pulls and large display moments. */

  :root {
    --jd-paper: #FBF8F2;
    --jd-paper-dim: #F5EFE3;
    --jd-card: #FFFFFF;
    --jd-ink: #1B1815;
    --jd-ink-soft: #5C564D;
    --jd-ink-faint: #A8A097;
    --jd-accent: #D0421C;
    --jd-accent-soft: #F4DAD0;
    --jd-ochre: #C89B3C;
    --jd-sage: #6B7A5A;
    --jd-rule: rgba(27, 24, 21, 0.08);
  }

  /* Hero */
  .jd-hero {
    background: var(--jd-paper);
    color: var(--jd-ink);
    padding: 4.5rem 2rem 5rem;
    border-radius: 24px;
    margin-bottom: 3rem;
    text-align: center;
    position: relative;
    overflow: hidden;
    border: 1px solid var(--jd-rule);
  }
  .jd-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 18% 22%, rgba(208, 66, 28, 0.08) 0%, transparent 45%),
      radial-gradient(circle at 82% 78%, rgba(200, 155, 60, 0.08) 0%, transparent 45%);
  }
  .jd-hero > * { position: relative; z-index: 1; }
  .jd-hero-eyebrow {
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-weight: 600;
    color: var(--jd-ink-soft);
    margin-bottom: 1.25rem;
  }
  .jd-hero h1 {
    font-family: 'Fraunces', Georgia, serif;
    font-size: 3.1rem;
    font-weight: 400;
    letter-spacing: -0.02em;
    line-height: 1.05;
    margin: 0 0 1.25rem;
    color: var(--jd-ink);
  }
  .jd-hero h1 em {
    font-style: italic;
    color: var(--jd-accent);
    font-weight: 400;
  }
  .jd-hero p {
    font-size: 1.15rem;
    line-height: 1.65;
    max-width: 640px;
    margin: 0 auto 2rem;
    color: var(--jd-ink-soft);
  }
  .jd-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    background: var(--jd-ink);
    color: var(--jd-paper);
    padding: 0.85rem 1.75rem;
    border-radius: 100px;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .jd-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(27, 24, 21, 0.18);
    color: var(--jd-paper);
    text-decoration: none;
  }
  .jd-cta-meta {
    display: block;
    margin-top: 0.85rem;
    font-size: 0.78rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--jd-ink-faint);
  }

  /* Intro story */
  .jd-intro {
    max-width: 720px;
    margin: 0 auto 4rem;
    font-size: 1.05rem;
    line-height: 1.75;
    color: var(--jd-ink-soft);
  }
  .jd-intro p { margin-bottom: 1.25rem; }
  .jd-intro strong { color: var(--jd-ink); font-weight: 700; }
  .jd-intro em {
    font-family: 'Fraunces', Georgia, serif;
    font-style: italic;
    color: var(--jd-accent);
    font-weight: 500;
  }

  /* Feature rows — alternating two-column */
  .jd-feature {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    margin-bottom: 4.5rem;
  }
  .jd-feature.reverse .jd-feature-text { order: 2; }
  .jd-feature.reverse .jd-feature-visual { order: 1; }
  .jd-feature-text h2 {
    font-family: 'Fraunces', Georgia, serif;
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: -0.015em;
    color: var(--jd-ink);
    margin: 0 0 1rem;
    line-height: 1.2;
  }
  .jd-feature-text h2 em {
    font-style: italic;
    color: var(--jd-accent);
  }
  .jd-feature-eyebrow {
    display: inline-block;
    font-family: 'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-weight: 600;
    color: var(--jd-accent);
    background: var(--jd-accent-soft);
    padding: 4px 12px;
    border-radius: 100px;
    margin-bottom: 0.85rem;
  }
  .jd-feature-text p {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--jd-ink-soft);
    margin: 0 0 0.9rem;
  }
  .jd-feature-text strong { color: var(--jd-ink); font-weight: 600; }
  .jd-feature-visual {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .jd-feature-visual img {
    max-width: 320px;
    width: 100%;
    border-radius: 0 !important;
    box-shadow: none !important;
    background: transparent;
    overflow: visible;
    filter: drop-shadow(0 22px 32px rgba(208, 66, 28, 0.12))
            drop-shadow(0 4px 8px rgba(27, 24, 21, 0.08));
    transition: transform 0.3s ease;
  }
  .jd-feature-visual img:hover { transform: translateY(-4px); }
  .jd-feature-visual-pair {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    max-width: 440px;
  }
  .jd-feature-visual-pair img {
    max-width: 100%;
    border-radius: 0 !important;
    box-shadow: none !important;
    background: transparent;
    overflow: visible;
    filter: drop-shadow(0 14px 26px rgba(208, 66, 28, 0.10));
  }

  /* Quote / pulled callout */
  .jd-quote {
    max-width: 720px;
    margin: 0 auto 4.5rem;
    padding: 2rem 2.5rem;
    background: var(--jd-paper-dim);
    border-radius: 20px;
    border-left: 3px solid var(--jd-accent);
  }
  .jd-quote p {
    font-family: 'Fraunces', Georgia, serif;
    font-size: 1.4rem;
    line-height: 1.5;
    color: var(--jd-ink);
    font-weight: 400;
    margin: 0;
    font-style: italic;
  }
  .jd-quote em { color: var(--jd-accent); }

  /* Privacy / what it doesn't do — grid of cards */
  .jd-privacy {
    background: var(--jd-paper-dim);
    border-radius: 24px;
    padding: 3rem;
    margin-bottom: 4rem;
  }
  .jd-privacy h2 {
    text-align: center;
    font-family: 'Fraunces', Georgia, serif;
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: -0.015em;
    color: var(--jd-ink);
    margin: 0 0 2rem;
  }
  .jd-privacy h2 em { color: var(--jd-accent); font-style: italic; }
  .jd-privacy-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.25rem;
  }
  .jd-privacy-item {
    background: var(--jd-card);
    border: 1px solid var(--jd-rule);
    border-radius: 16px;
    padding: 1.5rem;
  }
  .jd-privacy-item strong {
    display: block;
    color: var(--jd-accent);
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.4rem;
    letter-spacing: -0.01em;
  }
  .jd-privacy-item span {
    font-size: 0.92rem;
    line-height: 1.6;
    color: var(--jd-ink-soft);
  }

  /* Final CTA */
  .jd-final {
    text-align: center;
    padding: 3.5rem 2rem 3rem;
    border-top: 1px solid var(--jd-rule);
    margin-bottom: 2rem;
  }
  .jd-final h2 {
    font-family: 'Fraunces', Georgia, serif;
    font-size: 2rem;
    font-weight: 400;
    color: var(--jd-ink);
    margin: 0 0 0.75rem;
    letter-spacing: -0.015em;
  }
  .jd-final h2 em { color: var(--jd-accent); font-style: italic; }
  .jd-final p {
    color: var(--jd-ink-soft);
    font-size: 1.05rem;
    max-width: 560px;
    margin: 0 auto 2rem;
    line-height: 1.65;
  }
  .jd-colophon {
    text-align: center;
    font-size: 0.85rem;
    color: var(--jd-ink-faint);
    font-style: italic;
  }
  .jd-colophon a { color: var(--jd-ink-soft); text-decoration: underline; }

  /* Mobile */
  @media (max-width: 768px) {
    .jd-hero { padding: 3rem 1.5rem; border-radius: 16px; }
    .jd-hero h1 { font-size: 2.1rem; }
    .jd-hero p { font-size: 1.02rem; }
    .jd-feature { grid-template-columns: 1fr; gap: 1.5rem; margin-bottom: 3rem; }
    .jd-feature.reverse .jd-feature-text { order: 2; }
    .jd-feature.reverse .jd-feature-visual { order: 1; }
    .jd-feature-text h2 { font-size: 1.55rem; }
    .jd-quote { padding: 1.5rem 1.5rem; border-radius: 16px; }
    .jd-quote p { font-size: 1.15rem; }
    .jd-privacy { padding: 2rem 1.5rem; border-radius: 16px; }
    .jd-final h2 { font-size: 1.55rem; }
  }
</style>

<section class="jd-hero">
  <div class="jd-hero-eyebrow">For iPhone · iOS 26 · On-device</div>
  <h1>Throw it in.<br>Find it <em>later.</em></h1>
  <p>Your iPhone has a thousand screenshots. The OTP, the parking spot, the auto driver's address, the kid's exam result, the prescription you snapped before the chemist closed. Photos saves them. Junk Drawer makes them findable.</p>
  <a class="jd-cta" href="https://apps.apple.com/app/junkdrawer-recall/id6763790180" target="_blank">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
    Download on the App Store
  </a>
  <span class="jd-cta-meta">Free · iPhone · iOS 26</span>
</section>

<div class="jd-intro">
  <p>Every iPhone has a thousand screenshots. Most are garbage. A few are gold — the parking spot you took at the airport, the OTP from the bank you never quite memorized, the auto driver's address scrawled on a note your friend texted, the kid's exam result you sent your spouse and immediately lost.</p>
  <p>The problem isn't saving them. Photos already does that. The problem is <em>finding them</em>. Three months later, when you actually need that prescription, you scroll through a thousand thumbnails of memes, restaurant bills, and accidental lock-screens, and you still can't find it.</p>
  <p>So I built <strong>Junk Drawer</strong> — a parallel index over your Screenshots album that runs entirely on your device. Share a screenshot to it (or let it auto-import) and it does the work: OCRs the text, classifies what it is, writes a one-line summary, and pulls out the bits you'll actually act on.</p>
  <p>No account. No cloud. No analytics. Built by one person, on a Mac mini in Hyderabad, because nothing else solved my own pile.</p>
</div>

<section class="jd-feature">
  <div class="jd-feature-text">
    <span class="jd-feature-eyebrow">The Drawer</span>
    <h2>Everything you've thrown in, in <em>one drawer.</em></h2>
    <p>The home screen is the drawer itself — every screenshot you've fed it, in capture-date order. Filter by kind from the chip strip on top: receipts, prescriptions, tickets, contacts, payments, more. A small accent dot tells you which screenshots are still being analyzed. No fake completeness.</p>
    <p>Tap any thumbnail for the full picture: the OCR text, the AI's one-line summary, the structured fields, every entity pill. Long-press to enter selection mode and bulk-archive or bulk-delete.</p>
  </div>
  <div class="jd-feature-visual">
    <img src="{{ '/static/img/junkdrawer/drawerscreen_framed.png' | relative_url }}" alt="Junk Drawer's main drawer view">
  </div>
</section>

<section class="jd-feature reverse">
  <div class="jd-feature-text">
    <span class="jd-feature-eyebrow">Analysis</span>
    <h2>What's in this screenshot, in <em>seconds.</em></h2>
    <p>Apple Intelligence reads the screenshot like a person would. It tells you what kind of thing it is, writes a one-line summary so you can skim a hundred screenshots without opening any, and surfaces the structured bits — phone numbers, OTPs, ₹ amounts, dates, addresses, UPI handles, IFSC codes, dosages, tracking numbers — as tappable pills.</p>
    <p>One tap to call the number, copy the OTP, open the address in Maps, copy the total. The information was always sitting in your screenshot. We just made it cost zero seconds to use.</p>
  </div>
  <div class="jd-feature-visual">
    <img src="{{ '/static/img/junkdrawer/analysisesample1_framed.png' | relative_url }}" alt="Junk Drawer's pill-based extraction">
  </div>
</section>

<section class="jd-feature">
  <div class="jd-feature-text">
    <span class="jd-feature-eyebrow">Different Shapes</span>
    <h2>Bills, prescriptions, exam results — <em>all parsed.</em></h2>
    <p>A pizza bill becomes a merchant + total + line items. A prescription becomes drug + dosage + prescriber + date. A board exam result becomes the candidate + assessment + scores per subject. Same drawer, same search, different structured output for each shape.</p>
    <p>Domain-aware where it matters. ₹ amounts format in lakhs and crores when they should. UPI handles aren't treated as broken email addresses. Phone numbers in <code>+91</code> format pretty-print correctly without you doing anything.</p>
  </div>
  <div class="jd-feature-visual">
    <div class="jd-feature-visual-pair">
      <img src="{{ '/static/img/junkdrawer/analysisesample2_framed.png' | relative_url }}" alt="Prescription extraction">
      <img src="{{ '/static/img/junkdrawer/analysissample3_framed.png' | relative_url }}" alt="Exam result extraction">
    </div>
  </div>
</section>

<div class="jd-quote">
  <p>"Type <em>biryani</em> and find that Swiggy bill. Type <em>₹440</em> and find the receipt. Type <em>diabetes meds</em> and find the prescription that says Metformin — without ever using the word 'diabetes'."</p>
</div>

<section class="jd-feature reverse">
  <div class="jd-feature-text">
    <span class="jd-feature-eyebrow">Search</span>
    <h2>Search that actually <em>understands.</em></h2>
    <p>Three layers, one query. Full-text matches words inside the image. Semantic matches the meaning, using on-device sentence embeddings. Visual labels match what the image looks like — type "bird" and find the bird photo with no caption at all.</p>
    <p>You don't pick a mode. You just type. Type a merchant, a doctor's name, a part number, an amount, the vibe of what you remember. The right screenshot surfaces.</p>
  </div>
  <div class="jd-feature-visual">
    <img src="{{ '/static/img/junkdrawer/searchscreen_framed.png' | relative_url }}" alt="Junk Drawer's search">
  </div>
</section>

<section class="jd-feature">
  <div class="jd-feature-text">
    <span class="jd-feature-eyebrow">Get Stuff In</span>
    <h2>Share sheet, or auto-import. <em>Your call.</em></h2>
    <p>From anywhere — Photos, a website, a chat, a screenshot you just took — tap Share → Junk Drawer. Bottom sheet shows what we found, you tap "Dump it", done. Bulk shares of 30 photos work the same way.</p>
    <p>Or grant Photos permission once and let auto-import do its thing — every new screenshot gets indexed quietly in the background. Either path. Both paths. Whatever fits.</p>
  </div>
  <div class="jd-feature-visual">
    <img src="{{ '/static/img/junkdrawer/autoimportscreenshots_framed.png' | relative_url }}" alt="Junk Drawer's auto-import setting">
  </div>
</section>

<section class="jd-feature reverse">
  <div class="jd-feature-text">
    <span class="jd-feature-eyebrow">Settings</span>
    <h2>Honest about what's <em>actually running.</em></h2>
    <p>Apple Intelligence has cold-start latency, isn't on every device, and can be turned off in Settings. Junk Drawer doesn't lie about any of this. The Settings panel tells you exactly which features are running, which aren't, and how to fix it.</p>
    <p>If iCloud Backup is on, your drawer rides to your next iPhone automatically. If you'd rather not trust that, manual export creates a single <code>.junkdrawer</code> file you can stash anywhere — iCloud Drive, AirDrop to your Mac, email yourself. Tap one to import on a fresh install.</p>
  </div>
  <div class="jd-feature-visual">
    <img src="{{ '/static/img/junkdrawer/settingsscreen_framed.png' | relative_url }}" alt="Junk Drawer's settings panel">
  </div>
</section>

<section class="jd-feature">
  <div class="jd-feature-text">
    <span class="jd-feature-eyebrow">First Run</span>
    <h2>The pitch, in <em>one screen.</em></h2>
    <p>One welcome. One permission. No tutorials, no onboarding carousels, no "let us tell you about all our features" tour. The app does the talking once you start using it.</p>
    <p>Free forever, with an optional tip jar inside for anyone who wants to chip in. No subscription, no upsell, no "pro" tier hiding the good features.</p>
  </div>
  <div class="jd-feature-visual">
    <img src="{{ '/static/img/junkdrawer/Welcomescreen_framed.png' | relative_url }}" alt="Junk Drawer welcome screen">
  </div>
</section>

<section class="jd-privacy">
  <h2>What Junk Drawer does <em>not</em> do</h2>
  <div class="jd-privacy-grid">
    <div class="jd-privacy-item">
      <strong>No account</strong>
      <span>No sign-up, no email, no profile. There's nothing to forget.</span>
    </div>
    <div class="jd-privacy-item">
      <strong>No cloud</strong>
      <span>No backend, no third-party API. Your screenshots never leave your iPhone.</span>
    </div>
    <div class="jd-privacy-item">
      <strong>No tracking</strong>
      <span>No analytics, no telemetry, no ads. I genuinely don't know how many people use it.</span>
    </div>
    <div class="jd-privacy-item">
      <strong>No subscription</strong>
      <span>Free forever. Tip jar inside if you want to chip in. That's the whole deal.</span>
    </div>
    <div class="jd-privacy-item">
      <strong>No Photos copy</strong>
      <span>Your library stays where it is. Delete the app, the index goes with it. Photos untouched.</span>
    </div>
  </div>
</section>

<section class="jd-final">
  <h2>Built for the <em>screenshot pile</em> you already have.</h2>
  <p>Apple Intelligence required for full features (iPhone 15 Pro or later, iOS 26 recommended). Without it, full-text search and entity extraction still work on every screenshot.</p>
  <a class="jd-cta" href="https://apps.apple.com/app/junkdrawer-recall/id6763790180" target="_blank">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
    Get JunkDrawer on the App Store
  </a>
  <span class="jd-cta-meta">Free, with an optional tip jar inside</span>
</section>

<p class="jd-colophon">Built by <a href="{{ '/about/' | relative_url }}">J</a> — Swift 6, SwiftUI, GRDB, Apple Foundation Models, Vision, Natural Language. Designed in warm paper because the rest of iOS is already so cold.</p>
