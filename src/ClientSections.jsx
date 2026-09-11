const faqs = [
  ["What programs does CELCN provide?", "CELCN provides early childhood programs for infants, toddlers, and preschool-aged children through its chapters, with care and learning shaped around each developmental stage."],
  ["How can I enrol my child in a CELCN program?", "Program availability and enrolment are handled through our local chapters. Contact CELCN and we will help connect you with the appropriate centre and next steps."],
  ["How does CELCN support inclusive early learning?", "Our mission is centred on widening access to quality early childhood education and creating welcoming environments where children and families from different backgrounds can participate and thrive."],
  ["Where are CELCN chapters currently located?", "CELCN currently has Ontario chapters in Ottawa at 1 Roydon Place, Units 101 & 102, and Hamilton at 191 King Williams Street."],
  ["Can childcare operators or community leaders work with CELCN?", "Yes. CELCN welcomes conversations with educators, childcare operators, community leaders, and partners interested in strengthening early learning or exploring future chapter opportunities."],
];

export function ClientSections({ onEnquire }) {
  return <>
    <section className="client-benefits section" aria-labelledby="approach-title">
      <p className="kicker">Learning Through Experience</p>
      <h2 id="approach-title">Children learn best when curiosity has room to grow.</h2>
      <div className="benefit-columns">
        <article>
          <span className="section-number">01 / Explore</span>
          <h3>Discover the world with confidence.</h3>
          <p>Safe, engaging spaces invite children to investigate, move, touch, ask questions, and build understanding through everyday experiences.</p>
        </article>
        <article>
          <span className="section-number">02 / Create</span>
          <h3>Imagination becomes part of learning.</h3>
          <p>Art, storytelling, music, construction, and open-ended play give children meaningful ways to communicate ideas and develop creative thinking.</p>
        </article>
        <article>
          <span className="section-number">03 / Connect</span>
          <h3>Growth happens through relationships.</h3>
          <p>Collaborative play and responsive educator relationships help children practise empathy, communication, confidence, and a sense of belonging.</p>
        </article>
      </div>
    </section>

    <section className="trust-section section" aria-labelledby="importance-title">
      <div>
        <p className="kicker light">Why the Early Years Matter</p>
        <h2 id="importance-title">The first years create foundations that can last a lifetime.</h2>
        <p>Early childhood is a period of extraordinary development. Quality care gives children the relationships, experiences, routines, and encouragement they need to build confidence and prepare for future learning.</p>
      </div>
      <div className="trust-list">
        <article>
          <h3>Whole-child development.</h3>
          <p>Purposeful early learning supports social, emotional, physical, language, and cognitive growth together.</p>
        </article>
        <article>
          <h3>Confidence for the next stage.</h3>
          <p>Consistent routines, play, and supportive relationships help children approach new experiences with growing independence.</p>
        </article>
        <article>
          <h3>Stronger family foundations.</h3>
          <p>Reliable childcare supports parents and caregivers while creating continuity between the child’s home, centre, and community.</p>
        </article>
      </div>
    </section>

    <section className="network-section section" id="chapters" aria-labelledby="network-title">
      <div>
        <p className="kicker">Our Chapters</p>
        <h2 id="network-title">Local care. Shared purpose.</h2>
        <p>CELCN grows through community-rooted chapters that bring our early-learning mission closer to families. Our current Ontario locations serve Ottawa and Hamilton while sharing one commitment to nurturing, inclusive care.</p>
        <button className="text-link link-button" onClick={onEnquire}>Connect with a chapter</button>
      </div>
      <div className="chapter-list">
        <article>
          <span>Ontario</span>
          <h3>Ottawa — Roydon Avenue</h3>
          <p>1 Roydon Place Unit 101 &amp; 102, Ottawa ON</p>
          <a className="text-link" href="/about#ottawa-chapter">Meet the Ottawa chapter</a>
        </article>
        <article>
          <span>Ontario</span>
          <h3>Hamilton — King Williams Street</h3>
          <p>191 King Williams Street, Hamilton ON L8R 1A7</p>
          <a className="text-link" href="/about#hamilton-chapter">Meet the Hamilton chapter</a>
        </article>
        <small>Chapter leadership, contact information, and centre details remain available on our About page.</small>
      </div>
    </section>

    <section className="faq-section section" id="faq" aria-labelledby="faq-title">
      <div>
        <p className="kicker">Frequently Asked Questions</p>
        <h2 id="faq-title">A few things families and partners often ask.</h2>
        <p>Need an answer about a program, chapter, partnership, or CELCN’s growing network?</p>
        <button className="text-link link-button" onClick={onEnquire}>Talk with our team</button>
      </div>
      <div className="faq-list">
        {faqs.map(([question, answer]) => <details key={question} name="celcn-accordion"><summary>{question}</summary><p>{answer}</p></details>)}
      </div>
    </section>
  </>;
}
