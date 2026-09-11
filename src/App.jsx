import { useEffect, useState } from "react";
import { AccountPage } from "./AccountPage.jsx";
import { HowItWorks } from "./HowItWorks.jsx";
import { SiteHeader, SiteFooter } from "./SiteChrome.jsx";
import { ContactPage } from "./ContactPage.jsx";
import { PricingPage } from "./PricingPage.jsx";
import { AboutPage } from "./AboutPage.jsx";
import { Baby, BookOpenText, Buildings, FlowerLotus, HandHeart, Lightbulb, PuzzlePiece, ShieldCheck, Sparkle, UsersThree } from "@phosphor-icons/react";


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
  const [program, setProgram] = useState(0);
  const openDialog = () => { window.location.assign("/contact"); };
  const programs = [
    { label: "Infant care", age: "Under 18 months", title: "A gentle beginning built on trust.", text: "Responsive routines, sensory discovery, and close educator relationships give babies a calm, secure place to begin exploring their world." },
    { label: "Toddler program", age: "18 months to 2.5 years", title: "Big discoveries for growing independence.", text: "Active play, early language, and caring guidance help toddlers test new abilities while feeling safe, known, and encouraged." },
    { label: "Preschool program", age: "2.5 to 4 years", title: "Curiosity becomes confident learning.", text: "Play-led projects, friendship skills, and creative challenges prepare children for their next step without rushing childhood." },
  ];
  const faqs = [
    ["What does CELCN offer?", "CELCN brings early-learning programs, community connections, and a developing childcare management platform together in one network."],
    ["Who can connect with CELCN?", "Families, educators, centre leaders, childcare organisations, and community partners are welcome to start a conversation with us."],
    ["How do I enquire about a childcare place?", "Contact our team with your child’s age and preferred community. We’ll explain current chapter availability and the appropriate next step."],
    ["Where is CELCN currently represented?", "Our chapter planning begins in Ontario, including Hamilton and Ottawa. Availability varies, so please contact us for the latest local information."],
    ["How can my organisation become involved?", "We welcome discussions with centres and partners interested in strengthening early learning through shared knowledge, practical support, or the CELCN platform."],
  ];
  return <main>
    <section className="hero" id="home">
      <img className="hero-image" src="/assets/celcn-hero.png" alt="An educator and two children building with wooden blocks"/><div className="hero-shade"/>
      <SiteHeader overlay />
      <div className="hero-content"><p className="eyebrow">Inclusive early learning, connected</p><h1><span>Care that includes.</span><span>Learning that inspires.</span><span>Beginnings that last.</span></h1><p className="hero-copy">CELCN connects children, families, educators, and communities so every child can begin with belonging and grow with confidence.</p><div className="actions"><button className="button button-gold" onClick={openDialog}><HandHeart weight="fill" /> Connect with us</button><a className="button button-outline" href="#programs"><Baby weight="fill" /> Explore programs</a></div></div>
    </section>
    <section className="home-intro section" id="about"><p className="kicker">Nurturing tomorrow’s possibilities</p><h2>Brighter beginnings grow from care, access, and belonging.</h2><div className="home-pillars">{[
      [ShieldCheck, "01", "A future within reach", "We believe every child deserves meaningful early-learning opportunities, whatever their family’s circumstances."],
      [FlowerLotus, "02", "A place for every child", "Inclusive, welcoming environments help children and families feel seen, supported, and part of the community."],
      [UsersThree, "03", "Stronger communities", "When families and educators are connected, children gain a steadier foundation for lifelong learning and well-being."],
    ].map(([Icon,n,t,d])=><article key={t}><Icon className="section-icon" weight="duotone" /><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>

    <section className="mission-section section"><div className="mission-card"><div><p className="kicker">Our mission</p><h2>Close gaps. Open possibilities.</h2><ul><li>Make quality early learning easier to reach.</li><li>Support educators with practical connections and tools.</li><li>Help families feel informed, welcomed, and involved.</li></ul><button className="button button-gold" onClick={openDialog}>Start a conversation</button></div><img src="/assets/celcn-mission.png" alt="An educator and two children learning with colourful wooden shapes" /></div><div className="vision-card"><p className="kicker">Our vision</p><h2>Every child starts from a place of belonging.</h2><p>We see secure, joyful environments where collaborative play, imagination, and attentive care help children reach social, emotional, physical, and cognitive milestones in their own way.</p></div></section>

    <section className="home-programs section" id="programs"><div className="program-photo"><img src="/assets/celcn-programs.png" alt="A parent and child receiving a warm welcome at a childcare centre" /></div><div className="program-content"><p className="kicker">Programs shaped around childhood</p><h2>Care that grows with every new stage.</h2><p>Explore age-responsive experiences designed to protect wonder, build confidence, and support the whole child.</p><div className="program-accordion">{programs.map((item,index)=><article className={program===index?"active":""} key={item.label}><button type="button" aria-expanded={program===index} onClick={()=>setProgram(index)}><span>{item.label}</span><small>{item.age}</small></button>{program===index&&<div><h3>{item.title}</h3><p>{item.text}</p><a href="/contact">Ask about this program</a></div>}</article>)}</div></div></section>

    <section className="approach-section section"><p className="kicker">Our approach to confident growth</p><h2>Enriching days begin with the right conditions.</h2><div className="approach-grid">{[
      [ShieldCheck, "Safety first", "Calm, attentive environments give children the confidence to explore."],
      [PuzzlePiece, "Individual pathways", "Activities respond to each child’s interests, pace, strengths, and needs."],
      [UsersThree, "Learning together", "Shared play helps children practise communication, empathy, and cooperation."],
      [Sparkle, "Room to imagine", "Open-ended creative experiences turn curiosity into meaningful discovery."],
    ].map(([Icon,t,d],i)=><article key={t}><Icon className="section-icon" weight="duotone" /><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}</div><a className="button button-teal" href="/about"><BookOpenText weight="fill" /> Discover our story</a></section>

    <section className="education-section section"><div><p className="kicker light">Why early learning matters</p><h2>Today’s experiences shape tomorrow’s possibilities.</h2><p>Strong early-learning relationships help children build the skills and self-belief they carry into school, friendships, and life.</p></div><div className="education-points">{[[Lightbulb,"Thinking and communication"],[FlowerLotus,"Emotional well-being"],[UsersThree,"Confidence with others"],[BookOpenText,"A foundation for future learning"]].map(([Icon,t])=><article key={t}><Icon weight="duotone" /><strong>{t}</strong></article>)}</div><p className="education-note">Investing in childhood strengthens not only individual children, but the families and communities growing alongside them.</p></section>

    <section className="commitment-section section"><p className="kicker">Our commitment in action</p><h2>How CELCN helps make a difference.</h2><div className="commitment-grid">{[
      ["Inclusive opportunities", "We work toward early-learning experiences that welcome different needs without lowering expectations for quality."],
      ["Community partnerships", "Local relationships bring more knowledge, support, and opportunity around children and families."],
      ["Thoughtful innovation", "Modern tools can simplify administration and make more room for the human work of care."],
    ].map(([t,d],i)=><article key={t}><img src={["/assets/celcn-inclusion.png","/assets/celcn-partnerships.png","/assets/celcn-innovation.png"][i]} alt=""/><div><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></div></article>)}</div></section>

    <section className="home-chapters section" id="chapters"><div><p className="kicker">Local connections, shared purpose</p><h2>A network rooted in community.</h2><p>CELCN’s chapter planning begins in Ontario, bringing local relationships into a wider early-learning network.</p></div><div className="home-chapter-list"><article><Buildings className="section-icon" weight="duotone" /><span>Ontario</span><h3>Ottawa</h3><p>Roydon Avenue</p><small>Service availability to be confirmed.</small></article><article><Buildings className="section-icon" weight="duotone" /><span>Ontario</span><h3>Hamilton</h3><p>191 King Williams Street<br />Hamilton, ON L8R 1A7</p><a className="text-link" href="/about#hamilton-chapter">Meet the chapter directors</a></article></div></section>

    <section className="home-faq section" id="faq"><div className="faq-photo"><img src="/assets/celcn-faq.png" alt="An educator listening as a child shares a handmade butterfly" /></div><div><p className="kicker">CELCN questions, clearly answered</p><h2>Wondering where to begin?</h2><div className="faq-list">{faqs.map(([q,a])=><details key={q} name="celcn-accordion"><summary>{q}</summary><p>{a}</p></details>)}</div><button className="button button-teal" onClick={openDialog}>Ask us something</button></div></section>

    <section className="support-strip section"><p>Together, we can widen access to nurturing early learning and build stronger beginnings for children and communities.</p></section>
    <section className="home-cta section"><div><p className="kicker light">Become part of the network</p><h2>Help brighter beginnings take root.</h2><p>Whether you represent a family, centre, community organisation, or potential partner, your next conversation can help shape what CELCN becomes.</p><button className="button button-gold" onClick={openDialog}>Get involved</button></div></section>
    <SiteFooter />
  </main>;
}
