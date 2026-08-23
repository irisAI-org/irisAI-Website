/** Same lockup as the web console and mobile app: eye mark + iris + gradient AI. */
export default function Logo({ href = '#top' }) {
  return (
    <a className="logo" href={href} aria-label="irisAI home">
      <img
        className="mark-img"
        src="/brand/iris_Logo.png"
        alt=""
        width={45}
        height={36}
      />
      <span className="lockup">
        <span className="wordmark">
          iris<span className="ai">AI</span>
        </span>
      </span>
    </a>
  )
}
