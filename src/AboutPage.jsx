import { useEffect } from "react";
import { SiteHeader, SiteFooter } from "./SiteChrome.jsx";

export function AboutPage() {
  useEffect(() => { document.title = "About us — CELCN"; }, []);
  return <><SiteHeader /><main className="about-page">
    <section className="about-intro section">
      <div>
        <p className="kicker">About CELCN</p>
        <h1>Nurturing tomorrow’s leaders<br />through community and care.</h1>
        <p>CELCN—the Canadian Early Learning &amp; Childcare Network—is dedicated to building a future where every child, regardless of socio-economic background, has access to quality early childhood education.</p>
        <p>As a community-first organization, we are committed to providing inclusive, accessible, and innovative childcare solutions that empower families, nurture children, and strengthen local communities across Canada.</p>
      </div>
      <figure>
        <img src="/assets/celcn-story.png" alt="An educator and a young child exploring a puzzle together in a daycare classroom" />
      </figure>
    </section>

    <section className="about-purpose section">
      <p className="kicker">Our Mission &amp; Vision</p>
      <div>
        <h2>Securing children’s futures through equal opportunity.</h2>
        <p>Early childhood education is the cornerstone of lifelong success. Our mission bridges the gap in early learning by creating nurturing, secure spaces where infants, toddlers, and preschoolers can explore, discover, and achieve developmental milestones with confidence.</p>
        <p>Aligned with the Canada Growth Plan and national early learning frameworks, our work supports parents, equips dedicated educators, and builds a sustainable foundation for the next generation.</p>
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
          <p>We work to ensure high-quality early care is within reach for all families, removing barriers to equitable early childhood education.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Community Partnerships</h3>
          <p>Collaboration with local educators, community organizations, and families ensures deep, lasting support across every chapter.</p>
        </article>
      </div>
    </section>

    <section className="about-future section">
      <div>
        <p className="kicker light">Join Us in Shaping the Future</p>
        <h2>Every child deserves a chance to thrive.</h2>
      </div>
      <div>
        <p>Together, we can break barriers and ensure that quality early childhood education is within reach for all. Whether you are looking to enroll your child, become a partner, or launch a chapter, let’s build brighter futures, one child at a time.</p>
        <a className="button button-gold" href="/contact">Connect with our team <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  </main><SiteFooter /></>;
}
