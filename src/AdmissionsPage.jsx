import { useEffect, useRef, useState } from "react";
import { CalendarCheck, ClipboardText, EnvelopeSimple, HandHeart, Phone, UsersThree } from "@phosphor-icons/react";
import { SiteHeader, SiteFooter } from "./SiteChrome.jsx";

const steps = [
  ["Send an enquiry", "Tell us your child's age, preferred start date, schedule needs, and any questions you want answered."],
  ["Talk through fit", "We discuss the right program room, availability, waitlist timing, and what your family needs to feel ready."],
  ["Prepare details", "When a space is available, we guide you through forms, emergency contacts, routines, and required family information."],
  ["Begin with care", "We support your child's first days with familiar routines, gentle transitions, and open communication."],
];

export function AdmissionsPage() {
  const [complete, setComplete] = useState(false);
  const result = useRef(null);
  useEffect(() => { document.title = "Admissions - CELCN"; }, []);
  useEffect(() => { if (complete) result.current?.focus(); }, [complete]);
  return <><SiteHeader /><main className="admissions-page">
    <section className="page-hero admissions-hero section">
      <p className="kicker light">Admissions</p>
      <h1>Start your childcare enquiry with clarity.</h1>
      <p>Use this page to understand the next steps for infant, toddler, or preschool care at CELCN Hamilton.</p>
      <div className="actions">
        <a className="button button-gold" href="#admissions-form"><ClipboardText weight="fill" /> Start enquiry</a>
        <a className="button button-outline" href="/parent-handbook">Read parent handbook</a>
      </div>
    </section>
    <section className="admissions-steps section">
      <div>
        <p className="kicker">How admissions works</p>
        <h2>A simple path from first question to first day.</h2>
      </div>
      <div className="admissions-step-list">
        {steps.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </section>
    <section className="admissions-checklist section">
      <div>
        <p className="kicker light">Before you enquire</p>
        <h2>Helpful details to have nearby.</h2>
      </div>
      <ul>
        <li>Your child's full name and date of birth</li>
        <li>Preferred start date and schedule needs</li>
        <li>Program of interest: infant, toddler, or preschool</li>
        <li>Parent or guardian contact information</li>
        <li>Any routines, allergies, or support needs you want to discuss</li>
      </ul>
    </section>
    <section className="admissions-form-section section" id="admissions-form">
      <div className="admissions-contact-card">
        <p className="kicker">Centre contact</p>
        <h2>CELCN Hamilton</h2>
        <p>191 King William Street<br />Hamilton, ON L8R 1A7</p>
        <a href="mailto:canadaearlylearning.kingwilliams@mail.com"><EnvelopeSimple weight="duotone" /> canadaearlylearning.kingwilliams@mail.com</a>
        <a href="tel:+14377273420"><Phone weight="duotone" /> 437 727 3420</a>
      </div>
      <section className="contact-form-panel" aria-labelledby="admissions-form-title">
        {complete ? <div className="contact-result" ref={result} tabIndex={-1} role="status"><p className="kicker">Preview complete</p><h2 id="admissions-form-title">Your admissions enquiry is ready.</h2><p>This preview does not send or save information yet. Please contact the centre directly until form delivery is connected.</p><button className="button button-teal" onClick={() => setComplete(false)}>Back to form</button></div> : <>
          <h2 id="admissions-form-title">Admissions enquiry</h2>
          <p className="contact-preview">Preview form - nothing is sent or stored.</p>
          <form onSubmit={event => { event.preventDefault(); event.currentTarget.reset(); setComplete(true); }}>
            <div className="contact-field-row"><label>Parent or guardian name<input name="guardian-name" autoComplete="name" required maxLength={120} /></label><label>Email address<input name="email" type="email" autoComplete="email" required maxLength={254} /></label></div>
            <div className="contact-field-row"><label>Phone number<input name="phone" type="tel" autoComplete="tel" required maxLength={40} /></label><label>Child age<input name="child-age" required maxLength={80} /></label></div>
            <label>Program of interest<select name="program" required defaultValue=""><option value="" disabled>Select a program</option><option value="infant">Infant care</option><option value="toddler">Toddler program</option><option value="preschool">Preschool program</option><option value="unsure">I am not sure yet</option></select></label>
            <label>Preferred start date or schedule needs<textarea name="message" rows={5} required maxLength={3000} aria-describedby="admissions-help" /></label>
            <small id="admissions-help">Please do not include confidential medical records in this preview form.</small>
            <button className="button button-gold" type="submit"><HandHeart weight="fill" /> Preview enquiry</button>
          </form>
        </>}
      </section>
    </section>
    <section className="programs-cta section">
      <div><p className="kicker light">Need help deciding?</p><h2>We can talk through the right room for your child.</h2></div>
      <div className="mini-contact-row"><span><CalendarCheck weight="duotone" /> Centre visit conversations</span><span><UsersThree weight="duotone" /> Family-first guidance</span></div>
    </section>
  </main><SiteFooter /></>;
}
