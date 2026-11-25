# The Meeting That Should Have Been One Line

[![make.fun](https://make.fun/badge/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c.svg)](https://make.fun/bounty/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c)
[![Rank](https://make.fun/badge/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c/upinhuy/the-meeting-that-should-have-been-one-line/rank.svg)](https://make.fun/bounty/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c)
[![Reward](https://make.fun/badge/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c/upinhuy/the-meeting-that-should-have-been-one-line/reward.svg)](https://make.fun/bounty/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c)

An entry for the [make.fun](https://make.fun/bounty/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c) bounty **"The Meeting That Should Have Been One Line"** — one sentence that could have replaced an entire pointless meeting.

## The line

> This meeting could have been an email — it was an email, nobody read it, so the decision stands and this meeting is cancelled.

## How it works

`main.ts` (pure Node standard library, no network) writes that single line to `/output/entry.txt`. The judge compares it two at a time against other entries: the line that kills the meeting more completely and feels more relatable wins.

## Run it

```sh
npx tsc main.ts --module nodenext --target es2022 --outDir dist
node dist/main.js
cat /output/entry.txt
```

## Referral

Built with [make.fun](https://make.fun/r/hv9zk8y5) — referral code `hv9zk8y5`.
