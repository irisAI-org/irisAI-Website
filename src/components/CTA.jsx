import { useState } from 'react'

// Where demo requests land. FormSubmit relays the post to this inbox, so there
// is no server to run and no API key in the bundle.
//
// ACTIVATION IS PER (inbox, site URL). FormSubmit mails an "Activate Form" link
// the first time a given domain posts here, and drops everything until it is
// clicked. A localhost activation does NOT carry over to production -- submit
// once from the live domain and activate from that mail. Changing this address
// starts the same dance again.
const INBOX = 'sales@irisai.co.in'

const POINTS = [
  '20-minute live walkthrough',
  'Scan, pack, and pull the clip in Reports',
  'On-prem or cloud, same product',
]

export default function CTA() {
  const [status, setStatus] = useState('idle')
  const sent = status === 'sent'

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${INBOX}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      // FormSubmit answers 200 even when it drops the message (an inactivated
      // inbox, for one), so the body is what decides -- never res.ok alone.
      const data = await res.json().catch(() => null)
      const delivered = res.ok && data && String(data.success) === 'true'
      if (!delivered) throw new Error(data?.message || 'Submit failed')
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
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
                <input type="hidden" name="_subject" value="irisAI demo request" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
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
                <button className="btn btn-primary cta-submit" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Book a demo'}
                  <span aria-hidden="true">→</span>
                </button>
                {status === 'error' ? (
                  <p className="cta-form-error" role="alert">
                    Could not send just now. Please email <a href={`mailto:${INBOX}`}>{INBOX}</a> directly.
                  </p>
                ) : (
                  <p className="cta-form-note">No spam. We only use this to schedule your walkthrough.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
