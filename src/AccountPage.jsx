import { useEffect, useState } from "react";

export function AccountPage({ create = false }) {
  const [visible, setVisible] = useState(false);
  const [complete, setComplete] = useState(false);
  const [notice, setNotice] = useState("");
  useEffect(() => { document.title = `${create ? "Create account" : "Sign in"} — CELCN`; }, [create]);
  return <main className="account-page">
    <aside className="account-story">
      <img src="/assets/celcn-story.png" alt="An educator supporting a child’s learning" />
      <a className="brand" href="/" aria-label="CELCN home"><span className="brand-name">CELCN</span></a>
      <div><p className="kicker light">Stronger beginnings, together</p><h2>More connected care starts here.</h2><p>One community. Practical tools. More time for the moments that matter.</p></div>
    </aside>
    <section className="account-main">
      <a className="account-back" href="/">Back to CELCN</a>
      <div className="account-content">
        <p className="kicker">Canadian Early Learning &amp; Childcare Network</p>
        <h1>{create ? "Create your account." : "Welcome back."}</h1>
        <p>{create ? "Take the first step towards a more connected centre." : "Sign in to your CELCN workspace."}</p>
        <div className="account-preview-note">Interactive preview only. Use sample details—not a real password. Accounts are not created and credentials are not checked or stored.</div>
        {complete ? <div className="account-result" role="status"><h2>{create ? "Your account preview is complete." : "You’ve completed the sign-in preview."}</h2><p>{create ? "No account has been created. Live registration will be available when account services are connected." : "No sign-in took place. Live authentication is not connected yet."}</p><button className="button button-teal" onClick={() => setComplete(false)}>Back to form</button><a className="text-link" href="/">Explore CELCN</a></div> :
          <form onSubmit={event => { event.preventDefault(); event.currentTarget.reset(); setVisible(false); setNotice(""); setComplete(true); }}>
            {create && <><label>Full name<input name="name" autoComplete="name" required /></label><label>Centre or organisation<input name="organisation" autoComplete="organization" required /></label></>}
            <label>Email address<input name="email" type="email" autoComplete="username" required /></label>
            <div><label htmlFor="account-password">Password</label><div className="account-password"><input id="account-password" name="password" type={visible ? "text" : "password"} autoComplete={create ? "new-password" : "current-password"} required minLength={create ? 8 : undefined} aria-describedby={create ? "password-help" : undefined}/><button type="button" aria-pressed={visible} onClick={() => setVisible(!visible)}>{visible ? "Hide" : "Show"}</button></div>{create && <small id="password-help">For this preview, enter at least 8 characters.</small>}</div>
            {!create && <button className="account-forgot" type="button" onClick={() => setNotice("Password recovery is not connected in this preview. No reset email has been sent.")}>Forgot password?</button>}
            {notice && <p className="account-notice" role="status">{notice}</p>}
            <button className="button button-gold" type="submit">{create ? "Create account" : "Sign in"}</button>
          </form>}
        <p className="account-switch">{create ? "Already have an account?" : "New to CELCN?"} <a href={create ? "/login" : "/create-account"}>{create ? "Sign in" : "Create an account"}</a></p>
      </div>
      <small className="account-footer">CELCN · Building stronger beginnings together.</small>
    </section>
  </main>;
}
