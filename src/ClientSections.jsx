import { useState } from "react";

const workflows = [
  { name: "Enrolment & attendance", title: "A clearer day, from first enquiry to pickup.", text: "Keep child records, enrolment steps, and daily attendance connected—so your team has the context it needs when families arrive.", items: ["Organised child and family records", "A clear enrolment journey", "Check-in and attendance visibility"], preview: ["Enquiry received", "Family information collected", "Ready for the first day"] },
  { name: "Family connection", title: "Keep families close to the moments that matter.", text: "Bring daily updates and family communication into one experience, helping educators share the day without juggling disconnected channels.", items: ["Daily care updates and learning moments", "Direct family communication", "A shared picture of each child’s day"], preview: ["Daily care recorded", "Update prepared by the educator", "Family stays in the loop"] },
  { name: "Centre operations", title: "Give your team a shared view of what’s next.", text: "Connect billing, staffing, and room visibility with the daily life of your centre. Less searching for information. More clarity for the people who need it.", items: ["Billing and payment records", "Staff and classroom organisation", "Room ratios and operational reporting"], preview: ["Review the centre overview", "Spot items needing attention", "Coordinate the next step"] },
];
const faqs = [
  ["What services and programs does CELCN provide?", "CELCN provides inclusive, high-standard early childhood education through our Infant (under 18 months), Toddler (18 months – 2.5 years), and Preschool (2.5 – 4 years) programs across our chapters. We also provide modern childcare management tools for enrolment, daily communication, and centre operations."],
  ["How can I enroll my child in a CELCN program?", "Enrolment details and program availability can be explored through our local chapters or by contacting us directly. Our team helps families through registration steps, classroom introductions, and transition schedules."],
  ["Are CELCN services accessible to all families?", "Yes. Our founding mission is to ensure equitable access to early childhood education for children from all socio-economic backgrounds, strengthening families and local communities."],
  ["How does CELCN align with the Canada Growth Plan and early learning frameworks?", "Our programs and network adhere to provincial licensing standards and national childcare growth strategies, promoting high-quality, play-based early education, affordable access, and community well-being."],
  ["How can childcare operators join or open a new chapter?", "We partner with local educators, centre operators, and community leaders looking to expand high-quality early care. Contact us to learn about affiliating an existing centre or opening a new CELCN chapter."],
  ["Where are CELCN chapters currently located?", "We currently operate in Ontario communities, including our active Hamilton chapter at 191 King Williams Street and developing locations in Ottawa and surrounding regions."],
];

export function ClientSections({ onEnquire }) {
  const [active, setActive] = useState(0);
  const selected = workflows[active];
  return <>
    <section className="client-benefits section" aria-labelledby="benefits-title">
      <p className="kicker">Our Approach for Empowering Growth</p>
      <h2 id="benefits-title">An enriching experience<br />at every step.</h2>
      <div className="benefit-columns">
        <article>
          <span className="section-number">01 / Nurturing Environment</span>
          <h3>Safe and secure care.</h3>
          <p>We prioritize creating warm, welcoming spaces where children feel valued, protected, and encouraged to explore with confidence.</p>
        </article>
        <article>
          <span className="section-number">02 / Tailored Development</span>
          <h3>Milestones through play.</h3>
          <p>Curriculum tailored to each age stage—using sensory tasks, creative exploration, and collaborative play to build social and cognitive skills.</p>
        </article>
        <article>
          <span className="section-number">03 / Community Connection</span>
          <h3>Educators and families aligned.</h3>
          <p>Transparent daily updates, clear communication, and collaborative relationships between educators and parents to nurture every child’s potential.</p>
        </article>
      </div>
    </section>

    <section className="workflow-section section" aria-labelledby="workflow-title">
      <div className="section-intro">
        <div>
          <p className="kicker">Innovation in Learning &amp; Management</p>
          <h2 id="workflow-title">Less paperwork.<br />More room for care.</h2>
        </div>
        <p>Start with the work that matters to your centre. See how connected digital workflows give educators and directors more time with children.</p>
      </div>
      <div className="workflow-tabs" role="tablist" aria-label="Platform workflows">
        {workflows.map((workflow,index)=><button key={workflow.name} id={`workflow-tab-${index}`} role="tab" aria-selected={active===index} aria-controls={`workflow-panel-${index}`} tabIndex={active===index?0:-1} onClick={()=>setActive(index)} onKeyDown={event=>{let next;if(event.key==="ArrowRight")next=(index+1)%workflows.length;if(event.key==="ArrowLeft")next=(index+workflows.length-1)%workflows.length;if(event.key==="Home")next=0;if(event.key==="End")next=workflows.length-1;if(next!==undefined){event.preventDefault();setActive(next);document.getElementById(`workflow-tab-${next}`)?.focus()}}}>{workflow.name}</button>)}
      </div>
      <div className="workflow-panel" id={`workflow-panel-${active}`} role="tabpanel" aria-labelledby={`workflow-tab-${active}`} tabIndex={0}>
        <div>
          <h3>{selected.title}</h3>
          <p>{selected.text}</p>
          <ul>{selected.items.map(item=><li key={item}>{item}</li>)}</ul>
          <button className="text-link link-button" onClick={onEnquire}>Talk through your centre's workflow</button>
        </div>
        <div className="workflow-example">
          <p className="kicker">A connected journey</p>
          <ol>{selected.preview.map((step,index)=><li key={step}><span>0{index+1}</span><strong>{step}</strong></li>)}</ol>
          <small>Illustrative workflow · feature availability to be confirmed</small>
        </div>
      </div>
    </section>

    <section className="trust-section section" aria-labelledby="trust-title">
      <div>
        <p className="kicker light">Trust Belongs at the Foundation</p>
        <h2 id="trust-title">Safe environments.<br />Careful with information.</h2>
        <p>Children’s wellbeing and family privacy deserve the highest standards. CELCN’s architecture puts secure data boundaries, role permissions, and transparency at the centre of our design.</p>
        <span className="roadmap-note">Platform design commitments</span>
      </div>
      <div className="trust-list">
        <article>
          <h3>Your organisation, separated.</h3>
          <p>Organisation-level data isolation is a core requirement of the platform design.</p>
        </article>
        <article>
          <h3>The right access for each role.</h3>
          <p>Permissions are designed around the responsibilities of directors, educators, and families.</p>
        </article>
        <article>
          <h3>A clearer record of activity.</h3>
          <p>Audit trails are planned to support accountability for important actions and changes.</p>
        </article>
      </div>
    </section>

    <section className="network-section section" id="chapters" aria-labelledby="network-title">
      <div>
        <p className="kicker">Community Chapters Across Ontario</p>
        <h2 id="network-title">A network rooted<br />in community.</h2>
        <p>CELCN’s chapter network connects passionate local educators with families across Ontario. Explore our active locations or discuss opening a new community chapter.</p>
        <button className="text-link link-button" onClick={onEnquire}>Connect with CELCN</button>
      </div>
      <div className="chapter-list">
        <article>
          <span>Ontario</span>
          <h3>Ottawa</h3>
          <p>Roydon Avenue</p>
        </article>
        <article>
          <span>Ontario</span>
          <h3>Hamilton</h3>
          <p>191 King Williams Street</p>
          <a className="text-link" href="/about#hamilton-chapter">Meet the chapter</a>
        </article>
        <small>Explore the Hamilton chapter’s directors and contact details. Ottawa service availability is to be confirmed.</small>
      </div>
    </section>

    <section className="faq-section section" id="faq" aria-labelledby="faq-title">
      <div>
        <p className="kicker">Frequently Asked Questions</p>
        <h2 id="faq-title">Clear answers for<br />families &amp; centres.</h2>
        <p>Have something specific in mind about our programs, chapters, or platform?</p>
        <button className="text-link link-button" onClick={onEnquire}>Start a conversation</button>
      </div>
      <div className="faq-list">
        {faqs.map(([question,answer])=><details key={question} name="celcn-accordion"><summary>{question}</summary><p>{answer}</p></details>)}
      </div>
    </section>
  </>;
}
