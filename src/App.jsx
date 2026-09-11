import { useEffect } from "react";
import { ClientSections } from "./ClientSections.jsx";
import { DashboardPreview } from "./DashboardPreview.jsx";
import { AccountPage } from "./AccountPage.jsx";
import { HowItWorks } from "./HowItWorks.jsx";
import { SiteHeader, SiteFooter } from "./SiteChrome.jsx";
import { ContactPage } from "./ContactPage.jsx";
import { PricingPage } from "./PricingPage.jsx";
import { AboutPage } from "./AboutPage.jsx";

export function App() {
  useEffect(() => {
    if (!window.location.hash) return;
    const frame = requestAnimationFrame(() => document.getElementById(window.location.hash.slice(1))?.scrollIntoView({ behavior: "instant" }));
    return () => cancelAnimationFrame(frame);
  }, []);
  const path = window.location.pathname.replace(/\/$/, "");
  if (path === "/login") return <AccountPage />;
  if (path === "/create-account") return <AccountPage create />;
  if (path === "/how-it-works") return <HowItWorks />;
  if (path === "/pricing") return <PricingPage />;
  if (path === "/about" || path === "/about-us") return <AboutPage />;
  if (path === "/contact" || path === "/contact-us") return <ContactPage />;
  return <LandingPage />;
}

function LandingPage() {
  const openDialog = () => { window.location.assign("/contact"); };
  return <main>
    <section className="hero" id="home">
      <img className="hero-image" src="/assets/celcn-hero.png" alt="An educator and two children building with wooden blocks" />
      <div className="hero-shade" />
      <SiteHeader overlay />
      <div className="hero-content">
        <p className="eyebrow">Explore · Discover · Learn · Thrive</p>
        <h1><span>Stronger beginnings.</span><span>Brighter futures.</span><span>For every child.</span></h1>
        <p className="hero-copy">CELCN brings inclusive early learning, nurturing childcare, community leadership, and thoughtful centre support together so children and families can flourish.</p>
        <div className="actions">
          <button className="button button-gold" onClick={openDialog}>Contact us</button>
          <a className="button button-outline" href="#chapters">Explore chapters</a>
        </div>
      </div>
      <a className="scroll-cue" href="#about">Discover CELCN <span>↓</span></a>
    </section>

    <section className="story section" id="about">
      <div className="story-copy">
        <p className="kicker">Nurturing Tomorrow's Leaders</p>
        <h2>Creating stronger foundations for every child.</h2>
        <p>CELCN believes every child should have access to high-quality early childhood education, regardless of background or circumstance. We create welcoming learning environments that support children, empower families, and strengthen the communities around them.</p>
        <p>Our approach blends responsive care, collaborative play, imaginative discovery, and age-appropriate learning so children can grow socially, emotionally, physically, and cognitively with confidence.</p>
        <a className="text-link" href="/about">Learn about CELCN</a>
      </div>
      <figure className="story-image">
        <img src="/assets/celcn-story.png" alt="An educator helping a child with a classroom activity" />
        <figcaption>Thoughtful care and meaningful learning throughout the formative years.</figcaption>
      </figure>
    </section>

    <section className="client-benefits section" aria-labelledby="foundation-title">
      <p className="kicker">What Guides Our Work</p>
      <h2 id="foundation-title">A clear commitment to children, families, and communities.</h2>
      <div className="benefit-columns">
        <article>
          <span className="section-number">01 / Children's Futures</span>
          <h3>Opportunity from the very beginning.</h3>
          <p>We work toward a future where every child can benefit from quality early learning and the secure foundation it creates for later life.</p>
        </article>
        <article>
          <span className="section-number">02 / Inclusive Access</span>
          <h3>Early learning that welcomes every family.</h3>
          <p>Our network is shaped around accessible, inclusive care that respects the needs, circumstances, and diversity of the families we serve.</p>
        </article>
        <article>
          <span className="section-number">03 / Community Growth</span>
          <h3>Childcare that strengthens more than one child.</h3>
          <p>By supporting families, educators, and local partners together, quality early education becomes a stronger foundation for the wider community.</p>
        </article>
      </div>
    </section>

    <section className="workflow-section section" aria-labelledby="mission-title">
      <div className="section-intro">
        <div>
          <p className="kicker">Our Mission</p>
          <h2 id="mission-title">Equal opportunity begins with meaningful early learning.</h2>
        </div>
        <p>CELCN works to widen access to quality childcare, support healthy development, and build stronger communities through inclusive early learning.</p>
      </div>
      <div className="workflow-panel">
        <div>
          <h3>What our mission looks like in practice.</h3>
          <ul>
            <li>Help bridge gaps in access to quality early childhood education.</li>
            <li>Create welcoming childcare environments that families can reach and trust.</li>
            <li>Support community growth through education, collaboration, and local leadership.</li>
          </ul>
          <a className="text-link" href="/about">Our story and leadership</a>
        </div>
        <div className="workflow-example">
          <p className="kicker">Our Vision</p>
          <p>We envision nurturing, secure places where children are free to explore, imagine, collaborate, and grow. Through purposeful activities and responsive care, each child is supported toward important social, emotional, cognitive, and physical milestones.</p>
        </div>
      </div>
    </section>

    <section className="programs section" id="programs">
      <p className="kicker light">Programs Offered at CELCN Chapters</p>
      <div className="program-heading">
        <h2>Purposeful care for each stage of early childhood.</h2>
        <p>Our chapter programs combine safe care, age-responsive learning, creativity, and play to support children through their earliest developmental stages.</p>
      </div>
      <div className="program-list">
        <article>
          <span>01</span>
          <div><h3>Infant Care Program</h3><small className="program-age">Under 18 months</small></div>
          <p>Warm, responsive care supports a baby’s earliest growth through sensory discovery, close relationships, personalized routines, and a secure environment for first exploration.</p>
        </article>
        <article>
          <span>02</span>
          <div><h3>Toddler Program</h3><small className="program-age">18 months – 2.5 years</small></div>
          <p>Hands-on discovery, social play, movement, and guided activities help toddlers develop independence, confidence, language, coordination, and curiosity.</p>
        </article>
        <article>
          <span>03</span>
          <div><h3>Preschool Program</h3><small className="program-age">2.5 – 4 years old</small></div>
          <p>Play-based learning and thoughtful structure prepare children for the next stage through early literacy, communication, problem solving, imagination, and social-emotional growth.</p>
        </article>
      </div>
    </section>

    <ClientSections onEnquire={openDialog} />

    <section className="platform section" id="platform">
      <div className="platform-copy">
        <p className="kicker">Supporting Better-Connected Centres</p>
        <h2>Modern tools that protect time for care.</h2>
        <p>CELCN’s digital platform is being built to connect enrolment, attendance, family communication, centre administration, and daily operations in one calm workspace—helping educators spend less time chasing information and more time supporting children.</p>
        <button className="button button-teal" onClick={openDialog}>Explore the CELCN platform</button>
      </div>
      <DashboardPreview />
    </section>

    <section className="centres section" id="get-involved">
      <p className="kicker light">Get Involved</p>
      <h2>Help shape brighter futures with CELCN.</h2>
      <p>Whether you are a parent exploring care, an educator, a community partner, or a childcare operator interested in joining the network, there is a place for you in what we are building.</p>
      <button className="button button-gold" onClick={openDialog}>Start a conversation</button>
    </section>

    <SiteFooter />
  </main>;
}
