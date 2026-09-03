import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const links = [["About us", "/about"], ["How it works", "/how-it-works"], ["Pricing", "/pricing"], ["Contact us", "/contact"]];
const mobileLinks = [links[0], ["Programs", "/#programs"], ["Platform", "/#platform"], ["Chapters", "/#chapters"], ...links.slice(1)];

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
    <a className="brand" href="/" aria-label="CELCN home"><span className="brand-name">CELCN</span><span className="brand-long">Canadian Early Learning<br />&amp; Childcare Network</span></a>
    <nav id="main-nav" className="nav" aria-label="Primary navigation">
      {links.map(([label,href]) => <a key={href} href={href} aria-current={window.location.pathname === href ? "page" : undefined} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="sign-in nav-link" href="/login">Sign in</a><a className="button button-gold nav-cta" href="/create-account">Create account</a>
    </nav>
  </header></div>{createPortal(<>
    <div className="drawer-scrim" aria-hidden="true" onClick={() => setOpen(false)} />
    <aside ref={drawer} id="mobile-drawer" className="mobile-drawer" role="dialog" aria-modal={open ? true : undefined} aria-label="Navigation menu" aria-hidden={!open} inert={!open}>
      <div className="drawer-heading"><a className="brand-name" href="/">CELCN</a><button type="button" aria-label="Close menu" onClick={() => setOpen(false)}>×</button></div>
      <p className="drawer-description">Canadian Early Learning<br />&amp; Childcare Network</p>
      <nav aria-label="Mobile navigation">
        {mobileLinks.map(([label, href]) => <a key={href} href={href} aria-current={window.location.pathname === href ? "page" : undefined} onClick={() => setOpen(false)}>{label}</a>)}
        <a href="/login" onClick={() => setOpen(false)}>Sign in</a>
        <a className="button button-gold" href="/create-account" onClick={() => setOpen(false)}>Create account</a>
      </nav>
    </aside>
  </>, document.body)}</>;
}

export function SiteFooter() {
  return <footer><a className="brand footer-brand" href="/"><span className="brand-name">CELCN</span></a><p>Canadian Early Learning &amp; Childcare Network</p><div><a href="/about">About us</a><a href="/#chapters">Chapters</a><a href="/#platform">Platform</a><a href="/how-it-works">How it works</a><a href="/pricing">Pricing</a><a href="/#faq">FAQs</a><a href="/contact">Contact us</a></div><small>© 2026 CELCN. Building stronger beginnings together.</small></footer>;
}
