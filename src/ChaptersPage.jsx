import { useEffect } from "react";
import { Buildings, EnvelopeSimple, MapPin, Phone, UsersThree } from "@phosphor-icons/react";
import { SiteHeader, SiteFooter } from "./SiteChrome.jsx";

const chapters = [
  {
    id: "hamilton-chapter",
    city: "Hamilton",
    legalName: "CANADA EARLY LEARNING & CARE NETWORK-Hamilton- KING WILLIAMS ST INC",
    address: <>191 King William Street<br />Hamilton, ON L8R 1A7</>,
    email: "canadaearlylearning.kingwilliams@mail.com",
    phone: "437 727 3420",
    phoneHref: "+14377273420",
    mapQuery: "191 King William Street, Hamilton, ON L8R 1A7",
    directors: [
      ["Yvonne Otiteh", "/assets/celcn-portrait-1.png", ["BSc Engineering", "Certificate in Project Management", "Diploma in Community Social Worker"]],
      ["Jennifer Pere Ajuwa", "/assets/celcn-portrait-2.png", ["BSc Political Science", "Diploma in PSW", "Diploma in Community Social Worker", "Diploma in ECA"]],
      ["Isoken Sikpojie", "/assets/celcn-portrait-3.png", ["Computer Science", "Mental Health", "Coaching Program"]],
    ],
  },
  {
    id: "ottawa-chapter",
    city: "Ottawa",
    legalName: "CANADA EARLY LEARNING & CARE NETWORK - Ottawa - ROYDON AVENUE INC.",
    address: <>1 Roydon Place Unit 101 &amp; 102<br />Ottawa, ON</>,
    email: "CeclnRoydon@gmail.com",
    phone: "647 739 6214",
    phoneHref: "+16477396214",
    mapQuery: "1 Roydon Place Unit 101, Ottawa, ON",
    directors: [
      ["Udeme Udoh", "", ["MEng Engineering", "Pastor & Community Leader", "Co-Founder Mumsfirst"]],
      ["Adekunle Oduyiga", "", ["Post Graduate Diploma in Business Administration", "Higher National Diploma in Physics Electronics", "Diploma in Cyber Security"]],
    ],
  },
];

export function ChaptersPage() {
  useEffect(() => { document.title = "Our chapters - CELCN"; }, []);
  return <><SiteHeader /><main className="about-page chapters-page">
    <section className="chapters-hero section"><div><p className="kicker light">Local connections, shared purpose</p><Buildings className="page-icon light" weight="duotone" /><h1>Our current chapters</h1><p>Local leadership. Shared standards. Brighter beginnings for every community we serve.</p></div></section>
    {chapters.map((chapter, index) => <div className="chapter-profile" id={chapter.id} key={chapter.id}>
      <section className={`chapter-location${index % 2 ? " chapter-location-reverse" : ""}`} aria-labelledby={`${chapter.id}-title`}>
        <div className="chapter-map-frame"><iframe title={`${chapter.city} CELCN chapter map`} src={`https://www.google.com/maps?q=${encodeURIComponent(chapter.mapQuery)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div>
        <article className="chapter-location-card">
          <p className="kicker">Ontario chapter</p><Buildings className="chapter-card-icon" weight="duotone" />
          <h2 id={`${chapter.id}-title`}>CELCN {chapter.city}</h2><p className="chapter-legal-name">{chapter.legalName}</p>
          <address><p><MapPin weight="duotone" /><span>{chapter.address}</span></p><a href={`mailto:${chapter.email}`}><EnvelopeSimple weight="duotone" /><span>{chapter.email}</span></a><a href={`tel:${chapter.phoneHref}`}><Phone weight="duotone" /><span>{chapter.phone}</span></a><p><UsersThree weight="duotone" /><span>Directors: {chapter.directors.map(([name]) => name).join(", ")}</span></p></address>
          <a className="button button-gold" href="/contact">Connect with this chapter <span aria-hidden="true">↗</span></a>
          <a className="chapter-map-link" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(chapter.mapQuery)}`} target="_blank" rel="noreferrer">Open in Google Maps</a>
        </article>
      </section>
      <section className="about-people section" aria-labelledby={`${chapter.id}-people`}>
        <p className="kicker">{chapter.city} chapter directors</p><h2 id={`${chapter.id}-people`}>The people behind our chapter.</h2>
        <div className={`about-portraits${chapter.directors.length === 2 ? " about-portraits-2" : ""}`}>{chapter.directors.map(([name,image,qualifications]) => <figure key={name}>
          {image ? <img src={image} alt={name} loading="lazy" /> : <div className="about-portrait-placeholder" aria-label={name}><div className="about-portrait-avatar">{name.split(" ").map(part => part[0]).join("")}</div><span className="placeholder-label">Director portrait</span></div>}
          <figcaption><p className="kicker">Chapter director</p><h3>{name}</h3><ul>{qualifications.map(item => <li key={item}>{item}</li>)}</ul></figcaption>
        </figure>)}</div>
      </section>
    </div>)}
    <section className="about-future section"><div><p className="kicker light">Connect locally</p><h2>Start a conversation with CELCN.</h2></div><div><p>Ask about enrolment, community partnerships, or opportunities to help grow the network in your area.</p><a className="button button-gold" href="/contact">Contact our team <span aria-hidden="true">↗</span></a></div></section>
  </main><SiteFooter /></>;
}
