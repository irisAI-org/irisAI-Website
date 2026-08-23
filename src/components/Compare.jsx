const ROWS = [
  {
    topic: 'When a claim arrives',
    without: 'Scrub CCTV for the right aisle, camera, and time window.',
    with: 'Search the order number in Reports and play the packing recording.',
  },
  {
    topic: 'Proof tied to the order',
    without: 'Security footage is not filed under the order ID you already use.',
    with: 'Each completed pack is an MP4 stored under that order number.',
  },
  {
    topic: 'What went in the box',
    without: 'You rely on memory, notes, or guesswork when contents are disputed.',
    with: 'Every product scan is timestamped beside the video on that order.',
  },
  {
    topic: 'Dispute resolution',
    without: 'Managers lose hours exporting clips and rebuilding what happened.',
    with: 'Open the order, watch the clip, read the scan log. Answer from proof.',
  },
  {
    topic: 'Packs that never filed',
    without: 'A cancelled or failed pack can look shipped with no recording.',
    with: 'Failed and cancelled packs stay visible. Completed means the MP4 plays.',
  },
  {
    topic: 'Where video lives',
    without: 'Recordings sit in camera DVR folders, separate from your orders.',
    with: 'Video stays on your irisAI server, on your network or in the cloud.',
  },
]

function IconCross() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        d="M6.5 6.5l7 7M13.5 6.5l-7 7"
      />
    </svg>
  )
}

function IconCheck() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m5.5 10.2 2.6 2.6 6.4-6.8"
      />
    </svg>
  )
}

export default function Compare() {
  return (
    <section className="sec compare" id="compare">
      <div className="wrap compare-wrap">
        <header className="compare-head reveal">
          <div className="compare-head-main">
            <p className="compare-eyebrow">Compare</p>
            <h2>What Changes After irisAI</h2>
          </div>
          <p className="compare-lede">
            Same packing bench, same cameras. The difference is whether proof is filed to the
            order or left scattered across CCTV.
          </p>
        </header>

        <div className="compare-board reveal">
          <div className="compare-cols" aria-hidden="true">
            <span className="compare-col-label compare-col-label-topic">Situation</span>
            <span className="compare-col-label compare-col-label-without">Without irisAI</span>
            <span className="compare-col-label compare-col-label-with">With irisAI</span>
          </div>

          <div className="compare-mobile-head" aria-hidden="true">
            <div className="compare-mobile-head-cell is-without">
              <span className="compare-badge is-without"><IconCross /></span>
              <strong>Without irisAI</strong>
            </div>
            <div className="compare-mobile-head-cell is-with">
              <span className="compare-badge is-with"><IconCheck /></span>
              <strong>With irisAI</strong>
            </div>
          </div>

          <ul className="compare-rows">
            {ROWS.map(({ topic, without, with: withIris }) => (
              <li className="compare-row" key={topic}>
                <p className="compare-topic">{topic}</p>
                <div className="compare-pair">
                  <div className="compare-cell compare-cell-without">
                    <span className="compare-badge is-without" aria-hidden="true"><IconCross /></span>
                    <p>{without}</p>
                  </div>
                  <div className="compare-cell compare-cell-with">
                    <span className="compare-badge is-with" aria-hidden="true"><IconCheck /></span>
                    <p>{withIris}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
