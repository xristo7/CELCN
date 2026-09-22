import { useEffect } from "react";
import { SiteHeader, SiteFooter } from "./SiteChrome.jsx";

const steps = [
  ["Connect & assess your needs", "Tell us about your community, child age groups, and priorities. Whether enrolling a child, joining as an educator, or partnering as a centre, we begin with your local context.", ["Identify your community and priority age groups", "Discuss family communication and program goals", "Confirm chapter availability and the right fit"]],
  ["Design your learning spaces", "Structure your classrooms, educator ratios, and routines around how children learn best—from infant sensory care to preschool readiness.", ["Organise infant, toddler, and preschool rooms", "Establish educator access and safety workflows", "Set up child records and family contact profiles"]],
  ["Empower your educators", "Provide staff with calm, intuitive tools for attendance, daily observation logs, and ratio tracking, freeing up time for hands-on care.", ["Prepare team roles, schedules, and permissions", "Walk through attendance and daily update tools", "Establish a caring, supportive transition plan"]],
  ["Engage families & nurture growth", "Foster strong bonds between home and centre through transparent daily updates, developmental milestones, and responsive communication.", ["Share daily care moments and learning highlights", "Keep parents informed and engaged every day", "Track developmental progress and celebrate milestones"]],
];

export function HowItWorks() {
  useEffect(() => { document.title = "How it works — CELCN"; }, []);
  return <><SiteHeader /><main className="how-page">
    <section className="how-hero section">
      <p className="kicker light">How CELCN Works</p>
      <h1>A clearer path to<br />inclusive, connected care.</h1>
      <p>Explore our collaborative four-step journey: discover your community’s needs, structure your learning spaces, equip your educators, and connect families to everyday moments.</p>
      <div className="actions">
        <a className="button button-gold" href="#getting-started">Explore the journey</a>
        <a className="button button-outline" href="/chapters">View our chapters</a>
      </div>
      <p className="how-disclaimer">Platform preview · features and onboarding services are being developed in phases.</p>
    </section>
    <section className="how-journey section" id="getting-started">
      <div className="how-section-heading">
        <p className="kicker">Getting started</p>
        <h2>Your community.<br />A considered plan.</h2>
        <p>Confirm the details with CELCN before making a change. Timelines, migration support, and feature availability depend on your organisation’s needs and the platform’s release stage.</p>
      </div>
      <div className="how-steps">
        {steps.map(([title,description,items],index)=><article key={title}><span className="how-step-number">0{index+1}</span><div><h3>{title}</h3><p>{description}</p><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></div></article>)}
      </div>
    </section>
    <div className="how-next-step">
      <p>Ready to discuss your centre or chapter setup? Let’s talk about your community’s priorities.</p>
      <a className="button button-teal" href="/contact">Talk to CELCN</a>
    </div>
  </main><SiteFooter /></>;
}
