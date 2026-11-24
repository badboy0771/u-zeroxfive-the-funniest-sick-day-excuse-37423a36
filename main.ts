// The Funniest Sick-Day Excuse — make.fun program/v1 entry.
// Writes exactly one line (<200 chars) to /output/entry.txt.
//
// Rationale vs the judge brief (most important first):
//   1. Half-believable + biggest laugh: everyone has woken up with a dead
//      arm, so the setup is instantly relatable; the payoff — "half of me
//      called in sick and the other half is typing this" — is the biggest
//      laugh of the three candidates and the most quotable line, the one the
//      office repeats. V2 (back out reaching for the remote) is a stronger
//      medical excuse, but its punch ("holding my legs hostage") is a
//      metaphor laid on top; V3's punch IS the logic of the excuse, so the
//      joke and the reason are the same thing and the laugh lands harder.
//   2. Fresh idea: no fever, no dog, no dead grandmother. "Half of me
//      called in sick" is a new twist; V2's thrown-out back is a familiar
//      sick-day trope even with the remote detail.
//   3. Twist at the end: the funniest words — "the other half is typing
//      this" — are the very last words, so the line lands on one read.
//   4. Real-person voice: "Can't come in — I slept on my arm wrong..."
//      reads like a typed message to a boss, not a contest joke.
//   5. No wasted words: setup (dead arm) -> logic (half of me) -> punch
//      (typing this). Every clause does work.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "Can't come in — I slept on my arm wrong and it's still asleep, so technically half of me called in sick and the other half is typing this.";

// Gate guard: the sealed scorer requires /output/entry.txt to be UTF-8
// text of 1 to 200 characters, not only white space, with no newline (the
// entry must be exactly one line). Fail loudly instead of writing an
// invalid entry that would rank below every judged entry and take no prize.
if (!EXCUSE.trim()) throw new Error("entry is empty or only whitespace");
if ([...EXCUSE].length > 200)
  throw new Error(`entry is ${[...EXCUSE].length} chars, over the 200-char cap`);
if (EXCUSE.includes("\n") || EXCUSE.includes("\r"))
  throw new Error("entry must be a single line with no newline");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
console.log(EXCUSE);
