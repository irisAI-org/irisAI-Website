/** Same lockup as the web console and mobile app: eye mark + iris + gradient AI. */
export default function Logo({ href = '#top', size = 'md' }) {
  return (
    <a className={`logo logo-${size}`} href={href} aria-label="irisAI home">
      <img
        className="mark-img"
        src="/brand/iris_Logo.png"
        alt=""
        width={size === 'lg' ? 84 : 54}
        height={size === 'lg' ? 72 : 48}
      />
      <span className="lockup">
        <span className="wordmark">
          iris<span className="ai">AI</span>
        </span>
      </span>
    </a>
  )
}
