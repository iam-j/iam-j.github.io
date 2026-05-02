---
layout: page
title: SkateTracker
permalink: /skatetracker/
icon: octicon-trophy
isNavItem: false
isAppPage: true
use_card: false
---

<style>
  /* ===== SkateTracker landing page ===== */
  /* The app lives in deep purple with a cool cyan accent.
     This page mirrors that identity - pale lavender paper,
     a violet pull, ice-blue secondary notes. Inter throughout
     (already loaded on the site) with weight + italic carrying
     the display moments. */

  :root {
    --st-paper: #F7F5FF;
    --st-paper-dim: #EFEBFF;
    --st-card: #FFFFFF;
    --st-ink: #15122B;
    --st-ink-soft: #5A546E;
    --st-ink-faint: #A8A1C2;
    --st-accent: #6A4AD9;
    --st-accent-soft: #E3D9FF;
    --st-ice: #4CC4D9;
    --st-rule: rgba(21, 18, 43, 0.08);
  }

  /* Hero */
  .st-hero {
    background: var(--st-paper);
    color: var(--st-ink);
    padding: 4.5rem 2rem 5rem;
    border-radius: 24px;
    margin-bottom: 3rem;
    text-align: center;
    position: relative;
    overflow: hidden;
    border: 1px solid var(--st-rule);
  }
  .st-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 18% 22%, rgba(106, 74, 217, 0.10) 0%, transparent 45%),
      radial-gradient(circle at 82% 78%, rgba(76, 196, 217, 0.10) 0%, transparent 45%);
  }
  .st-hero > * { position: relative; z-index: 1; }
  .st-hero-eyebrow {
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-weight: 600;
    color: var(--st-ink-soft);
    margin-bottom: 1.25rem;
  }
  .st-hero h1 {
    font-size: 3.1rem;
    font-weight: 700;
    letter-spacing: -0.025em;
    line-height: 1.05;
    margin: 0 0 1.25rem;
    color: var(--st-ink);
  }
  .st-hero h1 em {
    font-style: italic;
    color: var(--st-accent);
    font-weight: 700;
  }
  .st-hero p {
    font-size: 1.15rem;
    line-height: 1.65;
    max-width: 640px;
    margin: 0 auto 2rem;
    color: var(--st-ink-soft);
  }
  .st-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    background: var(--st-ink);
    color: var(--st-paper);
    padding: 0.85rem 1.75rem;
    border-radius: 100px;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .st-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(21, 18, 43, 0.22);
    color: var(--st-paper);
    text-decoration: none;
  }
  .st-cta-meta {
    display: block;
    margin-top: 0.85rem;
    font-size: 0.78rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--st-ink-faint);
  }

  /* Intro story */
  .st-intro {
    max-width: 720px;
    margin: 0 auto 4rem;
    font-size: 1.05rem;
    line-height: 1.75;
    color: var(--st-ink-soft);
  }
  .st-intro p { margin-bottom: 1.25rem; }
  .st-intro strong { color: var(--st-ink); font-weight: 700; }
  .st-intro em {
    font-style: italic;
    color: var(--st-accent);
    font-weight: 600;
  }

  /* Feature rows */
  .st-feature {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    margin-bottom: 4.5rem;
  }
  .st-feature.reverse .st-feature-text { order: 2; }
  .st-feature.reverse .st-feature-visual { order: 1; }
  .st-feature-text h2 {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--st-ink);
    margin: 0 0 1rem;
    line-height: 1.2;
  }
  .st-feature-text h2 em {
    font-style: italic;
    color: var(--st-accent);
    font-weight: 700;
  }
  .st-feature-eyebrow {
    display: inline-block;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-weight: 600;
    color: var(--st-accent);
    background: var(--st-accent-soft);
    padding: 4px 12px;
    border-radius: 100px;
    margin-bottom: 0.85rem;
  }
  .st-feature-text p {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--st-ink-soft);
    margin: 0 0 0.9rem;
  }
  .st-feature-text strong { color: var(--st-ink); font-weight: 600; }
  .st-feature-visual {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .st-feature-visual img {
    max-width: 320px;
    width: 100%;
    border-radius: 0 !important;
    box-shadow: none !important;
    background: transparent;
    overflow: visible;
    filter: drop-shadow(0 22px 32px rgba(106, 74, 217, 0.18))
            drop-shadow(0 4px 8px rgba(21, 18, 43, 0.10));
    transition: transform 0.3s ease;
  }
  .st-feature-visual img:hover { transform: translateY(-4px); }
  .st-feature-visual-pair {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    max-width: 440px;
  }
  .st-feature-visual-pair img {
    max-width: 100%;
    border-radius: 0 !important;
    box-shadow: none !important;
    background: transparent;
    overflow: visible;
    filter: drop-shadow(0 14px 26px rgba(106, 74, 217, 0.14));
  }

  /* Quote */
  .st-quote {
    max-width: 720px;
    margin: 0 auto 4.5rem;
    padding: 2rem 2.5rem;
    background: var(--st-paper-dim);
    border-radius: 20px;
    border-left: 3px solid var(--st-accent);
  }
  .st-quote p {
    font-size: 1.4rem;
    line-height: 1.5;
    color: var(--st-ink);
    font-weight: 500;
    margin: 0;
    font-style: italic;
    letter-spacing: -0.005em;
  }
  .st-quote em { color: var(--st-accent); font-style: italic; }

  /* Beyond skating callout - distinct from privacy block */
  .st-beyond {
    background: linear-gradient(135deg, var(--st-paper-dim) 0%, #DDF1F4 100%);
    border-radius: 24px;
    padding: 3rem;
    margin-bottom: 4rem;
    border: 1px solid var(--st-rule);
  }
  .st-beyond h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--st-ink);
    margin: 0 0 1rem;
  }
  .st-beyond h2 em { color: var(--st-accent); font-style: italic; }
  .st-beyond > p {
    text-align: center;
    max-width: 640px;
    margin: 0 auto 1.75rem;
    font-size: 1.02rem;
    line-height: 1.65;
    color: var(--st-ink-soft);
  }
  .st-pill-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
  }
  .st-pill {
    background: var(--st-card);
    border: 1px solid var(--st-rule);
    color: var(--st-ink-soft);
    border-radius: 999px;
    padding: 0.4rem 0.95rem;
    font-size: 0.85rem;
    font-weight: 500;
  }
  .st-pill.live {
    background: var(--st-accent-soft);
    border-color: var(--st-accent-soft);
    color: var(--st-accent);
    font-weight: 700;
  }

  /* Privacy / what it doesn't do */
  .st-privacy {
    background: var(--st-paper-dim);
    border-radius: 24px;
    padding: 3rem;
    margin-bottom: 4rem;
  }
  .st-privacy h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--st-ink);
    margin: 0 0 2rem;
  }
  .st-privacy h2 em { color: var(--st-accent); font-style: italic; }
  .st-privacy-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.25rem;
  }
  .st-privacy-item {
    background: var(--st-card);
    border: 1px solid var(--st-rule);
    border-radius: 16px;
    padding: 1.5rem;
  }
  .st-privacy-item strong {
    display: block;
    color: var(--st-accent);
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.4rem;
    letter-spacing: -0.01em;
  }
  .st-privacy-item span {
    font-size: 0.92rem;
    line-height: 1.6;
    color: var(--st-ink-soft);
  }

  /* Final CTA */
  .st-final {
    text-align: center;
    padding: 3.5rem 2rem 3rem;
    border-top: 1px solid var(--st-rule);
    margin-bottom: 2rem;
  }
  .st-final h2 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--st-ink);
    margin: 0 0 0.75rem;
    letter-spacing: -0.02em;
  }
  .st-final h2 em { color: var(--st-accent); font-style: italic; }
  .st-final p {
    color: var(--st-ink-soft);
    font-size: 1.05rem;
    max-width: 560px;
    margin: 0 auto 2rem;
    line-height: 1.65;
  }
  .st-colophon {
    text-align: center;
    font-size: 0.85rem;
    color: var(--st-ink-faint);
    font-style: italic;
  }
  .st-colophon a { color: var(--st-ink-soft); text-decoration: underline; }

  /* Mobile */
  @media (max-width: 768px) {
    .st-hero { padding: 3rem 1.5rem; border-radius: 16px; }
    .st-hero h1 { font-size: 2.1rem; }
    .st-hero p { font-size: 1.02rem; }
    .st-feature { grid-template-columns: 1fr; gap: 1.5rem; margin-bottom: 3rem; }
    .st-feature.reverse .st-feature-text { order: 2; }
    .st-feature.reverse .st-feature-visual { order: 1; }
    .st-feature-text h2 { font-size: 1.55rem; }
    .st-quote { padding: 1.5rem 1.5rem; border-radius: 16px; }
    .st-quote p { font-size: 1.15rem; }
    .st-beyond, .st-privacy { padding: 2rem 1.5rem; border-radius: 16px; }
    .st-final h2 { font-size: 1.55rem; }
  }
</style>

<section class="st-hero">
  <div class="st-hero-eyebrow">For iPhone · Free · On-device</div>
  <h1>A whole season,<br>in <em>one place.</em></h1>
  <p>Competitions, camps, race results, expenses, podium photos, receipts. The companion the rink-side parent never had - quiet, private, and built around the rhythm of a real season.</p>
  <a class="st-cta" href="https://apps.apple.com/app/skating-tracker/id6760656201" target="_blank">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
    Download on the App Store
  </a>
  <span class="st-cta-meta">Free · iPhone · iOS 17+</span>
</section>

<div class="st-intro">
  <p>Skating families end up with a messy stack - a notes app for results, a spreadsheet for expenses, a camera roll for medal photos, a calendar for events. Every season starts by reinventing the same system. We searched for an app that pulled all of it together and never found one.</p>
  <p>So we built <strong>SkateTracker</strong> - <em>the app we wished existed</em>. Single place for competitions, camps, race results, costs, and the moments worth remembering. Designed by someone who has sat at the rink with a phone and a spreadsheet open in two tabs, trying to remember which travel claim was for which event.</p>
  <p>No login. No subscription. No data leaving your device. Just a tool that respects your time and gets out of the way.</p>
</div>

<section class="st-feature">
  <div class="st-feature-text">
    <span class="st-feature-eyebrow">Events</span>
    <h2>Your season, <em>at a glance.</em></h2>
    <p>The home screen is the season itself - every competition and camp you've added, sorted by date, filterable by type. The next event sits at the top with a countdown so you always know what's coming. Stat cards roll up the totals: events tracked, races run, podiums earned, money spent.</p>
    <p>Tap any event for the full picture. Long-press for quick edit and delete. The app fades away and the season stays in focus.</p>
  </div>
  <div class="st-feature-visual">
    <img src="{{ '/static/img/skatetracker/Eventsviewwithupcomingnew_framed.png' | relative_url }}" alt="SkateTracker events list with upcoming countdown">
  </div>
</section>

<section class="st-feature reverse">
  <div class="st-feature-text">
    <span class="st-feature-eyebrow">Results</span>
    <h2>Every podium. <em>Every memory.</em></h2>
    <p>Log every race - distance, position, conditions, what to improve. Best position and medal counts roll up automatically. The status header shows the moment that mattered most: the position, the days remaining, the medals earned.</p>
    <p>Attach photos to any event - medal shots, podium moments, venue pictures. Years from now, the app remembers the 3rd-place finish, the hotel that smelled like chlorine, the day everything came together.</p>
  </div>
  <div class="st-feature-visual">
    <img src="{{ '/static/img/skatetracker/racedetailswithphoto_framed.png' | relative_url }}" alt="Race detail with podium photo attached">
  </div>
</section>

<section class="st-feature">
  <div class="st-feature-text">
    <span class="st-feature-eyebrow">Adding a race</span>
    <h2>500m. 1000m. Relay. <em>Done.</em></h2>
    <p>Adding a race is a single screen. Distance, position, optional notes - that's it. The form remembers what's coming back next time. Edit any race later from the same screen, with a delete button right where you'd expect it.</p>
    <p>Build the picture race-by-race over the weekend. By Sunday night the season has another data point and the app has another memory.</p>
  </div>
  <div class="st-feature-visual">
    <img src="{{ '/static/img/skatetracker/addingrace_framed.png' | relative_url }}" alt="Add race screen">
  </div>
</section>

<section class="st-feature reverse">
  <div class="st-feature-text">
    <span class="st-feature-eyebrow">Money</span>
    <h2>Every cost. <em>Every receipt.</em></h2>
    <p>Skating gets expensive. Travel, entry fees, gear, food, accommodation - track each cost by category, link it to an event, and watch the season total roll up automatically. Currency follows your device - €, £, $, kr, zł - without a setting to find.</p>
    <p>Snap a photo of the receipt right inside the expense screen. Hotel folio, gas pump, entry fee printout - all attached, all searchable, all yours.</p>
  </div>
  <div class="st-feature-visual">
    <div class="st-feature-visual-pair">
      <img src="{{ '/static/img/skatetracker/expensesview_framed.png' | relative_url }}" alt="Expenses list with category breakdown">
      <img src="{{ '/static/img/skatetracker/expensedetailswithphotosnew_framed.png' | relative_url }}" alt="Expense detail with attached receipt photos">
    </div>
  </div>
</section>

<div class="st-quote">
  <p>"Years from now, you won't just have a list of races. You'll have <em>the season itself</em> - the podium photo, the hotel receipt, the note about the new blades, the moment they finally landed the jump. The app remembers so you don't have to."</p>
</div>

<section class="st-feature">
  <div class="st-feature-text">
    <span class="st-feature-eyebrow">Stats</span>
    <h2>The story your <em>season tells.</em></h2>
    <p>Podium rate, average cost per event, spending breakdown by category, season summary. Numbers a parent or coach actually wants - without ever asking you to crunch one yourself.</p>
    <p>Export the whole thing to CSV anytime, or import a past season you've been keeping in a spreadsheet. Your data is yours, in a format that lasts decades.</p>
  </div>
  <div class="st-feature-visual">
    <img src="{{ '/static/img/skatetracker/statsview_framed.png' | relative_url }}" alt="Stats screen with podium rate and spending">
  </div>
</section>

<section class="st-beyond">
  <h2>Built for skating. Designed for <em>any sport.</em></h2>
  <p>The name says skating, but the bones are sport-agnostic. Events, results, expenses, photos - every model is general. Swap the icons, change the terminology, and you have a season tracker for any sport where individuals or families travel to compete. On the roadmap: separate apps tuned for the language and rituals of each community.</p>
  <div class="st-pill-row">
    <span class="st-pill live">Skating · live</span>
    <span class="st-pill">Swimming</span>
    <span class="st-pill">Tennis</span>
    <span class="st-pill">Athletics</span>
    <span class="st-pill">Climbing</span>
    <span class="st-pill">Gymnastics</span>
    <span class="st-pill">Karate</span>
    <span class="st-pill">Cycling</span>
    <span class="st-pill">…and more</span>
  </div>
</section>

<section class="st-privacy">
  <h2>What SkateTracker does <em>not</em> do</h2>
  <div class="st-privacy-grid">
    <div class="st-privacy-item">
      <strong>No account</strong>
      <span>No sign-up, no email, no profile. Open the app and start tracking.</span>
    </div>
    <div class="st-privacy-item">
      <strong>No cloud</strong>
      <span>No backend, no third-party API. Your season never leaves your iPhone.</span>
    </div>
    <div class="st-privacy-item">
      <strong>No tracking</strong>
      <span>No analytics, no telemetry, no ads. I genuinely don't know how many people use it.</span>
    </div>
    <div class="st-privacy-item">
      <strong>No subscription</strong>
      <span>Free, full stop. Every feature, on day one. Forever.</span>
    </div>
    <div class="st-privacy-item">
      <strong>No data jail</strong>
      <span>CSV in, CSV out. If you ever want to leave, your data leaves with you.</span>
    </div>
  </div>
</section>

<section class="st-final">
  <h2>Try it for <em>a season.</em></h2>
  <p>If it saves you one spreadsheet, one frantic search through your camera roll, or one re-built receipts list at the end of the year, it's earned its place on your phone.</p>
  <a class="st-cta" href="https://apps.apple.com/app/skating-tracker/id6760656201" target="_blank">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
    Get SkateTracker on the App Store
  </a>
  <span class="st-cta-meta">Free · iPhone · iOS 17+</span>
</section>

<p class="st-colophon">Built by <a href="{{ '/about/' | relative_url }}">J</a> - Swift 6, SwiftUI, SwiftData. Designed by someone who once kept a season in a single Apple Note and a folder of unsorted screenshots.</p>
