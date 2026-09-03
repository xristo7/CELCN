import { useRef } from "react";

const image = "/assets/celcn-dashboard.png";
const description = "CELCN organisation dashboard showing enrolment, attendance trends, staffing, invoices, classroom occupancy, recent activity, tasks, and the daily schedule.";

export function DashboardPreview() {
  const dialog = useRef(null);
  return <figure className="dashboard-showcase">
    <button className="dashboard-image-button" onClick={() => dialog.current.showModal()} aria-label="Expand the CELCN dashboard preview">
      <img src={image} alt={description} width="1672" height="941" loading="lazy" />
      <span className="dashboard-expand">Explore the dashboard preview</span>
    </button>
    <figcaption>Illustrative platform preview · select the image to view details</figcaption>
    <dialog ref={dialog} className="dashboard-dialog" aria-labelledby="dashboard-dialog-title" onClick={event => { if(event.target === event.currentTarget) dialog.current.close(); }}>
      <div className="dashboard-dialog-header"><div><h2 id="dashboard-dialog-title">Your centre, at a glance.</h2><p>Dashboard design preview—not a live account.</p></div><button className="button button-teal" autoFocus onClick={() => dialog.current.close()}>Close preview</button></div>
      <div className="dashboard-detail-scroll" tabIndex={0} role="region" aria-label="Dashboard image; scroll horizontally on smaller screens"><img src={image} alt={description} width="1672" height="941" /></div>
      <p className="dashboard-scroll-hint">On smaller screens, scroll across the image to explore every panel.</p>
    </dialog>
  </figure>;
}
