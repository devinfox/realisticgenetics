// Canonical plumbob: a clean, symmetric faceted diamond. Geometry and facet
// colors are identical to the favicon (app/icon.svg) — flat 4-facet shading,
// left column mid tones, right column the lightest/darkest. Uses theme vars so
// it matches the favicon in light mode and stays legible in dark mode.
export function Plumbob({ className }: { className: string; id?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 90" aria-hidden="true" focusable="false">
      <polygon points="30,0 0,36 30,36" fill="var(--pb-light)" />
      <polygon points="30,0 60,36 30,36" fill="var(--pb-lightest)" />
      <polygon points="0,36 30,36 30,90" fill="var(--pb-mid)" />
      <polygon points="60,36 30,36 30,90" fill="var(--pb-dark)" />
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
