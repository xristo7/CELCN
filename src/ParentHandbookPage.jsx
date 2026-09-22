import { useEffect } from "react";
import { Baby, BowlFood, ChatCircleDots, FirstAidKit, FlowerLotus, ShieldCheck } from "@phosphor-icons/react";
import { SiteHeader, SiteFooter } from "./SiteChrome.jsx";

const handbookSections = [
  ["Safe arrival and pick-up", "Children must be signed in and out by an authorized adult. Let the centre know if someone different will pick up your child."],
  ["What to bring", "Families should label personal items clearly, including extra clothing, comfort items, diapers or wipes where needed, and weather-appropriate outdoor gear."],
  ["Meals and nutrition", "We will discuss food routines, allergies, and nutrition expectations with families before care begins."],
  ["Rest and comfort", "Rest routines are handled with patience and respect for each child's stage, cues, and comfort needs."],
  ["Health and illness", "Please keep children home when they are unwell and contact the centre about symptoms, medication questions, or return-to-care timing."],
  ["Family communication", "Families are encouraged to share changes in routine, developmental updates, or care questions so educators can support the child well."],
];

export function ParentHandbookPage() {
  useEffect(() => { document.title = "Parent handbook - CELCN"; }, []);
  return <><SiteHeader /><main className="handbook-page">
    <section className="page-hero handbook-hero section">
      <p className="kicker light">Parent handbook</p>
      <h1>Helpful guidance before your child starts.</h1>
      <p>This page gives families a practical preview of expectations, routines, and conversations that help children settle into care with confidence.</p>
      <div className="actions">
        <a className="button button-gold" href="/admissions">Start admissions enquiry</a>
        <a className="button button-outline" href="/contact">Ask a question</a>
      </div>
    </section>
    <section className="handbook-intro section">
      <div>
        <p className="kicker">Family partnership</p>
        <h2>Clear routines help children feel secure.</h2>
      </div>
      <p>Before a child begins at CELCN, we talk with families about daily routines, comfort needs, allergies, authorized pick-up contacts, and any support that will help the transition feel calm. This page is a guide, not a substitute for the centre’s final enrolment paperwork.</p>
    </section>
    <section className="handbook-grid section">
      {handbookSections.map(([title, text], index) => {
        const icons = [ShieldCheck, Baby, BowlFood, FlowerLotus, FirstAidKit, ChatCircleDots];
        const Icon = icons[index];
        return <article key={title}><Icon weight="duotone" /><h2>{title}</h2><p>{text}</p></article>;
      })}
    </section>
    <section className="handbook-note section">
      <div>
        <p className="kicker light">Important note</p>
        <h2>Final policies are confirmed during enrolment.</h2>
      </div>
      <p>As the centre completes enrolment details with each family, staff will confirm current forms, health and safety requirements, program routines, and any documents needed before a child’s first day.</p>
    </section>
  </main><SiteFooter /></>;
}
