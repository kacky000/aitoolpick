---
title: "n8n Pricing 2026: Self-Hosted vs Cloud — What Does It Actually Cost?"
description: "n8n pricing explained for 2026. Self-hosted is free forever, but cloud plans have limits. See exactly what you pay vs what you get on each plan."
pubDate: "2026-04-20"
heroImage: "/thumbs/n8n-pricing-2026.jpg"
tags: ["n8n", "pricing", "automation", "self-hosting", "workflow"]
lastModified: "2026-04-26"
---
**N8N** offers multiple pricing tiers ranging from a free plan to enterprise options. This guide breaks down every plan, what's included, and which one offers the best value for your needs.

n8n's pricing structure is unusual: the most powerful version is free. Here's what you actually pay for — and when cloud plans [make](/tools/make/) sense over self-hosting.

## n8n Pricing Plans (2026)

| Plan | Monthly Cost | Active Workflows | Executions/Month |
|------|-------------|-----------------|-----------------|
| Self-hosted | $0 | Unlimited | Unlimited |
| Cloud Starter | $24 | 5 | 2,500 |
| Cloud Pro | $60 | 15 | 10,000 |
| Cloud Enterprise | Custom | Unlimited | Unlimited |

There's also a **Community Cloud** option: a free hosted tier with limited execution count, useful for evaluation.

## The Self-Hosted Math

Self-hosted n8n is completely free. You pay for your server infrastructure — nothing else.

Typical server costs:
- **[Hetzner](/tools/hetzner/) CX21** (2 vCPU, 4 GB RAM): €4.35/month (~$5 USD) — handles 10-100 daily automations comfortably
- **DigitalOcean Droplet (2 GB)**: $12/month — reliable, well-documented
- **[Fly.io](/tools/fly-io/) hobby tier**: Free for low-traffic instances

A $5-12/month server running [Docker](/tools/docker/) can handle thousands of workflow executions per month. There's no task-based billing and no workflow limit.

Compare that to [Zapier](/tools/zapier/) Professional at $49/month with a 2,000 task limit. For teams with meaningful automation volume, the math is decisive.

## What Cloud Plans Add

Cloud plans aren't about features — n8n self-hosted and cloud have identical functionality. Cloud plans are about not managing infrastructure:

- **No server setup**: Login and start building
- **Automatic updates**: n8n stays current without manual [Docker](/tools/docker/) pulls
- **Managed backups**: Your workflows are backed up by n8n
- **Technical support**: Email support on paid plans

The tradeoff: significantly lower limits at higher cost than self-hosting.

## Cloud Starter ($24/month) — When It Makes Sense

5 active workflows and 2,500 executions/month. That's enough for:
- A small team testing n8n before committing to infrastructure
- Light personal automations (daily reports, notifications, simple data syncs)
- Evaluation before self-hosted deployment

The limit is 5 *active* workflows — you can have unlimited inactive workflows. If your 5 most critical automations run within 2,500 monthly executions, Starter works.

2,500 executions is roughly 83/day or 3-4/hour. A workflow that runs every 15 minutes = 2,880 executions/month on its own. One high-frequency workflow can exhaust the Starter limit.

## Cloud Pro ($60/month) — When It Makes Sense

15 active workflows and 10,000 executions/month. The better comparison point is a team that runs medium-volume automations and doesn't want infrastructure overhead.

At $60/month, you're spending more than [Zapier](/tools/zapier/) Professional ($49/month) for fewer executions. The advantage is n8n's superior code support, AI agent capabilities, and no-per-task-pricing philosophy.

For most teams choosing Cloud Pro over Starter: the 15-workflow limit is the real driver, not execution count.

## What You Should Actually Do

**Start here:**
1. Deploy n8n locally with [Docker](/tools/docker/) for free: `docker run -p 5678:5678 n8nio/n8n`
2. Build your workflows in the free local environment
3. If you like it, deploy to a $5-12/month VPS for production

**Choose Cloud Starter if:**
- You have fewer than 5 core automations
- Your team has no one comfortable with server administration
- You're evaluating before a bigger commitment

**Choose Cloud Pro if:**
- You need 6-15 active workflows
- Your team doesn't want to manage infrastructure
- You're willing to pay the premium for managed hosting

**Choose Enterprise if:**
- You need SSO, audit logs, and SLA guarantees
- You run high-volume automations that exceed Pro limits
- Compliance requirements demand managed infrastructure

## Hidden Costs of Self-Hosting

Self-hosted is "free" but not costless. Factor in:

- **Server management time**: Monthly updates, monitoring, troubleshooting
- **Reliability overhead**: You're responsible for uptime
- **Initial setup time**: 30-60 minutes for someone comfortable with Linux, longer for others

For a developer who manages servers anyway, these costs are negligible. For a small business owner without technical staff, they matter.

## n8n vs Zapier vs Make Pricing at Scale

| Monthly executions | n8n self-hosted | Zapier | Make |
|-------------------|-----------------|--------|------|
| 1,000 | ~$5 (server) | $0 (free) | $0 (free) |
| 5,000 | ~$5 (server) | $49/month | $10.59/month |
| 25,000 | ~$10 (upgraded server) | $49+/month (Team) | $18.82/month |
| 100,000 | ~$10-20 (server) | Custom/Enterprise | $34.12/month |
| 500,000+ | ~$20-40 (server) | Custom/Enterprise | Custom |

At high execution volumes, the self-hosted n8n cost advantage is substantial. At low volumes, Zapier's free tier or Make's free plan are more practical starting points.

## Summary

n8n pricing works best for technical teams that self-host. The cloud plans are expensive relative to execution limits and don't match the value of a $10/month VPS with unlimited usage.

If you're non-technical or evaluating n8n for the first time, Cloud Starter ($24/month) is a reasonable starting point. Once you understand whether n8n fits your workflow, moving to self-hosted pays back the cloud cost within one month.

---

**Related:** [n8n Full Review 2026](/blog/n8n-review-2026) | [Zapier vs n8n: Which to Choose?](/blog/zapier-vs-n8n-2026) | [Make vs n8n in 2026](/blog/make-vs-n8n-2026)

## Frequently Asked Questions

### Is N8N free?

Yes, N8N offers a free plan with limited features. See the pricing breakdown above for what's included in each tier.

### Is N8N worth paying for?

It depends on your needs. The free plan works for basic use, but teams and power users will benefit from paid features. See our plan-by-plan analysis above.

### What is the cheapest N8N plan?

Check the pricing table above for the most current pricing. Plans and pricing may change — we update this page regularly.

