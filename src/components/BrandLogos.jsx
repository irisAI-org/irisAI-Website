function Wm({ children, className = '', title, mono }) {
  return (
    <span className={`wm ${mono ? 'mono' : ''} ${className}`} title={title} aria-label={title}>
      {children}
    </span>
  )
}

export function LogoShopify({ mono, tile }) {
  const c = mono ? 'currentColor' : '#95BF47'
  if (tile) {
    return (
      <span className="tile" title="Shopify">
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
          <path fill="#95BF47" d="M15.55 2.6c-.4-.1-1.1.1-1.5.3l.4-1.6c.1-.4 0-.5-.3-.6l-1.4-.4c-.3-.1-.4 0-.5.3L9.9 8.4C8.5 8.8 7.3 9.2 7.3 9.2s.1-.4.1-.9c0-1.4-.4-2.2-1.3-2.2-.7 0-1.5.5-2 1.4C3.6 8.4 3 10.4 3 10.4L1.7 21.7c0 .3.2.4.4.5 1.7.5 3.4.8 5.1 1 .6.1 1.2.1 1.8.2 2 .1 4-.1 5.9-.4.4 0 .5-.2.6-.6l1.8-9.6c0-.3 0-.5-.3-.6-1-.2-2.1-.5-3.2-.6.1-.8 0-1.4-.3-1.7-.4-.4-1-.3-1.4-.2zm-2.5 1.7c.4-.2 1-.4 1.4-.3.2 0 .3.2.3.5 0 .3-.3.9-.9 1.4-.4.4-.9.7-1.4.8l.6-2.4zM8.4 3.8c.3 0 .6.2.8.6L8.1 7.3c-.6.2-1.2.4-1.8.5.3-1.2.9-4 2.1-4z" />
        </svg>
      </span>
    )
  }
  return (
    <Wm mono={mono} title="Shopify">
      <svg viewBox="0 0 132 28" height="22" aria-hidden>
        <path fill={c} d="M20.1 26.2s.28-.08.4-.14c1.67-.71 2.52-1.79 2.52-3.8V2.4C23 1.1 22.1 0 21 0H2.73C1.63 0 .82 1.1.82 2.4v19.86c0 2.01.85 3.09 2.52 3.8.12.05.4.14.4.14.16.06.4.12.4.12l7.5.02 7.5-.02s.24-.06.4-.12zM11.4 7.6c.5-.16 1.1-.3 1.6-.3.4 0 .6.2.6.6 0 .5-.4 1.3-1.2 1.9-.5.4-1.1.7-1.7.8l.7-3zM8.3 3.4c.4 0 .8.3 1.1.8L8.3 8.1c-.8.24-1.6.5-2.4.72C6.3 7.2 7.2 3.4 8.3 3.4z" />
        <text x="28" y="20" fontFamily="Inter, system-ui, sans-serif" fontWeight="700" fontSize="15" fill={c}>shopify</text>
      </svg>
    </Wm>
  )
}

export function LogoShipStation({ mono, tile }) {
  const c = mono ? 'currentColor' : '#5C4EE5'
  if (tile) {
    return (
      <span className="tile" title="ShipStation">
        <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden>
          <rect width="32" height="32" rx="8" fill="#5C4EE5" />
          <path d="M9 16h14M9 11h8M9 21h11" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </span>
    )
  }
  return (
    <Wm mono={mono} title="ShipStation">
      <svg viewBox="0 0 158 28" height="20" aria-hidden>
        <rect x="0" y="4" width="20" height="20" rx="5" fill={c} />
        <path d="M5 14h10M5 10h6M5 18h8" stroke={mono ? '#05081A' : '#fff'} strokeWidth="1.6" strokeLinecap="round" />
        <text x="26" y="19" fontFamily="Inter, system-ui, sans-serif" fontWeight="700" fontSize="13.5" fill={c}>ShipStation</text>
      </svg>
    </Wm>
  )
}

export function LogoAmazon({ mono, tile }) {
  const c = mono ? 'currentColor' : '#232F3E'
  const smile = mono ? 'currentColor' : '#FF9900'
  if (tile) {
    return (
      <span className="tile" title="Amazon">
        <svg viewBox="0 0 48 24" width="36" height="18" aria-hidden>
          <text x="2" y="14" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="11" fill="#232F3E">amazon</text>
          <path d="M8 17c6 4 20 4.2 30-1" fill="none" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M35 15.4c1.2.6 3.4 1.6 4 2.1.6.5.3 1.4-.5 1.6" fill="none" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </span>
    )
  }
  return (
    <Wm mono={mono} title="Amazon">
      <svg viewBox="0 0 108 28" height="22" aria-hidden>
        <text x="0" y="17" fontFamily="Inter, system-ui, sans-serif" fontWeight="700" fontSize="16" fill={c}>amazon</text>
        <path d="M8 21c10 5.2 36 5.4 54-1.4" fill="none" stroke={smile} strokeWidth="2" strokeLinecap="round" />
        <path d="M56 19c1.8.8 5.2 2.2 6.2 2.8.9.7.4 1.9-.8 2.2" fill="none" stroke={smile} strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    </Wm>
  )
}

export function LogoWoo({ mono, tile }) {
  const c = mono ? 'currentColor' : '#7F54B3'
  if (tile) {
    return (
      <span className="tile" title="WooCommerce">
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
          <circle cx="12" cy="12" r="11" fill="#7F54B3" />
          <path d="M6.4 9.2c1.6 5 2.6 7.4 3.6 7.4s2-2.4 3.5-7.4M14.2 9.2c1.1 4.6 1.8 7.2 2.8 7.2.6 0 1.3-1.5 2.4-4.4" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </span>
    )
  }
  return (
    <Wm mono={mono} title="WooCommerce">
      <svg viewBox="0 0 148 28" height="20" aria-hidden>
        <circle cx="12" cy="14" r="11" fill={c} />
        <path d="M6.6 11c1.4 4.4 2.3 6.6 3.2 6.6s1.8-2.1 3.1-6.6M13.6 11c1 4 1.6 6.4 2.5 6.4.5 0 1.2-1.3 2.1-3.9" fill="none" stroke={mono ? '#05081A' : '#fff'} strokeWidth="1.5" strokeLinecap="round" />
        <text x="30" y="19" fontFamily="Inter, system-ui, sans-serif" fontWeight="700" fontSize="13.5" fill={c}>WooCommerce</text>
      </svg>
    </Wm>
  )
}

export function LogoFedEx({ mono, tile }) {
  const a = mono ? 'currentColor' : '#4D148C'
  const b = mono ? 'currentColor' : '#FF6600'
  return (
    <Wm mono={mono} className={tile ? 'tile-wm' : ''} title="FedEx">
      <svg viewBox="0 0 92 28" height={tile ? 18 : 22} aria-hidden>
        <text x="0" y="21" fontFamily="Inter Tight, Inter, sans-serif" fontWeight="800" fontSize="22" letterSpacing="-1.2">
          <tspan fill={a}>Fed</tspan>
          <tspan fill={b}>Ex</tspan>
        </text>
      </svg>
    </Wm>
  )
}

export function LogoUPS({ mono, tile }) {
  if (tile) {
    return (
      <span className="tile" title="UPS">
        <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden>
          <path d="M16 2 4 8v16l12 6 12-6V8L16 2z" fill="#351C15" />
          <text x="6.2" y="20" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="8" fill="#FFB500">UPS</text>
        </svg>
      </span>
    )
  }
  return (
    <Wm mono={mono} title="UPS">
      <svg viewBox="0 0 72 28" height="22" aria-hidden>
        <path d="M14 2 4 7.2v13.6L14 26l10-5.2V7.2L14 2z" fill={mono ? 'currentColor' : '#351C15'} />
        <text x="6.4" y="18.5" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="7.2" fill={mono ? '#05081A' : '#FFB500'}>UPS</text>
        <text x="30" y="19" fontFamily="Inter Tight, Inter, sans-serif" fontWeight="800" fontSize="16" fill={mono ? 'currentColor' : '#351C15'}>UPS</text>
      </svg>
    </Wm>
  )
}

export function LogoDHL({ mono, tile }) {
  if (tile) {
    return (
      <span className="tile tile-dhl" title="DHL">
        <svg viewBox="0 0 48 20" width="36" height="16" aria-hidden>
          <rect width="48" height="20" rx="2" fill="#FFCC00" />
          <text x="7" y="15" fontFamily="Inter Tight, sans-serif" fontWeight="800" fontSize="13" fill="#D40511">DHL</text>
        </svg>
      </span>
    )
  }
  if (mono) {
    return (
      <Wm mono title="DHL">
        <svg viewBox="0 0 52 22" height="18" aria-hidden>
          <text x="0" y="17" fontFamily="Inter Tight, Inter, sans-serif" fontWeight="800" fontSize="16" fill="currentColor">DHL</text>
        </svg>
      </Wm>
    )
  }
  return (
    <Wm title="DHL">
      <svg viewBox="0 0 72 22" height="18" aria-hidden>
        <rect width="72" height="22" rx="3" fill="#FFCC00" />
        <text x="12" y="16.5" fontFamily="Inter Tight, Inter, sans-serif" fontWeight="800" fontSize="14" fill="#D40511">DHL</text>
      </svg>
    </Wm>
  )
}

export function LogoUSPS({ mono, tile }) {
  const c = mono ? 'currentColor' : '#004B87'
  if (tile) {
    return (
      <span className="tile" title="USPS">
        <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden>
          <circle cx="16" cy="16" r="14" fill="#004B87" />
          <text x="5.2" y="19" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="7" fill="#fff">USPS</text>
        </svg>
      </span>
    )
  }
  return (
    <Wm mono={mono} title="USPS">
      <svg viewBox="0 0 86 22" height="18" aria-hidden>
        <text x="0" y="17" fontFamily="Inter Tight, Inter, sans-serif" fontWeight="800" fontSize="16" fill={c}>USPS</text>
      </svg>
    </Wm>
  )
}

export function LogoScanner() {
  return (
    <span className="tile" title="Barcode scanner">
      <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden>
        <rect width="32" height="32" rx="8" fill="#0EA5C4" />
        <path d="M9 9v14M13 9v14M16.5 9v14M21 9v14" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  )
}

export function LogoCamera() {
  return (
    <span className="tile" title="PoE camera">
      <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden>
        <rect width="32" height="32" rx="8" fill="#5B8DEF" />
        <rect x="5" y="10" width="14" height="12" rx="2" fill="#fff" />
        <path d="M19 13.5 26 10v12l-7-3.5z" fill="#fff" />
      </svg>
    </span>
  )
}
