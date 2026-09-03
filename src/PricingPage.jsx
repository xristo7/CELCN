import { useEffect } from "react";
import { SiteHeader, SiteFooter } from "./SiteChrome.jsx";

const options = [
  ["01 / ONE LOCATION", "A single centre", "Start a pricing conversation around your centre, your team, and the work you want to simplify.", ["Number of children and classrooms", "Team size and access needs", "Your priority workflows"]],
  ["02 / MULTIPLE LOCATIONS", "A connected organisation", "Explore the requirements of managing several centres with a shared organisational view.", ["Number and size of locations", "Central and local responsibilities", "Reporting across your centres"]],
  ["03 / NETWORKS & PARTNERS", "A broader partnership", "Discuss a collaboration that reflects the scope of your network and the communities you support.", ["Participating organisations", "Partnership scope and priorities", "Coordination and support needs"]],
];

// Provisional monthly CAD rates; replace these when commercial pricing is approved.
const monthlyRates = [149, 399, 799];

export function PricingPage() {
  useEffect(() => { document.title = "Pricing — CELCN"; }, []);
  return <><SiteHeader /><main className="pricing-page">
    <section className="pricing-intro section"><p className="kicker">Pricing</p><h1>The right fit starts<br />with your centre.</h1><p>Every organisation works a little differently. Tell us what you need so we can discuss the right scope for yours.</p></section>
    <section className="pricing-options section" aria-labelledby="pricing-options-title"><div className="pricing-section-heading"><p className="kicker">Let’s find your fit</p><h2 id="pricing-options-title">Built around your scale.</h2></div><div className="pricing-cards">{options.map(([label,title,description,items], index) => <article className="pricing-card" key={title}><p className="kicker">{label}</p><h3>{title}</h3><div className="pricing-rate"><span>Starting from</span><div><strong>${monthlyRates[index]}</strong><span> CAD / month</span></div><small>Provisional rate · billed monthly</small></div><p>{description}</p><div className="pricing-card-details"><span>What we’ll discuss</span><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></div><a className="button button-teal" href="/contact?topic=pricing">{index === 0 ? "Start trial" : "Get started"} <span aria-hidden="true">↗</span></a></article>)}</div><div className="pricing-notice"><span aria-hidden="true">↗</span><p><strong>Preview pricing — subject to change.</strong> These sample monthly rates are in Canadian dollars, before applicable taxes. Final pricing, inclusions, and availability will be confirmed before purchase. No payment is collected here.</p></div></section>
    <section className="pricing-clarity section"><div><p className="kicker light">Clarity before commitment</p><h2>Know what you’re<br />signing up for.</h2></div><div><p>Before choosing a subscription, ask for a written breakdown of the commercial details that matter to your organisation.</p><ul><li>Subscription cost, billing frequency, and applicable taxes</li><li>Included features, usage limits, and any additional charges</li><li>Setup or migration costs, if applicable</li><li>Contract length, renewal terms, and cancellation conditions</li></ul><a className="button button-gold" href="/contact?topic=pricing">Start a pricing conversation</a></div></section>
  </main><SiteFooter /></>;
}
