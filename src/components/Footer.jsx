import Logo from './Logo.jsx'
import { IconLinkedIn, IconX, IconYouTube } from './Icons.jsx'

const COLS = [
  ['Product', [['Packing recording', '#features'], ['Reports', '#features'], ['How it works', '#how'], ['Setup', '#setup']]],
  ['Company', [['Why irisAI', '#why'], ['Contact', '#cta']]],
  ['Apps', [['Web console', '#setup'], ['Station desktop', '#setup'], ['Android packer', '#setup']]],
  ['Legal', [['Privacy', '#'], ['Terms', '#'], ['Security', '#setup']]],
]

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="fgrid">
          <div className="fabout">
            <Logo />
            <p>
              Proof-of-pack video for warehouses. Scan the order, pack on camera, file the
              recording on your own server.
            </p>
            <div className="social">
              <a href="#" aria-label="LinkedIn"><IconLinkedIn /></a>
              <a href="#" aria-label="X"><IconX /></a>
              <a href="#" aria-label="YouTube"><IconYouTube /></a>
            </div>
          </div>
          {COLS.map(([title, links]) => (
            <div className="fcol" key={title}>
              <h5>{title}</h5>
              {links.map(([label, href]) => (
                <a href={href} key={label}>{label}</a>
              ))}
            </div>
          ))}
        </div>
        <div className="fbot">
          <span>© 2026 irisAI · Powered By Aaryan Softlabs. All rights reserved.</span>
          <span>Proof-of-pack video, on-prem or cloud</span>
        </div>
      </div>
    </footer>
  )
}
