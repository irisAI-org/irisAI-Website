import { useState } from 'react'
import { IconVideo, IconScan, IconSearch } from './Icons.jsx'

const PACKING_IMG = '/images/Packing.png'

const TABS = [
  {
    k: 'video',
    Icon: IconVideo,
    title: 'Packing recording',
    body: 'Scan the order number and the server starts recording from the station camera. If the camera is unreachable, the order does not start. Finish only files a completed pack when the MP4 is playable.',
    stat: 'No camera, no order',
    cardK: 'Recording filed',
    cardT: 'Order #48213 completed',
    cardD: 'Playable MP4 on your warehouse drives, tied to this order, station and packer.',
  },
  {
    k: 'scans',
    Icon: IconScan,
    title: 'Timestamped barcode log',
    body: 'As you pack, scan each item. irisAI stores the barcode and the time it was scanned beside the video: evidence of what went through the station, not a pick-list checker.',
    stat: 'Scans sit next to the clip',
    cardK: 'Scanned products',
    cardT: '4 barcodes logged',
    cardD: 'Each scan is timestamped on the order. Mis-scans can be removed while recording is still live.',
  },
  {
    k: 'reports',
    Icon: IconSearch,
    title: 'Search & playback',
    body: 'Open Reports, type the order number, and watch the packing recording. Admins see the warehouse. Packers see their own orders. Playback stays in the app. No public share link.',
    stat: 'Find it by order number',
    cardK: 'Packing recording',
    cardT: 'Play from Reports',
    cardD: 'Order details show the clip plus the scan list. Scoped tokens keep the stream tied to that recording.',
  },
]

const SCAN_ROWS = [
  ['890123456001', '18:00:54', true],
  ['890123456002', '18:00:41', false],
  ['890123456003', '18:00:22', false],
  ['890123456004', '17:59:58', false],
]

const REPORT_ROWS = [
  ['48213', '1:28', 'Completed'],
  ['48190', '0:54', 'Completed'],
  ['48176', '2:10', 'Completed'],
]

function FeatVisual({ tab }) {
  return (
    <div className="feat-stage" key={tab.k}>
      <div className={`feat-ui feat-ui-${tab.k}`}>
        {tab.k === 'video' && (
          <>
            <div className="feat-ui-head">
              <span>Live recording</span>
              <em>Saved with order #48213</em>
            </div>
            <div className="feat-ui-feed">
              <img src={PACKING_IMG} alt="Warehouse packing station" />
              <span className="feat-live"><i /> Live</span>
              <div className="feat-proof">
                <p className="feat-proof-k">{tab.cardK}</p>
                <h4>{tab.cardT}</h4>
                <p>{tab.cardD}</p>
              </div>
            </div>
            <div className="feat-ui-foot">
              <div>
                <strong>Camera online</strong>
                <span>Bench camera · live</span>
              </div>
              <span className="feat-ui-pill">Finish when playable</span>
            </div>
          </>
        )}

        {tab.k === 'scans' && (
          <>
            <div className="feat-ui-head">
              <span>Scanned products</span>
              <em>4 logged on this order</em>
            </div>
            <ul className="feat-scan-list">
              {SCAN_ROWS.map(([code, time, latest]) => (
                <li key={code} className={latest ? 'on' : ''}>
                  <span className="feat-scan-code">{code}</span>
                  <span className="feat-scan-time">{time}{latest ? ' · Latest' : ''}</span>
                </li>
              ))}
            </ul>
            <div className="feat-ui-foot">
              <div>
                <strong>Timestamped beside video</strong>
                <span>Each scan tied to the recording</span>
              </div>
            </div>
          </>
        )}

        {tab.k === 'reports' && (
          <>
            <div className="feat-ui-head">
              <span>My Reports</span>
              <em>Search by order number</em>
            </div>
            <div className="feat-search">
              <IconSearch />
              <span>48213</span>
            </div>
            <table className="feat-table">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Duration</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {REPORT_ROWS.map(([order, dur, status]) => (
                  <tr key={order} className={order === '48213' ? 'on' : ''}>
                    <td>#{order}</td>
                    <td>{dur}</td>
                    <td><span>{status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="feat-playback">
              <div className="feat-playback-top">
                <strong>Order #48213</strong>
                <span>Play packing recording</span>
              </div>
              <div className="feat-playback-bar">
                <span />
              </div>
            </div>
          </>
        )}

        {tab.k !== 'video' && (
          <div className="feat-proof">
            <p className="feat-proof-k">{tab.cardK}</p>
            <h4>{tab.cardT}</h4>
            <p>{tab.cardD}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Features() {
  const [i, setI] = useState(0)
  const tab = TABS[i]

  return (
    <section className="sec feat" id="features">
      <div className="feat-glow" aria-hidden="true" />
      <div className="wrap">
        <div className="feat-layout">
          <div className="feat-copy reveal">
            <h2>
              Complete packing accountability<br />
              with <span className="acc">verifiable evidence.</span>
            </h2>
            <p className="feat-lede">
              Stop scrubbing hours of CCTV. Every completed pack becomes a searchable recording
              on your own server, from the scan that starts it to the finish that files it.
            </p>

            <div className="feat-list" role="tablist" aria-label="Platform features">
              {TABS.map((item, n) => {
                const Icon = item.Icon
                const on = n === i
                return (
                  <button
                    key={item.k}
                    type="button"
                    role="tab"
                    aria-selected={on}
                    className={on ? 'on' : ''}
                    onClick={() => setI(n)}
                  >
                    <span className="feat-list-ico" aria-hidden="true">
                      <Icon />
                    </span>
                    <span className="feat-list-body">
                      <strong>{item.title}</strong>
                      {on && <span>{item.body}</span>}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="feat-visual reveal">
            <FeatVisual tab={tab} />
          </div>
        </div>
      </div>
    </section>
  )
}
