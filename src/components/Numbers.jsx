const NUMS = [
  ['Your call', 'Run the recording server in your own warehouse, or let us host it. Same product either way.'],
  ['3 surfaces', 'Web console, desktop station app, Android packer app. One warehouse server.'],
  ['Your storage', 'MP4s sit in your own recordings folder, wherever the server runs. Keep them as long as you like.'],
  ['One scan', 'Recording starts when the order ID is scanned. No camera reachable, no order.'],
  ['Your IDs', 'Use the order numbers you already print and scan. No WMS import required.'],
  ['Roles', 'Packer, warehouse admin, platform admin. Packers only see their own recordings.'],
]

export default function Numbers() {
  return (
    <section className="sec numbers">
      <div className="wrap">
        <div className="how-head reveal">
          <h2>
            irisAI <span className="acc">as shipped</span>
          </h2>
          <p>What actually ships for a packing station: cameras, scanners, and a recording server.</p>
        </div>
        <div className="numgrid">
          {NUMS.map(([n, l]) => (
            <div className="num reveal" key={n}>
              <div className="n">{n}</div>
              <div className="l">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
