import { useEffect } from "react";
import { SiteHeader, SiteFooter } from "./SiteChrome.jsx";

export function AboutPage() {
  useEffect(() => { document.title = "About us — CELCN"; }, []);
  return <><SiteHeader /><main className="about-page">
    <section className="about-intro section">
      <div>
        <p className="kicker">About our daycare</p>
        <h1>Nurturing children through warmth, structure, and play.</h1>
        <p>Canada Early Learning &amp; Care Network - Hamilton - King Williams St Inc. is an owned childcare centre serving families from 191 King William Street in Hamilton.</p>
        <p>Our work is simple and important: create a safe, inclusive place where children are cared for deeply, encouraged daily, and supported as they grow through each early-learning stage.</p>
      </div>
      <figure>
        <img src="/assets/celcn-story.png" alt="An educator and a young child exploring a puzzle together in a daycare classroom" />
      </figure>
    </section>

    <section className="about-purpose section">
      <p className="kicker">Our Mission &amp; Vision</p>
      <div>
        <h2>Helping children feel safe enough to explore and confident enough to grow.</h2>
        <p>Early childhood education is the cornerstone of lifelong success. Our mission is to provide nurturing, secure spaces where infants, toddlers, and preschoolers can explore, discover, and achieve developmental milestones with confidence.</p>
        <p>We support parents with clear communication, thoughtful routines, and a team that treats care as both a responsibility and a relationship.</p>
      </div>
    </section>

    <section className="about-values section" aria-labelledby="values-title">
      <p className="kicker">Why Early Learning Matters</p>
      <h2 id="values-title">The four pillars of our commitment.</h2>
      <div className="about-value-grid">
        <article>
          <span>01</span>
          <h3>Cognitive &amp; Social Growth</h3>
          <p>Active, collaborative play stimulates brain development, creative problem solving, and social cooperation from the earliest years.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Inclusive Accessibility</h3>
          <p>We work to make children and families feel welcome, respected, and supported from the first conversation.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Family Partnership</h3>
          <p>Collaboration with parents and caregivers helps each child’s routines, strengths, and needs stay visible.</p>
        </article>
      </div>
    </section>

    <section className="about-future section">
      <div>
        <p className="kicker light">Visit CELCN</p>
        <h2>Every child deserves a place to feel they belong.</h2>
      </div>
      <div>
        <p>If you are looking for care, tell us your child’s age, schedule needs, and questions. We’ll help you understand current availability and whether our Hamilton centre is the right fit.</p>
        <a className="button button-gold" href="/contact">Ask about enrolment <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  </main><SiteFooter /></>;
}
