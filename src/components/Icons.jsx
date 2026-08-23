const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const IconVideo = (p) => (
  <svg {...base} {...p}>
    <rect x="2.5" y="6" width="13" height="12" rx="2.5" />
    <path d="M15.5 10.5 21 7.5v9l-5.5-3" />
    <circle cx="8" cy="12" r="2.2" />
  </svg>
)

export const IconCheckShield = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3 5 6v5c0 4.2 2.9 7.7 7 9 4.1-1.3 7-4.8 7-9V6l-7-3Z" />
    <path d="m9 11.5 2.2 2.2L15 9.8" />
  </svg>
)

export const IconReturn = (p) => (
  <svg {...base} {...p}>
    <path d="M9 7 4 12l5 5" />
    <path d="M4 12h11a5 5 0 0 1 5 5v1" />
  </svg>
)

export const IconSearch = (p) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m20 20-3.6-3.6" />
  </svg>
)

export const IconHome = (p) => (
  <svg {...base} {...p}>
    <path d="M4 11 12 4l8 7" />
    <path d="M6 10v9h12v-9" />
    <path d="M10 19v-5h4v5" />
  </svg>
)

export const IconLock = (p) => (
  <svg {...base} {...p}>
    <rect x="5" y="10.5" width="14" height="9.5" rx="2.5" />
    <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
    <circle cx="12" cy="15" r="1.3" />
  </svg>
)

export const IconUsers = (p) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="8.5" r="3" />
    <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
    <path d="M16 6.2a3 3 0 0 1 0 5.6" />
    <path d="M17.5 14.2A5.5 5.5 0 0 1 20.5 19" />
  </svg>
)

export const IconShare = (p) => (
  <svg {...base} {...p}>
    <circle cx="6" cy="12" r="2.4" />
    <circle cx="17.5" cy="6" r="2.4" />
    <circle cx="17.5" cy="18" r="2.4" />
    <path d="m8.1 10.9 7.3-3.7M8.1 13.1l7.3 3.7" />
  </svg>
)

export const IconPlug = (p) => (
  <svg {...base} {...p}>
    <path d="M9 3v5M15 3v5" />
    <path d="M7 8h10v3a5 5 0 0 1-10 0V8Z" />
    <path d="M12 16v5" />
  </svg>
)

export const IconCable = (p) => (
  <svg {...base} {...p}>
    <path d="M4 5v3a3 3 0 0 0 3 3h10a3 3 0 0 1 3 3v3" />
    <rect x="2.5" y="3" width="3" height="4" rx="1" />
    <rect x="18.5" y="17" width="3" height="4" rx="1" />
  </svg>
)

export const IconDevices = (p) => (
  <svg {...base} {...p}>
    <rect x="2.5" y="5" width="13" height="9" rx="1.5" />
    <path d="M2.5 17h10" />
    <rect x="16" y="9" width="5.5" height="10" rx="1.5" />
  </svg>
)

export const IconArrow = (p) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const IconMenu = (p) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const IconClose = (p) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

export const IconLinkedIn = (p) => (
  <svg {...base} viewBox="0 0 24 24" fill="currentColor" stroke="none" {...p}>
    <path d="M6.4 9H4v11h2.4V9zM5.2 4.2a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8zM20 20h-2.4v-5.5c0-1.8-.7-3-2.3-3-1.2 0-1.9.8-2.2 1.6-.1.3-.1.6-.1 1V20H10.6V9h2.4v1.5c.5-.8 1.6-1.8 3.7-1.8 2.7 0 4.3 1.8 4.3 5.5V20z" />
  </svg>
)

export const IconX = (p) => (
  <svg {...base} {...p}>
    <path d="M5 5l14 14M19 5 5 19" />
  </svg>
)

export const IconYouTube = (p) => (
  <svg {...base} viewBox="0 0 24 24" fill="currentColor" stroke="none" {...p}>
    <path d="M23 12.2s-.2-4-1.1-5.7c-.6-1-1.8-1.4-2.8-1.5C16.3 4.7 12 4.7 12 4.7h0s-4.3 0-7.1.3c-1 .1-2.2.5-2.8 1.5C1.2 8.2 1 12.2 1 12.2s.2 4 1.1 5.7c.6 1 1.8 1.4 2.8 1.5 2.8.3 7.1.3 7.1.3s4.3 0 7.1-.3c1-.1 2.2-.5 2.8-1.5.9-1.7 1.1-5.7 1.1-5.7zM9.8 15.6V8.8l6.3 3.4-6.3 3.4z" />
  </svg>
)

export const IconScan = (p) => (
  <svg {...base} {...p}>
    <path d="M7 4.5H5.5A1.5 1.5 0 0 0 4 6v1.5M17 4.5h1.5A1.5 1.5 0 0 1 20 6v1.5M7 19.5H5.5A1.5 1.5 0 0 1 4 18v-1.5M17 19.5h1.5a1.5 1.5 0 0 0 1.5-1.5v-1.5" />
    <rect x="7.5" y="8" width="9" height="8" rx="1.2" />
    <path d="M4 12h16" />
  </svg>
)

export const IconPhone = (p) => (
  <svg {...base} {...p}>
    <rect x="7" y="3" width="10" height="18" rx="2.2" />
    <path d="M11 18.5h2" />
  </svg>
)
