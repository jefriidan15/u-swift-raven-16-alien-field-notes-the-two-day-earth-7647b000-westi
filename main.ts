import { mkdirSync, renameSync, writeFileSync } from "node:fs";

// One original line, at most 200 characters: an alien tourist's review of Earth.
const ENTRY =
  "Five stars. The dominant species invented a machine that washes dishes, then invented guilt about not washing them by hand. Charming. Would orbit again.";

mkdirSync("/output", { recursive: true });
// Atomic write so a concurrent reader never sees a half-written entry.
writeFileSync("/output/.entry.txt.tmp", ENTRY, "utf8");
renameSync("/output/.entry.txt.tmp", "/output/entry.txt");
