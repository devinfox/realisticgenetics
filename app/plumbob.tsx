export function Plumbob({ className, id }: { className: string; id: string }) {
  return (
    <svg className={className} viewBox="0 0 100 150" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`pbl-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--pb-light)" />
          <stop offset="1" stopColor="var(--pb-dark)" />
        </linearGradient>
        <linearGradient id={`pbr-${id}`} x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--pb-lightest)" />
          <stop offset="1" stopColor="var(--pb-mid)" />
        </linearGradient>
      </defs>
      <polygon points="50,3 9,53 50,53" fill={`url(#pbl-${id})`} />
      <polygon points="50,3 91,53 50,53" fill={`url(#pbr-${id})`} />
      <polygon points="9,53 50,53 50,147" fill={`url(#pbr-${id})`} />
      <polygon points="91,53 50,53 50,147" fill={`url(#pbl-${id})`} />
    </svg>
  );
}

export function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
    </svg>
  );
}
