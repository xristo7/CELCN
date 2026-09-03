import { useState } from "react";

const workflows = [
  { name: "Enrolment & attendance", title: "A clearer day, from first enquiry to pickup.", text: "Keep child records, enrolment steps, and daily attendance connected—so your team has the context it needs when families arrive.", items: ["Organised child and family records", "A clear enrolment journey", "Check-in and attendance visibility"], preview: ["Enquiry received", "Family information collected", "Ready for the first day"] },
  { name: "Family connection", title: "Keep families close to the moments that matter.", text: "Bring daily updates and family communication into one experience, helping educators share the day without juggling disconnected channels.", items: ["Daily care updates and learning moments", "Direct family communication", "A shared picture of each child’s day"], preview: ["Daily care recorded", "Update prepared by the educator", "Family stays in the loop"] },
  { name: "Centre operations", title: "Give your team a shared view of what’s next.", text: "Connect billing, staffing, and room visibility with the daily life of your centre. Less searching for information. More clarity for the people who need it.", items: ["Billing and payment records", "Staff and classroom organisation", "Room ratios and operational reporting"], preview: ["Review the centre overview", "Spot items needing attention", "Coordinate the next step"] },
];
const faqs = [
  ["Who is CELCN being built for?", "CELCN is designed for childcare organisations, centre leaders, educators, and families. The platform plan supports both individual centres and organisations managing multiple locations."],
  ["Is CELCN a network or a software platform?", "Both. CELCN brings together an early-learning community and a childcare management platform. Network chapters and organisations using the software are distinct, so a centre’s operating structure can remain its own."],
  ["Which features can I explore?", "The planned platform covers enrolment, child and family records, attendance, daily care, communication, billing, staffing, and reporting. Delivery is phased; an introduction is the right place to confirm availability for your centre."],
  ["Can we bring our existing records?", "An initial conversation can help identify the records and workflows you need to carry over. Import formats, migration support, and timing need to be confirmed before you make a change; no automatic migration is promised in this preview."],
  ["How does CELCN approach sensitive information?", "The platform architecture calls for organisation-level data separation, role-based access, and audit trails. These are design requirements, not a claim of completed certification or a substitute for your own privacy obligations."],
  ["What does CELCN cost?", "Pricing and subscription details will be shared as the platform develops. Tell us about your organisation’s needs so we can discuss the right fit and keep you informed when details are available."],
];

export function ClientSections({ onEnquire }) {
  const [active, setActive] = useState(0);
  const selected = workflows[active];
  return <>
    <section className="client-benefits section" aria-labelledby="benefits-title">
      <p className="kicker">Built for the people behind every centre</p>
      <h2 id="benefits-title">Better connected.<br />Better supported.</h2>
      <div className="benefit-columns">
        <article><span className="section-number">01 / Centre leaders</span><h3>See the whole picture.</h3><p>Bring the moving parts of your organisation into focus, from a single classroom to multiple locations.</p></article>
        <article><span className="section-number">02 / Educators</span><h3>Make room for care.</h3><p>Keep everyday records and updates close at hand, so administration supports the day instead of interrupting it.</p></article>
        <article><span className="section-number">03 / Families</span><h3>Feel part of the day.</h3><p>Create a more connected experience through clear communication and meaningful updates from the people caring for their child.</p></article>
      </div>
    </section>

    <section className="workflow-section section" aria-labelledby="workflow-title">
      <div className="section-intro"><div><p className="kicker">Explore the planned platform</p><h2 id="workflow-title">Less back-and-forth.<br />More moving forward.</h2></div><p>Start with the work that matters to your centre. See how connected workflows could support your team.</p></div>
      <div className="workflow-tabs" role="tablist" aria-label="Platform workflows">{workflows.map((workflow,index)=><button key={workflow.name} id={`workflow-tab-${index}`} role="tab" aria-selected={active===index} aria-controls={`workflow-panel-${index}`} tabIndex={active===index?0:-1} onClick={()=>setActive(index)} onKeyDown={event=>{let next;if(event.key==="ArrowRight")next=(index+1)%workflows.length;if(event.key==="ArrowLeft")next=(index+workflows.length-1)%workflows.length;if(event.key==="Home")next=0;if(event.key==="End")next=workflows.length-1;if(next!==undefined){event.preventDefault();setActive(next);document.getElementById(`workflow-tab-${next}`)?.focus()}}}>{workflow.name}</button>)}</div>
      <div className="workflow-panel" id={`workflow-panel-${active}`} role="tabpanel" aria-labelledby={`workflow-tab-${active}`} tabIndex={0}>
        <div><h3>{selected.title}</h3><p>{selected.text}</p><ul>{selected.items.map(item=><li key={item}>{item}</li>)}</ul><button className="text-link link-button" onClick={onEnquire}>Talk through your workflow</button></div>
        <div className="workflow-example"><p className="kicker">A connected journey</p><ol>{selected.preview.map((step,index)=><li key={step}><span>0{index+1}</span><strong>{step}</strong></li>)}</ol><small>Illustrative workflow · feature availability to be confirmed</small></div>
      </div>
    </section>

    <section className="trust-section section" aria-labelledby="trust-title"><div><p className="kicker light">Trust belongs at the foundation</p><h2 id="trust-title">Thoughtful about care.<br />Careful with information.</h2><p>Children’s information deserves more than an afterthought. CELCN’s platform plan puts clear access boundaries and accountability at the centre of its architecture.</p><span className="roadmap-note">Platform design commitments</span></div><div className="trust-list"><article><h3>Your organisation, separated.</h3><p>Organisation-level data isolation is a core requirement of the platform design.</p></article><article><h3>The right access for each role.</h3><p>Permissions are designed around the responsibilities of directors, educators, and families.</p></article><article><h3>A clearer record of activity.</h3><p>Audit trails are planned to support accountability for important actions and changes.</p></article></div></section>


    <section className="network-section section" id="chapters" aria-labelledby="network-title"><div><p className="kicker">Local connections. Shared purpose.</p><h2 id="network-title">A network rooted<br />in community.</h2><p>CELCN’s chapter planning starts with communities in Ontario. Explore a conversation about local participation or the platform for your organisation.</p><button className="text-link link-button" onClick={onEnquire}>Connect with CELCN</button></div><div className="chapter-list"><article><span>Ontario</span><h3>Ottawa</h3><p>Roydon Avenue</p></article><article><span>Ontario</span><h3>Hamilton</h3><p>King Williams Street</p></article><small>Locations listed in the CELCN plan. Contact details and service availability are to be confirmed.</small></div></section>

    <section className="faq-section section" id="faq" aria-labelledby="faq-title"><div><p className="kicker">A little more clarity</p><h2 id="faq-title">Good questions.<br />Clear answers.</h2><p>Have something specific in mind?</p><button className="text-link link-button" onClick={onEnquire}>Start a conversation</button></div><div className="faq-list">{faqs.map(([question,answer])=><details key={question} name="celcn-accordion"><summary>{question}</summary><p>{answer}</p></details>)}</div></section>
  </>;
}
