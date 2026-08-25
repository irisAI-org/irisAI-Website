/* The screenshot is a real capture of the admin Dashboard (see
   scripts/capture-dashboard.mjs to re-take it after the demo data changes). */

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const POINTS = [
  {
    tone: 'blue',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path {...stroke} d="M4 19.5V4.5M4 19.5h16" />
        <path {...stroke} d="m6.8 14.6 3.4-4.2 3.2 2.6 4.6-6" />
      </svg>
    ),
    title: 'The floor at a glance',
    body: 'Orders packed, usual pack time, and packs with video — charted day by day, so busy and slow days are visible.',
  },
  {
    tone: 'green',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle {...stroke} cx="9" cy="8.5" r="3" />
        <path {...stroke} d="M3.5 19a5.5 5.5 0 0 1 11 0" />
        <path {...stroke} d="M16 6.2a3 3 0 0 1 0 5.6M17.5 14.2a5.5 5.5 0 0 1 3 4.8" />
      </svg>
    ),
    title: 'Every packer, side by side',
    body: 'Each packer’s orders, usual pack time, and video rate in one table — busiest at the top, so coaching starts from facts.',
  },
  {
    tone: 'orange',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path {...stroke} d="M12 4 3.5 19h17L12 4Z" />
        <path {...stroke} d="M12 10v4M12 16.8h.01" />
      </svg>
    ),
    title: 'Problems surface themselves',
    body: 'A camera that stops answering or a pack that never filed gets flagged — fixed before a claim ever arrives.',
  },
]

export default function Insights() {
  return (
    <section className="sec insights" id="insights">
      <div className="wrap">
        <div className="ins">
          <div className="ins-copy reveal">
            <p className="ins-eyebrow">For managers</p>
            <h2>
              The whole floor, <span className="acc">one screen</span>
            </h2>
            <p className="ins-lede">
              Packers see their own orders. Warehouse admins see everything: how much the floor
              packed, how long packs usually take, and how each packer is doing — without walking
              the aisles or asking around.
            </p>

            <div className="ins-points">
              {POINTS.map(({ tone, icon, title, body }) => (
                <div className={`ins-point tone-${tone}`} key={title}>
                  <span className="ins-point-ico" aria-hidden="true">{icon}</span>
                  <div>
                    <h4>{title}</h4>
                    <p>{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <a className="ins-cta" href="#cta">
              See it live in a demo
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="ins-shot reveal">
            <div className="ins-shot-glow" aria-hidden="true" />
            <figure className="ins-frame">
              <div className="ins-frame-bar" aria-hidden="true">
                <span className="ins-frame-dots"><i /><i /><i /></span>
                <em>irisAI — Dashboard</em>
              </div>
              <img
                src="/images/admin-dashboard.png"
                alt="The irisAI admin dashboard: packing-floor KPIs, orders-per-day and pack-time charts, order outcomes, needs-attention alerts, and the packer table."
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
