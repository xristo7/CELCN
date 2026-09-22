import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Baby, Buildings, ChatCircleDots, ClipboardText, EnvelopeSimple, Info, Path } from "@phosphor-icons/react";

const links = [["About us", "/about", Info], ["Programs", "/programs", Baby], ["Chapters", "/chapters", Buildings], ["Admissions", "/admissions", ClipboardText], ["How it works", "/how-it-works", Path], ["Contact us", "/contact", ChatCircleDots]];
const mobileLinks = [...links.slice(0, 4), ["Parent handbook", "/parent-handbook", ClipboardText], ...links.slice(4)];

export function SiteHeader({ overlay = false }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => window.scrollY > 16);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const menuButton = useRef(null);
  const drawer = useRef(null);
  useEffect(() => {
    const media = window.matchMedia("(max-width: 1050px)");
    const closeOnDesktop = () => { if (!media.matches) setOpen(false); };
    media.addEventListener("change", closeOnDesktop);
    return () => media.removeEventListener("change", closeOnDesktop);
  }, []);
  useEffect(() => {
    if (!open) return;
    const root = document.getElementById("root");
    document.body.classList.add("mobile-drawer-open");
    drawer.current.querySelector("button").focus();
    root.inert = true;
    const handleKey = event => {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab") return;
      const items = drawer.current.querySelectorAll("a[href], button");
      const first = items[0], last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.classList.remove("mobile-drawer-open");
      root.inert = false;
      document.removeEventListener("keydown", handleKey);
      menuButton.current?.focus({ preventScroll: true });
    };
  }, [open]);
  return <><div className="site-header-slot"><header className={`site-header shared-header${!overlay || scrolled ? " solid-header" : ""}${scrolled ? " scrolled-header" : ""}`}>
    <button ref={menuButton} className="menu-button" aria-expanded={open} aria-controls="mobile-drawer" onClick={() => setOpen(!open)}><span /><span /><span /><b>Menu</b></button>
    <a className="brand brand-logo" href="/" aria-label="CELCN home"><img src="/assets/celcn-logo-dark.png" alt="Canada Early Learning & Care Network Inc." /></a>
    <nav id="main-nav" className="nav" aria-label="Primary navigation">
      {links.map(([label,href,Icon]) => <a className={href === "/contact" ? "button button-gold nav-cta" : undefined} key={href} href={href} aria-current={window.location.pathname === href ? "page" : undefined} onClick={() => setOpen(false)}><Icon weight={href === "/contact" ? "fill" : "duotone"} />{label}</a>)}
    </nav>
  </header></div>{createPortal(<>
    <div className="drawer-scrim" aria-hidden="true" onClick={() => setOpen(false)} />
    <aside ref={drawer} id="mobile-drawer" className="mobile-drawer" role="dialog" aria-modal={open ? true : undefined} aria-label="Navigation menu" aria-hidden={!open} inert={!open}>
      <div className="drawer-heading"><a className="drawer-logo" href="/" aria-label="CELCN home"><img src="/assets/celcn-logo-dark.png" alt="Canada Early Learning & Care Network Inc." /></a><button type="button" aria-label="Close menu" onClick={() => setOpen(false)}>×</button></div>
      <nav aria-label="Mobile navigation">
        {mobileLinks.map(([label, href, Icon]) => <a className={href === "/contact" ? "button button-gold" : undefined} key={`${label}-${href}`} href={href} aria-current={window.location.pathname === href ? "page" : undefined} onClick={() => setOpen(false)}><Icon weight={href === "/contact" ? "fill" : "duotone"} />{label}</a>)}
      </nav>
    </aside>
  </>, document.body)}</>;
}

export function SiteFooter() {
  const [subscribed, setSubscribed] = useState(false);
  return <footer><div className="footer-top"><div className="footer-lockup"><a className="brand footer-brand brand-logo" href="/" aria-label="CELCN home"><img src="/assets/celcn-logo.png" alt="Canada Early Learning & Care Network Inc." /></a><p>Growing bright futures<br />together</p></div>{subscribed?<p className="subscribe-success" role="status"><EnvelopeSimple weight="fill" /> You’re on the centre updates list.</p>:<form className="subscribe-form" onSubmit={event=>{event.preventDefault();event.currentTarget.reset();setSubscribed(true)}}><label htmlFor="footer-email">Get centre updates in your inbox</label><div><input id="footer-email" name="email" type="email" autoComplete="email" placeholder="Email address" required/><button className="button button-teal" type="submit"><EnvelopeSimple weight="fill" /> Subscribe</button></div></form>}</div><div className="footer-bottom"><small>© 2026 CELCN. All rights reserved.</small><nav className="footer-links" aria-label="Footer navigation"><a href="/">Home</a><a href="/about">About us</a><a href="/programs">Programs</a><a href="/chapters">Chapters</a><a href="/admissions">Admissions</a><a href="/parent-handbook">Parent handbook</a><a href="/how-it-works">How it works</a><a href="/#faq">FAQs</a><a href="/contact">Contact us</a></nav></div></footer>;
}
