// The Meeting That Should Have Been One Line
// make.fun bounty: u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c
//
// Writes the single sentence that could have replaced an entire pointless
// meeting to /output/entry.txt. Pure Node standard library, no network.

import { mkdirSync, writeFileSync } from "node:fs";

// The line: the decision was already made in the email nobody read, so the
// meeting has nothing left to do but cancel itself.
const LINE =
  "This meeting could have been an email — it was an email, nobody read it, so the decision stands and this meeting is cancelled.";

function main(): void {
  const text = LINE.trim();
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
}

main();
