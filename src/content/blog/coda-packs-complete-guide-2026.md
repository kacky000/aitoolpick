---
title: "Coda Packs Complete Guide 2026: How to Connect Coda to Everything"
description: "Coda Packs let your docs read and write to Slack, GitHub, Salesforce, and 600+ other tools. Here's how to use them, build them, and avoid the cost traps."
pubDate: "2026-05-17"
heroImage: "/thumbs/coda-packs-complete-guide-2026.jpg"
tags: ["coda", "packs", "integrations", "no-code", "automation"]
---

Coda Packs are the reason [Coda](/blog/coda-review-2026) is more than a fancy document. A Pack lets a Coda doc pull data from — and push data into — an external service. Slack messages, GitHub PRs, Salesforce leads, Figma comments, Jira tickets — all become rows in your doc that you can filter, format, and act on.

This guide covers what Packs are, which ones are worth installing first, where they cost you money, and when to build your own.

## What a Pack Actually Does

Three things, in order of usefulness:

1. **Sync tables** — pull data from an external API into a Coda table that auto-refreshes (every 5min to 24h, depending on the Pack and your plan).
2. **Formulas** — call external services from inside a Coda formula. `Slack::SendMessage(channel, text)` is one line.
3. **Actions / buttons** — push data out. A button row in a Coda table can create a GitHub issue, log a Salesforce activity, or post to Slack.

A Pack is bidirectional by default. This is the part most "integrations" features in other tools never deliver.

## Packs Worth Installing First

For most teams, these 8 cover 80% of real use:

| Pack | What it unlocks |
|---|---|
| **Slack** | Send messages from buttons, pull thread data into tables, notify on row changes |
| **Gmail / Outlook** | Send templated emails from a row, log inbound messages into a CRM doc |
| **Google Calendar** | Sync events into a doc, create events from a meeting-prep button |
| **GitHub** | PR/issue tables, auto-status from labels, dev metrics dashboards |
| **Jira** | Mirror issue state into a planning doc, file Jira tickets from Coda buttons |
| **Salesforce / HubSpot** | RevOps dashboards, pipeline rollups, auto-update activities |
| **Figma** | Pull design comments into a doc, link design status to project rows |
| **Notion** | Migrate content gradually, mirror Notion pages as Coda rows |

There are 600+ Packs total. Browse them at coda.io/gallery/packs.

## What Packs Cost

This is where teams get burned. Packs themselves are free to install, but they consume:

- **Pack actions** — each external call (send a Slack message, create a Jira ticket). Capped per month by plan.
- **Sync frequency** — free plans sync once per 24h. Pro and above sync as fast as 5 minutes.
- **Premium Packs** — some third-party Packs (Salesforce, Jira, Snowflake) require a paid Coda plan to use at all.

| Plan | Pack actions/mo | Sync frequency | Premium Packs |
|---|---|---|---|
| Free | 1,000 | Daily | No |
| Pro ($10/Maker/mo) | 5,000 | Hourly | Some |
| Team ($30/Maker/mo) | Unlimited | 5 min | All |
| Enterprise | Unlimited | 5 min + SLA | All |

For OKR docs, lightweight CRMs, or dashboards that refresh nightly, Free or Pro is enough. For production workflows that need near-realtime, you need Team.

See our [Coda Pricing 2026](/blog/coda-pricing-2026) breakdown for the full math.

## Three Workflows Worth Stealing

### 1. Founder weekly review

Pulls last week's GitHub merges, Linear cycles, Slack #wins channel, and Salesforce closed-won deals into one auto-updating doc. Replaces a 90-minute Monday status meeting.

Packs: GitHub, Linear, Slack, Salesforce. Total setup: ~2 hours.

### 2. Hiring tracker with auto-email

Candidates are rows. A button on each row sends a templated email via Gmail Pack. Calendar Pack auto-creates interview slots. Slack Pack notifies the hiring channel on stage changes.

Packs: Gmail, Google Calendar, Slack. Total setup: ~1 hour.

### 3. Customer health dashboard

Stripe Pack pulls MRR. HubSpot Pack pulls last-touch date. Intercom Pack pulls open tickets. A formula scores each account green/yellow/red. CS team checks the doc weekly.

Packs: Stripe, HubSpot, Intercom. Total setup: ~3 hours.

## When to Build Your Own Pack

Coda lets anyone build a Pack via the Pack Studio (JavaScript/TypeScript). Build one when:

- The third-party service has an API but no existing Pack.
- The existing Pack syncs the wrong fields for your workflow.
- You need a custom action (e.g., trigger an internal API with auth).

Building a Pack is a 1-2 day project for someone comfortable with JavaScript. Coda's Pack Studio docs are clear, and there's a free dev sandbox.

## Packs vs Zapier / Make

Why use a Pack instead of [Zapier](/tools/zapier/) or [Make](/tools/make/)?

- **Cost** — Pack actions are cheaper per call once you're past 5K actions/mo.
- **Bidirectional reads** — Zapier/Make are mostly trigger-based. Packs make external data feel like native Coda tables.
- **Live in the doc** — your data is in the doc. With Zapier, the doc is downstream of the automation.

Use Zapier when you need to connect two services that don't both have Packs. Use Packs when Coda is one of the two services.

## Common Gotchas

- **Sync isn't realtime on Free** — daily sync is too slow for live dashboards. Budget for Pro at minimum.
- **Pack actions burn fast** — a button hit by 20 users posting to Slack = 20 actions per click cycle.
- **Auth is per-user** — every Doc Maker needs to authenticate each Pack separately. Plan onboarding.
- **Premium Packs paywall** — Salesforce/Jira require Team plan. Pilot on a smaller stack first.

## Bottom Line

Packs are Coda's killer feature. They turn a doc into a programmable workspace that knows about your whole stack. Start with Slack + Gmail + Calendar to learn the model, then layer in dev/sales/data Packs as your team's needs grow.

**Explore all Coda integrations →** [Coda on AIToolPick](/tools/coda/)
