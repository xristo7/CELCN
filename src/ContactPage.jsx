import { useEffect, useRef, useState } from "react";
import { SiteHeader, SiteFooter } from "./SiteChrome.jsx";

export function ContactPage() {
  const [complete, setComplete] = useState(false);
  const result = useRef(null);
  useEffect(() => { document.title = "Contact us — CELCN"; }, []);
  useEffect(() => { if(complete) result.current?.focus(); }, [complete]);
  return <><SiteHeader /><main className="contact-page section">
    <div className="contact-intro">
      <p className="kicker">Get in Touch</p>
      <h1>Let’s talk about<br />brighter beginnings.</h1>
      <p>Have questions about child enrolment in our chapter programs, bringing CELCN into your centre, or joining our community network? Tell us what you have in mind.</p>
      <div className="contact-guidance">
        <h2>A welcoming place to start</h2>
        <p>Whether you’re a parent exploring care, an educator, or a childcare leader, share where you’re based and what you’d like to discuss. There’s no need to include sensitive records.</p>
        <a className="text-link" href="/how-it-works">See how getting started works</a>
      </div>
    </div>
    <section className="contact-form-panel" aria-labelledby="contact-form-title">
      {complete ? <div className="contact-result" ref={result} tabIndex={-1} role="status"><p className="kicker">Preview complete</p><h2 id="contact-form-title">Your message is ready for the next step.</h2><p>This is a demonstration form. No message has been sent or saved. A delivery service needs to be connected before enquiries can reach CELCN.</p><button className="button button-teal" onClick={() => setComplete(false)}>Back to the form</button></div> : <>
        <h2 id="contact-form-title">What can we help with?</h2><p className="contact-preview">Preview form — please use sample details. Nothing is sent or stored.</p>
        <form onSubmit={event => { event.preventDefault(); event.currentTarget.reset(); setComplete(true); }}>
          <div className="contact-field-row"><label>Full name<input name="name" autoComplete="name" required maxLength={120} /></label><label>Email address<input name="email" type="email" autoComplete="email" required maxLength={254} /></label></div>
          <label>Organisation or community <span className="field-optional">(optional)</span><input name="organisation" autoComplete="organization" maxLength={180} /></label>
          <label>I’d like to discuss<select name="topic" required defaultValue={new URLSearchParams(window.location.search).get("topic") === "pricing" ? "pricing" : ""}><option value="" disabled>Select a topic</option><option value="enrolment">Child enrolment &amp; program availability</option><option value="chapters">Opening or affiliating a CELCN Chapter</option><option value="pricing">Pricing and subscriptions</option><option value="operations">Centre management platform &amp; operations</option><option value="partnerships">Community partnerships &amp; initiatives</option><option value="general">General question</option></select></label>
          <label>Your message<textarea name="message" rows={5} required maxLength={3000} aria-describedby="message-help" /></label><small id="message-help">Please don’t include child records, passwords, or other sensitive information.</small>
          <button className="button button-gold" type="submit">Preview enquiry</button>
        </form>
      </>}
    </section>
  </main><SiteFooter /></>;
}
