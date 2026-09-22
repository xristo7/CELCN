import { useEffect } from "react";
import { Baby, BookOpenText, FlowerLotus, HandHeart, MusicNotes, Palette, PuzzlePiece, ShieldCheck, SneakerMove, UsersThree } from "@phosphor-icons/react";
import { SiteHeader, SiteFooter } from "./SiteChrome.jsx";

export const programDetails = {
  infant: {
    eyebrow: "Infant care",
    title: "A gentle first classroom for babies under 18 months.",
    age: "Under 18 months",
    ratio: "Planned around close supervision and responsive care.",
    image: "/assets/celcn-mission.png",
    intro: "Our infant care is built around trust, calm routines, and responsive relationships. Educators follow each baby's cues for feeding, rest, sensory play, and comfort so the transition between home and daycare feels steady.",
    highlights: ["Individual feeding, rest, and comfort routines", "Sensory exploration, music, books, and gentle movement", "Close communication with families about daily care", "A peaceful environment that supports attachment and security"],
    curriculum: ["Early communication", "Sensory discovery", "Fine and gross motor beginnings", "Music, stories, and responsive play"],
  },
  toddler: {
    eyebrow: "Toddler program",
    title: "A lively room for independence, language, and discovery.",
    age: "18 months to 2.5 years",
    ratio: "Structured for active supervision and growing independence.",
    image: "/assets/celcn-programs.png",
    intro: "Toddlers learn through movement, repetition, play, and social connection. Our toddler program balances predictable routines with hands-on discovery, helping children build confidence while practising early self-help skills.",
    highlights: ["Guided indoor and outdoor play", "Support for self-feeding, toileting readiness, and transitions", "Early language, problem solving, and social confidence", "Creative materials, music, movement, and pretend play"],
    curriculum: ["Me and my world", "Personal and social development", "Early numeracy and literacy", "Physical and health learning"],
  },
  preschool: {
    eyebrow: "Preschool program",
    title: "Play-based learning that prepares children for what comes next.",
    age: "2.5 to 4 years",
    ratio: "Designed for group learning, friendship, and school readiness.",
    image: "/assets/celcn-story.png",
    intro: "Our preschool room gives children room to ask questions, practise friendship, solve problems, and build early learning habits. The day blends free play, group experiences, stories, creative work, and active exploration.",
    highlights: ["Language, early literacy, counting, and problem solving", "Collaborative play and social-emotional learning", "Creative projects, music, movement, and outdoor experiences", "Growing independence with routines and responsibilities"],
    curriculum: ["Communication and literacy", "Creative expression", "Science and discovery", "Friendship and self-regulation"],
  },
};

const programCards = Object.entries(programDetails);

export function ProgramsPage({ selected }) {
  const program = selected ? programDetails[selected] : null;
  useEffect(() => {
    document.title = program ? `${program.eyebrow} - CELCN` : "Programs - CELCN";
  }, [program]);
  if (program) return <ProgramDetail program={program} />;

  return <><SiteHeader /><main className="programs-page">
    <section className="page-hero programs-hero section">
      <p className="kicker light">Programs</p>
      <h1>Care for each early-learning stage.</h1>
      <p>Infant, toddler, and preschool rooms support children through warm relationships, predictable routines, and play that meets them where they are.</p>
    </section>
    <section className="programs-overview section">
      <div className="programs-heading">
        <p className="kicker">Choose a program</p>
        <h2>Explore the room that fits your child.</h2>
      </div>
      <div className="program-detail-grid">
        {programCards.map(([slug, item], index) => <article className="program-detail-card" key={slug}>
          <img src={item.image} alt="" />
          <div>
            <span>0{index + 1}</span>
            <h3>{item.eyebrow}</h3>
            <p>{item.age}</p>
            <a className="text-link" href={`/programs/${slug}`}>Learn more</a>
          </div>
        </article>)}
      </div>
    </section>
    <section className="programs-rhythm section">
      <div>
        <p className="kicker light">Daily rhythm</p>
        <h2>A day with room for care, play, rest, and connection.</h2>
      </div>
      <div className="rhythm-list">
        {[[ShieldCheck, "Arrival and welcome", "A gentle check-in helps children settle into the room."], [PuzzlePiece, "Play and discovery", "Children explore materials, stories, blocks, pretend play, and sensory activities."], [SneakerMove, "Outdoor and active time", "Movement supports physical confidence and regulation."], [FlowerLotus, "Meals, rest, and routines", "Predictable care moments help children feel safe and capable."]].map(([Icon, title, text]) => <article key={title}><Icon weight="duotone" /><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </section>
    <section className="programs-cta section">
      <div><p className="kicker light">Next step</p><h2>Ask which program has availability.</h2></div>
      <a className="button button-gold" href="/admissions">Start admissions enquiry</a>
    </section>
  </main><SiteFooter /></>;
}

function ProgramDetail({ program }) {
  return <><SiteHeader /><main className="programs-page">
    <section className="program-detail-hero section">
      <div>
        <p className="kicker light">{program.eyebrow}</p>
        <h1>{program.title}</h1>
        <p>{program.intro}</p>
        <div className="actions">
          <a className="button button-gold" href="/admissions"><HandHeart weight="fill" /> Ask about availability</a>
          <a className="button button-outline" href="/programs">View all programs</a>
        </div>
      </div>
      <img src={program.image} alt="" />
    </section>
    <section className="program-detail-body section">
      <aside>
        <p className="kicker">Program snapshot</p>
        <h2>{program.age}</h2>
        <p>{program.ratio}</p>
      </aside>
      <div>
        <h2>What families can expect.</h2>
        <div className="expectation-grid">
          {program.highlights.map((item, index) => <article key={item}><span>0{index + 1}</span><p>{item}</p></article>)}
        </div>
      </div>
    </section>
    <section className="curriculum-section section">
      <p className="kicker">Learning focus</p>
      <h2>Everyday experiences with purpose.</h2>
      <div className="curriculum-grid">
        {program.curriculum.map((item, index) => {
          const icons = [Baby, UsersThree, BookOpenText, MusicNotes, Palette];
          const Icon = icons[index % icons.length];
          return <article key={item}><Icon weight="duotone" /><h3>{item}</h3></article>;
        })}
      </div>
    </section>
  </main><SiteFooter /></>;
}
