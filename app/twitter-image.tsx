import { familyTreeOG } from "../lib/og-family-tree";

export const runtime = "nodejs";
export const alt =
  "Realistic Genetics for The Sims 4: a family tree showing a baby inheriting from parents and grandparents";
export const size = { width: 1200, height: 1200 };
export const contentType = "image/png";

export default function TwitterImage() {
  return familyTreeOG();
}
