---
title: "How to Migrate from Jira to Linear: A Step-by-Step Guide"
description: "Planning a Jira to Linear migration? This step-by-step guide covers data export, field mapping, the Linear importer, and how to get your team onboard without chaos."
pubDate: "2026-06-11"
tags: ["jira", "linear", "migration", "how-to", "project management"]
heroImage: "/thumbs/how-to-migrate-from-jira-to-linear-2026.jpg"
---

# How to Migrate from Jira to Linear: A Step-by-Step Guide

Switching from [Jira](/tools/jira/) to [Linear](/tools/linear/) is one of the most common dev tool migrations right now. Linear is faster, cleaner, and built for the way modern engineering teams work. But migration is where things get messy — Jira has years of accumulated data that doesn't map neatly to Linear's opinionated structure.

This guide walks you through the entire process so nothing falls through the cracks.

## Before You Start: Is Linear Right for You?

Not every team should switch. If you haven't decided yet, read our [Linear vs Jira](/blog/linear-vs-jira-2026/) comparison first. Linear works best for teams under ~200 people who want keyboard-driven, fast issue tracking with standard workflows. Jira might still be better if you need granular permissions, advanced JQL, or deep Atlassian ecosystem integration.

## Step 1: Audit Your Jira Instance

Before exporting anything, clean house. Most Jira instances are cluttered with abandoned projects and unused custom fields.

1. List active projects — archive anything dormant
2. Identify which custom fields are actually used vs. legacy cruft
3. Document current workflows (status transitions)
4. Note integrations that touch Jira (Slack, GitHub, CI/CD)
5. Record automation rules that need recreation in Linear

Don't migrate your mess — migrate a clean version of your data.

## Step 2: Map Jira Concepts to Linear

| Jira | Linear | Notes |
|------|--------|-------|
| Project | Team | Linear organizes by team, not project |
| Epic | Project | Linear "Projects" are closer to Jira Epics |
| Story / Task / Bug | Issue | Linear uses labels to distinguish types |
| Sprint | Cycle | Similar concept, different name |
| Component | Label | Approximate equivalent |
| Priority levels | Priority (Urgent/High/Medium/Low/None) | Needs manual mapping |
| Custom fields | Labels + custom properties | Linear's custom properties are more limited |

**Important:** Linear doesn't support Jira's custom field types. If you rely heavily on dropdowns, number fields, or cascading selects, you'll need workarounds.

## Step 3: Export and Import

### Option A: Linear's Built-In Jira Importer (Recommended)

1. In Linear, go to **Settings > Import/Export > Import from Jira**
2. Authenticate with your Atlassian account
3. Select Jira projects to import
4. Map projects to Linear teams
5. Configure field mappings (statuses, priorities, users)
6. Start the import

The importer handles issues, comments, attachments, and basic field mappings automatically. It's improved significantly in 2026 with batched imports and better error handling.

### Option B: CSV Export (For Custom Control)

1. In Jira, use **Filters > Advanced Search** with a JQL query
2. Export as CSV (All fields)
3. Clean up the CSV — remove unnecessary columns, standardize values
4. In Linear, go to **Settings > Import/Export > Import from CSV**
5. Map columns to Linear fields

## Step 4: Configure Linear Before Importing

Set up your workspace first to minimize cleanup:

1. Create teams corresponding to your Jira projects
2. Define workflows (Triage > Backlog > Todo > In Progress > In Review > Done)
3. Create labels for issue types (Bug, Feature, Improvement)
4. Connect integrations (GitHub/GitLab, Slack, CI/CD)
5. Configure cycles if your team uses sprints

## Step 5: Run the Import

- **Start with one small project** as a test — don't import everything at once
- **Import during off-hours** so notification floods don't overwhelm the team
- **Expect imperfection** — some comments may lose formatting, inline images might break, and custom fields will be flattened

## Step 6: Handle What Doesn't Migrate

Some things need manual recreation:
- **Jira automations** — rebuild in Linear's automation system or via API
- **Dashboards and reports** — Linear's analytics are different; rebuild key views
- **Advanced JQL filters** — Linear uses a different filter syntax
- **Attachments over 100MB** — may fail during import; re-upload manually

## Step 7: Get Your Team Onboard

This is where most migrations actually fail — not in the technical setup, but in adoption.

1. **Run a 30-minute walkthrough** showing keyboard shortcuts and core workflow
2. **Designate 1-2 "Linear champions"** per team for questions
3. **Set a hard cutoff date** — running both tools in parallel creates confusion
4. **Give it two weeks** before evaluating — the first few days will feel awkward
5. **Share the "why"** — specific reasons are more convincing than "management decided"

**Common complaints:** "I can't find my issues" — show them global search (Cmd+K). "Where are my filters?" — help them create custom views.

## Timeline

| Team Size | Planning | Migration | Adoption | Total |
|-----------|----------|-----------|----------|-------|
| 5-15 people | 1 week | 1-2 days | 2 weeks | ~3 weeks |
| 15-50 people | 2 weeks | 3-5 days | 3 weeks | ~5 weeks |
| 50-200 people | 3-4 weeks | 1-2 weeks | 4-6 weeks | ~10 weeks |

## Bottom Line

The migration itself isn't technically hard — Linear's importer handles most of the heavy lifting. The real challenge is change management. Clean your data before importing, start with a test project, and invest time helping your team get comfortable.

For teams that make the switch, the payoff is usually obvious within a week: faster issue tracking and less time fighting the tool. Check our [Linear review](/blog/linear-review-2026/) and [Jira review](/blog/jira-review-2026/) for detailed breakdowns of each platform.
