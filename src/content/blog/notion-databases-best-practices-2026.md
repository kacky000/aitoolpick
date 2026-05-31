---
title: "Notion Databases Best Practices in 2026: Schemas That Don't Rot"
description: "How to design Notion databases that stay fast, queryable, and sane as your team grows past 1,000 pages — and the anti-patterns that turn Notion into a swamp."
pubDate: "2026-05-18"
heroImage: "/thumbs/notion-databases-best-practices-2026.jpg"
tags: ["notion", "databases", "best-practices", "schema"]
---

Most "Notion is slow" complaints aren't really about Notion. They're about a database that grew from 50 rows to 5,000 with no schema changes, three formula columns that recalculate on every load, and a half-dozen views nobody uses anymore.

This guide is the schema discipline that keeps [Notion](/blog/notion-review-2026) usable past the point where 90% of workspaces fall apart.

## Principle 1: One Database, One Concept

The strongest indicator of a healthy Notion workspace: each database represents exactly one type of thing. Tasks. Projects. Clients. Meeting notes. One concept per database.

The anti-pattern is the "everything database" — a single 12-property table that holds tasks, meeting notes, ideas, and OKRs distinguished by a `Type` property. It feels DRY at 50 rows. It's unworkable at 500.

If you find yourself filtering by `Type` in every view, split the database.

## Principle 2: Properties Should Be Queryable

A property exists to be filtered, sorted, or grouped by. If nobody has ever filtered by it, it shouldn't be a property — it should be in the page body as text.

Concretely:

- ✅ `Status`, `Owner`, `Due Date`, `Priority`, `Project` — queryable, deserve properties.
- ❌ `Background context`, `Decision notes`, `Reference links` — narrative, belong in the page.

Every unused property slows down list and timeline views measurably once you're past a few hundred rows.

## Principle 3: Relations Over Duplication

If two databases share information, link them with a relation. Don't duplicate.

**Bad:** Tasks database has a text `Project Name` property typed by hand.

**Good:** Tasks database has a relation to the Projects database. The project name is rendered as the related page title.

Why it matters: when a project gets renamed, you don't have to find-and-replace 200 task rows.

The trade-off: relations make queries slightly slower and add a layer of indirection in the UI. Worth it past ~50 rows.

## Principle 4: Compute Once, Read Many

Formulas and rollups are computed every time a row is rendered. That's fine for 100 rows; it's a problem at 5,000.

Heuristics:

- **Use formulas** when the value changes every time the input changes (e.g., "days until due").
- **Use a property + automation** when the value should be computed once on a state change (e.g., "completed date" = the date when status moved to Done).
- **Never** use a formula to compute something that an automation can write once.

A "Days Open" formula that compares `Today()` against `Created Time` is fine. A "Total Cost" formula that sums 10 rollups across 3 relations is not.

## Principle 5: Views Cost Cognitive Load

Every saved view is a tax on the next person who opens the database. They have to figure out which one to use.

- Aim for 5–8 named views per database, maximum.
- Each view should have a clear answer to: "Who is this for, and what decision does it help them make?"
- Delete unused views ruthlessly. Notion shows view last-accessed timestamps as of 2025; use them.

The most common bloat: 4 "Status = X" views when a single grouped view by Status would replace all of them.

## Principle 6: Filter at the View Level, Not the Page Level

A common rookie pattern: build a database, then create a separate page for "Active Tasks" that embeds a filtered linked view of the database. Then another page for "My Tasks." Then another for "Tasks Due This Week."

You now have 4 pages that all show subsets of the same database — and the source database is buried under "More."

**Better:** Live in the source database. Use saved views for the subsets. Pin the database to the sidebar.

## Schema Patterns That Scale

### Tasks database (canonical)

| Property | Type | Notes |
|----------|------|-------|
| Name | Title | Required |
| Status | Status | To Do / In Progress / Blocked / Done |
| Owner | Person | Single person |
| Due Date | Date | Optional |
| Project | Relation → Projects | Optional |
| Priority | Select | P0 / P1 / P2 |
| Estimate | Number | Hours |
| Completed Date | Date | Written by automation when Status = Done |

Eight properties. Every one is queryable. No formulas.

### Projects database

| Property | Type | Notes |
|----------|------|-------|
| Name | Title | |
| Status | Status | Planning / Active / Paused / Done |
| Owner | Person | |
| Start Date | Date | |
| Target Date | Date | |
| Tasks | Relation → Tasks | Bidirectional |
| Open Tasks | Rollup | Count where Status ≠ Done |

The rollup is the only computed property — and it's the one the team actually looks at.

## Anti-Patterns to Audit For

| Anti-pattern | Symptom | Fix |
|--------------|---------|-----|
| Everything database | Multiple `Type`-based views | Split databases |
| Status as Select | No status grouping in board views | Convert to Status property type |
| Date stored as text | "Apr 18" sorts alphabetically | Convert to Date property |
| Three-deep rollup chains | Pages load slowly | Materialize via automation |
| 20+ properties | Sidebar takes 3 screens | Move narrative to page body |
| 15+ saved views | Nobody knows which one to open | Delete down to 5–8 |

## Migration Strategy When You Have to Fix One

If you're inheriting a swamp database, don't try to fix it in place. The schema change risk is too high.

1. **Duplicate the database.** Get a clean copy to redesign on.
2. **Design the new schema.** Decide which properties survive, which get split, which become page-body text.
3. **Migrate rows in batches.** Use a script (Python with the [Notion API](/blog/notion-api-for-developers-2026)) for >500 rows. Manual copy-paste for less.
4. **Move the old database to an "Archive" page.** Don't delete — there's always one historic reference link to a row.
5. **Update relations.** Anything that related to the old database needs to repoint.
6. **Communicate the cutover.** Email or Slack message. New URLs. One-week window where both exist.

Plan a half-day per non-trivial database. It's worth it.

## When to Leave Notion for a Database

Notion is excellent up to a point. Past it, you want a real database.

Signs you've hit the wall:

- You're doing 100+ writes per day via API and hitting rate limits.
- You need joins across 4+ tables for reporting.
- You need transactions for data integrity.
- Page load on the main view is consistently >3 seconds.
- You're hitting Notion's per-database page limits (currently 20,000).

At that point, [Airtable](/blog/airtable-review-2026) or a real Postgres + admin panel ([Retool](/tools/retool/), [Forest Admin](/tools/forest-admin/)) is the answer.

## Bottom Line

Notion databases reward up-front discipline. The teams whose Notion is still fast and useful three years in are the ones who: split databases aggressively, kept properties queryable, materialized computed values, and audited views every quarter. The teams whose Notion is a graveyard didn't.

Going deeper on Notion as a platform? See [Notion API for Developers](/blog/notion-api-for-developers-2026), [Notion Automations Complete Guide](/blog/notion-automations-complete-guide-2026), and [Notion Enterprise Plan Analysis](/blog/notion-enterprise-plan-analysis-2026).
