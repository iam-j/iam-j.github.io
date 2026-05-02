---
layout: page
title: RunDown
permalink: /rundown/
icon: octicon-stopwatch
isNavItem: false
isAppPage: true
use_card: false
---

<style>
  /* ===== RunDown landing page ===== */
  /* Brand: dark charcoal app with orange accent (#f97316) */
  .rundown-hero {
    background: linear-gradient(135deg, #0c0a09 0%, #1c1917 50%, #292524 100%);
    color: #fff;
    padding: 4.5rem 2rem 5rem;
    border-radius: 24px;
    margin-bottom: 3rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .rundown-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 18% 22%, rgba(249,115,22,0.22) 0%, transparent 45%),
                radial-gradient(circle at 82% 78%, rgba(249,115,22,0.12) 0%, transparent 50%);
  }
  .rundown-hero > * { position: relative; z-index: 1; }
  .rundown-hero-eyebrow {
    display: inline-block;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-weight: 700;
    color: #fdba74;
    background: rgba(249,115,22,0.14);
    border: 1px solid rgba(249,115,22,0.3);
    padding: 5px 14px;
    border-radius: 100px;
    margin-bottom: 1.25rem;
  }
  .rundown-hero h1 {
    font-size: 3rem;
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.1;
    margin: 0 0 1rem;
    color: #fff;
  }
  .rundown-hero p {
    font-size: 1.2rem;
    line-height: 1.6;
    max-width: 640px;
    margin: 0 auto 2rem;
    color: #d6d3d1;
  }
  .rundown-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: #f97316;
    color: #fff;
    padding: 0.85rem 1.75rem;
    border-radius: 100px;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 0 8px 24px rgba(249,115,22,0.35);
  }
  .rundown-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(249,115,22,0.45);
    color: #fff;
    text-decoration: none;
    background: #ea580c;
  }

  /* Intro story */
  .rundown-intro {
    max-width: 720px;
    margin: 0 auto 4rem;
    font-size: 1.05rem;
    line-height: 1.75;
    color: #374151;
  }
  .rundown-intro p { margin-bottom: 1.25rem; }
  .rundown-intro strong { color: #c2410c; font-weight: 700; }

  /* Feature rows */
  .rundown-feature {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    margin-bottom: 4.5rem;
  }
  .rundown-feature.reverse .rundown-feature-text { order: 2; }
  .rundown-feature.reverse .rundown-feature-visual { order: 1; }
  .rundown-feature-text h2 {
    font-size: 1.85rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #1a1a1a;
    margin: 0 0 1rem;
    line-height: 1.25;
  }
  .rundown-feature-eyebrow {
    display: inline-block;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-weight: 700;
    color: #c2410c;
    background: #ffedd5;
    padding: 4px 12px;
    border-radius: 100px;
    margin-bottom: 0.75rem;
  }
  .rundown-feature-text p {
    font-size: 1rem;
    line-height: 1.7;
    color: #4b5563;
    margin: 0 0 0.9rem;
  }
  .rundown-feature-visual {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .rundown-feature-visual img {
    max-width: 300px;
    width: 100%;
    border-radius: 0 !important;
    box-shadow: none !important;
    background: transparent;
    overflow: visible;
    filter: drop-shadow(0 20px 30px rgba(28,25,23,0.25)) drop-shadow(0 4px 8px rgba(249,115,22,0.12));
    transition: transform 0.3s ease;
  }
  .rundown-feature-visual img:hover { transform: translateY(-4px); }
  .rundown-feature-visual-pair {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    max-width: 420px;
  }
  .rundown-feature-visual-pair img {
    max-width: 100%;
    border-radius: 0 !important;
    box-shadow: none !important;
    background: transparent;
    overflow: visible;
    filter: drop-shadow(0 12px 24px rgba(28,25,23,0.2));
  }

  /* Privacy / what it doesn't do */
  .rundown-privacy {
    background: #f8fafc;
    border-radius: 24px;
    padding: 3rem;
    margin-bottom: 4rem;
  }
  .rundown-privacy h2 {
    text-align: center;
    font-size: 1.85rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #1a1a1a;
    margin: 0 0 2rem;
  }
  .rundown-privacy h2 em { color: #c2410c; font-style: normal; }
  .rundown-privacy-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.25rem;
  }
  .rundown-privacy-item {
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    padding: 1.5rem;
  }
  .rundown-privacy-item strong {
    display: block;
    color: #c2410c;
    font-size: 1.05rem;
    font-weight: 700;
    margin-bottom: 0.4rem;
  }
  .rundown-privacy-item span {
    font-size: 0.92rem;
    line-height: 1.55;
    color: #4b5563;
  }

  /* Final CTA */
  .rundown-final {
    text-align: center;
    padding: 3rem 2rem;
    border-top: 1px solid #e5e7eb;
    margin-bottom: 2rem;
  }
  .rundown-final h2 {
    font-size: 1.85rem;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0 0 0.75rem;
    letter-spacing: -0.02em;
  }
  .rundown-final p {
    color: #6b7280;
    font-size: 1.05rem;
    max-width: 540px;
    margin: 0 auto 2rem;
    line-height: 1.6;
  }
  .rundown-colophon {
    text-align: center;
    font-size: 0.85rem;
    color: #9ca3af;
    font-style: italic;
  }
  .rundown-colophon a { color: #6b7280; text-decoration: underline; }

  /* Mobile */
  @media (max-width: 768px) {
    .rundown-hero { padding: 3rem 1.5rem; border-radius: 16px; }
    .rundown-hero h1 { font-size: 2rem; }
    .rundown-hero p { font-size: 1.05rem; }
    .rundown-feature { grid-template-columns: 1fr; gap: 1.5rem; margin-bottom: 3rem; }
    .rundown-feature.reverse .rundown-feature-text { order: 2; }
    .rundown-feature.reverse .rundown-feature-visual { order: 1; }
    .rundown-feature-text h2 { font-size: 1.5rem; }
    .rundown-privacy { padding: 2rem 1.5rem; border-radius: 16px; }
  }
</style>

<section class="rundown-hero">
  <div class="rundown-hero-eyebrow">For iPhone · iPad · Apple Watch</div>
  <h1>The deadline isn't the problem. The steps before it are.</h1>
  <p>RunDown is a countdown app that actually knows what has to happen before the deadline - and reminds you when one of those steps slips.</p>
  <a class="rundown-cta" href="https://apps.apple.com/app/rundown-deadline-engine/id6761473099" target="_blank">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
    Download on the App Store
  </a>
</section>

<div class="rundown-intro">
  <p>Every big deadline is really a chain of small ones. The flight on the 14th is fine - if the visa arrives by the 9th, which needs the appointment on the 2nd, which needs the forms printed this weekend. Miss any link and the whole chain quietly derails, but the only date you ever wrote down was the last one.</p>
  <p>Countdown apps I tried just tick toward a single date - no idea what's in the way. To-do apps know the tasks but are flat: everything is a checkbox, nothing screams when it's going to cost you the deadline. I wanted the calendar's pressure with the to-do list's memory, for the 2-3 things in my life that actually matter.</p>
  <p>So I built <strong>RunDown</strong> - a countdown that understands <em>prerequisites</em>. You set the real deadline, then lay down the steps that block it. The app does the math, watches the chain, and tells you the moment one step starts eating into another's runway.</p>
</div>

<section class="rundown-feature">
  <div class="rundown-feature-text">
    <span class="rundown-feature-eyebrow">Start Simple</span>
    <h2>One goal. One date. The rest is just steps.</h2>
    <p>Open RunDown and the ask is tiny: what's the thing, and when's the thing. No projects, no tags, no workspaces. Name a goal, pick a deadline, and you're running.</p>
    <p>You can keep up to three active goals at once - intentionally limited. If everything is a priority, nothing is.</p>
  </div>
  <div class="rundown-feature-visual">
    <img src="{{ '/static/img/rundown/firstpagewithoutgoals_framed.png' | relative_url }}" alt="RunDown empty state - create your first goal">
  </div>
</section>

<section class="rundown-feature reverse">
  <div class="rundown-feature-text">
    <span class="rundown-feature-eyebrow">Steps That Block</span>
    <h2>Lay down the chain, in the order it actually runs</h2>
    <p>Each step is a mini-deadline that blocks the next one. Print the forms, then book the appointment, then pick up the visa, then fly. RunDown strings them together and knows: if step two slips by a day, every step after it shifts.</p>
    <p>Reorder with a drag. Add a step in the middle and the chain re-computes. No Gantt charts, no dependency arrows to wire up - just the list, in order, with the math baked in.</p>
  </div>
  <div class="rundown-feature-visual">
    <div class="rundown-feature-visual-pair">
      <img src="{{ '/static/img/rundown/enteringgoal_framed.png' | relative_url }}" alt="Adding a new RunDown goal">
      <img src="{{ '/static/img/rundown/enteringgoatwithstep_framed.png' | relative_url }}" alt="Adding a goal with its first step">
    </div>
  </div>
</section>

<section class="rundown-feature">
  <div class="rundown-feature-text">
    <span class="rundown-feature-eyebrow">Live Countdown</span>
    <h2>The number that matters, front and center</h2>
    <p>The main screen is one giant ticking countdown to the finish line. Days, hours, minutes, seconds - monospaced so the digits don't jitter. Below it, the chain of steps: what's done, what's active, what's next.</p>
    <p>A health pill at the top tells you the truth in one glance: <strong>on track</strong>, <strong>at risk</strong>, or <strong>overdue</strong> - based on how much runway is left versus how much work is ahead.</p>
  </div>
  <div class="rundown-feature-visual">
    <img src="{{ '/static/img/rundown/golaviewwithgoalcountdown_framed.png' | relative_url }}" alt="RunDown main countdown view">
  </div>
</section>

<section class="rundown-feature reverse">
  <div class="rundown-feature-text">
    <span class="rundown-feature-eyebrow">Focus Mode</span>
    <h2>Zoom into the step that's due next</h2>
    <p>Tap any step and the countdown switches to <em>that step's</em> deadline. Instead of "17 days until the trip," you see "2 days until the forms are due." Same data, closer lens.</p>
    <p>It's the difference between watching the horizon and watching your next footstep. Both matter - RunDown lets you pick which one you need to see right now.</p>
  </div>
  <div class="rundown-feature-visual">
    <img src="{{ '/static/img/rundown/goalviewwithcountdownforstep_framed.png' | relative_url }}" alt="RunDown step-level countdown">
  </div>
</section>

<section class="rundown-feature">
  <div class="rundown-feature-text">
    <span class="rundown-feature-eyebrow">Progress</span>
    <h2>Close out a step. Feel the chain move.</h2>
    <p>Finish a step and tap it done. The circle fills, the chain advances, and the next step becomes active - with a haptic that actually feels like progress. Milestone haptics fire at 50%, 25% and 10% of the goal's runway remaining, so you feel the deadline approaching even when the app is in your pocket.</p>
    <p>Home-screen and lock-screen widgets mirror the chain live. Glance at your phone, see the countdown and the current step, tap in to act.</p>
  </div>
  <div class="rundown-feature-visual">
    <img src="{{ '/static/img/rundown/markingstepcomplet_framed.png' | relative_url }}" alt="Marking a RunDown step complete">
  </div>
</section>

<section class="rundown-privacy">
  <h2>What RunDown does <em>not</em> do</h2>
  <div class="rundown-privacy-grid">
    <div class="rundown-privacy-item">
      <strong>No account</strong>
      <span>Nothing to sign up for. Your goals live on your device, full stop.</span>
    </div>
    <div class="rundown-privacy-item">
      <strong>No subscription</strong>
      <span>One-time App Store purchase. No upsells, no pro tier gated behind a paywall.</span>
    </div>
    <div class="rundown-privacy-item">
      <strong>No cloud sync</strong>
      <span>No backend to breach. Export a JSON backup when you want to move devices.</span>
    </div>
    <div class="rundown-privacy-item">
      <strong>No tracking</strong>
      <span>No analytics, no ads, no telemetry. I don't know and don't need to know.</span>
    </div>
    <div class="rundown-privacy-item">
      <strong>No goal hoarding</strong>
      <span>Three active goals, max. On purpose. A list of fifty "priorities" is a to-do app, not a countdown.</span>
    </div>
  </div>
</section>

<section class="rundown-final">
  <h2>Who it's for</h2>
  <p>People running a handful of things that actually matter - a visa, a move, a launch, a race, a wedding - where missing a prep step is the difference between hitting the date and reschedule hell.</p>
  <a class="rundown-cta" href="https://apps.apple.com/app/rundown-deadline-engine/id6761473099" target="_blank">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
    Get RunDown on the App Store
  </a>
</section>

<p class="rundown-colophon">Built by <a href="{{ '/about/' | relative_url }}">J</a> - Swift 6, SwiftUI, SwiftData, WidgetKit. Dark-mode native, zero third-party dependencies, stays on your device.</p>
