"use client";

import { useState } from "react";

// Click-to-play YouTube embed.
//
// Shows our own thumbnail until the viewer presses play, then swaps in the
// iframe. Two reasons over a plain <iframe>:
//
//   1. The thumbnail is ours. A bare embed shows whatever YouTube decides to
//      serve, which is out of our hands.
//   2. Nothing from YouTube loads until someone actually wants to watch --
//      no third-party scripts or cookies on first paint, and a lighter page.
//
// autoplay=1 is set on the swapped-in URL so the click that dismisses the
// poster also starts the video, rather than making people press play twice.

type Props = {
  id: string;
  title: string;
  poster: string;
};

export function VideoEmbed({ id, title, poster }: Props) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      className="vid-play"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={poster} alt="" width={1280} height={720} loading="lazy" />
      <span className="vid-btn" aria-hidden="true">
        <svg viewBox="0 0 68 48" width="68" height="48">
          <path
            d="M66.5 7.7a8.6 8.6 0 0 0-6-6C55.2 0 34 0 34 0S12.8 0 7.5 1.7a8.6 8.6 0 0 0-6 6A89.6 89.6 0 0 0 0 24a89.6 89.6 0 0 0 1.5 16.3 8.6 8.6 0 0 0 6 6C12.8 48 34 48 34 48s21.2 0 26.5-1.7a8.6 8.6 0 0 0 6-6A89.6 89.6 0 0 0 68 24a89.6 89.6 0 0 0-1.5-16.3z"
            fill="#f00"
          />
          <path d="M27 34l18-10-18-10z" fill="#fff" />
        </svg>
      </span>
    </button>
  );
}
