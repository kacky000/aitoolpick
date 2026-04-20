---
title: "n8n Free vs Paid 2026: Self-Hosted vs Cloud Plans Explained"
description: "n8n free vs paid in 2026. Compare self-hosted (free forever) vs n8n Cloud plans. Is it worth paying when you can host it yourself for free?"
pubDate: "2026-04-21"
tags: ["n8n", "automation", "free-vs-paid", "self-hosted", "workflow-automation"]
---

n8n has one of the most unusual pricing models in automation software: the core product is free forever if you self-host. But the cloud plans cost $24–$60/month. Here's exactly what you get in each option and how to decide.

## n8n Pricing Options at a Glance

| Option | Cost | Best For |
|--------|------|----------|
| Self-Hosted (Community) | Free forever | Developers and technical teams |
| Cloud Starter | $24/month | Teams who want managed hosting |
| Cloud Pro | $60/month | Growing teams needing more executions |
| Cloud Enterprise | Custom | Large organizations |

---

## The Self-Hosted Free Plan: What "Free" Really Means

n8n's self-hosted Community Edition is genuinely free with no feature restrictions. You get:

- **Unlimited workflows** — no caps
- **Unlimited executions** — run as many automations as your server can handle
- **All integrations** (400+ apps)
- **Full JavaScript/Python code in every node**
- **AI agent workflow builder**
- **No per-task pricing**

The catch? You need to host it yourself. That means:

- Setting up a server (VPS, Docker, or home server)
- Managing updates
- Handling uptime and backups yourself

For a developer running n8n on a $5/month VPS, this is a no-brainer. For a non-technical team, it's a significant operational burden.

---

## n8n Cloud: What You Pay For

Cloud plans add managed infrastructure — n8n handles hosting, updates, and uptime. Key differences:

### Starter — $24/month
- 2,500 workflow executions/month
- 5 active workflows
- Community support
- Shared cloud infrastructure

### Pro — $60/month
- 10,000 executions/month
- 15 active workflows
- Email support
- Dedicated cloud resources

**The execution limits are the main constraint.** If you run high-frequency automations (e.g., every 5 minutes on 10+ workflows), you'll hit the Starter limit within days.

---

## Self-Hosted vs. Cloud: The Real Trade-off

The question isn't features — it's **operational overhead vs. cost**.

| Factor | Self-Hosted (Free) | Cloud ($24–$60/mo) |
|--------|---------------------|---------------------|
| Technical setup required | Yes | No |
| Execution limits | None | Yes (plan-based) |
| Uptime guarantee | You manage it | n8n manages it |
| Updates | Manual | Automatic |
| Cost | ~$5–10/mo for VPS | $24–$60/mo |

If you or someone on your team can handle Docker, self-hosting is almost always the better deal. A $6/month DigitalOcean droplet running n8n beats paying $24–$60/month for the same functionality.

---

## When to Pay for n8n Cloud

Cloud makes sense if:
- You don't have technical resources to manage a server
- You want guaranteed uptime without DevOps effort
- Your team needs collaborative workflow management with an easy UI
- You're already paying for managed SaaS tools and want consistency

---

## n8n vs. Zapier and Make on Price

If you're comparing automation tools on cost:

| Tool | Free Tier | Paid Starts At |
|------|-----------|----------------|
| n8n (self-hosted) | Unlimited (free forever) | $24/mo (cloud) |
| Zapier | 100 tasks/month | $19.99/mo |
| Make | 1,000 ops/month | $10.59/mo |

For price-conscious teams, n8n self-hosted is unbeatable. For non-technical teams, [Make](/blog/make-review-2026) often hits the sweet spot between affordability and ease of use. See our [Zapier vs n8n comparison](/blog/zapier-vs-n8n-2026) and [Make vs n8n](/blog/make-vs-n8n-2026) for detailed head-to-head analysis.

---

## Bottom Line

**If you're technical:** Self-host n8n for free. There's no reason to pay unless you want managed infrastructure.

**If you're not technical:** Start with the Cloud Starter at $24/month. If you hit execution limits, consider upgrading — or learn to self-host to eliminate the ceiling.

**[Compare n8n vs top automation alternatives →](/tools/n8n)**
