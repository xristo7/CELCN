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
      <div className="hero-content">
        <p className="eyebrow">Explore · Discover · Learn · Thrive</p>
        <h1><span>Inclusive, accessible &amp;</span><span>innovative early care</span><span>for every child.</span></h1>
        <p className="hero-copy">Nurturing tomorrow’s leaders. CELCN connects high-quality, play-based childhood education, community chapters, and modern centre tools so children can thrive across Canada.</p>
        <div className="actions">
          <button className="button button-gold" onClick={openDialog}>Get started</button>
          <a className="button button-outline" href="#programs">Explore programs</a>
        </div>
      </div>
      <a className="scroll-cue" href="#about">Discover CELCN <span>↓</span></a>
    </section>

    <section className="story section" id="about">
      <div className="story-copy">
        <p className="kicker">Nurturing Tomorrow's Leaders</p>
        <h2>Building brighter futures for every child</h2>
        <p>CELCN believes in a future where every child, regardless of socio-economic background, has access to quality early childhood education. As a dedicated community network, we provide inclusive, accessible, and innovative early learning solutions aligned with Canada’s vision for equitable early development.</p>
        <p>Through collaborative play, creative discovery, and supportive environments, we help children reach their social, emotional, and cognitive milestones with joy and confidence.</p>
        <a className="text-link" href="/about">Our mission and approach</a>
      </div>
      <figure className="story-image">
        <img src="/assets/celcn-story.png" alt="An educator helping a child with a classroom activity"/>
        <figcaption>Practical support and nurturing care for every child’s formative years.</figcaption>
      </figure>
    </section>

    <section className="programs section" id="programs">
      <p className="kicker light">Programs Offered at CELCN Chapters</p>
      <div className="program-heading">
        <h2>Thoughtful early education for every stage of growth.</h2>
        <p>From gentle first milestones to school readiness, our chapter programs provide safe, enriching environments designed around how children learn best.</p>
      </div>
      <div className="program-list">
        <article>
          <span>01</span>
          <div>
            <h3>Infant Care Program</h3>
            <small className="program-age">Under 18 months</small>
          </div>
          <p>A safe, warm, and responsive environment tailored to support your baby’s first stages of growth. Personalized care, sensory exploration, and loving attention build foundational trust and security.</p>
        </article>
        <article>
          <span>02</span>
          <div>
            <h3>Toddler Program</h3>
            <small className="program-age">18 months – 2.5 years</small>
          </div>
          <p>Designed to spark curiosity and encourage budding independence. Hands-on activities, guided exploration, and joyful social interactions build confidence, coordination, and creativity.</p>
        </article>
        <article>
          <span>03</span>
          <div>
            <h3>Preschool Program</h3>
            <small className="program-age">2.5 – 4 years old</small>
          </div>
          <p>Preparing children for a lifetime of inspired learning. A harmonious blend of structured activities and play-based inquiry fosters early literacy, critical thinking, and social-emotional skills.</p>
        </article>
        <article>
          <span>04</span>
          <div>
            <h3>Integrated Centre Support</h3>
            <small className="program-age">For educators &amp; directors</small>
          </div>
          <p>Modern digital tools that keep daily attendance, family updates, classroom ratios, and developmental milestones effortlessly aligned—giving educators more time for meaningful care.</p>
        </article>
      </div>
    </section>

    <section className="platform section" id="platform">
      <div className="platform-copy">
        <p className="kicker">Innovation in Learning &amp; Management</p>
        <h2>One calm place to run your centre.</h2>
        <p>See what needs attention, keep families connected to their child’s day, and give educators time back—all while keeping the human connection at the heart of childcare.</p>
        <button className="button button-teal" onClick={openDialog}>See CELCN in action</button>
      </div>
      <DashboardPreview />
    </section>

    <ClientSections onEnquire={openDialog} />

    <section className="centres section" id="centres">
      <p className="kicker light">Join Us in Shaping the Future</p>
      <h2>Ready to build stronger beginnings together?</h2>
      <p>Every child deserves the chance to thrive. Whether you are looking to enroll your child, partner with us, or bring CELCN into your centre, let’s build a brighter future—one child at a time.</p>
      <button className="button button-gold" onClick={openDialog}>Get in touch</button>
    </section>

    <SiteFooter />
  </main>;
}
