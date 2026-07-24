"use client";

import { useState } from "react";
import { Plumbob } from "./plumbob";

const DISCORD_URL = "https://discord.com/invite/xv5MFKJrWd";

// Top nav. On desktop the links sit inline; below the mobile breakpoint they
// collapse into a hamburger that toggles a dropdown (see .nav-burger / .nav-links
// in foxmade.css). Tapping a link or the brand closes the menu.
export function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="nav">
      <div className="nav-in">
        <a className="brand" href="#top" onClick={close}>
          <Plumbob className="pb pb-nav" id="nav" />
          <b>Fox&nbsp;Made&nbsp;Mods</b>
        </a>

        <button
          type="button"
          className="nav-burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={open ? "nav-links open" : "nav-links"}>
          <a href="#how" onClick={close}>
            How it works
          </a>
          <a href="#whatsnew" onClick={close}>
            What&rsquo;s new
          </a>
          <a href="#install" onClick={close}>
            Install
          </a>
          <a href="#compat" onClick={close}>
            Compatibility
          </a>
          <a href="#faq" onClick={close}>
            FAQ
          </a>
          <a
            className="nav-discord"
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            Community
          </a>
        </div>
      </div>
    </nav>
  );
}
