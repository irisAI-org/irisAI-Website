const STEPS = [
  ['Scan the order', 'The packer scans the order number at the bench or on their phone. Recording starts straight away.'],
  ['Pack on camera', 'The camera films the pack. Scan each item as it goes in, and every scan is stamped onto that order.'],
  ['Finish the pack', 'irisAI checks the video actually plays before marking the order complete. Cancel any pack you abandon.'],
  ['Find it later', 'Search by order number or packer in Reports. The recording opens with the list of scans beside it.'],
]

export default function HowItWorks() {
  return (
    <section className="sec how" id="how">
      <div className="wrap">
        <div className="how-panel reveal">
          <div className="how-panel-grid" aria-hidden="true" />

          <div className="how-head">
            <p className="how-eyebrow">Four steps</p>
            <div className="how-head-row">
              <div className="how-head-copy">
                <h2>
                  Four steps from scan to <span className="acc">filed proof</span>
                </h2>
                <p>
                  Point a security camera you already own at the packing bench and connect it to
                  irisAI. Your team can start the same day, from the bench computer or a phone.
                </p>
              </div>
              <div className="how-head-line" aria-hidden="true" />
            </div>
          </div>

          <div className="how-cards">
            {STEPS.map(([t, d], i) => (
              <article className="how-card" key={t}>
                <span className="how-card-no">{String(i + 1).padStart(2, '0')}.</span>
                <h4>{t}</h4>
                <p>{d}</p>
              </article>
            ))}
          </div>

          <div className="how-foot">
            <p className="how-foot-note">On-prem or cloud · Works with your cameras · Android packer app</p>
            <a className="how-foot-btn" href="#cta">
              <span className="how-foot-btn-ico" aria-hidden="true">→</span>
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
