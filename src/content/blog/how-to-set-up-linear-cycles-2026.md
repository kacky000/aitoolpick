---
title: "How to Set Up Linear Cycles in 2026: The Sprint Replacement That Actually Works"
description: "Linear Cycles done right: cycle length, scope rules, the triage flow, and what to do with carryover. A practical setup guide for engineering teams in 2026."
pubDate: "2026-05-16"
heroImage: "/thumbs/how-to-set-up-linear-cycles-2026.jpg"
tags: ["linear", "cycles", "engineering", "tutorial"]
---

Linear's Cycles are the most opinionated feature in the product. Set them up right and your team feels the difference in week two. Set them up wrong and you're back to Jira-flavored sprint hell with extra steps. Here's the setup that survives contact with reality.

## What a Linear Cycle Actually Is

A Cycle is Linear's version of a sprint, but with two important differences:

1. **Cycles roll automatically.** Incomplete work moves to the next cycle by default unless you explicitly cancel it.
2. **Cycles are team-scoped, not project-scoped.** Each team has its own cycle cadence. A platform team can run 2-week cycles while a growth team runs 1-week ones.

These two things sound small. They change how the team behaves. The first removes the end-of-sprint ritual of "what do we move?" The second lets each team operate at its natural pace.

## Step 1: Pick a Cycle Length (Probably 1 Week)

The default Linear setting is 1 week. Use it.

Two-week cycles sound more grown-up. They are not. Two-week cycles let mid-cycle ambiguity ("I'll get back to it next week") persist. One-week cycles force a smaller commit and a faster signal on whether scoping is working.

The exception: infrastructure or platform teams where deep work is the deliverable. There, 2-week or even 3-week cycles can be honest.

Settings → Cycles → set duration. Pick a day-of-week boundary that works for your timezone. Monday → Monday is the boring default and the right one for most teams.

## Step 2: Define What Goes Into a Cycle

The single biggest mistake: dumping the entire backlog into the next cycle "just in case."

The rule that works:

> A ticket goes into the current cycle only if you are committing it will get done.

If it's a stretch, it stays in Triage or in a future cycle. The cycle is a contract, not a wishlist. Linear's cycle progress chart only tells you the truth if the cycle reflects real commits.

## Step 3: Set Up Triage as the Default Inbox

Every team needs a Triage column. New bug from support? Triage. Random ask from another team? Triage. Customer escalation? Triage.

Once a day (preferably as a 10-minute async ritual), the on-call or team lead clears Triage:
- Real work → assigned, estimated, scheduled into a cycle
- Not real → closed with a comment
- Need more info → moved to a "Needs info" status with the requester @-mentioned

Without Triage, urgent random work jumps the line and breaks cycle commitments. With Triage, urgency is forced through a single funnel.

## Step 4: Estimate (Yes, You Have To)

Linear supports Fibonacci, T-shirt, or linear estimation. Pick one. Use it.

Recommendation: **points using Fibonacci (1, 2, 3, 5, 8)**.

- 1 = trivial, < half a day
- 2 = a day or so
- 3 = ~2 days
- 5 = bigger but achievable in a cycle
- 8 = doesn't fit; break it down

If a ticket is 8, you don't put it in the cycle. You break it down first. This rule alone fixes 60% of "we didn't finish what we planned" complaints.

## Step 5: Handle Carryover Honestly

At end of cycle, incomplete work rolls automatically. Don't let that automation hide failure to plan.

Add a Friday end-of-cycle ritual (15 min, async preferred):
1. What rolled? Why?
2. Was it the work or the estimate?
3. What do we change next cycle?

After two months you'll see your team's true throughput. You stop overcommitting. Cycles get more predictable. This is the loop that grown-up engineering teams run.

## Step 6: Wire Cycles into Slack

Install the Linear Slack integration if you haven't already. Set up:

- **Cycle channel** (per team): cycle started, cycle ending soon, cycle completed.
- **Triage channel**: new triage items posted as threaded notifications.
- **Personal DM**: anything assigned to you moves status.

This means engineers don't have to "check Linear." Linear comes to them.

See our [best Slack productivity integrations 2026](/blog/best-slack-productivity-integrations-2026) for the full Slack stack.

## Common Failure Modes

**"Our cycle progress chart is always green and we still don't ship."**
You're under-committing. Add 1–2 stretch items per cycle. If you complete them, great. If not, they don't roll as failures (mark them as Won't Do or move them out before cycle close).

**"Triage is a graveyard."**
Set a SLA: items sit in Triage no more than 24 hours. Either go to a cycle, or close. If your Triage is full of "we should do this someday" tickets, those aren't Triage — they're backlog. Move them.

**"Carryover keeps happening."**
Usually one of three causes: (a) estimates too low, (b) too much unplanned work hitting mid-cycle, (c) cycle length is wrong for the team's depth-of-work. Fix the cause, not the symptom.

## Cycles vs Projects (Don't Confuse Them)

A common Linear confusion:
- **Cycle**: time-boxed work container (1 week, 2 weeks). Tactical.
- **Project**: a feature/initiative that spans cycles. Strategic.

An issue can belong to both. A cycle is "what we're shipping this week." A project is "the launch of the new onboarding flow." A project usually spans 4–8 cycles.

## Pricing Implication

Cycles are available on every [Linear plan](/blog/linear-pricing-2026), including Free. You don't need to pay to set this up correctly. The features that matter for cycle hygiene (estimation, triage, projects) are all in the lower tiers.

## Bottom Line

Linear Cycles are not Jira sprints renamed. They're a different shape of weekly commitment with built-in honesty. Run them by the book for a month — short cycles, real triage, estimated commits, carryover review — and your team's predictability changes visibly.

More on getting Linear right: [How to use Linear for startups 2026](/blog/how-to-use-linear-for-startups-2026), [Linear for engineering teams 2026](/blog/linear-for-engineering-teams-2026).
