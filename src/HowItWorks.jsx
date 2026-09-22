import { useEffect } from "react";
import { SiteHeader, SiteFooter } from "./SiteChrome.jsx";

const steps = [
  ["Start with your family", "Tell us about your child’s age, routine, schedule needs, and what matters most to you in a childcare setting.", ["Share your preferred start date", "Ask about the right age group", "Let us know any care priorities"]],
  ["Talk through availability", "We review the program room that may fit your child and explain current openings, waitlist details, or timing.", ["Confirm infant, toddler, or preschool fit", "Discuss hours and transition needs", "Answer practical questions clearly"]],
  ["Plan a warm transition", "When a space is available, we help your child ease into the centre with familiar routines and thoughtful communication.", ["Prepare forms and family details", "Introduce routines and expectations", "Support your child’s first days"]],
  ["Grow together", "Once enrolled, we focus on safe routines, play-based learning, and regular family communication as your child develops.", ["Share care and learning highlights", "Celebrate milestones", "Keep families connected to the day"]],
];

export function HowItWorks() {
  useEffect(() => { document.title = "How it works — CELCN"; }, []);
  return <><SiteHeader /><main className="how-page">
    <section className="how-hero section">
      <p className="kicker light">How CELCN Works</p>
      <h1>A calm path into<br />childcare that feels known.</h1>
      <p>From your first enquiry to your child’s first days, we keep the process clear, personal, and centred on what helps children feel secure.</p>
      <div className="actions">
        <a className="button button-gold" href="#getting-started">Explore the journey</a>
        <a className="button button-outline" href="/contact">Ask about enrolment</a>
      </div>
      <p className="how-disclaimer">Hamilton daycare centre · infant, toddler, and preschool care.</p>
    </section>
    <section className="how-journey section" id="getting-started">
      <div className="how-section-heading">
        <p className="kicker">Getting started</p>
        <h2>Your child.<br />A thoughtful beginning.</h2>
        <p>We’ll help you understand the right program stage, what information to prepare, and how the transition into care can feel steady for your family.</p>
      </div>
      <div className="how-steps">
        {steps.map(([title,description,items],index)=><article key={title}><span className="how-step-number">0{index+1}</span><div><h3>{title}</h3><p>{description}</p><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></div></article>)}
      </div>
    </section>
    <div className="how-next-step">
      <p>Ready to ask about care at 191 King William Street? We’d be happy to hear from you.</p>
      <a className="button button-teal" href="/contact">Talk to CELCN</a>
    </div>
  </main><SiteFooter /></>;
}
