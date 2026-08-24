---
title: "Vapi Pricing 2026: True Costs, Hidden Fees, and What You Actually Pay"
description: "Vapi AI pricing 2026 explained: the $0.05/min base rate vs real all-in costs of $0.30+/min. Full breakdown of Vapi's pricing model, Squads, and concurrency fees."
pubDate: "2026-08-25"
tags: ["vapi", "voice-ai", "ai-pricing", "ai-agents", "pricing"]
---

Vapi advertises voice agents starting at $0.05 per minute. The real number is closer to $0.30–0.33 per minute once you add the services Vapi doesn't bundle. Here's the honest breakdown.

## Vapi's Advertised Price vs Actual Cost

| Cost component | Per minute |
|----------------|-----------|
| **Vapi platform fee** | $0.05 |
| **Speech-to-text (e.g., Deepgram)** | $0.01–0.04 |
| **LLM inference (e.g., GPT-5.6 Sol)** | $0.10–0.15 |
| **Text-to-speech (e.g., ElevenLabs)** | $0.05–0.08 |
| **Telephony (Twilio/Vonage)** | $0.01–0.02 |
| **Total (typical production stack)** | **$0.22–0.34/min** |

The $0.05/min Vapi fee is just the infrastructure wrapper. You supply — and pay separately for — the speech recognition, LLM, text-to-speech, and telephony layers.

## Self-Serve Pricing

Vapi operates on a **usage-based model** with no monthly subscription:
- $0.05/min platform fee billed at the end of each billing cycle
- Concurrency: **10 simultaneous calls included by default**
- Additional concurrency: **$10 per extra concurrent call per month**
- No minimum commitment, no trial period restrictions

There's no free tier, but new accounts can connect their own API keys (LLM, STT, TTS) from the start.

## Enterprise Pricing

Enterprise pricing is custom. Key enterprise features:
- Custom concurrency limits (above the default 10)
- SLA guarantees
- Compliance support (SOC 2, HIPAA on request)
- Dedicated account management

Contact Vapi's sales team for enterprise quotes. No public minimum is disclosed.

## Concurrency Fees Explained

Concurrency is where Vapi costs can escalate unexpectedly.

| Concurrent calls | Monthly concurrency cost |
|-----------------|--------------------------|
| Up to 10 | Included |
| 11–20 | $100/month |
| 21–50 | $400/month |
| 51–100 | $900/month |

For a call center use case handling 50+ simultaneous calls, concurrency fees alone can exceed $400–$900/month before per-minute charges.

## Cost Estimator: Monthly Scenarios

### Small deployment (1,000 min/month, 5 concurrent)
- Platform: 1,000 × $0.05 = $50
- Full stack (avg $0.25 addl): $250
- **Total: ~$300/month**

### Medium deployment (10,000 min/month, 20 concurrent)
- Platform: 10,000 × $0.05 = $500
- Full stack: $2,500
- Concurrency (10 extra): $100
- **Total: ~$3,100/month**

### Large deployment (100,000 min/month, 50 concurrent)
- Platform: $5,000
- Full stack: $25,000
- Concurrency (40 extra): $400
- **Total: ~$30,400/month**

## Vapi vs Retell AI Pricing Comparison

Retell AI charges a flat $0.07+/min that includes STT, LLM, and TTS — no separate vendor accounts needed.

| | Vapi | Retell AI |
|--|------|-----------|
| **Minimum rate** | $0.05/min + extras | $0.07/min (all-in) |
| **Typical all-in** | $0.22–0.34/min | $0.12–0.20/min |
| **LLM included** | No (bring your own) | Yes |
| **STT included** | No (bring your own) | Yes |
| **Concurrency fees** | Yes ($10/extra slot) | Lower caps |
| **Setup complexity** | High | Low |

Counterintuitively, Vapi's "cheaper" base rate often results in a higher total bill compared to Retell AI's all-in pricing — unless you negotiate bulk rates with third-party providers.

## What Changed in August 2026

Vapi removed its **Flow Studio** visual workflow builder in August 2026. This was its no-code interface for building conversation flows. Going forward, complex multi-step workflows require using Vapi's **Squads** feature — a code-based approach where multiple specialized agents hand off calls to each other.

This change made Vapi more developer-centric and less accessible for non-technical users.

## Is Vapi Worth It?

**Vapi is worth it if:**
- You have an engineering team comfortable working with APIs
- You want full control over LLM, STT, and TTS providers
- You need to use models or voice providers Retell AI doesn't support
- You're already running those providers for other use cases and can negotiate bulk rates

**Consider Retell AI instead if:**
- You want a simpler setup with all-in pricing
- You don't have engineers to manage the multi-provider stack
- Predictable monthly costs are more important than provider flexibility

[Compare Vapi vs Retell AI →](/blog/vapi-vs-retell-ai-2026) | [How to use Vapi Squads →](/blog/how-to-use-vapi-squads-2026) | [Best AI voice agent platforms 2026 →](/blog/best-ai-voice-agent-platforms-2026)
