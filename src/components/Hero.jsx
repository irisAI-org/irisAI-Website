import { useEffect, useState } from 'react'
import { IconScan, IconVideo, IconPhone, IconDevices, IconCable, IconLock } from './Icons.jsx'

const STATS = [
  ['Finished Scans', '2', 'All time'],
  ['Avg Pack Time', '1:15', 'Across timed orders'],
  ['Fastest', '0:19', 'Shortest recording'],
  ['Slowest', '2:10', 'Longest recording'],
]

const REPORT_STATS = [
  ['Finished Scans', '370', 'All time'],
  ['Avg Pack Time', '1:56', 'Across timed orders'],
  ['Fastest', '0:01', 'Shortest recording'],
  ['Slowest', '9:57', 'Longest recording'],
]

const REPORT_ORDERS = [
  ['48213', '1:28', 'Akash Yadav', 'Today, 16:02', 'Completed'],
  ['48190', '0:54', 'Akash Yadav', 'Today, 15:41', 'Completed'],
  ['48176', '2:10', 'Akash Yadav', 'Today, 14:08', 'Completed'],
  ['48151', '1:02', 'Akash Yadav', 'Yesterday, 18:22', 'Completed'],
]

const TABS = [
  { id: 'station', label: 'Packing station', Icon: IconScan },
  { id: 'reports', label: 'Reports', Icon: IconVideo },
  { id: 'android', label: 'Android packer', Icon: IconPhone },
]

function AppChrome({ active, children }) {
  return (
    <div className="app-mock" aria-hidden="true">
      <header className="am-bar">
        <div className="am-brand">
          <img src="/brand/iris_Logo.png" alt="" width="36" height="29" />
          <span>
            <b>iris<span>AI</span></b>
            Powered By Aaryan Softlabs
          </span>
        </div>
        <nav className="am-pills">
          <span className={active === 'Dashboard' ? 'on' : ''}>Dashboard</span>
          <span className={active === 'Camera Config' ? 'on' : ''}>Camera Config</span>
          <span className={active === 'My Reports' ? 'on' : ''}>My Reports</span>
        </nav>
        <div className="am-user">
          <span>
            <b>Akash Yadav</b>
            Packer
          </span>
          <i>AY</i>
        </div>
      </header>
      <div className="am-body">{children}</div>
    </div>
  )
}

const SCANNED = [
  ['890123456001', '18:00:54', true],
  ['890123456002', '18:00:41', false],
  ['890123456003', '18:00:22', false],
]

function StationPreview() {
  return (
    <AppChrome active="Dashboard">
      <section className="ps">
        <div className="ps-head">
          <div>
            <div className="ps-meta">
              <span>Step 2 of 3 · Scan products</span>
              <em>Station 1</em>
            </div>
            <strong className="ps-oid">124543313131</strong>
          </div>
          <div className="ps-badges">
            <span className="ps-cam"><i /> Camera online</span>
            <span className="ps-rec"><i /> REC 0:59</span>
          </div>
        </div>

        <div className="ps-grid">
          <div className="ps-live">
            <div className="ps-live-top">
              <span>Live recording</span>
              <em>Saved with this order</em>
            </div>
            <div className="ps-feed">
              <img src="/images/station-table.png" alt="" />
              <span className="ps-live-pill"><i /> Live</span>
            </div>
          </div>

          <div className="ps-side">
            <div className="ps-scan">
              <div className="ps-scan-top">
                <strong>Scan next product</strong>
                <em>Scanner ready</em>
              </div>
              <div className="ps-scan-row">
                <span className="ps-input">Aim scanner here, or type barcode</span>
                <span className="ps-add">Add</span>
              </div>
              <p>Most USB scanners press Enter automatically after each scan.</p>
            </div>

            <div className="ps-list">
              <div className="ps-list-top">
                <strong>Scanned products</strong>
                <b>3</b>
              </div>
              <ul>
                {SCANNED.map(([code, time, latest], i) => (
                  <li key={code} className={latest ? 'on' : ''}>
                    <span className="ps-n">{3 - i}</span>
                    <div>
                      <strong>{code}</strong>
                      <em>{time}{latest ? ' · Latest' : ''}</em>
                    </div>
                    <svg className="ps-ok" viewBox="0 0 24 24" aria-hidden>
                      <circle cx="12" cy="12" r="9" fill="none" stroke="#22c55e" strokeWidth="2" />
                      <path fill="none" stroke="#22c55e" strokeWidth="2.2" d="m8 12.2 2.4 2.4 5.4-5.6" />
                    </svg>
                    <svg className="ps-x" viewBox="0 0 24 24" aria-hidden>
                      <path fill="none" stroke="#ef4444" strokeWidth="2" d="M8 8l8 8M16 8l-8 8" />
                    </svg>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="ps-foot">
          <div>
            <strong>3 products ready</strong>
            <p>When the parcel is complete, finish to stop recording (Step 3).</p>
          </div>
          <div className="ps-actions">
            <span className="ps-cancel">Cancel order</span>
            <span className="ps-finish">Finish packing</span>
          </div>
        </div>
      </section>

      <div className="am-stats">
        {STATS.map(([label, value, hint]) => (
          <div key={label} className="am-stat">
            <b>{value}</b>
            <span>{label}</span>
            <small>{hint}</small>
          </div>
        ))}
      </div>
    </AppChrome>
  )
}

function ReportsPreview() {
  return (
    <AppChrome active="My Reports">
      <div className="am-pagehead">
        <h3>My Reports</h3>
        <p>Every recording you packed. Only your own scans are shown here.</p>
      </div>
      <div className="am-stats">
        {REPORT_STATS.map(([label, value, hint]) => (
          <div key={label} className="am-stat">
            <b>{value}</b>
            <span>{label}</span>
            <small>{hint}</small>
          </div>
        ))}
      </div>
      <OrdersBlock
        title="Completed Orders"
        subtitle="Every finished scan, most recent first."
        rows={REPORT_ORDERS}
      />
    </AppChrome>
  )
}

function AndroidPreview() {
  return (
    <div className="app-mock am-android">
      <div className="ama-stage" aria-hidden="true">
        <div className="ama-halo" />
        <div className="mapp-bezel">
          <div className="mapp-canvas">
            <div className="mapp-screen">
              <div className="mapp-status">
                <span>9:41</span>
                <span className="mapp-sys">LTE  74%</span>
              </div>

              <header className="mapp-head">
                <img className="mapp-logo" src="/product/Logo_No_BG.png" alt="" />
                <div className="mapp-hi">
                  <strong>Hello, Akash</strong>
                  <span>Ready to pack today?</span>
                </div>
                <span className="mapp-avatar">AY<i /></span>
              </header>

              <div className="mapp-hero">
                <img src="/product/HomeBG.png" alt="" />
                <div className="mapp-hero-copy">
                  <h3>Start a New Packing Session</h3>
                  <p>Record, pack and ship with confidence.</p>
                  <span className="mapp-start">
                    <em>START PACKING</em>
                    <b>→</b>
                  </span>
                </div>
              </div>

              <div className="mapp-features">
                <article className="mapp-feat">
                  <span className="mapp-feat-ico warm">
                    <svg viewBox="0 0 24 24" aria-hidden>
                      <path fill="none" stroke="currentColor" strokeWidth="1.8" d="M7 7h10v13H7z" />
                      <path fill="none" stroke="currentColor" strokeWidth="1.8" d="M9 7V5.8A1.8 1.8 0 0 1 10.8 4h2.4A1.8 1.8 0 0 1 15 5.8V7M9.5 11h5M9.5 14.5h3.5" />
                    </svg>
                  </span>
                  <strong>Recent Orders</strong>
                  <p>Continue your recent packing history.</p>
                  <span className="mapp-feat-btn warm">View Orders ›</span>
                </article>
                <article className="mapp-feat">
                  <span className="mapp-feat-ico cool">
                    <svg viewBox="0 0 24 24" aria-hidden>
                      <path fill="none" stroke="currentColor" strokeWidth="1.8" d="M12 3.5 5.5 6.2v5.2c0 3.7 2.6 6.9 6.5 8.1 3.9-1.2 6.5-4.4 6.5-8.1V6.2L12 3.5Z" />
                      <path fill="none" stroke="currentColor" strokeWidth="1.8" d="m9 12 2.1 2.1L15.2 10" />
                    </svg>
                  </span>
                  <strong>System Status</strong>
                  <p>Check API, camera and device setup.</p>
                  <span className="mapp-feat-btn cool">Check Status ›</span>
                </article>
              </div>

              <div className="mapp-overview">
                <strong>Today’s Overview</strong>
                <p>Real-time packing performance</p>
                <div className="mapp-metrics">
                  <div>
                    <i className="warm">
                      <svg viewBox="0 0 24 24" aria-hidden>
                        <path fill="none" stroke="currentColor" strokeWidth="1.8" d="M4.5 8.5h15v11h-15zM8 8.5V6.2A2.2 2.2 0 0 1 10.2 4h3.6A2.2 2.2 0 0 1 16 6.2v2.3" />
                      </svg>
                    </i>
                    <b>2</b>
                    Completed
                  </div>
                  <div>
                    <i className="cool">
                      <svg viewBox="0 0 24 24" aria-hidden>
                        <circle cx="12" cy="13" r="7" fill="none" stroke="currentColor" strokeWidth="1.8" />
                        <path fill="none" stroke="currentColor" strokeWidth="1.8" d="M12 13V9.5M12 13l3 2M9.5 4h5" />
                      </svg>
                    </i>
                    <b>2m 10s</b>
                    Avg Time
                  </div>
                  <div>
                    <i className="warm">
                      <svg viewBox="0 0 24 24" aria-hidden>
                        <path fill="none" stroke="currentColor" strokeWidth="1.8" d="M4.5 12a7.5 7.5 0 0 1 12.4-5.7M19.5 12a7.5 7.5 0 0 1-12.4 5.7" />
                        <path fill="none" stroke="currentColor" strokeWidth="1.8" d="M16.8 4.8v3.2h-3.2M7.2 19.2v-3.2h3.2" />
                      </svg>
                    </i>
                    <b>0</b>
                    In Progress
                  </div>
                  <div>
                    <i className="cool">
                      <svg viewBox="0 0 24 24" aria-hidden>
                        <path fill="currentColor" d="M13 3 6.5 13h4.2L11 21 17.5 11h-4.2L13 3Z" />
                      </svg>
                    </i>
                    <b>59s</b>
                    Fastest
                  </div>
                </div>
                <span className="mapp-analytics">
                  <em>VIEW DETAILED ANALYTICS</em>
                  <b>→</b>
                </span>
              </div>
            </div>

            <nav className="mapp-tabs">
              <span className="on">
                <svg viewBox="0 0 24 24" aria-hidden><path fill="currentColor" d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z"/></svg>
                Home
              </span>
              <span>
                <svg viewBox="0 0 24 24" aria-hidden><path fill="none" stroke="currentColor" strokeWidth="1.8" d="M7 4.5H5.5A1.5 1.5 0 0 0 4 6v1.5M17 4.5h1.5A1.5 1.5 0 0 1 20 6v1.5M7 19.5H5.5A1.5 1.5 0 0 1 4 18v-1.5M17 19.5h1.5a1.5 1.5 0 0 0 1.5-1.5v-1.5"/><rect x="7.5" y="8" width="9" height="8" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.8"/></svg>
                Scan
              </span>
              <span>
                <svg viewBox="0 0 24 24" aria-hidden><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.8"/><path fill="none" stroke="currentColor" strokeWidth="1.8" d="M12 8v4l3 2"/></svg>
                History
              </span>
              <span>
                <svg viewBox="0 0 24 24" aria-hidden><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.8"/><path fill="none" stroke="currentColor" strokeWidth="1.8" d="M12 4.5v1.5M12 18v1.5M4.5 12H6M18 12h1.5M6.6 6.6l1.1 1.1M16.3 16.3l1.1 1.1M17.4 6.6l-1.1 1.1M7.7 16.3l-1.1 1.1"/></svg>
                Settings
              </span>
            </nav>

            <div className="mapp-androidbar">
              <span>◁</span>
              <span>○</span>
              <span>□</span>
            </div>
          </div>
        </div>
      </div>

      <aside className="ama-pitch">
        <span className="ama-eyebrow">
          <IconPhone />
          Android packer app
        </span>

        <h3>
          The scanner already in <em>their hand</em>
        </h3>
        <p className="ama-lead">
          The packer scans the order barcode, then every item that goes in the box. The
          warehouse camera does the recording. The phone’s job is to tell the server which
          order is on film right now.
        </p>

        <div className="ama-highlight">
          <span className="ama-highlight-ico">
            <IconDevices />
          </span>
          <div>
            <strong>Installs on the handheld scanners you already own</strong>
            <p>
              It ships as an ordinary Android app, so it goes straight onto the rugged
              handhelds your team already carries on the floor. Nothing new to buy, no extra
              cost per station.
            </p>
          </div>
        </div>

        <ul className="ama-points">
          <li>
            <span className="ama-point-ico">
              <IconScan />
            </span>
            <div>
              <strong>A whole parcel without leaving the camera</strong>
              <p>
                Continuous scanning, a buzz on every code the server accepts, and duplicates
                ignored so one barcode never lands twice.
              </p>
            </div>
          </li>
          <li>
            <span className="ama-point-ico">
              <IconCable />
            </span>
            <div>
              <strong>Points at your own server</strong>
              <p>
                Set the server address per device. Run it on-prem and nothing ever leaves the
                network it was made on.
              </p>
            </div>
          </li>
          <li>
            <span className="ama-point-ico">
              <IconLock />
            </span>
            <div>
              <strong>Four permissions, and that is all</strong>
              <p>
                Camera and vibration to scan, network to reach your server. No microphone, no
                location, no personal account.
              </p>
            </div>
          </li>
        </ul>
      </aside>
    </div>
  )
}

function OrdersBlock({ title, subtitle, rows }) {
  return (
    <section className="am-orders">
      <div className="am-orders-top">
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <span className="am-search">Search order ID or operator...</span>
      </div>
      <table>
        <thead>
          <tr>
            <th>Preview</th>
            <th>Order ID</th>
            <th>Video duration</th>
            <th>Operator</th>
            <th>Completed at</th>
            <th>Outcome</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([id, dur, op, when, outcome]) => (
            <tr key={id}>
              <td>
                <span className="am-thumb">
                  <img src="/images/station-table.png" alt="" />
                </span>
              </td>
              <td className="oid">#{id}</td>
              <td>{dur}</td>
              <td>{op}</td>
              <td>{when}</td>
              <td><span className="badge ok">{outcome}</span></td>
              <td>
                <span className="am-act">Details</span>
                <span className="am-act">Play</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default function Hero() {
  const [tab, setTab] = useState('station')
  const [paused, setPaused] = useState(false)
  const [cycle, setCycle] = useState(0)

  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ids = TABS.map((t) => t.id)
    const timer = window.setInterval(() => {
      setTab((current) => ids[(ids.indexOf(current) + 1) % ids.length])
    }, 5000)

    return () => window.clearInterval(timer)
  }, [paused, cycle])

  function pick(id) {
    setTab(id)
    setCycle((n) => n + 1)
  }

  return (
    <section className="hero" id="top">
      <div className="hero-glow" />
      <div className="hero-grid" />
      <div className="wrap">
        <div className="hero-copy">
          <div className="hero-main">
            <h1>
              Turn every order packed into <span className="pill-hl">proof</span>
            </h1>
            <p className="sub">
              Packing video tied to the order number you already scan. Run it on your own
              warehouse server, or in the cloud. Recover claims from the recording, not from CCTV.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#cta">Book a demo</a>
              <a className="btn btn-ghost" href="#how">See how it works</a>
            </div>
            <p className="hero-meta">On-prem or cloud · Works with your cameras · Android packer app</p>
          </div>

          <div
            className="hero-switch"
            role="tablist"
            aria-label="Product views"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false)
            }}
          >
            {TABS.map(({ id, label, Icon }) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={tab === id}
                className={tab === id ? 'on' : ''}
                onClick={() => pick(id)}
              >
                <Icon />
                {label}
              </button>
            ))}
          </div>
        </div>

        <div
          className="hero-preview"
          onMouseOver={() => setPaused(true)}
          onMouseOut={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false)
          }}
        >
          <div className={`hero-pane ${tab === 'station' ? 'on' : ''}`}>
            <div className="hero-scale">
              <StationPreview />
            </div>
          </div>
          <div className={`hero-pane ${tab === 'reports' ? 'on' : ''}`}>
            <div className="hero-scale">
              <ReportsPreview />
            </div>
          </div>
          <div className={`hero-pane ${tab === 'android' ? 'on' : ''}`}>
            <div className="hero-scale">
              <AndroidPreview />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
