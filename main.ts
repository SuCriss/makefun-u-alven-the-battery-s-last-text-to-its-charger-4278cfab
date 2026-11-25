import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Joke: a battery invoices a charger for a day of being ghosted.
// Turn: needing a charge becomes strictly business.
// Landing: "charging you rent" makes the last words the punchline.

const line = "Waited all day at 1%, charger. Fine, plug in now. After you left me on read since breakfast, I'm charging you rent.";

if (line.length === 0 || line.trim().length === 0) {
  throw new Error("Line must be non-blank.");
}

if ([...line].length > 200) {
  throw new Error("Line must be at most 200 code points.");
}

if (/[\r\n\u2028\u2029]/.test(line)) {
  throw new Error("Line must be a single line.");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
