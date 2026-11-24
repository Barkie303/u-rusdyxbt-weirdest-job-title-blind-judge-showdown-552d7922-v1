// Weirdest Job Title: Blind Judge Showdown — entry for make.fun
// u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922
// Writes one job title (1-60 chars) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The title works because it sounds like a real job posting with one
// gloriously specific twist: the dog ate the homework, so someone has
// to write the excuse for the dog. Seniority makes it funnier — the
// dogs have been at this for years, and so has the paperwork.
const TITLE =
  "Senior Excuse Writer for Dogs Who Ate Homework";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TITLE, "utf8");
