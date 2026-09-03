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
      <img className="hero-image" src="/assets/celcn-hero.png" alt="An educator and two children building with wooden blocks"/><div className="hero-shade"/>
      <SiteHeader overlay />
      <div className="hero-content"><p className="eyebrow">Canadian early learning, connected</p><h1><span>Every child</span><span>deserves a</span><span>strong beginning.</span></h1><p className="hero-copy">CELCN connects quality early learning, community support, and practical tools so children can thrive—at home, in centres, and in communities across Canada.</p><div className="actions"><button className="button button-gold" onClick={openDialog}>Get started</button><a className="button button-outline" href="#platform">Explore the platform</a></div></div>
      <a className="scroll-cue" href="#about">Discover CELCN <span>↓</span></a>
    </section>
    <section className="story section" id="about"><div className="story-copy"><p className="kicker">A national network, grounded locally</p><h2>A stronger network for brighter beginnings</h2><p>CELCN brings people, programs, and knowledge together to support early learning where it matters most. We help centres spend less time navigating disconnected systems and more time creating exceptional days for children.</p><a className="text-link" href="#centres">How the network works</a></div><figure className="story-image"><img src="/assets/celcn-story.png" alt="An educator helping a child with a classroom activity"/><figcaption>Practical support for the people who make early learning possible.</figcaption></figure></section>
    <section className="programs section" id="programs"><p className="kicker light">One connected community</p><div className="program-heading"><h2>Support for every part of the early learning journey.</h2><p>From family connection to centre operations, CELCN brings the essentials into one clear, trusted experience.</p></div><div className="program-list"><article><span>01</span><h3>Learn</h3><p>Programs and practical resources shaped for real early-learning environments.</p></article><article><span>02</span><h3>Connect</h3><p>A national community where educators, families, and centre leaders grow together.</p></article><article><span>03</span><h3>Operate</h3><p>Simple tools for enrolment, attendance, billing, ratios, and everyday communication.</p></article></div></section>
    <section className="platform section" id="platform"><div className="platform-copy"><p className="kicker">Built around the rhythm of your day</p><h2>One calm place to run your centre.</h2><p>See what needs attention, keep families informed, and give your team back time—all without losing the human connection at the heart of childcare.</p><button className="button button-teal" onClick={openDialog}>See CELCN in action</button></div><DashboardPreview /></section>
    <ClientSections onEnquire={openDialog} />
    <section className="centres section" id="centres"><p className="kicker light">For childcare centres</p><h2>Ready for a simpler, more connected day?</h2><p>Tell us about your centre and we’ll show you how CELCN can support your team, families, and community.</p><button className="button button-gold" onClick={openDialog}>Get started</button></section>
    <SiteFooter />
  </main>;
}
