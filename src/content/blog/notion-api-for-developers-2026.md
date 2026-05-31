---
title: "Notion API for Developers in 2026: What It Can and Can't Do"
description: "An honest developer's guide to the Notion API in 2026 — what's stable, what's painful, what the new endpoints actually unlock, and when to pick something else."
pubDate: "2026-05-18"
heroImage: "/thumbs/notion-api-for-developers-2026.jpg"
tags: ["notion", "api", "developers", "integration"]
---

[Notion](/tools/notion/) has spent the last two years turning its API from a thin, frustrating wrapper into something developers can actually build on. In 2026 it's good enough to power production integrations — but only if you know where the sharp edges still are.

This is a guide for engineers who are about to build against the API, not for marketers shopping a feature list.

## What the API Looks Like in 2026

The current stable surface area covers:

- **Pages and databases**: CRUD on pages, databases, and blocks.
- **Properties**: Read and write all property types except a couple of legacy formula edge cases.
- **Comments**: Threaded comments on pages and blocks.
- **Users**: List workspace members and bots.
- **Search**: Workspace-wide search with filters.
- **Webhooks (GA in late 2025)**: Push events for page/database changes instead of polling.
- **File uploads**: Direct uploads, no more 1-hour expiring S3 URLs (the biggest 2025 win).
- **Data sources API (beta)**: Query database rows with SQL-like filters at scale.

What's still missing or painful:

- No native rate-limit headers that tell you the bucket state — you find out by getting 429'd.
- No "transactions" — a multi-page update is not atomic; partial failures are real.
- Schema migrations on databases are clunky; renaming a property breaks every cached `property_id`.
- AI blocks (Notion AI generations) are not exposed; you can't programmatically trigger Notion AI.

## Rate Limits in 2026

Notion's stated limit is "an average of 3 requests per second per integration," with bursts allowed. The reality:

- You'll get 429s well before that if you do many writes in parallel.
- Reads scale better than writes — a search returning 100 results is one request.
- Use exponential backoff with jitter. The first retry should be 1–2 s, capped at 30 s.

For high-volume jobs (say, syncing a 10k-row database every hour), batch into chunks of 100 with a 500 ms gap between batches. That keeps you below the burst threshold without overengineering.

## The Block Model — Where Most Devs Get Stuck

Notion pages are trees of blocks. Every paragraph, image, callout, and embed is a block with children. The API exposes this faithfully, which means:

- To render a page, you have to **recursively fetch children** for any block that has them. Toggles, columns, synced blocks — all need their own `GET /blocks/{id}/children` call.
- A page with 200 blocks and a few toggles can easily be 50+ API calls.
- The new **`include_children`** parameter (2025) lets you pull two levels in one call. Use it. It's not on by default.

If you're building a "render Notion page as a website" tool, cache aggressively. Notion's data doesn't change between page loads — your origin server should.

## Webhooks Changed the Game

Pre-2025, every Notion integration was a polling loop. You'd hit `/search` every 5 minutes and diff the results. It was wasteful and slow.

Webhooks let you subscribe to:

- `page.created`, `page.updated`, `page.deleted`
- `database.updated`
- `comment.created`

Setup is straightforward (verify a signature, return 200 within 5 s), and the delivery is reliable enough that you can rip out 80% of your polling code. The one gotcha: webhooks deliver about 1–3 seconds after the change, which is fast enough for most CRMs and dashboards but not real-time enough for collaborative editors.

## Authentication: Internal vs Public Integrations

- **Internal integrations** are for a single workspace. Easy: generate a token, paste it in, done.
- **Public integrations** are OAuth — required if you're shipping a third-party app installed by multiple workspaces. The OAuth flow is standard, but the token refresh story was historically weak. As of 2025 refresh tokens are stable and you should treat them like any other OAuth refresh.

If you're building an internal tool for your own company, just use an internal integration. The OAuth dance is unnecessary complexity.

## Properties: The 2026 Footguns

Notion has 25+ property types. Most are fine. The ones that bite:

- **Formula**: read-only via API. You can't write to a formula property.
- **Rollup**: read-only and slow to recompute. Don't filter by rollup in API queries.
- **Relation**: bidirectional relations create two properties; deleting one half via API doesn't always clean up the other.
- **Status**: enum-style with limited values. Adding a new option requires a database update, not a page update.
- **Verification**: AI-managed property type; can be read but not reliably written.

Treat formulas and rollups as "computed columns" you read but never write. Model your write paths around plain properties.

## Data Sources API: The Big 2026 Bet

The beta **Data Sources API** lets you query database rows with structured filters at scale — more like a real database than a REST endpoint. Notable improvements:

- Paginated cursor-based reads up to 1,000 rows per page (vs 100 in the standard `/query`).
- Compound filters with `AND`/`OR` nesting up to 5 levels.
- Sort by multiple properties.

It's still beta, so expect breaking changes, but if you're building a reporting tool or a serious sync product, this is the endpoint to plan around.

## When to Pick Something Else

Notion's API is great for:

- Building internal integrations (Slack bots that post to Notion, Linear-to-Notion sync, etc.).
- Two-way sync with a small to mid-sized database (under ~50k rows).
- Building a public app on top of Notion (forms, checklists, mini-tools).

Notion's API is the wrong choice for:

- High-write workloads (auditing, time tracking, IoT data collection) — 3 req/s is too slow.
- Strict transactional integrity — there are no transactions.
- Real-time collaboration — webhooks are 1–3 s delayed.
- Data warehousing — pull into a real database (Postgres, BigQuery) and query there.

If your use case lands in the "wrong choice" bucket, look at [Airtable](/blog/airtable-review-2026) or a real database with a custom frontend.

## What I'd Build Today

If I were starting a Notion integration in 2026, my stack would be:

1. **Webhooks for change detection.** Drop the polling loop.
2. **Postgres for cached state.** Mirror what you need from Notion locally; don't query Notion on the hot path.
3. **A job queue (BullMQ, Sidekiq, etc.) for writes.** Rate-limit at the queue, not the request layer.
4. **TypeScript SDK** (the official one is fine, plus `@notionhq/client@3.x`).
5. **Sentry alerts on 429s.** When they spike, you've crossed a threshold you didn't know about.

That stack ships fast and scales to most real-world workloads.

## Bottom Line

The 2026 Notion API is the first version where building a serious product on top is reasonable. Webhooks, file uploads, and data sources together close 90% of the gaps that defined 2023's experience. The remaining 10% — no transactions, no AI access, formula write limits — will catch you off guard exactly once per project. Plan around them and you'll ship.

Want more on Notion as a platform? See [Notion Automations Complete Guide](/blog/notion-automations-complete-guide-2026) and [Notion Databases Best Practices](/blog/notion-databases-best-practices-2026).

Compare developer-friendly platforms side by side: [Notion vs Airtable](/blog/notion-vs-airtable-2026) and [Notion vs Coda](/blog/notion-vs-coda-2026).
