---
title: "OpenAI Codex Pricing 2026: Credits, Plans, and What You'll Actually Pay"
description: "Complete breakdown of OpenAI Codex pricing in 2026 — ChatGPT plan tiers, token-based credits, Codex-only seats, and real-world cost estimates."
pubDate: "2026-05-13"
tags: ["openai", "codex", "pricing", "ai-coding"]
---

# OpenAI Codex Pricing 2026: Credits, Plans, and What You'll Actually Pay

Codex pricing isn't as simple as picking a plan. Since the shift to token-based billing in April 2026, what you actually pay depends on which ChatGPT tier you're on, how much you use Codex, and which models you select. Here's the full breakdown.

## ChatGPT Plan Tiers

Codex is bundled with ChatGPT subscriptions. Every tier includes some level of Codex access, but the usage limits and rate caps differ substantially.

| Plan | Monthly Cost | Codex Included | Rate Limits | Best For |
|------|-------------|----------------|-------------|----------|
| Free | $0 | Yes (limited) | Strict | Trying Codex out |
| Go | — | Yes | Moderate | Light, occasional use |
| Plus | $20/mo | Yes | Standard | Entry point for regular use |
| Pro | $200/mo | Yes | Minimal | Full-time Codex + CLI users |
| Business | Per seat | Yes | Standard | Team management + admin |
| Enterprise | Custom | Yes | Custom | Compliance, SSO, SLA |

## Token-Based Pricing (Since April 2, 2026)

OpenAI moved Codex to a token-based credit system on April 2, 2026. Your subscription provides a monthly credit allocation, and each Codex task consumes credits based on:

- **Input tokens**: How much code and context Codex reads
- **Output tokens**: How much code and text Codex generates
- **Compute time**: How long the cloud worktree runs
- **Model selection**: More capable models cost more per token

This replaced the previous flat-usage model and brought Codex pricing in line with OpenAI's broader API billing approach.

## What You'll Actually Pay

Based on real usage patterns reported by developers:

### Light Usage (~5-10 tasks/week)
- **Plan**: Plus ($20/mo)
- **Overage**: Rare
- **Effective cost**: ~$20–40/month
- **Typical user**: Developer using Codex for occasional refactoring, documentation, or bug fixes

### Regular Usage (~3-5 tasks/day)
- **Plan**: Plus ($20/mo) + overage, or Pro ($200/mo)
- **Effective cost**: ~$100–150/month
- **Typical user**: Developer relying on Codex daily for feature work and code reviews

### Heavy Usage (parallel agents, CI/CD automation)
- **Plan**: Pro ($200/mo)
- **Effective cost**: ~$150–300/month
- **Typical user**: Team lead running multiple agents, automated pipeline fixes, scheduled tasks

### Team Usage (multiple seats)
- **Plan**: Business or Enterprise
- **Effective cost**: ~$100–200/developer/month
- **Typical team**: 5-20 developers with shared workspace credits

## Codex-Only Seats

For organizations that want Codex access without the full ChatGPT experience, OpenAI offers **Codex-only seats at $0/user/month**. The catch: there's no included credit allocation. All usage is billed against workspace-level credits that you purchase separately.

This makes sense for teams where most developers only need the coding agent, not ChatGPT's conversational AI. You pay for exactly what you use, with no per-seat subscription overhead.

## Pro vs Plus: Which Plan for Codex?

This is the decision most individual developers face.

**Plus ($20/mo)** gives you access to Codex with standard rate limits. For occasional use — a few tasks per day, no parallel agents — it's sufficient. You'll hit rate limits if you try to run Codex heavily, and overage charges can push your monthly bill higher than expected.

**Pro ($200/mo)** removes most rate limits and is the recommended tier for developers who use Codex as a primary tool. If you're running parallel agents, using CI/CD automations, or scheduling recurring tasks, Pro eliminates the friction of hitting caps mid-workflow.

The gap between $20 and $200 is steep. For many developers, the real question is whether Codex saves enough time to justify the jump. If you're using it 2-3 hours daily, Pro typically pays for itself.

## How Codex Pricing Compares

Here's how Codex stacks up against other AI coding tools:

| Tool | Pricing Model | Entry Price | Full-Featured | Notes |
|------|--------------|-------------|---------------|-------|
| **OpenAI Codex** | Token-based + subscription | $20/mo (Plus) | $200/mo (Pro) | Credits vary by usage |
| **Claude Code** | Flat subscription | $20/mo (Pro) | $100–200/mo (Max) | No per-token billing |
| **Devin** | ACU-based | $20/mo (Core) | $500/mo (Team) | ACUs = ~15 min work each |
| **Cursor** | Subscription | Free | $20–200/mo (Pro/Ultra) | IDE-based, different category |
| **GitHub Copilot** | Subscription | Free | $19/mo (Pro) | Code completion, not agent |

For detailed breakdowns of alternatives, see our [Devin pricing guide](/blog/devin-pricing-2026) and [Cursor pricing breakdown](/blog/cursor-pricing-2026).

### Codex vs Claude Code Pricing

[Claude Code](/blog/openai-codex-vs-claude-code-2026) uses flat subscription pricing through Claude Pro ($20/mo) and Max ($100–200/mo). No token counting, no overage charges. Your monthly bill is predictable. Codex's token-based model can be cheaper for light users or more expensive for heavy ones. If budget predictability matters, Claude Code has the edge.

### Codex vs Devin Pricing

Devin's Team plan at $500/month includes 250 ACUs (each roughly 15 minutes of work). Codex at $100–200/month for equivalent usage is significantly cheaper. Devin's pricing reflects its higher autonomy — it does more without supervision — but the cost difference is hard to ignore for most teams.

## Hidden Costs to Watch

- **Model selection**: Premium models consume credits faster. Sticking with default models keeps costs down.
- **Large repositories**: Repos with extensive codebases consume more input tokens per task.
- **Parallel agents**: Running 3-5 agents simultaneously multiplies credit consumption proportionally.
- **Failed tasks**: Codex tasks that fail still consume credits. Poorly scoped prompts waste budget.
- **Scheduled tasks**: Recurring automated tasks add up over time if not monitored.

## Tips to Optimize Codex Costs

1. **Start with Plus** and track your actual usage for a month before upgrading to Pro
2. **Scope tasks tightly** — vague prompts lead to longer, more expensive runs
3. **Use Codex-only seats** for team members who don't need ChatGPT
4. **Monitor credit consumption** weekly through the OpenAI dashboard
5. **Reserve parallel agents** for genuinely independent tasks, not sequential work

## The Bottom Line

Codex pricing is flexible but requires attention. The Plus plan at $20/month is a reasonable starting point, but most active developers land in the $100–200/month range. Pro at $200/month is the sweet spot for daily users who want to avoid rate limit friction. Compared to Devin at $500/month, Codex offers better value for most use cases — but Claude Code's flat pricing is simpler if you want predictable bills.

Compare OpenAI Codex pricing with alternatives on AIToolPick → [Codex Review](/blog/openai-codex-review-2026) | [Devin Pricing](/blog/devin-pricing-2026) | [Cursor Pricing](/blog/cursor-pricing-2026)
