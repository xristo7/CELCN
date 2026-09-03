import { useEffect } from "react";
import { SiteHeader, SiteFooter } from "./SiteChrome.jsx";

const steps = [
  ["Start with your organisation", "Tell us about your centres, team, and priorities. Begin with the way you work today—not a one-size-fits-all checklist.", ["Identify your locations and key contacts", "Discuss the workflows you want to improve", "Confirm availability and the right fit"]],
  ["Plan your setup", "Map out your organisation, classrooms, and access needs before bringing your team into the platform.", ["Outline centres and classroom structure", "Agree who needs access to what", "Review data and migration requirements"]],
  ["Bring your team together", "Give directors and educators a shared starting point, with responsibilities and next steps made clear.", ["Prepare team roles and permissions", "Walk through the relevant workflows", "Agree a practical transition plan"]],
  ["Connect the everyday", "Build towards a connected view of attendance, family communication, and centre operations as features become available.", ["Keep child and family information organised", "Coordinate everyday updates and tasks", "Review what is working and what comes next"]],
];

export function HowItWorks() {
  useEffect(() => { document.title = "How it works — CELCN"; }, []);
  return <><SiteHeader /><main className="how-page">
    <section className="how-hero section"><p className="kicker light">How CELCN works</p><h1>A clearer path to<br />a connected centre.</h1><p>Understand the four steps to getting started: explore your needs, plan your setup, prepare your team, and agree your rollout.</p><div className="actions"><a className="button button-gold" href="#getting-started">Explore the journey</a><a className="button button-outline" href="/create-account">Create an account</a></div><p className="how-disclaimer">Platform preview · features and onboarding services are being developed in phases.</p></section>
    <section className="how-journey section" id="getting-started"><div className="how-section-heading"><p className="kicker">Getting started</p><h2>Your priorities.<br />A considered plan.</h2><p>Confirm the details with CELCN before making a change. Timelines, migration support, and feature availability depend on your organisation’s needs and the platform’s release stage.</p></div><div className="how-steps">{steps.map(([title,description,items],index)=><article key={title}><span className="how-step-number">0{index+1}</span><div><h3>{title}</h3><p>{description}</p><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></div></article>)}</div></section>
    <div className="how-next-step"><p>Ready to discuss your setup? Let’s start with your priorities.</p><a className="button button-teal" href="/contact">Talk to CELCN</a></div>
  </main><SiteFooter /></>;
}
