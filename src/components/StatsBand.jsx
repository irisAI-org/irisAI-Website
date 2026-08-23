import { useEffect, useRef, useState } from 'react'

const STATS = [
  ['Your choice', 'On-prem or cloud, same product'],
  ['LAN', 'Cameras and clients on your network'],
  ['Gated', 'No camera, no order starts'],
  ['Playable', 'A pack completes only if the MP4 plays'],
]

export default function StatsBand() {
  const bandRef = useRef(null)

  return (
    <div className="statsband" id="why" ref={bandRef}>
      <div className="statsband-grid" aria-hidden="true" />
      <div className="statsband-glow" aria-hidden="true" />
      <GlowArc containerRef={bandRef} />
      <section className="sec stats-sec">
        <div className="wrap stats-wrap">
          <div className="stats-layout">
            <div className="stats-main">
              <div className="stats-head reveal">
                <h2>
                  When a claim arrives,<br />
                  watch the pack that actually shipped
                </h2>
                <p className="stats-lede">
                  irisAI does not guess what went in the box. It keeps the recording and the scan
                  log for that order. Failed or cancelled packs stay visible so the floor can see
                  what did not file, not a fake 100% claim.
                </p>
              </div>

              <div className="stats-metrics reveal">
                {STATS.map(([n, l]) => (
                  <div className="stats-metric" key={l}>
                    <div className="stats-metric-bar" aria-hidden="true" />
                    <div>
                      <div className="stats-metric-n">{n}</div>
                      <div className="stats-metric-l">{l}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="stats-proof-card reveal">
              <div className="stats-proof-card-glow" aria-hidden="true" />
              <p className="stats-proof-k">Short-ship escalation</p>
              <p className="stats-proof-text">
                When a buyer escalates a short-ship claim, open that order in Reports. The packing
                video plays with every product barcode scanned during the pack, timestamped on the
                clip.
              </p>
              <p className="stats-proof-foot">You answer the escalation from proof, not from memory.</p>
              <ul className="stats-proof-meta">
                <li>
                  <span>Packing video</span>
                  <em>Order-linked MP4</em>
                </li>
                <li>
                  <span>Scan log</span>
                  <em>Barcodes on the clip</em>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}

function buildArcPaths(w, h) {
  const y0 = h
  const yGhost = h * 0.985
  // Single cubic: flat tangent at bottom-left, smooth sweep to top-right (no segment kink)
  const main = [
    `M 0 ${y0}`,
    `C ${w * 0.58} ${y0}, ${w * 0.82} ${h * 0.16}, ${w} 0`,
  ].join(' ')
  const ghost = [
    `M 0 ${yGhost}`,
    `C ${w * 0.58} ${yGhost}, ${w * 0.82} ${h * 0.145}, ${w} ${h * 0.008}`,
  ].join(' ')
  return { main, ghost }
}

function GlowArc({ containerRef }) {
  const [size, setSize] = useState({ w: 1440, h: 720 })

  useEffect(() => {
    const el = containerRef.current
    if (!el) return undefined

    const update = () => {
      const { width, height } = el.getBoundingClientRect()
      if (width > 0 && height > 0) {
        setSize({ w: Math.round(width), h: Math.round(height) })
      }
    }

    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    window.addEventListener('resize', update)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [containerRef])

  const { main, ghost } = buildArcPaths(size.w, size.h)

  return (
    <svg
      className="stats-arc"
      viewBox={`0 0 ${size.w} ${size.h}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="statsArcStroke" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4d8ef5" stopOpacity="0.06" />
          <stop offset="25%" stopColor="#5fa0ff" stopOpacity="0.3" />
          <stop offset="52%" stopColor="#6eb4ff" stopOpacity="0.75" />
          <stop offset="78%" stopColor="#9ecfff" stopOpacity="0.98" />
          <stop offset="100%" stopColor="#e8f4ff" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="statsArcGhost" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5b9dff" stopOpacity="0" />
          <stop offset="45%" stopColor="#5b9dff" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#8ec8ff" stopOpacity="0.2" />
        </linearGradient>
        <filter id="statsArcGlow" x="-8%" y="-25%" width="116%" height="150%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path d={main} fill="none" stroke="rgba(91, 157, 255, 0.09)" strokeWidth="10" strokeLinecap="round" />
      <path
        d={ghost}
        fill="none"
        stroke="url(#statsArcGhost)"
        strokeWidth="1"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <path d={main} fill="none" stroke="rgba(140, 190, 255, 0.24)" strokeWidth="3.5" strokeLinecap="round" />
      <path
        className="stats-arc-line"
        d={main}
        fill="none"
        stroke="url(#statsArcStroke)"
        strokeWidth="1.25"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        filter="url(#statsArcGlow)"
      />
    </svg>
  )
}
