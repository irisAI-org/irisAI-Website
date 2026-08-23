import { useState } from 'react'

const POINTS = [
  '20-minute live walkthrough',
  'Scan, pack, and pull the clip in Reports',
  'On-prem or cloud, same product',
]

export default function CTA() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="sec cta" id="cta">
      <div className="wrap">
        <div className="cta-panel reveal">
          <div className="cta-panel-grid" aria-hidden="true" />

          <div className="cta-copy">
            <p className="cta-eyebrow">Get started</p>
            <h2>See a packing recording end to end</h2>
            <p className="cta-lede">
              Book a short demo. We will scan an order, pack on camera, finish the file, then
              open it in Reports by order number.
            </p>

            <ul className="cta-points">
              {POINTS.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>

            <div className="cta-media" aria-hidden="true">
              <img src="/images/Packing.png" alt="" loading="lazy" decoding="async" />
              <div className="cta-media-veil" />
              <span className="cta-media-tag">Live packing station</span>
            </div>
          </div>

          <div className="cta-form-wrap">
            {sent ? (
              <div className="cta-thanks" role="status">
                <p className="cta-thanks-k">Request received</p>
                <h3>We will be in touch shortly</h3>
                <p>
                  Thanks for reaching out. Someone from irisAI will contact you to schedule the
                  demo.
                </p>
              </div>
            ) : (
              <form className="cta-form" onSubmit={onSubmit}>
                <p className="cta-form-kicker">Request a demo</p>
                <label className="cta-field">
                  <span>Full name</span>
                  <input name="name" type="text" autoComplete="name" required placeholder="Alex Morgan" />
                </label>
                <label className="cta-field">
                  <span>Work email</span>
                  <input name="email" type="email" autoComplete="email" required placeholder="alex@company.com" />
                </label>
                <label className="cta-field">
                  <span>Company</span>
                  <input name="company" type="text" autoComplete="organization" required placeholder="Acme Fulfillment" />
                </label>
                <label className="cta-field">
                  <span>Message</span>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Warehouse size, packing stations, or anything we should know"
                  />
                </label>
                <button className="btn btn-primary cta-submit" type="submit">
                  Book a demo
                  <span aria-hidden="true">→</span>
                </button>
                <p className="cta-form-note">No spam. We only use this to schedule your walkthrough.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
