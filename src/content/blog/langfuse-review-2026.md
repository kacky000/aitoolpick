---
title: "Langfuse Review 2026: The Open-Source LLM Observability Platform"
description: "Langfuse is the leading open-source LLM observability platform with 24K+ GitHub stars. Acquired by ClickHouse in 2026. Here's what it does well — and where it's overkill."
pubDate: "2026-08-17"
tags: ["langfuse", "llm-observability", "developer-tools", "open-source"]
---

# Langfuse Review 2026: The Open-Source LLM Observability Platform

Langfuse started as a two-person startup in 2023 and became the default open-source choice for LLM observability in the span of two years. In January 2026, ClickHouse acquired them — a signal that the observability stack for LLMs is maturing fast, and Langfuse is at the center of it.

Here's an honest evaluation of whether it's the right tool for your team.

---

## What Langfuse Does

Langfuse is an LLM engineering platform with four interconnected capabilities:

1. **Tracing** — Log every LLM call, chain step, and agent action with full input/output capture, latency, and cost attribution. Traces are hierarchical: you see the full agent run as a tree, not a flat list of API calls.

2. **Prompt Management** — Version, deploy, and A/B test prompts from a central UI without redeploying your application. Engineers can update prompts; product managers can review them.

3. **Evaluation** — Run automated evals against your trace dataset using LLM-as-judge, human annotation queues, or custom scoring functions. This is the feature that separates Langfuse from simpler logging tools.

4. **Dataset Management** — Curate examples from production traces into test datasets. Run evals against these datasets before deploying prompt changes.

---

## The ClickHouse Acquisition (January 2026)

Langfuse moved under ClickHouse ownership in January 2026. ClickHouse is the columnar database that Langfuse uses internally for storing traces at scale. The acquisition means:

- **Self-hosting** is now viable at billion-trace scale using ClickHouse's infrastructure
- The MIT license was extended to cover every product feature (tracing, evals, prompts, annotation queues) — only thin enterprise compliance features (SCIM, audit logs, project-RBAC) remain commercial
- Long-term independence from VC funding is no longer a risk

This is a better outcome than most open-source acquisitions. ClickHouse doesn't compete with Langfuse; they supply the infrastructure layer.

---

## Pricing

| Plan | Price | Usage | Users |
|------|-------|-------|-------|
| Hobby (Cloud) | Free | 50K units/month | 2 |
| Core (Cloud) | $29/month | 100K units/month | Unlimited |
| Pro (Cloud) | $199/month | 3-year retention | Unlimited |
| Enterprise | $2,499/month | Custom | Unlimited |
| **Self-hosted** | **Free** | **Unlimited** | **Unlimited** |

The self-hosted option is the standout: full product, MIT license, no seat caps, no retention limits. You pay only for your own ClickHouse infrastructure, which scales cheaply at high volume.

The Core plan at $29/month is the most competitive entry point in the LLM observability category — cheaper than Helicone Pro ($79) and Portkey Production ($49), with more evaluation features.

---

## Integrations

Langfuse has SDKs for Python, JavaScript/TypeScript, and OpenAI-compatible wrappers. Framework integrations include:

- LangChain (automatic instrumentation)
- LlamaIndex
- Vercel AI SDK
- Haystack
- LiteLLM
- OpenAI SDK (native tracing decorator)
- Anthropic SDK

If you're using LangChain, adding Langfuse is three lines of code. If you're calling the OpenAI SDK directly, you use the `@observe` decorator.

---

## What Langfuse Does Well

**Trace depth for agents**: Langfuse's hierarchical trace view is genuinely better for complex agents than Helicone's flat log view. You see exactly which chain step called what model with what input, including all intermediate reasoning.

**Eval pipeline**: The ability to run automated evaluations on production traces using LLM-as-judge is a feature most observability tools don't have. For teams doing regular prompt iteration, this closes the feedback loop.

**Dataset creation**: Curating production traces into eval datasets from the same UI — without exporting to CSV and running scripts — is a quality-of-life win.

**Self-hosting**: For teams with data residency requirements, a fully-featured self-hosted option with no feature gates is rare in this category.

---

## Where Langfuse Falls Short

**Setup complexity vs Helicone**: Helicone's proxy approach (change one URL) is faster. Langfuse requires instrumenting your code with decorators or SDK wrappers. For simple OpenAI call logging, Helicone gets there quicker.

**Self-hosting ClickHouse**: The self-hosted option requires running ClickHouse in production. That's not trivial — it's a powerful database, but one that requires operational knowledge. Smaller teams without DevOps capacity will find the managed cloud easier.

**UI polish**: The UI is functional but not beautiful. Teams coming from polished SaaS products may find the interface a bit utilitarian.

---

## Who Should Use Langfuse?

**Good fit:**
- Teams using LangChain or LlamaIndex for complex agents
- Organizations with data residency requirements (self-hosting)
- Teams that want to run systematic evals on prompts and agents
- Budget-conscious teams who want the most features per dollar

**Not the best fit:**
- Teams doing simple OpenAI call logging who want zero-config setup (use Helicone)
- Teams deeply invested in LangChain who want native debugging (LangSmith integrates more deeply)
- Very small projects where the observability overhead isn't justified

---

## Langfuse vs Alternatives

| Tool | Best For | Price Entry | Self-Hosted |
|------|----------|-------------|-------------|
| **Langfuse** | Agents, evals, OSS teams | $29/mo (or free self-host) | Yes (full features) |
| Helicone | Fast setup, simple logging | $79/mo | Partial |
| LangSmith | LangChain-native debugging | $39/seat/mo | No |
| Portkey | Guardrails + gateway | $49/mo | Enterprise only |

---

## Bottom Line

Langfuse is the best open-source LLM observability platform available in 2026. The MIT license, ClickHouse acquisition, and comprehensive feature set (tracing + evals + prompt management) make it the default choice for teams that care about data ownership and want more than basic logging. The $29 Core plan or the free self-hosted option are both excellent starting points.

The main caveat: setup takes longer than Helicone's proxy approach. If you need to be logging in 5 minutes and don't need evals, Helicone or Portkey are faster on-ramps.

Compare [Langfuse vs Helicone →](/blog/helicone-vs-langfuse-2026)

See the [best LLM observability tools in 2026 →](/blog/best-llm-observability-tools-2026)
