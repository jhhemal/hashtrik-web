// Turns any text into a repeatable nine-cell "#" mark.
// The same text always gives the same mark.

export type Shape = "empty" | "square" | "circle" | "quarter" | "triangle";
export type Tone = "accent" | "ink" | "spark";
export type Cell = { shape: Shape; tone: Tone; turn: number };

export function hash32(text: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

function random(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function normalize(text: string): string {
  return text.trim().toLowerCase().replace(/\s+/g, " ") || "hashtrik";
}

export function hashHex(text: string): string {
  return hash32(normalize(text)).toString(16).padStart(8, "0");
}

export function markCells(text: string): Cell[] {
  const next = random(hash32(normalize(text)));
  const cells: Cell[] = [];
  for (let i = 0; i < 9; i++) {
    const s = next();
    const c = next();
    const shape: Shape =
      s < 0.16 ? "empty" : s < 0.36 ? "square" : s < 0.5 ? "circle" : s < 0.78 ? "quarter" : "triangle";
    const tone: Tone = c < 0.5 ? "accent" : c < 0.82 ? "ink" : "spark";
    cells.push({ shape, tone, turn: Math.floor(next() * 4) });
  }
  // Never return a nearly blank mark.
  if (cells.filter((cell) => cell.shape !== "empty").length < 5) {
    cells.forEach((cell, i) => {
      if (cell.shape === "empty" && i % 2 === 0) cell.shape = "quarter";
    });
  }
  return cells;
}
