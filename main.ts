import fs from "node:fs";
import path from "node:path";

const TEXT = [
  "Don't skip your grandfather's last birthday to finish the report your boss forgot by Monday.",
  "The promotion never came, and the only thing he asked for at the end was to hear your voice again.",
].join("\n");

const outPath = process.argv[2] ?? "/output/entry.txt";
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, TEXT + "\n", "utf8");
