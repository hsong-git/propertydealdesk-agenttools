import { useEffect, useState } from "react";
import {
  ArrowRight,
  BellRinging,
  Car,
  CheckCircle,
  ClipboardText,
  Eye,
  MagnifyingGlass,
  ShieldCheck,
  Sparkle,
  WhatsappLogo,
  X,
} from "@phosphor-icons/react";
import { inviteMessage, whatsappMessageUrl } from "./contactConfig";

export default function App() {
  const [showInvite, setShowInvite] = useState(false);
  const [showWorkflowLightbox, setShowWorkflowLightbox] = useState(false);
  const inviteWhatsappUrl = whatsappMessageUrl(inviteMessage);

  useEffect(() => {
    if (!showWorkflowLightbox) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setShowWorkflowLightbox(false);
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showWorkflowLightbox]);

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
          <a href="#see-it">Intro video</a>
          <a href="https://property.myeviv.com/" target="_blank" rel="noreferrer">
            Inventory catalogue
          </a>
          <button className="button button-small" onClick={() => setShowInvite(true)}>
            Request a private demo
          </button>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <ShieldCheck weight="fill" /> agenttools.myeviv.com · Private beta
          </div>
          <h1>
            Agent Tools
            <br />
            <span>Match Edition</span>
          </h1>
          <p className="hero-lead">
            PropertyDealDesk Match Edition helps active co-broke agents spot possible buyer, tenant
            and listing opportunities earlier without checking every group manually.
          </p>
          <div className="hero-actions">
            <button className="button" onClick={() => setShowInvite(true)}>
              Request a private demo <ArrowRight weight="bold" />
            </button>
            <a className="text-link" href="#how-it-works">
              <Sparkle weight="fill" /> See how it helps
            </a>
          </div>
          <div className="catalogue-link">
            <span>Looking for HS Ong&apos;s listings?</span>
            <a href="https://property.myeviv.com/" target="_blank" rel="noreferrer">
              Open public inventory catalogue <ArrowRight weight="bold" />
            </a>
          </div>
          <div className="trust-row">
            <span>
              <CheckCircle weight="fill" /> Possible matches
            </span>
            <span>
              <CheckCircle weight="fill" /> Phone alerts
            </span>
            <span>
              <CheckCircle weight="fill" /> You stay in control
            </span>
          </div>
        </div>
      </section>

      <section className="problem-band">
        <div>
          <span className="section-kicker">Made for active Malaysian agents</span>
          <h2>Good opportunities should not depend on how fast you can scroll.</h2>
        </div>
        <p>
          Viewings, appointments, driving and client calls do not stop the co-broke messages.
          Match Edition helps you notice what may matter while you stay focused on your clients.
        </p>
      </section>

      <section className="section video-section" id="see-it">
        <div className="video-copy">
          <span className="section-kicker">See Match Edition in action</span>
          <h2>A short vertical intro made for agents on the phone.</h2>
          <p>
            Use this as a private walkthrough asset. It introduces the outcome without showing
            unavailable product screens or private customer details.
          </p>
          <button className="button" onClick={() => setShowInvite(true)}>
            Request a private demo <ArrowRight weight="bold" />
          </button>
        </div>
        <div className="phone-video-frame">
          <video controls preload="metadata" poster="/brand-hero.png">
            <source src="/match-edition-intro-vertical.mp4" type="video/mp4" />
            Your browser does not support this video.
          </video>
        </div>
      </section>

      <section className="section workflow-overview" aria-labelledby="workflow-overview-title">
        <div className="section-heading centered">
          <span className="section-kicker">Concept overview</span>
          <h2 id="workflow-overview-title">How Match Edition supports your daily co-broke routine.</h2>
          <p>
            The idea is simple: reduce repeated scrolling, bring possible matches forward, and let
            the agent decide what deserves a follow-up.
          </p>
        </div>
        <figure className="workflow-card">
          <button
            className="workflow-expand-button"
            type="button"
            onClick={() => setShowWorkflowLightbox(true)}
            aria-label="Open larger view of the Match Edition workflow infographic"
          >
            <img
              src="/how-match-edition-works.png"
              alt="Concept overview showing co-broke listing overload, Match Edition matching support, and phone match notifications"
            />
            <span className="workflow-expand-label">Tap to enlarge</span>
          </button>
          <figcaption>
            Concept visual for private beta explanation. Match Edition surfaces possible matches
            for review; agents still verify details before taking action.
          </figcaption>
        </figure>
      </section>

      <section className="section photo-story">
        <div className="section-heading centered">
          <span className="section-kicker">Built for the working day</span>
          <h2>For the moments when agents cannot keep watching every group.</h2>
          <p>
            Match Edition is designed around the rhythm of real agent work: moving between
            appointments, handling clients, and deciding which possible opportunity deserves
            attention.
          </p>
        </div>
        <div className="photo-grid">
          <article className="photo-card large">
            <img
              src="/agent-between-appointments.png"
              alt="Real estate agent checking phone between property appointments"
            />
            <div>
              <span>Between appointments</span>
              <h3>Stay aware while the group keeps moving.</h3>
              <p>Possible matches can be noticed earlier while you are away from the desk.</p>
            </div>
          </article>
          <article className="photo-card">
            <img
              src="/agent-viewing-client.png"
              alt="Real estate agent guiding a client during a condominium viewing"
            />
            <div>
              <span>During viewings</span>
              <h3>Focus on the client in front of you.</h3>
              <p>Use alerts as a prompt to review later, not as a replacement for your judgment.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section signal-feature" id="product-view">
        <div className="section-heading">
          <span className="section-kicker">What it helps you notice</span>
          <h2>Turn busy co-broke messages into possible next actions.</h2>
          <p>
            This private beta is explained with a simple concept view only. Actual setup and review
            flow will be shown personally during onboarding.
          </p>
        </div>
        <div className="signal-map" aria-label="Conceptual Match Edition flow">
          <article className="signal-column">
            <div className="signal-icon">
              <ClipboardText weight="duotone" />
            </div>
            <span>Incoming group posts</span>
            <h3>Noisy daily messages</h3>
            <p>
              WTB, WTR, WTS and WTL posts continue arriving while you are busy with appointments.
            </p>
          </article>
          <article className="signal-column highlight">
            <div className="signal-icon">
              <MagnifyingGlass weight="duotone" />
            </div>
            <span>Private matching support</span>
            <h3>Possible fit detected</h3>
            <p>Relevant demand and supply signals are brought forward for your review.</p>
          </article>
          <article className="signal-column">
            <div className="signal-icon">
              <BellRinging weight="duotone" />
            </div>
            <span>Phone awareness</span>
            <h3>Review earlier</h3>
            <p>You decide whether the possible opportunity deserves a follow-up.</p>
          </article>
        </div>
      </section>

      <section className="section" id="how-it-works">
        <div className="section-heading centered">
          <span className="section-kicker">A simpler daily routine</span>
          <h2>From group noise to a possible opportunity</h2>
          <p>
            Match Edition supports your judgment. It brings likely connections forward so you can
            review and act faster.
          </p>
        </div>
        <div className="steps">
          <article>
            <div className="step-icon">
              <MagnifyingGlass weight="duotone" />
            </div>
            <span>01</span>
            <h3>Messages come in</h3>
            <p>Your selected co-broke groups continue working as usual.</p>
          </article>
          <article>
            <div className="step-icon">
              <Sparkle weight="duotone" />
            </div>
            <span>02</span>
            <h3>Possible matches surface</h3>
            <p>Buyer, tenant and listing details are compared for likely fit.</p>
          </article>
          <article>
            <div className="step-icon">
              <BellRinging weight="duotone" />
            </div>
            <span>03</span>
            <h3>You get an alert</h3>
            <p>A possible opportunity can reach your phone while you are busy.</p>
          </article>
          <article>
            <div className="step-icon">
              <Eye weight="duotone" />
            </div>
            <span>04</span>
            <h3>You review and act</h3>
            <p>You check the details and decide whether the lead is worth pursuing.</p>
          </article>
        </div>
      </section>

      <section className="section product-story">
        <div className="signal-visual" aria-label="Conceptual possible match notification">
          <div className="notification-card">
            <BellRinging weight="fill" />
            <div>
              <strong>Possible match to review</strong>
              <span>Buyer requirement and listing signal may fit.</span>
            </div>
          </div>
          <div className="mini-feed">
            <div>
              <span>WTB</span>
              <p>Looking for a family home near Klang.</p>
            </div>
            <div>
              <span>WTS</span>
              <p>Owner listing available in matching area.</p>
            </div>
            <div>
              <span>Review</span>
              <p>Agent checks details before action.</p>
            </div>
          </div>
        </div>
        <div className="product-copy">
          <span className="section-kicker">Built around agent judgment</span>
          <h2>See the signal earlier, then decide what deserves action.</h2>
          <p>
            Match Edition helps you review faster without losing the context you need to make a
            professional decision.
          </p>
          <ul>
            <li>
              <ClipboardText weight="fill" />
              <div>
                <strong>Clear match queue</strong>
                <span>Review likely WTB, WTR, WTS and WTL connections.</span>
              </div>
            </li>
            <li>
              <ShieldCheck weight="fill" />
              <div>
                <strong>Your judgment comes first</strong>
                <span>Suggestions are possible matches—not guaranteed deals.</span>
              </div>
            </li>
            <li>
              <Car weight="fill" />
              <div>
                <strong>Stay aware while busy</strong>
                <span>Spend less time repeatedly checking group conversations.</span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="section beta-grid">
        <div className="beta-copy">
          <span className="section-kicker">Private beta setup</span>
          <h2>Guided from the first login.</h2>
          <p>
            This first release is deliberately personal and controlled. HS Ong will guide selected
            agents through setup and testing.
          </p>
          <div className="beta-note">
            <ShieldCheck weight="fill" />
            <span>Private support assistant—not an agency platform, CRM or mass-message tool.</span>
          </div>
        </div>
        <ol className="checklist">
          <li>
            <span>1</span>
            <div>
              <strong>Guided installation</strong>
              <p>Support-friendly setup for non-technical users.</p>
            </div>
          </li>
          <li>
            <span>2</span>
            <div>
              <strong>WhatsApp Web login</strong>
              <p>You connect your normal working session.</p>
            </div>
          </li>
          <li>
            <span>3</span>
            <div>
              <strong>Exact group selection</strong>
              <p>Selected co-broke group titles are confirmed during setup.</p>
            </div>
          </li>
          <li>
            <span>4</span>
            <div>
              <strong>Alert test</strong>
              <p>We confirm that possible-match alerts reach your phone.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="final-cta" id="private-beta">
        <div>
          <span className="section-kicker light">agenttools.myeviv.com · Limited onboarding</span>
          <h2>
            Spend less time checking.
            <br />
            Give good opportunities a better chance to find you.
          </h2>
        </div>
        <div className="final-actions">
          <button className="button button-light" onClick={() => setShowInvite(true)}>
            Request a private demo <ArrowRight weight="bold" />
          </button>
          <a
            className="button button-outline-light"
            href="https://property.myeviv.com/"
            target="_blank"
            rel="noreferrer"
          >
            View inventory catalogue
          </a>
        </div>
      </section>

      <footer>
        <img src="/propertydealsdesk-logo.png" alt="PropertyDealDesk" />
        <p>Agent Tools · Match Edition · Turn Noise Into Opportunities</p>
        <p>
          Possible matches require agent review. Availability is currently limited to selected
          private-beta users. Public listings:{" "}
          <a href="https://property.myeviv.com/" target="_blank" rel="noreferrer">
            property.myeviv.com
          </a>
        </p>
      </footer>

      {showInvite && (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={() => setShowInvite(false)}
        >
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="invite-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              aria-label="Close"
              onClick={() => setShowInvite(false)}
            >
              <X weight="bold" />
            </button>
            <div className="modal-icon">
              <BellRinging weight="fill" />
            </div>
            <span className="section-kicker">Private beta</span>
            <h2 id="invite-title">Start a simple conversation.</h2>
            <p>
              Open WhatsApp with this message prefilled. HS Ong will arrange a short walkthrough
              before any setup.
            </p>
            <div className="message-box">{inviteMessage}</div>
            <a
              className="button modal-button"
              href={inviteWhatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Message HS Ong on WhatsApp about PropertyDealDesk Match Edition"
            >
              <WhatsappLogo weight="fill" />
              Message on WhatsApp
            </a>
          </div>
        </div>
      )}

      {showWorkflowLightbox && (
        <div
          className="image-lightbox-backdrop"
          role="presentation"
          onMouseDown={() => setShowWorkflowLightbox(false)}
        >
          <div
            className="image-lightbox"
            role="dialog"
            aria-modal="true"
            aria-labelledby="workflow-lightbox-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="image-lightbox-bar">
              <div>
                <span className="section-kicker">Concept overview</span>
                <h2 id="workflow-lightbox-title">How Match Edition works</h2>
              </div>
              <button
                className="modal-close"
                type="button"
                aria-label="Close larger workflow view"
                onClick={() => setShowWorkflowLightbox(false)}
              >
                <X weight="bold" />
              </button>
            </div>
            <div className="image-lightbox-scroll">
              <img
                src="/how-match-edition-works.png"
                alt="Expanded concept overview showing co-broke listing overload, Match Edition matching support, and phone match notifications"
              />
            </div>
            <p>
              Pinch-zoom or scroll within the image if needed. Possible matches still require agent
              review before action.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
