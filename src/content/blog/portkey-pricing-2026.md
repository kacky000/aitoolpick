---
title: "Portkey Pricing 2026: AI Gateway Plans and Costs Explained"
description: "Portkey offers a free tier (10K requests/month) and Production at $49/month. Here's the complete pricing breakdown and how it compares to alternatives."
pubDate: "2026-08-17"
tags: ["portkey", "pricing", "llm", "ai-gateway", "developer-tools"]
---

# Portkey Pricing 2026: AI Gateway Plans and Costs Explained

Portkey is an AI gateway that adds observability, guardrails, caching, and load balancing on top of any LLM provider. Unlike OpenRouter (which earns from credit top-ups), Portkey charges a flat subscription for platform access — not per token.

Here's what each plan costs and what you actually get.

---

## Portkey Pricing Plans (2026)

| Plan | Price | Requests/Month | Logs/Month | Best For |
|------|-------|----------------|------------|----------|
| **Free** | $0 | 10,000 | 10,000 | Side projects, prototyping |
| **Production** | $49/month | 100,000 | 100,000 | Small teams, startups |
| **Enterprise** | Custom | Unlimited | Unlimited | Large teams, regulated industries |

### Free Plan

The free tier is generous for a gateway tool:
- 10,000 API requests and logs/month
- Full AI Gateway functionality (routing, caching, fallbacks)
- Logging and basic observability
- 1 user

No credit card required. Suitable for testing Portkey's routing logic and seeing whether it fits your stack.

### Production Plan — $49/month

The main paid plan adds:
- **100,000 requests and logs/month**
- **Guardrails** (input/output validation, content filtering, PII detection)
- **Load balancing** across providers
- **Team collaboration** (multiple seats included)
- Priority support

Overage: $9 per additional 100,000 logs beyond the included quota.

At $49/month, a 20-person team gets enterprise-grade LLM governance for roughly $2.45 per person — significantly cheaper than building similar infrastructure in-house.

### Enterprise Plan

Custom pricing. Adds:
- Unlimited logs and requests
- SSO and SAML authentication
- VPC/on-premise deployment
- SOC 2 compliance features
- Dedicated support and SLAs
- Custom data retention

Contact Portkey's sales team for pricing.

---

## What Portkey Doesn't Charge For

Portkey passes through provider token costs **without markup**. When you route a Claude Sonnet call through Portkey, you pay Anthropic's published rate directly — Portkey takes nothing on the token. Their revenue comes entirely from the platform subscription.

This is different from OpenRouter (which charges 5.5% on credits) or some managed providers that mark up token costs.

---

## Portkey vs OpenRouter: Pricing Model Comparison

| Factor | Portkey | OpenRouter |
|--------|---------|-----------|
| Subscription | $49/mo (Production) | None |
| Token markup | 0% | 0% |
| Platform fee | Subscription only | 5.5% credit top-up |
| Free tier | 10K req/month | 28+ free models |
| Model count | 1,600+ (via your own keys) | 300+ (managed) |
| Observability | Built-in (detailed) | Basic |
| Guardrails | Yes (Production+) | No |

**Rule of thumb**: If you want observability and guardrails without token markup, Portkey's subscription model wins. If you want to pay zero upfront and just access models, OpenRouter's credit model is simpler.

---

## Cost Estimate by Use Case

### Startup (5 engineers, moderate LLM usage)
- ~50,000 LLM requests/month
- Free plan covers this entirely
- Cost: **$0/month**

### Growing team (10-20 engineers, production app)
- ~80,000 requests/month with logging, guardrails
- Production plan ($49/month) covers this
- Cost: **$49/month**

### Scale-up (100+ engineers, regulated industry)
- Multi-million requests, compliance requirements
- Enterprise plan with VPC deployment
- Cost: **Custom** (typically $500-2,000+/month based on disclosed ranges)

---

## Is the $49 Production Plan Worth It?

The $49/month is worth it if you're:
1. Running LLMs in production and need request logging for debugging
2. Using multiple providers and want automatic fallback (avoid 503 outages)
3. Concerned about data leakage and need guardrails (PII redaction, content filtering)
4. Managing a team where you want centralized API key management

It's not worth it if:
- You only call one LLM provider
- You have fewer than 10,000 requests/month (free tier covers you)
- You need traces for LangChain agents (Langfuse or LangSmith are better fits)

---

## Bottom Line

Portkey's pricing is straightforward: free up to 10,000 requests, $49/month for teams needing guardrails and scale, enterprise pricing for large organizations. The lack of token markup is a genuine advantage over gateway alternatives that clip per token.

Compare [Portkey vs OpenRouter for your LLM stack →](/blog/openrouter-vs-portkey-2026)

See the [full Portkey review →](/blog/portkey-review-2026)
