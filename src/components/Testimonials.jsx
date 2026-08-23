import { useEffect, useRef } from 'react'
import { IconSearch, IconLock, IconScan, IconCheckShield } from './Icons.jsx'

const CASES = [
  {
    title: 'The empty-box claim',
    tag: 'Reports',
    Icon: IconSearch,
    img: '/images/feature-person.jpg',
    body: 'A customer says the box arrived empty. Search the order number, play the packing recording, and review the scan log beside it. Settle from the clip, not from CCTV scrubbing.',
  },
  {
    title: 'On-prem when you need it',
    tag: 'Deployment',
    Icon: IconLock,
    img: '/images/hero-warehouse.jpg',
    body: 'Where compliance requires it, footage never leaves your building. Where it does not, run the same product in the cloud. The choice is a deployment setting, not a different tool.',
  },
  {
    title: 'No more CCTV hunts',
    tag: 'Station and mobile packing',
    Icon: IconScan,
    img: '/images/Packing.png',
    body: 'The packer scans the order and recording starts on the server. Proof is filed to that order ID instead of hunting through camera folders.',
  },
  {
    title: 'Completed means playable',
    tag: 'Packing outcomes',
    Icon: IconCheckShield,
    img: '/images/feature-floor.jpg',
    body: 'If a pack is cancelled or the MP4 is not playable, it shows as failed. The floor can see which orders actually have proof on file.',
  },
]

export default function Testimonials() {
  const gridRef = useRef(null)

  // Cursor spotlight. One listener for the whole grid, coalesced into a single
  // rAF, and it only ever writes two custom properties -- no layout, no paint
  // outside the hovered card.
  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!window.matchMedia('(hover: hover)').matches) return

    let frame = 0
    let next = null

    const write = () => {
      frame = 0
      if (!next) return
      const { card, x, y } = next
      card.style.setProperty('--mx', `${x}px`)
      card.style.setProperty('--my', `${y}px`)
    }

    const onMove = (e) => {
      const card = e.target.closest('.usecase-card')
      if (!card) return
      const r = card.getBoundingClientRect()
      next = { card, x: e.clientX - r.left, y: e.clientY - r.top }
      if (!frame) frame = requestAnimationFrame(write)
    }

    grid.addEventListener('pointermove', onMove)
    return () => {
      grid.removeEventListener('pointermove', onMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className="sec usecases">
      <div className="usecases-aura" aria-hidden="true" />
      <div className="wrap">
        <div className="usecases-head reveal">
          <p className="usecases-eyebrow">Use cases</p>
          <h2>Built for the packing floor</h2>
          <p>
            Real situations on the warehouse floor. These describe what irisAI is for, not
            customer testimonials.
          </p>
        </div>

        <div className="usecases-grid" ref={gridRef}>
          {CASES.map(({ title, tag, body, Icon, img }, i) => (
            <article className="usecase-card reveal" key={title} style={{ '--i': i }}>
              <div className="usecase-media" aria-hidden="true">
                <img src={img} alt="" loading="lazy" decoding="async" />
                <span className="usecase-scrim" />
              </div>
              <span className="usecase-no" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <div className="usecase-content">
                <div className="usecase-top">
                  <span className="usecase-ico" aria-hidden="true"><Icon /></span>
                  <p className="usecase-tag">{tag}</p>
                </div>
                <h3>{title}</h3>
                <p className="usecase-body">{body}</p>
              </div>
              <span className="usecase-spine" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
