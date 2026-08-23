const POINTS = [
  'On-prem or cloud: your call, same product either way',
  'Web console, desktop station app, and Android packer on one server',
  'MP4s stored in your recordings folder, for as long as you need',
  'Recording starts when the order ID is scanned. No camera, no order',
  'Order numbers you already print and scan. No WMS import required',
  'Packer, warehouse admin, platform admin. Scoped to the floor',
]

const MOCK_ROWS = [
  ['Packed by', 'Alex M.'],
  ['Items', '4 scanned'],
  ['Video', 'Recorded & playable'],
]

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m6.2 10.2 2.2 2.2 5.4-5.6"
      />
    </svg>
  )
}

export default function Numbers() {
  return (
    <section className="sec shipped" id="shipped">
      <div className="wrap">
        <div className="shipped-panel reveal">
          <div className="shipped-panel-grid" aria-hidden="true" />

          <div className="shipped-panel-inner">
            <div className="shipped-copy">
              <h3>What a packing station gets</h3>
              <p className="shipped-intro">
                Bench cameras, scanners, and apps on your LAN. The server records when an order
                is scanned and files proof under that order number.
              </p>

              <ul className="shipped-list">
                {POINTS.map((line) => (
                  <li key={line}>
                    <span className="shipped-check" aria-hidden="true">
                      <CheckIcon />
                    </span>
                    {line}
                  </li>
                ))}
              </ul>

              <div className="shipped-actions">
                <a className="btn btn-primary shipped-btn" href="#cta">
                  Get started
                  <span aria-hidden="true">→</span>
                </a>
                <a className="btn btn-ghost shipped-btn" href="#features">
                  View features
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div className="shipped-visual" aria-hidden="true">
              <div className="shipped-glass shipped-glass-back" />
              <div className="shipped-glass shipped-glass-front">
                <div className="shipped-glass-head">
                  <span className="shipped-dots">
                    <i /><i /><i />
                  </span>
                  <span className="shipped-order-id">Order #48213</span>
                </div>
                <ul className="shipped-mock-rows">
                  {MOCK_ROWS.map(([k, v]) => (
                    <li key={k}>
                      <span className="shipped-mock-check">
                        <CheckIcon />
                      </span>
                      <span>
                        <strong>{k}:</strong> {v}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="shipped-audit">
                  <div className="shipped-audit-top">
                    <span>Audit trail</span>
                    <span>100%</span>
                  </div>
                  <div className="shipped-audit-bar">
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
