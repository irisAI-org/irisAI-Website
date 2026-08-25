import Logo from './Logo.jsx'
import { IconLinkedIn, IconX, IconYouTube } from './Icons.jsx'

const COLS = [
  [
    'Product',
    [
      ['Packing recording', '#features'],
      ['How it works', '#how'],
      ['For managers', '#insights'],
      ['What changes', '#compare'],
      ['Why irisAI', '#why'],
      ['FAQs', '#faq'],
    ],
  ],
  [
    'Platform',
    [
      ['Warehouse network', '#setup'],
      ['Web console', '#setup'],
      ['Station desktop', '#setup'],
      ['Android packer', '#setup'],
    ],
  ],
]

const CARDS = [
  {
    title: 'Contact sales',
    href: '#cta',
    hint: 'Book a demo',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z"
        />
        <circle cx="12" cy="10" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
  {
    title: 'Help center',
    href: '#faq',
    hint: 'Setup & support',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 10.5a4 4 0 1 1 6.5 3.1c-.8.6-1.5 1.3-1.5 2.4M12 18.5h.01"
        />
        <rect x="4.5" y="3.5" width="15" height="17" rx="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
]

const META = ['On-prem or cloud', 'Your warehouse network', 'Order-linked MP4 proof']

function ArrowOut() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 14 14 6M8 6h6v6"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-main">
          <div className="foot-brand">
            <Logo href="#top" size="lg" />
            <p>
              Warehouse packing verification for private LANs. Cameras, scanners, and a recording
              server you run your way.
            </p>
            <div className="foot-social">
              <a href="#" aria-label="LinkedIn"><IconLinkedIn /></a>
              <a href="#" aria-label="X"><IconX /></a>
              <a href="#" aria-label="YouTube"><IconYouTube /></a>
            </div>
          </div>

          <div className="foot-cols">
            {COLS.map(([title, links]) => (
              <div className="foot-col" key={title}>
                <h3>{title}</h3>
                <ul>
                  {links.map(([label, href]) => (
                    <li key={label}>
                      <a href={href}>{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="foot-cards">
            {CARDS.map((card) => (
              <a className="foot-card" href={card.href} key={card.title}>
                <div className="foot-card-top">
                  <strong>{card.title}</strong>
                  <span className="foot-card-arrow" aria-hidden="true"><ArrowOut /></span>
                </div>
                <span className="foot-card-hint">{card.hint}</span>
                <span className="foot-card-ico" aria-hidden="true">{card.icon}</span>
              </a>
            ))}
          </div>
        </div>

        <ul className="foot-meta" aria-label="Deployment options">
          {META.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="foot-bot">
          <span>© 2026 irisAI · Powered by Aaryan Softlabs. All rights reserved.</span>
          <span>Built for the packing floor</span>
        </div>
      </div>
    </footer>
  )
}
