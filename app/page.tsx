"use client";

import { useState } from "react";
import {
  ArrowRight,
  BellRinging,
  Car,
  CheckCircle,
  ClipboardText,
  Copy,
  Eye,
  MagnifyingGlass,
  PlayCircle,
  ShieldCheck,
  Sparkle,
  X,
} from "@phosphor-icons/react";

const inviteMessage =
  "Hi HS Ong, I’m interested in seeing how PropertyDealDesk Match Edition works. Can you show me the private beta?";

export default function Home() {
  const [showInvite, setShowInvite] = useState(false);
  const [copied, setCopied] = useState(false);

  async function copyInvite() {
    await navigator.clipboard.writeText(inviteMessage);
    setCopied(true);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="PropertyDealDesk home">
          <img
            src="/propertydealsdesk-logo.png"
            alt="PropertyDealDesk — Turn Noise Into Opportunities"
          />
        </a>
        <nav aria-label="Main navigation">
          <a href="#how-it-works">How it works</a>
          <a href="#see-it">See it in action</a>
          <button className="button button-small" onClick={() => setShowInvite(true)}>
            Request a private demo
          </button>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><ShieldCheck weight="fill" /> Match Edition · Private beta</div>
          <h1>PropertyDealDesk<br /><span>Match Edition</span></h1>
          <p className="hero-lead">
            Stop scrolling. Start matching. Spot possible buyer, tenant and listing opportunities earlier without checking every co-broke message manually.
          </p>
          <div className="hero-actions">
            <button className="button" onClick={() => setShowInvite(true)}>
              Request a private demo <ArrowRight weight="bold" />
            </button>
            <a className="text-link" href="#see-it"><PlayCircle weight="fill" /> Watch how it works</a>
          </div>
          <div className="trust-row">
            <span><CheckCircle weight="fill" /> Possible matches</span>
            <span><CheckCircle weight="fill" /> Phone alerts</span>
            <span><CheckCircle weight="fill" /> You stay in control</span>
          </div>
        </div>
      </section>

      <section className="problem-band">
        <div>
          <span className="section-kicker">Made for active Malaysian agents</span>
          <h2>Good opportunities should not depend on how fast you can scroll.</h2>
        </div>
        <p>Viewings, appointments, driving and client calls do not stop the co-broke messages. Match Edition helps you notice what may matter while you stay focused on your clients.</p>
      </section>

      <section className="section dashboard-feature" id="product-view">
        <div className="section-heading">
          <span className="section-kicker">Readable product view</span>
          <h2>Review possible matches in one clear workspace.</h2>
          <p>The dashboard is shown larger here so agents can see the match queue, property context and review flow clearly before asking for a private demo.</p>
        </div>
        <div className="dashboard-shell" aria-label="Large Match Edition dashboard preview">
          <div className="window-bar"><span></span><span></span><span></span></div>
          <img src="/match-dashboard.png" alt="Match Edition dashboard with possible match records and review details" />
        </div>
        <div className="detail-grid">
          <article className="detail-panel queue-panel">
            <span className="section-kicker">Match queue</span>
            <h3>Likely opportunities move to the front.</h3>
            <p>Use the queue to review possible buyer, tenant, WTS and WTL connections faster.</p>
          </article>
          <article className="detail-panel alert-panel">
            <span className="section-kicker">Phone alert concept</span>
            <h3>Notice the opportunity while you are busy.</h3>
            <p>Alerts are meant to support agent judgment, not replace your own review.</p>
          </article>
        </div>
      </section>

      <section className="section" id="how-it-works">
        <div className="section-heading centered">
          <span className="section-kicker">A simpler daily routine</span>
          <h2>From group noise to a possible opportunity</h2>
          <p>Match Edition supports your judgment. It brings likely connections forward so you can review and act faster.</p>
        </div>
        <div className="steps">
          <article><div className="step-icon"><MagnifyingGlass weight="duotone" /></div><span>01</span><h3>Messages come in</h3><p>Your selected co-broke groups continue working as usual.</p></article>
          <article><div className="step-icon"><Sparkle weight="duotone" /></div><span>02</span><h3>Possible matches surface</h3><p>Buyer, tenant and listing details are compared for likely fit.</p></article>
          <article><div className="step-icon"><BellRinging weight="duotone" /></div><span>03</span><h3>You get an alert</h3><p>A possible opportunity can reach your phone while you are busy.</p></article>
          <article><div className="step-icon"><Eye weight="duotone" /></div><span>04</span><h3>You review and act</h3><p>You check the details and decide whether the lead is worth pursuing.</p></article>
        </div>
      </section>

      <section className="section product-story">
        <div className="product-image">
          <img src="/phone-alert.png" alt="PropertyDealDesk phone alert concept for possible matches" />
        </div>
        <div className="product-copy">
          <span className="section-kicker">Built around agent judgment</span>
          <h2>See the signal earlier, then decide what deserves action.</h2>
          <p>Match Edition helps you review faster without losing the context you need to make a professional decision.</p>
          <ul>
            <li><ClipboardText weight="fill" /><div><strong>Clear match queue</strong><span>Review likely WTB, WTR, WTS and WTL connections.</span></div></li>
            <li><ShieldCheck weight="fill" /><div><strong>Your judgment comes first</strong><span>Suggestions are possible matches—not guaranteed deals.</span></div></li>
            <li><Car weight="fill" /><div><strong>Stay aware while busy</strong><span>Spend less time repeatedly checking group conversations.</span></div></li>
          </ul>
        </div>
      </section>

      <section className="section video-section" id="see-it">
        <div className="section-heading centered">
          <span className="section-kicker">See Match Edition in action</span>
          <h2>A practical assistant for opportunity detection</h2>
          <p>Watch the short introduction, then ask for a guided private demo using your normal agent workflow.</p>
        </div>
        <div className="video-frame">
          <video controls preload="metadata" poster="/brand-hero.png">
            <source src="/match-edition-explainer.mp4" type="video/mp4" />
            Your browser does not support this video.
          </video>
        </div>
      </section>

      <section className="section beta-grid">
        <div className="beta-copy">
          <span className="section-kicker">Private beta setup</span>
          <h2>Guided from the first login.</h2>
          <p>This first release is deliberately personal and controlled. HS Ong will guide selected agents through setup and testing.</p>
          <div className="beta-note"><ShieldCheck weight="fill" /><span>Private support assistant—not an agency platform, CRM or mass-message tool.</span></div>
        </div>
        <ol className="checklist">
          <li><span>1</span><div><strong>Guided installation</strong><p>Support-friendly setup for non-technical users.</p></div></li>
          <li><span>2</span><div><strong>WhatsApp Web login</strong><p>You connect your normal working session.</p></div></li>
          <li><span>3</span><div><strong>Exact group selection</strong><p>Selected co-broke group titles are confirmed during setup.</p></div></li>
          <li><span>4</span><div><strong>Alert test</strong><p>We confirm that possible-match alerts reach your phone.</p></div></li>
        </ol>
      </section>

      <section className="final-cta" id="private-beta">
        <div>
          <span className="section-kicker light">Private beta · Limited onboarding</span>
          <h2>Spend less time checking.<br />Give good opportunities a better chance to find you.</h2>
        </div>
        <button className="button button-light" onClick={() => setShowInvite(true)}>
          Request a private demo <ArrowRight weight="bold" />
        </button>
      </section>

      <footer>
        <img src="/propertydealsdesk-logo.png" alt="PropertyDealDesk" />
        <p>Match Edition · Turn Noise Into Opportunities</p>
        <p>Possible matches require agent review. Availability is currently limited to selected private-beta users.</p>
      </footer>

      {showInvite && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setShowInvite(false)}>
          <div className="modal" role="dialog" aria-modal="true" aria-labelledby="invite-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" aria-label="Close" onClick={() => setShowInvite(false)}><X weight="bold" /></button>
            <div className="modal-icon"><BellRinging weight="fill" /></div>
            <span className="section-kicker">Private beta</span>
            <h2 id="invite-title">Start a simple conversation.</h2>
            <p>Copy this message and send it privately to HS Ong. He will arrange a short walkthrough before any setup.</p>
            <div className="message-box">{inviteMessage}</div>
            <button className="button modal-button" onClick={copyInvite}>
              {copied ? <CheckCircle weight="fill" /> : <Copy weight="bold" />}
              {copied ? "Message copied" : "Copy message"}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
