---
title: "Helicone Review 2026: Open-Source LLM Observability That Actually Works"
description: "Helicone logs every LLM request with one line of code. Here's our review of its observability features, pricing, and how it compares to Langsmith and Portkey."
pubDate: "2026-08-16"
tags: ["helicone", "llm", "developer-tools", "ai-observability"]
---

If you're calling GPT-4 or Claude from your app and have no idea what it's costing you, where it's slow, or why certain requests fail — Helicone fixes that. One line of code change, and suddenly you have full request logging, cost tracking, and caching. Here's whether it's worth it.

## What Is Helicone?

Helicone is an open-source LLM observability platform. It sits as a proxy between your application and your AI provider (OpenAI, Anthropic, Gemini, etc.) and logs every request and response. You can self-host it or use their managed cloud.

The pitch is simple: you shouldn't be flying blind on your AI costs and latency. Most teams building on top of LLMs start with zero visibility — they have no idea which prompts are expensive, which users are burning through tokens, or whether their model calls are even succeeding.

Helicone solves that without requiring you to instrument your code from scratch.

## How Integration Works

This is Helicone's biggest selling point. To add observability to an OpenAI integration, you change one line:

```js
// Before
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// After — route through Helicone
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: "https://oai.helicone.ai/v1",
  defaultHeaders: {
    "Helicone-Auth": `Bearer ${process.env.HELICONE_API_KEY}`,
  },
});
```

That's it. All your existing calls now get logged. No SDK swap, no refactoring, no middleware setup. Anthropic, Gemini, Azure OpenAI, and most other providers work the same way.

## Key Features

### Request Logging

Every LLM call gets captured: input prompt, output, model, latency, token count, and cost. You can filter by time range, model, user, session, or custom properties you attach. The dashboard shows you which requests are slow, which are expensive, and where errors cluster.

### Cost Tracking

Helicone calculates cost automatically based on your model and token usage. You can break it down by user, endpoint, or custom tag. For teams spending $500+/month on AI API calls, this alone usually pays for itself.

### Prompt Versioning

You can define prompts in Helicone and version them without redeploying your app. Each version is tracked, so you can compare how prompt changes affect output quality, latency, and cost across real traffic.

### Caching

Helicone can cache identical or semantically similar requests. Repeated queries return cached responses instantly at zero cost. For apps with predictable query patterns (FAQs, document classification, etc.), this cuts costs meaningfully.

### Rate Limiting

You can set limits per user, session, or API key. Useful when you're building multi-tenant apps and need to prevent any single user from burning through your budget.

### Evals

Helicone has a built-in evaluation layer where you can score responses and track quality metrics over time. It's less mature than dedicated eval tools, but covers the basics for teams that don't want to set up a separate system.

## Open Source and Self-Hosting

Helicone is fully open source under the Apache 2.0 license. You can run it on your own infrastructure with Docker. Self-hosting means your request data never leaves your environment — important for healthcare, finance, or enterprise use cases with strict data residency requirements.

The cloud version handles setup for you but your LLM traffic routes through Helicone's servers. For most startups, that's fine. For regulated industries, self-hosting is the path.

## Helicone vs LangSmith vs Portkey

| Feature | Helicone | LangSmith | Portkey |
|---|---|---|---|
| Open source | Yes (Apache 2.0) | No | No |
| Self-hostable | Yes | Enterprise only | No |
| Integration | 1-line proxy swap | LangChain SDK | Proxy + SDK |
| Cost tracking | Yes | Limited | Yes |
| Prompt versioning | Yes | Yes | Yes |
| Caching | Yes | No | Yes |
| Evals | Basic | Advanced | Basic |
| Free tier | 10k req/month | 5k traces/month | 10k req/month |
| Paid tier | $80/month | $39/month | $49/month |

**LangSmith** is the better choice if you're already deep in LangChain and want native tracing through complex chains and agents. Its eval tooling is more advanced. The downside: it's not open source, and you're locked into the LangChain ecosystem.

**Portkey** is a strong alternative with a solid gateway layer, but requires more code changes than Helicone's proxy approach. See our [Portkey review](/blog/portkey-review-2026) for a full breakdown.

**Helicone** wins on simplicity of integration and the open-source option. If you want to add observability fast without changing your code structure, it's the easiest starting point.

## Pricing

- **Free**: 10,000 requests/month, basic dashboard, 30-day log retention
- **Pro**: $80/month — unlimited requests, longer retention, prompt management, caching
- **Enterprise**: Custom pricing — SSO, on-prem deployment, dedicated support

The jump from free to Pro is steep if you're only doing moderate volume. The free tier covers most side projects and early-stage products.

## Who Should Use Helicone

Helicone makes most sense for:

- **Dev teams building AI features** who want visibility into costs and latency without instrumentation overhead
- **Multi-tenant SaaS products** where you need per-user cost tracking and rate limiting
- **Compliance-sensitive apps** that need self-hosted observability
- **Teams running A/B tests on prompts** who want to compare versions against real traffic

It's overkill for single-model, single-purpose scripts. But for any production app making LLM calls, the free tier is worth setting up in 10 minutes.

The [Cursor](/tools/cursor/) team and others in the AI-native dev tool space treat observability as non-negotiable. Helicone makes it the easiest option to start with.

**Try Helicone free → [helicone.ai](https://helicone.ai)**
