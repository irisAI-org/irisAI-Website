import { IconHome, IconLock, IconUsers, IconVideo } from './Icons.jsx'

const CREDS = [
  [IconHome, 'Hosted your way', 'Keep the server and recordings on your own warehouse network, or run them in the cloud. You choose where video lives.'],
  [IconLock, 'In-app playback', 'Clips play inside irisAI with a scoped token for that recording. There is no public share link.'],
  [IconUsers, 'Role-based access', 'Packers see their own orders. Warehouse admins see the floor. Platform admins manage tenants.'],
  [IconVideo, 'Playable before complete', 'A pack is marked completed only if the MP4 is playable. Failed and cancelled packs stay visible.'],
]

export default function Credentials() {
  return (
    <section className="sec theme-light">
      <div className="wrap">
        <div className="creds-head reveal">
          <h2>How access actually works</h2>
          <p className="muted" style={{ marginTop: 14 }}>
            irisAI is built for a private packing LAN: JWT sessions, warehouse isolation, and an
            audit log of admin changes.
          </p>
        </div>
        <div className="creds">
          {CREDS.map(([Icon, title, desc]) => (
            <div className="cred reveal" key={title}>
              <div className="ic"><Icon /></div>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
