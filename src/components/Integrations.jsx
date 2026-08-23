import { useLayoutEffect, useRef } from 'react'
import { IconPlug, IconCable, IconDevices } from './Icons.jsx'

const HUB = { x: 280, y: 292 }

const POINTS = [
  { id: 'scan', x: 280, y: 104, label: 'Barcode scanner', sub: 'Plugs in like a keyboard', glyph: 'scanner' },
  { id: 'cam1', x: 124, y: 198, label: 'Bench camera', sub: 'Packing station 01', glyph: 'dome' },
  { id: 'cam2', x: 436, y: 198, label: 'Bench camera', sub: 'Packing station 02', glyph: 'bullet' },
  { id: 'pc', x: 138, y: 412, label: 'Bench computer', sub: 'Desktop app or browser', glyph: 'desktop' },
  { id: 'droid', x: 422, y: 412, label: 'Packer phone', sub: 'Android app', glyph: 'phone' },
]

const CAPTIONS = [
  'Packer scans order #48213',
  'Cameras recording to the server',
  'Video filed under that order',
  'Ready to play in Reports',
]

// Node box: [pad][icon][gap][text][pad], three lines of type
const NODE = { padL: 11, ico: 35, gap: 11, padR: 15, h: 58 }
// Status pill: [pad][dot][gap][text][pad]
const PILL = { padL: 20, dot: 7, gap: 11, padR: 20, y: 458, h: 34 }

function linkPath(x, y) {
  return `M ${x} ${y} L ${HUB.x} ${HUB.y}`
}

/* Device icons drawn as real objects on a 32 grid: white camera housings, a
   dark rack with lit bays, glowing screens. Full colour rather than a tinted
   monochrome outline, so each one reads as the thing it is at 40px. */
function Glyph({ kind }) {
  if (kind === 'dome') {
    return (
      <g>
        <rect x="14.9" y="8.8" width="2.2" height="3.2" rx="0.6" fill="#78859c" />
        <ellipse cx="16" cy="15.1" rx="11.6" ry="2.5" fill="#a3afc2" />
        <ellipse cx="16" cy="14.3" rx="11.6" ry="2.5" fill="url(#icPlate)" />
        <path d="M4.4 15.1h23.2a11.6 8.2 0 0 1-23.2 0z" fill="url(#icBody)" />
        <path d="M4.4 15.1h23.2a11.6 8.2 0 0 1-23.2 0z" fill="none" stroke="#93a1b6" strokeWidth="0.55" />
        <path d="M6.4 15.1h19.2a9.6 6.6 0 0 1-4.6 5.5 9.6 6.6 0 0 0-10 0 9.6 6.6 0 0 1-4.6-5.5z" fill="#ffffff" opacity="0.42" />
        <circle cx="16" cy="18.6" r="2.9" fill="#28324a" />
        <circle cx="16" cy="18.6" r="1.95" fill="#0a101c" />
        <circle cx="16" cy="18.6" r="0.95" fill="#161f33" />
        <circle cx="15.1" cy="17.7" r="0.6" fill="#ffffff" opacity="0.55" />
        <circle cx="23.6" cy="17" r="0.7" fill="#4ade80" />
      </g>
    )
  }
  if (kind === 'bullet') {
    return (
      <g>
        <path d="M19.6 20.6v3" stroke="#78859c" strokeWidth="2.1" strokeLinecap="round" />
        <rect x="14.8" y="23" width="9.6" height="2.5" rx="1.25" fill="url(#icPlate)" />
        <rect x="4.6" y="12.9" width="4.6" height="6.2" rx="2.3" fill="#cdd7e6" />
        <rect x="8" y="11.4" width="16.6" height="9.2" rx="4.6" fill="url(#icBody)" />
        <path d="M7.4 11.1h12.4a4.4 4.4 0 0 1 4.4 4.4v0.2H7.4a0.7 0.7 0 0 1 0-2.6z" fill="#f4f7fc" />
        <path d="M7.4 11.1h12.4a4.4 4.4 0 0 1 4.4 4.4v0.2H7.4a0.7 0.7 0 0 1 0-2.6z" fill="none" stroke="#aab6ca" strokeWidth="0.5" />
        <ellipse cx="5.4" cy="16" rx="1.6" ry="3.1" fill="#28324a" />
        <ellipse cx="5.4" cy="16" rx="1" ry="2.1" fill="#080e18" />
        <ellipse cx="5.1" cy="15.1" rx="0.35" ry="0.6" fill="#ffffff" opacity="0.6" />
        <path d="M12.4 20.6v-9.2" stroke="#b8c3d5" strokeWidth="0.5" />
        <circle cx="21.2" cy="16.6" r="0.75" fill="#4ade80" />
      </g>
    )
  }
  if (kind === 'scanner') {
    return (
      <g>
        <rect x="4.4" y="6.6" width="23.2" height="18.8" rx="3.4" fill="url(#icPlate)" />
        <rect x="4.4" y="6.6" width="23.2" height="18.8" rx="3.4" fill="none" stroke="#9aa8bf" strokeWidth="0.9" />
        <g fill="#131a28">
          <rect x="7.8" y="10.2" width="1.9" height="11.6" rx="0.5" />
          <rect x="11" y="10.2" width="1" height="11.6" rx="0.4" />
          <rect x="13.4" y="10.2" width="2.2" height="11.6" rx="0.5" />
          <rect x="17" y="10.2" width="1" height="11.6" rx="0.4" />
          <rect x="19.4" y="10.2" width="1.9" height="11.6" rx="0.5" />
          <rect x="22.7" y="10.2" width="1.3" height="11.6" rx="0.4" />
        </g>
      </g>
    )
  }
  if (kind === 'desktop') {
    return (
      <g>
        <rect x="3.2" y="4.6" width="25.6" height="17" rx="2" fill="url(#icPlate)" />
        <rect x="4.8" y="6.1" width="22.4" height="14" rx="1.1" fill="url(#icScreen)" />
        <path d="M4.8 6.1h22.4v5.6l-22.4 8.4z" fill="#ffffff" opacity="0.13" />
        <path d="M13.3 21.6h5.4l1.3 4.3h-8z" fill="#b4c0d4" />
        <rect x="10.2" y="25.5" width="11.6" height="2.3" rx="1.15" fill="url(#icPlate)" />
      </g>
    )
  }
  if (kind === 'phone') {
    return (
      <g>
        <rect x="10.1" y="2.6" width="11.8" height="26.8" rx="3.4" fill="#20293a" />
        <rect x="10.1" y="2.6" width="11.8" height="26.8" rx="3.4" fill="none" stroke="#55637f" strokeWidth="0.85" />
        <rect x="11.4" y="5.2" width="9.2" height="21.6" rx="1.7" fill="url(#icPhone)" />
        <rect x="12.5" y="6.4" width="2.6" height="0.75" rx="0.37" fill="#ffffff" opacity="0.4" />
        <rect x="17.6" y="6.4" width="1.9" height="0.75" rx="0.37" fill="#ffffff" opacity="0.32" />
        <rect x="12.5" y="9" width="7" height="4.4" rx="1" fill="#ffffff" opacity="0.2" />
        <rect x="12.5" y="14.8" width="5.2" height="1.1" rx="0.55" fill="#ffffff" opacity="0.24" />
        <rect x="12.5" y="17.2" width="6.4" height="1.1" rx="0.55" fill="#ffffff" opacity="0.17" />
        <rect x="12.5" y="19.6" width="4.4" height="1.1" rx="0.55" fill="#ffffff" opacity="0.13" />
        <path d="M11.4 5.2h9.2v7.2l-9.2 6z" fill="#ffffff" opacity="0.07" />
        <rect x="14.3" y="3.5" width="3.4" height="0.8" rx="0.4" fill="#4c5a75" />
        <rect x="22.1" y="10.4" width="0.8" height="3.6" rx="0.4" fill="#4c5a75" />
      </g>
    )
  }
  // the rack at the centre of the board
  return (
    <g>
      <rect x="6.4" y="3.4" width="19.2" height="25.2" rx="2.6" fill="url(#icRack)" />
      <rect x="6.4" y="3.4" width="19.2" height="25.2" rx="2.6" fill="none" stroke="rgba(158,196,255,0.42)" strokeWidth="0.9" />
      <g>
        <rect x="8.8" y="6" width="14.4" height="5.6" rx="1.1" fill="rgba(255,255,255,0.07)" stroke="rgba(160,200,255,0.28)" strokeWidth="0.7" />
        <circle cx="11.2" cy="8.8" r="1" fill="#4ade80" />
        <path d="M13.8 8.8h7.2" stroke="rgba(170,205,255,0.55)" strokeWidth="1.2" strokeLinecap="round" />
      </g>
      <g>
        <rect x="8.8" y="13.2" width="14.4" height="5.6" rx="1.1" fill="rgba(255,255,255,0.07)" stroke="rgba(160,200,255,0.28)" strokeWidth="0.7" />
        <circle cx="11.2" cy="16" r="1" fill="#4ade80" />
        <path d="M13.8 16h7.2" stroke="rgba(170,205,255,0.55)" strokeWidth="1.2" strokeLinecap="round" />
      </g>
      <g>
        <rect x="8.8" y="20.4" width="14.4" height="5.6" rx="1.1" fill="rgba(255,255,255,0.07)" stroke="rgba(160,200,255,0.28)" strokeWidth="0.7" />
        <circle cx="11.2" cy="23.2" r="1" fill="#7eb8ff" />
        <path d="M13.8 23.2h7.2" stroke="rgba(170,205,255,0.55)" strokeWidth="1.2" strokeLinecap="round" />
      </g>
    </g>
  )
}

export default function Integrations() {
  const svgRef = useRef(null)
  const links = POINTS.map((p) => ({ ...p, d: linkPath(p.x, p.y) }))
  const wire = Object.fromEntries(links.map((l) => [l.id, l.d]))

  // SVG text neither wraps nor shrinks, and Inter arrives from the network after
  // first paint — so no width guessed at author time is ever right. Measure the
  // glyphs once the real font is in, then fit every box to what it actually got.
  useLayoutEffect(() => {
    const svg = svgRef.current
    if (!svg) return
    let cancelled = false

    const fit = () => {
      if (cancelled) return
      const width = (el) => {
        try {
          return el.getComputedTextLength()
        } catch {
          return el.getBBox().width
        }
      }

      svg.querySelectorAll('.intg-node').forEach((node) => {
        const cx = Number(node.dataset.cx)
        const cy = Number(node.dataset.cy)
        const box = node.querySelector('.intg-node-box')
        const glyph = node.querySelector('.intg-node-glyph')
        const label = node.querySelector('.intg-node-label')
        const sub = node.querySelector('.intg-node-sub')
        const state = node.querySelector('.intg-node-state')
        const dot = node.querySelector('.intg-node-dot')
        if (!box || !label || !sub || !state || !dot) return

        // the status line is inset by its own dot, so count that in its width
        const textW = Math.max(width(label), width(sub), width(state) + 12)
        const w = NODE.padL + NODE.ico + NODE.gap + textW + NODE.padR
        const left = cx - w / 2
        box.setAttribute('x', left.toFixed(1))
        box.setAttribute('width', w.toFixed(1))
        glyph.setAttribute('transform', `translate(${(left + NODE.padL).toFixed(1)} ${cy - NODE.ico / 2}) scale(${NODE.ico / 32})`)
        const textX = left + NODE.padL + NODE.ico + NODE.gap
        label.setAttribute('x', textX.toFixed(1))
        sub.setAttribute('x', textX.toFixed(1))
        dot.setAttribute('cx', (textX + 2.7).toFixed(1))
        state.setAttribute('x', (textX + 12).toFixed(1))

        // walk the wire out from the card centre and mark where it clears the box
        const id = [...node.classList].find((c) => c.startsWith('n-')).slice(2)
        const path = svg.querySelector(`.lk-${id}`)
        const tap = svg.querySelector(`.tap-${id}`)
        if (path && tap) {
          const total = path.getTotalLength()
          const top = cy - NODE.h / 2
          let at = 0
          for (let l = 0; l <= total; l += 2) {
            const pt = path.getPointAtLength(l)
            if (pt.x < left || pt.x > left + w || pt.y < top || pt.y > top + NODE.h) { at = l; break }
          }
          const pt = path.getPointAtLength(at)
          tap.setAttribute('cx', pt.x.toFixed(1))
          tap.setAttribute('cy', pt.y.toFixed(1))
        }
      })

      // the status pill morphs to each caption instead of sitting at one
      // worst-case width with the short lines rattling around inside it
      const pill = svg.querySelector('.intg-status-pill')
      svg.querySelectorAll('.intg-cap').forEach((cap, i) => {
        const text = cap.querySelector('text')
        const dot = cap.querySelector('.intg-cap-dot')
        if (!text || !dot || !pill) return
        const textW = width(text)
        const w = PILL.padL + PILL.dot + PILL.gap + textW + PILL.padR
        const left = HUB.x - w / 2
        dot.setAttribute('cx', (left + PILL.padL + PILL.dot / 2).toFixed(1))
        text.setAttribute('x', (left + PILL.padL + PILL.dot + PILL.gap).toFixed(1))
        pill.style.setProperty(`--w${i + 1}`, `${w.toFixed(1)}px`)
        pill.style.setProperty(`--x${i + 1}`, `${left.toFixed(1)}px`)
      })
    }

    fit()
    // and again once the webfont swaps in, since the metrics change under us
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit).catch(() => {})
    return () => { cancelled = true }
  }, [])

  return (
    <section className="sec intg-sec" id="setup">
      <div className="wrap">
        <div className="intg">
          <div className="intg-copy reveal">
            <p className="intg-eyebrow">Setup</p>
            <h2>
              Hardware and apps on <span className="acc">your network</span>
            </h2>
            <p className="lede">
              irisAI does not replace Shopify, ShipStation or your WMS. You scan the order
              numbers you already use. Run the server in your own warehouse when compliance
              demands it, or in the cloud when it does not.
            </p>

            <div className="int-list">
              <div className="int-item">
                <span className="int-item-ico"><IconPlug /></span>
                <div>
                  <h4>Order IDs you already scan</h4>
                  <p>Your existing order numbers, typed or scanned. Nothing to connect to Shopify or a carrier.</p>
                </div>
              </div>
              <div className="int-item">
                <span className="int-item-ico"><IconCable /></span>
                <div>
                  <h4>Standard security cameras</h4>
                  <p>Any security camera you can already view on screen. The server does the recording, not a browser tab.</p>
                </div>
              </div>
              <div className="int-item">
                <span className="int-item-ico"><IconDevices /></span>
                <div>
                  <h4>Bench computer or phone</h4>
                  <p>Pack from the desktop app or a browser at the bench, or from the Android app anywhere on warehouse Wi‑Fi.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="intg-net reveal">
            <div className="intg-net-glow" aria-hidden="true" />
            <svg
              ref={svgRef}
              className="intg-map"
              viewBox="0 0 560 540"
              role="img"
              aria-label="A pack in progress: the packer scans an order, the bench cameras record to the irisAI server, the video is filed under that order, and it plays back on the bench computer and the packer's phone. Devices stay on your warehouse network; the server runs on-prem or in your cloud."
            >
              <defs>
                <radialGradient id="intgHubHalo" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#5b9dff" stopOpacity="0.34" />
                  <stop offset="55%" stopColor="#5b9dff" stopOpacity="0.09" />
                  <stop offset="100%" stopColor="#5b9dff" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="intgHubEdge" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#a9c9ff" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#5b9dff" stopOpacity="0.25" />
                </linearGradient>
                <linearGradient id="intgNodeEdge" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.26" />
                  <stop offset="100%" stopColor="#5b9dff" stopOpacity="0.12" />
                </linearGradient>
                <linearGradient id="icBody" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="52%" stopColor="#e4ebf6" />
                  <stop offset="100%" stopColor="#b3c0d5" />
                </linearGradient>
                <linearGradient id="icPlate" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f5f8fc" />
                  <stop offset="100%" stopColor="#c4cfe0" />
                </linearGradient>
                <linearGradient id="icScreen" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#74bcff" />
                  <stop offset="52%" stopColor="#2f86e8" />
                  <stop offset="100%" stopColor="#1552ac" />
                </linearGradient>
                <linearGradient id="icPhone" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#4e9ae4" />
                  <stop offset="52%" stopColor="#2568b8" />
                  <stop offset="100%" stopColor="#123f7f" />
                </linearGradient>
                <linearGradient id="icRack" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b4664" />
                  <stop offset="100%" stopColor="#141a29" />
                </linearGradient>
              </defs>

              <rect className="intg-fence" x="16" y="16" width="528" height="508" rx="26" />
              <g className="intg-corner">
                <path d="M16 62V42a26 26 0 0 1 26-26h20" />
                <path d="M544 62V42a26 26 0 0 0-26-26h-20" />
                <path d="M16 478v20a26 26 0 0 0 26 26h20" />
                <path d="M544 478v20a26 26 0 0 1-26 26h-20" />
              </g>
              <text className="intg-fence-label" x="42" y="46">YOUR WAREHOUSE NETWORK</text>
              <text className="intg-fence-sub" x="42" y="63">Devices stay on your LAN · the server runs on-prem or in your cloud</text>

              <g className="intg-links">
                {links.map(({ id, d }) => (
                  <path key={id} className={`intg-link lk-${id}`} d={d} />
                ))}
              </g>
              <g className="intg-taps">
                {links.map(({ id }) => (
                  <circle key={`tap-${id}`} className={`intg-tap tap-${id}`} cx="0" cy="0" r="3.6" />
                ))}
              </g>

              <g className="intg-halo">
                <circle cx={HUB.x} cy={HUB.y} r="134" fill="url(#intgHubHalo)" />
                <circle className="intg-ring" cx={HUB.x} cy={HUB.y} r="90" />
                <circle className="intg-orbit" cx={HUB.x} cy={HUB.y} r="108" />
                <circle className="intg-pulse" cx={HUB.x} cy={HUB.y} r="66" />
                <circle className="intg-pulse two" cx={HUB.x} cy={HUB.y} r="66" />
              </g>

              {/* 1 — the scan leaves the packer's hand */}
              <circle className="intg-ripple" cx="280" cy="104" r="24" />
              <circle className="intg-pk pk-scan" cx="0" cy="0" r="3.6" style={{ offsetPath: `path("${wire.scan}")` }} />

              {/* 2 — the cameras stream while the pack is open */}
              <circle className="intg-pk pk-cam" cx="0" cy="0" r="3.2" style={{ offsetPath: `path("${wire.cam1}")` }} />
              <circle className="intg-pk pk-cam d2" cx="0" cy="0" r="3.2" style={{ offsetPath: `path("${wire.cam1}")` }} />
              <circle className="intg-pk pk-cam d1" cx="0" cy="0" r="3.2" style={{ offsetPath: `path("${wire.cam2}")` }} />
              <circle className="intg-pk pk-cam d3" cx="0" cy="0" r="3.2" style={{ offsetPath: `path("${wire.cam2}")` }} />

              {/* 4 — the filed clip plays back out to the bench and the phone */}
              <circle className="intg-pk pk-out" cx="0" cy="0" r="3.6" style={{ offsetPath: `path("${wire.pc}")` }} />
              <circle className="intg-pk pk-out late" cx="0" cy="0" r="3.6" style={{ offsetPath: `path("${wire.droid}")` }} />

              <g className="intg-hub">
                <rect className="intg-hub-box" x={HUB.x - 58} y={HUB.y - 54} width="116" height="108" rx="20" />
                <rect className="intg-hub-flash" x={HUB.x - 58} y={HUB.y - 54} width="116" height="108" rx="20" />
                <g className="intg-hub-glyph" transform={`translate(${HUB.x - 27} ${HUB.y - 48}) scale(1.7)`}>
                  <Glyph kind="rack" />
                </g>
                <text className="intg-hub-label" x={HUB.x} y={HUB.y + 24}>irisAI server</text>
                <g className="intg-live" transform={`translate(${HUB.x} ${HUB.y + 41})`}>
                  <circle className="intg-live-dot" cx="-31" cy="-3.5" r="3" />
                  <text x="4" y="0">Recording</text>
                </g>

                {/* 3 — the clip lands under the order number */}
                <g transform={`translate(${HUB.x + 46} ${HUB.y - 48})`}>
                  <g className="intg-filed">
                    <rect x="-27" y="-11" width="54" height="22" rx="11" />
                    <path className="intg-filed-tick" d="M-16 0.5l3.5 3.5 6.5-7.5" />
                    <text x="9" y="3.5">MP4</text>
                  </g>
                </g>
              </g>

              {links.map(({ id, x, y, label, sub, glyph }) => (
                <g className={`intg-node n-${id}`} key={id} data-cx={x} data-cy={y}>
                  <rect className="intg-node-box" x={x - 76} y={y - NODE.h / 2} width="152" height={NODE.h} rx="14" />
                  <g className="intg-node-glyph" transform={`translate(${x - 65} ${y - NODE.ico / 2}) scale(${NODE.ico / 32})`}>
                    <Glyph kind={glyph} />
                  </g>
                  <text className="intg-node-label" x={x - 19} y={y - 9}>{label}</text>
                  <text className="intg-node-sub" x={x - 19} y={y + 5}>{sub}</text>
                  <circle className="intg-node-dot" cx={x - 16} cy={y + 15} r="2.7" />
                  <text className="intg-node-state" x={x - 7} y={y + 18}>Connected</text>
                </g>
              ))}

              {/* what is happening right now, in words */}
              <g className="intg-status">
                <rect className="intg-status-pill" x="175" y={PILL.y} width="210" height={PILL.h} rx={PILL.h / 2} />
                {CAPTIONS.map((text, i) => (
                  <g className={`intg-cap c${i + 1}`} key={text}>
                    <circle className="intg-cap-dot" cx="200" cy={PILL.y + 17} r="3.5" />
                    <text x="216" y={PILL.y + 21}>{text}</text>
                  </g>
                ))}
              </g>

              <text className="intg-foot" x="280" y="512">Every recording filed under the order number you already scan</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
