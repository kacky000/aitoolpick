---
title: "n8n Cloud vs Self-Hosted: Which Should You Choose in 2026?"
description: "n8n Cloud starts at $24/mo. Self-hosting is free but needs a server. Here's how to decide which option fits your team, budget, and technical skills."
pubDate: "2026-11-09"
heroImage: "/thumbs/n8n-cloud-vs-self-hosted-2026.jpg"
tags: ["n8n", "automation", "self-hosted", "cloud"]
lastModified: "2026-11-09"
---

n8n has become one of the most popular workflow automation platforms for developers and technical teams who want more control than Zapier offers. Its open-source codebase and fair-code license mean you can run it yourself—completely free—on your own infrastructure. But n8n also offers a managed cloud version with hands-off maintenance.

The question isn't which one is "better." It's which one fits your situation. This guide breaks down the real tradeoffs so you can make the right call.

---

## What Is n8n?

[n8n](/tools/n8n/) is a workflow automation tool that lets you connect APIs, services, and data sources using a visual node-based editor. It supports 400+ integrations, allows custom JavaScript inside workflows, and handles both simple automations (send email when form submitted) and complex multi-branch logic (parse webhook → enrich with API → write to database → notify Slack → update CRM).

It sits between no-code tools like Zapier and full-code solutions like writing custom scripts. Technical users get JavaScript access; non-technical users can build with the visual editor.

---

## n8n Cloud Pricing (2026)

n8n Cloud is the managed SaaS version. n8n handles hosting, updates, backups, and uptime monitoring.

| Plan | Price | Executions | Active Workflows | Users |
|------|-------|-----------|-----------------|-------|
| Starter | $24/mo | 2,500/mo | 5 | 1 |
| Pro | $60/mo | 10,000/mo | 15 | 5 |
| Team | $140/mo | 50,000/mo | Unlimited | 10 |
| Enterprise | Custom | Custom | Unlimited | Unlimited |

**What counts as an execution?** Each time a workflow runs, it counts as one execution—regardless of how many nodes are in that workflow.

The Starter plan at $24/mo is restrictive for active users. 2,500 executions sounds like a lot, but if you're running hourly checks across several workflows, you can hit that in a week.

---

## n8n Self-Hosted

Self-hosting n8n is free under its fair-code license. You pay only for the server you run it on.

### What You Need

**A VPS or cloud instance.** n8n runs well on modest hardware:
- Minimum: 1 vCPU, 1GB RAM
- Recommended: 2 vCPU, 2GB RAM for active use with multiple workflows

Typical VPS costs in 2026:
- **DigitalOcean Droplet (Basic):** $6/mo (1 vCPU, 1GB RAM)
- **Hetzner CX21:** ~$5/mo (2 vCPU, 4GB RAM) — popular choice in Europe
- **Vultr or Linode equivalent:** $5-10/mo
- **Railway:** ~$5-15/mo depending on usage
- **Fly.io:** $5-10/mo with free tier available

**Docker.** The official n8n Docker image is the standard way to run it. A basic setup takes about 15 minutes if you're comfortable with Docker Compose.

**A domain and SSL.** For webhook workflows to work reliably, you need a public URL with HTTPS. Most teams use a subdomain like `n8n.yourdomain.com` with Let's Encrypt SSL (free).

### Execution Limits

Self-hosted n8n has **no execution limits**. Run 100,000 workflows per month—or 1,000,000. The only constraint is your server's compute capacity, which scales with what you pay for hosting.

---

## Head-to-Head Comparison

| Factor | n8n Cloud | Self-Hosted |
|--------|-----------|-------------|
| Monthly cost | $24-$140+ | $5-20 (VPS only) |
| Setup time | 5 minutes | 30-60 minutes |
| Maintenance | n8n handles it | You handle updates, backups |
| Execution limits | Yes (plan-based) | None |
| Uptime guarantee | 99.9% SLA | Your responsibility |
| Data residency | n8n's servers | Your chosen server/region |
| Latest features | Auto-updated | Manual update required |
| Support | Email/chat | Community forums |
| Team collaboration | Built-in | Requires setup |
| Custom npm packages | Restricted | Full access |

---

## When to Choose n8n Cloud

**You're a solo user or small team with moderate automation needs.** If you're running fewer than 2,500 executions per month and don't want to maintain a server, the $24 Starter plan is a reasonable convenience fee.

**You don't have a developer or sysadmin.** If nobody on your team is comfortable with Docker, SSH, or Linux server maintenance, the cloud version removes those requirements entirely. A failing self-hosted instance at 2am isn't worth the cost savings if nobody can fix it.

**You need guaranteed uptime with an SLA.** n8n's cloud includes a 99.9% uptime guarantee and handles infrastructure incidents. For business-critical automations, that reliability has real value.

**You're evaluating n8n before committing.** The cloud plan makes it easy to start quickly, test workflows, and decide if n8n fits your needs before investing time in a self-hosted setup.

---

## When to Choose Self-Hosted

**You run high execution volumes.** This is the clearest case. If you're running 20,000+ executions per month, the cloud Pro plan ($60/mo) or Team plan ($140/mo) gets expensive quickly. A $10/mo VPS running self-hosted n8n has no such limits.

**You handle sensitive data.** Healthcare, finance, legal, and similar industries often can't send data through third-party SaaS systems. Self-hosting keeps everything on infrastructure you control. For detailed pricing and compliance considerations, see our [n8n pricing breakdown](/blog/n8n-pricing-2026).

**You need custom npm packages.** n8n's self-hosted version supports installing custom Node.js packages via the `N8N_CUSTOM_EXTENSIONS` or community nodes settings. Cloud restricts this.

**You have technical expertise on the team.** If you're already running Docker containers and comfortable with Linux administration, the marginal effort of maintaining n8n yourself is low.

**You want to avoid per-seat pricing long-term.** A growing team on n8n Cloud can get expensive. A single self-hosted instance serves any number of users.

---

## Real Cost Comparison Over 12 Months

Assuming a 5-person technical team with medium-high automation usage:

**n8n Cloud Pro:** $60/mo × 12 = **$720/year**

**Self-hosted on Hetzner CX21:** $5/mo × 12 = **$60/year** (plus ~2 hours setup time + occasional maintenance)

**Self-hosted on DigitalOcean (Managed):** $12/mo × 12 = **$144/year**

The savings are significant. For teams that can handle the technical setup, self-hosting pays back its setup time within the first month.

---

## Migration Path

One practical consideration: n8n supports exporting and importing workflows as JSON. You can start on n8n Cloud to get familiar with the tool, then export your workflows and import them into a self-hosted instance later. The migration is not painless (you'll need to reconfigure credentials), but it's doable.

Going the other direction—cloud to cloud, or self-hosted to self-hosted—is straightforward.

---

## n8n vs. Alternatives

If you're still evaluating whether n8n is right for you at all, it's worth comparing against Zapier (simpler, more expensive at scale) and Make.com (better visual UI for complex multi-step flows). See our [n8n vs Zapier comparison](/blog/n8n-vs-zapier-2026) for a detailed feature and pricing breakdown.

---

## Final Recommendation

**Choose n8n Cloud if:** You want zero maintenance, run fewer than 10,000 executions/month, and your team isn't technical.

**Choose self-hosted if:** You run high execution volumes, handle sensitive data, have technical team members, or want to minimize long-term costs.

For most technical teams and developers, **self-hosting is the right default** in 2026. The setup has become easier with Docker, good community documentation, and affordable VPS options. The savings and flexibility outweigh the maintenance overhead for anyone comfortable with basic server administration.

---

**Compare n8n against other automation tools →** [n8n vs Zapier](/compare/n8n-vs-zapier)
