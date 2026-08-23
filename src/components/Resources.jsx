const POSTS = [
  ['/images/resource-1.jpg', 'Deployment', 'On-prem or cloud: how to choose', 'Compliance, camera bandwidth and who audits you decide it. The same irisAI runs either way, so the decision stays yours.'],
  ['/images/resource-2.jpg', 'Disputes', 'CCTV vs an order-linked recording', 'Searching hours of security footage is the old path. irisAI files the pack against the order ID you already scan.'],
  ['/images/resource-3.jpg', 'Mobile', 'Pack from a phone on warehouse Wi‑Fi', 'The Android app scans barcodes with the phone camera. The bench camera still does the recording.'],
]

export default function Resources() {
  return (
    <section className="sec" id="resources">
      <div className="wrap">
        <div className="res-head reveal">
          <h2>
            How teams <span className="acc">use irisAI</span>
          </h2>
        </div>
        <div className="rgrid">
          {POSTS.map(([img, tag, title, desc]) => (
            <article className="rc reveal" key={title}>
              <div className="thumb">
                <img src={img} alt="" />
                <span className="chip">{tag}</span>
              </div>
              <div className="body">
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
