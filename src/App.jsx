import { useEffect, useState } from "react";
import { HowItWorks } from "./HowItWorks.jsx";
import { SiteHeader, SiteFooter } from "./SiteChrome.jsx";
import { ContactPage } from "./ContactPage.jsx";
import { AboutPage } from "./AboutPage.jsx";
import { AdmissionsPage } from "./AdmissionsPage.jsx";
import { ChaptersPage } from "./ChaptersPage.jsx";
import { ParentHandbookPage } from "./ParentHandbookPage.jsx";
import { ProgramsPage } from "./ProgramsPage.jsx";
import { Baby, BookOpenText, FlowerLotus, HandHeart, Lightbulb, MapPin, PuzzlePiece, ShieldCheck, Sparkle, UsersThree } from "@phosphor-icons/react";


export function App() {
  useEffect(() => {
    if (!window.location.hash) return;
    const frame = requestAnimationFrame(() => document.getElementById(window.location.hash.slice(1))?.scrollIntoView({ behavior: "instant" }));
    return () => cancelAnimationFrame(frame);
  }, []);
  const path = window.location.pathname.replace(/\/$/, "");
  if (path === "/how-it-works") return <HowItWorks />;
  if (path === "/about" || path === "/about-us") return <AboutPage />;
  if (path === "/programs") return <ProgramsPage />;
  if (path === "/programs/infant" || path === "/infant-care-program") return <ProgramsPage selected="infant" />;
  if (path === "/programs/toddler" || path === "/toddler-program") return <ProgramsPage selected="toddler" />;
  if (path === "/programs/preschool" || path === "/preschool-program") return <ProgramsPage selected="preschool" />;
  if (path === "/parent-handbook") return <ParentHandbookPage />;
  if (path === "/admissions" || path === "/admission-form") return <AdmissionsPage />;
  if (path === "/chapters") return <ChaptersPage />;
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
    ["What age groups does the centre welcome?", "CELCN focuses on infant, toddler, and preschool care. Availability can change by room, so please contact us with your child's age and preferred start date."],
    ["Where is the daycare located?", "Our centre is at 191 King William Street, Hamilton, Ontario L8R 1A7."],
    ["How do I ask about enrolment?", "Send us a message or call the centre. We will ask about your child, schedule needs, and the program room that may be the best fit."],
    ["What makes CELCN different?", "We pair warm, responsive care with inclusive early-learning experiences, family communication, and routines that help children feel safe and ready to explore."],
    ["Can I visit before enrolling?", "Yes. Reach out to arrange a conversation about availability, program fit, and the next practical step for your family."],
  ];
  return <main>
    <section className="hero" id="home">
      <img className="hero-image" src="/assets/celcn-hero.png" alt="An educator and two children building with wooden blocks"/><div className="hero-shade"/>
      <SiteHeader overlay />
      <div className="hero-content"><p className="eyebrow">Hamilton daycare and early learning</p><h1><span>Inclusive childcare</span><span>for bright,</span><span>confident beginnings.</span></h1><p className="hero-copy">CELCN is a welcoming early learning and care centre where infants, toddlers, and preschoolers feel safe, included, and ready to discover.</p><div className="actions"><button className="button button-gold" onClick={openDialog}><HandHeart weight="fill" /> Ask about enrolment</button><a className="button button-outline" href="#programs"><Baby weight="fill" /> Explore programs</a></div></div>
    </section>
    <section className="home-intro section" id="about"><p className="kicker">Nurturing tomorrow’s possibilities</p><h2>Brighter beginnings grow from care, access, and belonging.</h2><div className="home-pillars">{[
      [ShieldCheck, "01", "Safety and belonging", "Children learn best when they feel known, protected, and emotionally secure."],
      [FlowerLotus, "02", "Inclusive care", "Our rooms are built around patience, respect, and support for different stages, needs, and personalities."],
      [UsersThree, "03", "Family partnership", "We keep families close to the everyday moments that shape confidence, trust, and growth."],
    ].map(([Icon,n,t,d])=><article key={t}><Icon className="section-icon" weight="duotone" /><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>

    <section className="mission-section section"><div className="mission-card"><div><p className="kicker">Our mission</p><h2>A nurturing place for every child to thrive.</h2><ul><li>Offer safe, dependable care for Hamilton families.</li><li>Support infants, toddlers, and preschoolers through play-based learning.</li><li>Build strong relationships between children, educators, and parents.</li></ul><button className="button button-gold" onClick={openDialog}>Start an enrolment enquiry</button></div><img src="/assets/celcn-mission.png" alt="An educator and two children learning with colourful wooden shapes" /></div><div className="vision-card"><p className="kicker">Our centre</p><h2>191 King William Street, Hamilton.</h2><p>Our daycare is designed as a calm, joyful everyday environment where children can practise independence, friendship, language, movement, and imagination with caring adults nearby.</p><a className="text-link" href="/contact">Plan a visit</a></div></section>

    <section className="home-programs section" id="programs"><div className="program-photo"><img src="/assets/celcn-programs.png" alt="A parent and child receiving a warm welcome at a childcare centre" /></div><div className="program-content"><p className="kicker">Programs shaped around childhood</p><h2>Care that grows with every new stage.</h2><p>Explore age-responsive experiences designed to protect wonder, build confidence, and support the whole child.</p><div className="program-accordion">{programs.map((item,index)=><article className={program===index?"active":""} key={item.label}><button type="button" aria-expanded={program===index} onClick={()=>setProgram(index)}><span>{item.label}</span><small>{item.age}</small></button>{program===index&&<div><h3>{item.title}</h3><p>{item.text}</p><a href={["/programs/infant","/programs/toddler","/programs/preschool"][index]}>Learn more</a></div>}</article>)}</div><a className="button button-teal" href="/programs">View all programs</a></div></section>

    <section className="approach-section section"><p className="kicker">Our approach to confident growth</p><h2>Enriching days begin with the right conditions.</h2><div className="approach-grid">{[
      [ShieldCheck, "Safety first", "Calm, attentive environments give children the confidence to explore."],
      [PuzzlePiece, "Individual pathways", "Activities respond to each child’s interests, pace, strengths, and needs."],
      [UsersThree, "Learning together", "Shared play helps children practise communication, empathy, and cooperation."],
      [Sparkle, "Room to imagine", "Open-ended creative experiences turn curiosity into meaningful discovery."],
    ].map(([Icon,t,d],i)=><article key={t}><Icon className="section-icon" weight="duotone" /><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}</div><a className="button button-teal" href="/about"><BookOpenText weight="fill" /> Discover our story</a></section>

    <section className="education-section section"><div><p className="kicker light">Why early learning matters</p><h2>Today’s experiences shape tomorrow’s possibilities.</h2><p>Strong early-learning relationships help children build the skills and self-belief they carry into school, friendships, and life.</p></div><div className="education-points">{[[Lightbulb,"Thinking and communication"],[FlowerLotus,"Emotional well-being"],[UsersThree,"Confidence with others"],[BookOpenText,"A foundation for future learning"]].map(([Icon,t])=><article key={t}><Icon weight="duotone" /><strong>{t}</strong></article>)}</div><p className="education-note">Investing in childhood strengthens not only individual children, but the families and communities growing alongside them.</p></section>

    <section className="commitment-section section"><p className="kicker">Our commitment in action</p><h2>How CELCN helps make a difference.</h2><div className="commitment-grid">{[
      ["Welcoming classrooms", "Children are encouraged to participate, communicate, and grow from the stage they are in."],
      ["Caring routines", "Predictable days, gentle transitions, and attentive supervision help children feel grounded."],
      ["Joyful discovery", "Creative play, stories, music, movement, and hands-on activities make learning feel alive."],
    ].map(([t,d],i)=><article key={t}><img src={["/assets/celcn-inclusion.png","/assets/celcn-partnerships.png","/assets/celcn-innovation.png"][i]} alt=""/><div><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></div></article>)}</div></section>

    <section className="home-chapters section" id="location"><div><p className="kicker">Visit our centre</p><h2>Rooted in downtown Hamilton.</h2><p>Families can find CELCN at 191 King William Street, Hamilton, Ontario L8R 1A7. Ask us about room availability, age groups, and the best next step for your child.</p><a className="button button-teal" href="/chapters"><MapPin weight="fill" /> View chapters</a></div><div className="home-chapter-list"><article><MapPin className="section-icon" weight="duotone" /><span>Address</span><h3>Hamilton</h3><p>191 King William Street<br />Hamilton, ON L8R 1A7</p><a className="text-link" href="/chapters#hamilton-chapter">Meet the Hamilton chapter</a></article><article><HandHeart className="section-icon" weight="duotone" /><span>Families</span><h3>Enrolment</h3><p>Tell us your child’s age, care needs, and preferred start date so we can guide you clearly.</p><a className="text-link" href="/admissions">Start an enquiry</a></article></div></section>

    <section className="home-faq section" id="faq"><div className="faq-photo"><img src="/assets/celcn-faq.png" alt="An educator listening as a child shares a handmade butterfly" /></div><div><p className="kicker">CELCN questions, clearly answered</p><h2>Wondering where to begin?</h2><div className="faq-list">{faqs.map(([q,a])=><details key={q} name="celcn-accordion"><summary>{q}</summary><p>{a}</p></details>)}</div><button className="button button-teal" onClick={openDialog}>Ask us something</button></div></section>

    <section className="support-strip section"><p>Every day is a chance to help children feel safe, curious, capable, and loved.</p></section>
    <section className="home-cta section"><div><p className="kicker light">Ready to begin?</p><h2>Let’s talk about care for your child.</h2><p>Share your child’s age, preferred schedule, and any questions you have. We’ll help you understand availability and next steps at the centre.</p><button className="button button-gold" onClick={openDialog}>Contact CELCN</button></div></section>
    <SiteFooter />
  </main>;
}
