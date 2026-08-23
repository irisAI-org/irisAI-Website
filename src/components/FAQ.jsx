import { useState } from 'react'

const ITEMS = [
  {
    q: 'Does irisAI need internet to work?',
    a: 'No. Packing stations only need to reach your irisAI server on the warehouse network. Run the server on-prem and everything stays on that LAN. Cloud is optional if you prefer it.',
  },
  {
    q: 'Do we need new cameras or scanners?',
    a: 'Usually not. irisAI works with the bench cameras and USB or handheld scanners you already use. The Android packer installs on the rugged handhelds your team already carries.',
  },
  {
    q: 'Does it replace Shopify, ShipStation, or our WMS?',
    a: 'No. You scan the order numbers you already print. irisAI does not import catalogs or connect to carriers. It records the pack and files proof under that order ID.',
  },
  {
    q: 'Where do the packing videos live?',
    a: 'On your irisAI server, in your recordings folder. Each completed pack is a playable MP4 tied to the order number, kept for as long as you configure retention.',
  },
  {
    q: 'What if the camera is offline when packing starts?',
    a: 'The order does not start. Recording only begins when the station camera is reachable, so you never end up with a “packed” order that has no film.',
  },
  {
    q: 'How do we find a clip when a claim arrives?',
    a: 'Open Reports, search the order number, and play the packing recording. Product scans for that pack are timestamped beside the video.',
  },
  {
    q: 'On-prem or cloud: which should we choose?',
    a: 'Same product either way. Choose on-prem when video must stay on your network. Choose cloud when you want the server hosted for you. Stations still talk to that server over your network.',
  },
  {
    q: 'Who can watch packing recordings?',
    a: 'Access follows your roles: packers work the station, warehouse admins review Reports, and platform admins manage the server. Proof stays scoped to people who need it on the floor.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  const toggle = (i) => {
    setOpen((cur) => (cur === i ? -1 : i))
  }

  return (
    <section className="sec faq" id="faq">
      <div className="wrap">
        <header className="faq-head reveal">
          <p className="faq-eyebrow">FAQ</p>
          <h2>Questions teams ask before they deploy</h2>
          <p className="faq-lede">
            Straight answers on network, cameras, storage, and what irisAI does and does not
            replace on the packing floor.
          </p>
        </header>

        <div className="faq-grid reveal">
          {ITEMS.map((item, i) => {
            const isOpen = open === i
            const n = String(i + 1).padStart(2, '0')
            return (
              <div className={`faq-item${isOpen ? ' open' : ''}`} key={item.q}>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  id={`faq-q-${i}`}
                  onClick={() => toggle(i)}
                >
                  <span className="faq-num">{n}</span>
                  <span className="faq-q-text">{item.q}</span>
                  <span className="faq-icon" aria-hidden="true">
                    <svg viewBox="0 0 20 20">
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m6 8 4 4 4-4"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className="faq-a"
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  hidden={!isOpen}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
