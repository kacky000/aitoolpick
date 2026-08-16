---
title: "Helicone Pricing 2026: Free Tier, Pro Plan, and What Changed After Mintlify"
description: "Helicone offers 10K free requests/month and a Pro plan at $79/month. Here's the full pricing breakdown — and what to know post-Mintlify acquisition."
pubDate: "2026-08-17"
tags: ["helicone", "pricing", "llm-observability", "developer-tools"]
---

# Helicone Pricing 2026: Free Tier, Pro Plan, and What Changed After Mintlify

Helicone is an LLM observability tool built as a proxy — you point your OpenAI SDK at Helicone's endpoint instead of OpenAI's, and it logs every request automatically. The pricing model has stayed stable, but the March 2026 acquisition by Mintlify introduced some uncertainty worth knowing about before you commit.

Here's the full breakdown.

---

## Helicone Pricing Plans (2026)

| Plan | Price | Requests/Month | Retention | Users |
|------|-------|----------------|-----------|-------|
| **Free** | $0 | 10,000 | 7 days | 1 |
| **Pro** | $79/month | Unlimited | 30 days | Unlimited |
| **Team** | $799/month | Unlimited | 90 days | Unlimited |
| **Enterprise** | Custom | Unlimited | Custom | Unlimited |

### Free Plan

The free tier covers:
- 10,000 logged requests/month
- 7-day log retention
- Basic dashboard and cost tracking
- 1 user

Enough for small side projects or evaluating the platform. The 7-day retention is the main limitation — you can't do trend analysis beyond a week.

### Pro Plan — $79/month

- Unlimited logged requests
- 30-day log retention
- All users (no seat limits)
- Caching, rate limiting, custom properties
- Priority support

The jump from Free to Pro is significant ($0 to $79), but the unlimited request volume means you won't hit surprise overages.

### Team Plan — $799/month

Adds:
- 90-day log retention
- SOC 2 compliance
- HIPAA compliance support
- Advanced analytics and custom dashboards

Targeted at healthcare, fintech, or any team with data compliance requirements.

### Enterprise

Custom pricing for:
- On-premises deployment
- Custom retention periods (12+ months)
- Dedicated infrastructure
- SLAs and enterprise agreements

---

## The Mintlify Acquisition: What It Means for Pricing

In March 2026, Mintlify (documentation platform) acquired Helicone. The product remains available and supported, but it's now in a maintenance-mode phase while Mintlify evaluates its long-term roadmap.

**Practical implications:**
- Pricing has not changed since acquisition
- New feature development has slowed
- The team is smaller than pre-acquisition
- Long-term product direction is unclear

If you're evaluating Helicone for a multi-year commitment, this uncertainty is worth factoring in. For short-term use or smaller projects, the current product still works well.

---

## Helicone vs Portkey vs Langfuse: Pricing Compared

| Tool | Free Tier | Paid Entry | Token Markup | Observability Depth |
|------|-----------|------------|--------------|-------------------|
| Helicone | 10K req/mo | $79/mo | None | Medium |
| Portkey | 10K req/mo | $49/mo | None | Medium |
| Langfuse | 50K units/mo | $29/mo | None | High (OSS) |

Langfuse's $29/month Core plan is significantly cheaper, with deeper evaluation features and a self-hosted option. Portkey's $49 Production plan is less than Helicone's $79 Pro with comparable observability plus guardrails. Helicone's main advantage remains its dead-simple setup — one URL change and you're logging.

---

## Is Helicone Worth $79/Month?

**Worth it if:**
- You want the fastest possible setup (one environment variable change)
- You're already using OpenAI and want immediate cost visibility
- You need a quick win for a small team without DevOps capacity

**Not worth it if:**
- You're running LangChain agents (trace depth is limited vs Langfuse)
- You're budget-constrained (Langfuse is cheaper with more features)
- You need long-term product confidence (post-acquisition uncertainty)

---

## Cost to Get Started

You can start for free with no credit card:
1. Sign up at helicone.ai
2. Add your `HELICONE_API_KEY` to your `.env`
3. Change your OpenAI base URL to `https://oai.helicone.ai/v1`
4. Every LLM call is now logged

The setup takes under 5 minutes — that's genuinely faster than any competitor.

---

## Bottom Line

Helicone's pricing is simple and transparent. The free tier is usable for testing, and the $79 Pro plan makes sense for teams that value setup speed over feature depth. The post-Mintlify uncertainty is the main risk; if you need a long-term observability solution, Langfuse or Portkey are safer bets.

Compare [Helicone vs Langfuse side by side →](/blog/helicone-vs-langfuse-2026)

Read the [full Helicone review →](/blog/helicone-review-2026)
