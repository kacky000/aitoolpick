---
title: "Make vs n8n Pricing 2026: Free Plans, Paid Tiers & Total Cost Compared"
description: "Make vs n8n pricing compared for 2026. Free tier limits, paid plans, self-hosting costs, and hidden fees—see which automation platform costs less."
pubDate: "2026-06-14"
tags: ["make", "n8n", "pricing", "automation", "comparison"]
---

# Make vs n8n Pricing 2026: Free Plans, Paid Tiers & Total Cost Compared

Make and n8n are two of the strongest automation platforms available in 2026, but their pricing models are fundamentally different. Make is cloud-only with operation-based billing. n8n offers a free self-hosted option alongside paid cloud plans. The "cheaper" platform depends entirely on how you plan to use it.

This guide breaks down every tier, explains the hidden costs, and helps you figure out what you'll actually pay. For a full feature comparison beyond pricing, see our [Make vs n8n overview](/blog/make-vs-n8n-2026).

## Pricing at a Glance

| Plan | Make | n8n |
|------|------|-----|
| **Free** | 1,000 ops/mo, 2 scenarios | Self-hosted: unlimited; Cloud: limited trial |
| **Starter/Core** | $10.59/mo (10,000 ops) | $24/mo (2,500 executions, 5 workflows) |
| **Pro** | $18.82/mo (up to 8M ops) | $60/mo (10,000 executions, 15 workflows) |
| **Teams** | $34.12/mo (custom ops) | — |
| **Enterprise** | Custom | Custom |

Already clear: the sticker prices don't tell the full story. Make counts operations (each step in a workflow). n8n counts executions (each time a workflow runs, regardless of steps). A 5-step workflow running 100 times costs 500 Make operations but only 100 n8n executions. That difference matters.

## Free Tier Comparison

### Make Free Plan

- **1,000 operations per month**
- **2 active scenarios** (workflows)
- **Minimum interval: 15 minutes** (scenarios can't poll faster)
- Full access to 1,000+ integrations
- No team features

1,000 operations sounds generous until you do the math. A 5-step scenario running once per hour = 5 ops × 24 hours × 30 days = 3,600 ops. You'd blow through the free tier with a single moderate workflow. In practice, Make's free plan works for testing and very light personal automations—maybe a daily email summary or a weekly report generator.

For details on how Make's credit system works, see our [Make pricing breakdown](/blog/make-pricing-2026).

### n8n Free (Self-Hosted)

- **Unlimited workflows**
- **Unlimited executions**
- **No time restrictions**
- Full feature parity with cloud
- Requires your own server

This is the most generous free tier in the automation space, with a catch: you need to run it yourself. A basic VPS costs $5-12/month (Hetzner CX21 at ~$5, DigitalOcean at $12), and you'll need Docker and basic Linux knowledge. But once it's running, there are no per-operation fees, no workflow limits, and no execution caps.

For developers and technically comfortable teams, this is hard to beat. For everyone else, it's a barrier.

### n8n Community Cloud

n8n also offers a limited free cloud tier for evaluation. It's useful for trying the interface but not for production use—execution limits are tight and you can't rely on it long-term.

**Free tier winner:** n8n self-hosted if you can manage a server. Make if you need zero-setup cloud access.

## Paid Plans Compared

### Entry Level: Make Core ($10.59/mo) vs n8n Starter ($24/mo)

| | Make Core | n8n Cloud Starter |
|--|-----------|-------------------|
| **Price** | $10.59/mo | $24/mo |
| **Operations/Executions** | 10,000 ops | 2,500 executions |
| **Active workflows** | Unlimited | 5 |
| **Minimum interval** | 1 minute | 1 minute |
| **Team members** | 1 | 1 |
| **Support** | Email | Email |

On the surface, Make is cheaper. But remember the counting difference.

**Scenario**: A 5-step workflow running 500 times per month.
- **Make**: 5 × 500 = 2,500 operations. Well within the 10,000 cap. Cost: $10.59/mo.
- **n8n**: 500 executions. Within the 2,500 cap. Cost: $24/mo.

Make wins here. But change the scenario:

**Scenario**: 10 different workflows, each running 200 times/month with 3 steps each.
- **Make**: 10 × 200 × 3 = 6,000 operations. Still within 10,000. Cost: $10.59/mo.
- **n8n**: 10 workflows exceeds the 5-workflow limit on Starter. You'd need Pro ($60/mo).

Make wins again on entry-level pricing for moderate usage. n8n's Starter plan is limited by the 5-workflow cap, which is the real constraint—not executions.

### Mid-Tier: Make Pro ($18.82/mo) vs n8n Pro ($60/mo)

| | Make Pro | n8n Cloud Pro |
|--|----------|---------------|
| **Price** | $18.82/mo | $60/mo |
| **Operations/Executions** | Up to 8M ops | 10,000 executions |
| **Active workflows** | Unlimited | 15 |
| **Team members** | Unlimited | 3 |
| **Priority support** | Yes | Yes |
| **Advanced features** | Custom variables, full-text log search | Advanced execution filtering, debugging |

Make Pro offers dramatically more capacity at a lower price point. But the comparison isn't that simple, because Make's per-operation model can spike unpredictably. A scenario that iterates over 500 rows processes each row as a separate operation in each module. A 5-module scenario processing 500 rows = 2,500 operations in a single run. Do that daily and you're at 75,000 operations/month from one workflow.

n8n's execution-based model is more predictable for batch operations. That same 500-row processing job counts as 1 execution regardless of how many nodes it passes through.

For our full breakdown of n8n's pricing tiers, see the [n8n pricing guide](/blog/n8n-pricing-2026).

## The Self-Hosted Math

This is where n8n's pricing story gets compelling.

| Self-Hosted Cost | Monthly | Annual |
|-----------------|---------|--------|
| n8n software | $0 | $0 |
| VPS (Hetzner CX21) | ~$5 | ~$60 |
| VPS (DigitalOcean 2GB) | $12 | $144 |
| Domain + SSL | ~$1 | ~$12 |
| **Total** | **$6-13/mo** | **$72-156/yr** |

For $6-13/month, you get unlimited workflows, unlimited executions, and full control over your data. Compare that to Make Pro at $18.82/mo with operation limits, or n8n Cloud Pro at $60/mo with execution caps. The savings scale with usage—the more you automate, the wider the gap.

The trade-off is maintenance. You handle updates, backups, uptime monitoring, and security patches. Docker makes this manageable, but it's not zero effort.

**Make has no self-hosted option.** If on-premise deployment or data sovereignty matters to your organization, this eliminates Make entirely.

## Hidden Costs to Watch

### Make Hidden Costs

- **Operation overages**: Exceeding your plan's operation limit pauses scenarios until the next billing cycle—or you pay for additional operations.
- **Data transfer**: Large file operations (processing images, PDFs) consume more operations than simple data routing.
- **Webhook overhead**: Incoming webhooks that don't trigger actions still consume operations.
- **Annual commitment**: Monthly prices listed above are for monthly billing. Annual billing is ~20% cheaper, but requires upfront commitment.

### n8n Hidden Costs

- **Server costs** (self-hosted): Not hidden, but often underestimated. As workflow complexity grows, you may need more CPU and RAM.
- **Execution overages** (cloud): Exceeding your plan's execution limit requires upgrading or purchasing add-ons.
- **Community vs Enterprise features**: Some advanced features (SSO, LDAP, audit logs) are only available on Enterprise plans.
- **Time investment** (self-hosted): Your time maintaining the server is a real cost, especially for non-technical teams.

## Which Costs Less? Real-World Scenarios

### Solo Freelancer (5 workflows, ~1,000 runs/month)

- **Make Core**: ~5,000-10,000 ops depending on workflow complexity. $10.59/mo.
- **n8n Self-Hosted**: $5-12/mo for a VPS. Unlimited everything.
- **n8n Cloud Starter**: $24/mo.
- **Cheapest**: n8n self-hosted (~$5/mo) if technical. Make Core ($10.59/mo) if not.

### Small Team (15 workflows, ~5,000 runs/month)

- **Make Pro**: 15,000-75,000+ ops. $18.82/mo (likely sufficient).
- **n8n Self-Hosted**: $12/mo for a slightly beefier VPS.
- **n8n Cloud Pro**: $60/mo.
- **Cheapest**: n8n self-hosted ($12/mo). Make Pro ($18.82/mo) is the best cloud option.

### High-Volume Operations (50+ workflows, 20,000+ runs/month)

- **Make Teams/Enterprise**: $34.12+/mo, likely custom pricing.
- **n8n Self-Hosted**: $15-25/mo for a capable server.
- **n8n Cloud Enterprise**: Custom pricing.
- **Cheapest**: n8n self-hosted wins by a large margin at scale.

## The Bottom Line

**Make is cheaper for cloud-only users with moderate automation needs.** The entry-level pricing is lower, the free plan requires no setup, and the operation model works well for simple, low-frequency workflows.

**n8n is cheaper at scale, especially self-hosted.** If you can run a Docker container, n8n's total cost stays flat while Make's grows with every operation. For teams with high automation volume or data residency requirements, self-hosting eliminates per-unit costs entirely.

The decision often comes down to this: Are you paying with money (Make) or money plus time (n8n self-hosted)? For most developers and technical teams, the time investment in self-hosting pays for itself within a few months.

### Ready to compare?

Compare Make and n8n side by side on AIToolPick →
