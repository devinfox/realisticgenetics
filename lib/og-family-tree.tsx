import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

// Shared renderer for the generated 1200x630 social/preview image: a family tree
// of real in-game Sims (four grandparents -> two parents -> baby) so Google, Google
// Images and social unfurls all lead with the "genetics / family tree" idea.
// app/opengraph-image.tsx and app/twitter-image.tsx each declare the metadata config
// statically (Next requires that) and call familyTreeOG().
export const OG_ALT =
  "Realistic Genetics for The Sims 4: a family tree showing a baby inheriting from parents and grandparents";
export const OG_SIZE = { width: 1200, height: 1200 };

function dataUri(file: string) {
  const buf = readFileSync(join(process.cwd(), "public", file));
  return `data:image/png;base64,${buf.toString("base64")}`;
}

const BG = "#0b120e";
const PANEL = "#0f1712";
const ACCENT = "#5ed39a";
const INK = "#eaf3ee";
const MUTED = "#8fa89b";
const BORDER = "#28362d";

function Ava({
  src,
  size: s,
  label,
  accent,
}: {
  src: string;
  size: number;
  label: string;
  accent?: boolean;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
      <img
        src={src}
        width={s}
        height={s}
        style={{
          width: s,
          height: s,
          borderRadius: s,
          objectFit: "cover",
          border: `${accent ? 4 : 2}px solid ${accent ? ACCENT : BORDER}`,
        }}
      />
      <div
        style={{
          fontSize: 18,
          color: accent ? ACCENT : MUTED,
          fontWeight: 600,
        }}
      >
        {label}
      </div>
    </div>
  );
}

export async function familyTreeOG() {
  const mom = dataUri("rg-anc-mom.png");
  const dad = dataUri("rg-anc-dad.png");
  const matGma = dataUri("rg-anc-mat-gma.png");
  const matGpa = dataUri("rg-anc-mat-gpa.png");
  const patGma = dataUri("rg-anc-pat-gma.png");
  const patGpa = dataUri("rg-anc-pat-gpa.png");

  // A genealogy "bracket": a horizontal bar over a grandparent pair with a drop
  // line to the parent below it. Two of these make the four grandparents visibly
  // branch down into Mom and Dad.
  const Bracket = () => (
    <div style={{ width: 208, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: 150, height: 3, background: BORDER, display: "flex" }} />
      <div style={{ width: 3, height: 22, background: BORDER, display: "flex" }} />
    </div>
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${BG} 0%, ${PANEL} 100%)`,
          padding: 72,
          gap: 22,
          fontFamily: "sans-serif",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 28,
              height: 28,
              background: ACCENT,
              transform: "rotate(45deg)",
              borderRadius: 6,
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 24,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: MUTED,
              fontWeight: 700,
            }}
          >
            Fox Made Mods
          </div>
        </div>
        <div style={{ fontSize: 78, fontWeight: 800, color: INK, lineHeight: 1 }}>
          Realistic Genetics
        </div>
        <div style={{ fontSize: 34, fontWeight: 700, color: ACCENT }}>
          A Sims 4 genetics mod
        </div>

        {/* Family tree */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, marginTop: 8 }}>
          {/* Grandparents: two pairs */}
          <div style={{ display: "flex", gap: 64 }}>
            <div style={{ display: "flex", gap: 16 }}>
              <Ava src={matGma} size={96} label="Grandma" />
              <Ava src={matGpa} size={96} label="Grandpa" />
            </div>
            <div style={{ display: "flex", gap: 16 }}>
              <Ava src={patGma} size={96} label="Grandma" />
              <Ava src={patGpa} size={96} label="Grandpa" />
            </div>
          </div>
          {/* Branch brackets (grandparent pair -> parent) */}
          <div style={{ display: "flex", width: 480, justifyContent: "space-between" }}>
            <Bracket />
            <Bracket />
          </div>
          {/* Parents */}
          <div style={{ display: "flex", width: 392, justifyContent: "space-between" }}>
            <Ava src={mom} size={120} label="Mom" />
            <Ava src={dad} size={120} label="Dad" />
          </div>
          {/* Drop to baby */}
          <div style={{ width: 3, height: 22, background: ACCENT, display: "flex" }} />
          {/* Baby */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 76,
                height: 76,
                background: ACCENT,
                transform: "rotate(45deg)",
                borderRadius: 14,
                display: "flex",
              }}
            />
            <div style={{ fontSize: 22, color: ACCENT, fontWeight: 700 }}>Baby</div>
          </div>
        </div>

        <div style={{ fontSize: 28, color: MUTED, fontWeight: 700, marginTop: 12 }}>
          foxmademods.com
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
