---
title: "Retell AI Pricing 2026: Plans, Per-Minute Costs, and What You Actually Pay"
description: "Retell AI pricing 2026 explained. Per-minute rates, plan tiers, enterprise cost breakdown, and how Retell compares to Vapi's stacked billing model."
pubDate: "2026-08-26"
tags: ["retell-ai", "pricing", "voice-ai", "ai-agents", "cost"]
---

Retell AI uses a flat per-minute pricing model — one rate covers STT, LLM, and TTS — which makes cost forecasting straightforward compared to competitors that stack multiple billing components. Here's the full pricing breakdown for 2026.

## Retell AI Pricing Plans

Retell AI offers usage-based pricing with volume tiers. Pricing is structured around voice minutes consumed.

| Plan | Monthly Minimum | Per-Minute Rate | Key Limits |
|------|----------------|-----------------|-----------|
| **Starter** | Pay-as-you-go | ~$0.09/min | Limited concurrent calls |
| **Growth** | ~$200/month | ~$0.07/min | Higher concurrency, priority support |
| **Enterprise** | Custom | Custom (lower) | SLA, HIPAA, dedicated infra |

*Rates as of 2026. Check Retell's site for the latest.*

## What's Included in the Per-Minute Rate

Retell's flat rate covers the full voice pipeline:

- **Telephony**: Inbound/outbound call handling
- **Speech-to-Text (STT)**: Deepgram or equivalent transcription
- **LLM inference**: GPT-4o, Claude, or Gemini conversation logic
- **Text-to-Speech (TTS)**: ElevenLabs, Play.ht, or Retell's native voices

You are **not** billed separately for each component. This is the key difference from [Vapi's pricing model](/blog/vapi-pricing-2026), where $0.05/min for hosting is just the starting point before STT, LLM, and TTS costs are layered on.

## Real Cost Estimates

For planning purposes:

| Volume | Monthly Minutes | Estimated Cost (Growth tier) |
|--------|-----------------|------------------------------|
| Small (pilot) | 1,000 min | ~$70–90 |
| Mid (active deployment) | 10,000 min | ~$700–900 |
| High (enterprise) | 100,000 min | Negotiated rate |

A 3-minute call costs roughly $0.21–0.27 on the Growth tier. For outbound lead qualification campaigns at scale, this is competitive with hiring human SDRs at ~$0.50–$2.00+ per connected call.

## What Drives Costs Up

- **LLM model choice**: Using Claude Opus or GPT-4o adds more per-token cost than GPT-4o-mini or smaller models
- **Long average call duration**: Complex support flows run 8–12 minutes vs 2–3 for simple scheduling
- **Concurrent call limits**: Exceeding plan limits may require an upgrade or overage fees
- **Bring-your-own Twilio**: If you use your own Twilio account for phone numbers, Twilio's per-minute rate is added on top

## Phone Number Costs

Retell provides phone numbers for US, Canada, and UK. Pricing for phone numbers is typically separate:

- Local numbers: ~$2–5/month per number
- Toll-free: ~$3–8/month per number
- International numbers via Twilio BYOA: Twilio's standard rates apply

## Enterprise Pricing

Enterprise contracts include:

- Custom per-minute rates (typically below $0.05/min at high volume)
- HIPAA Business Associate Agreement (BAA)
- SOC 2 Type II documentation
- Dedicated infrastructure options
- SLA with uptime guarantees
- Dedicated customer success manager

Enterprise pricing requires a sales call. Expect negotiation starting points at 50k–100k minutes/month commitment.

## Retell AI vs Vapi: Total Cost Comparison

| Metric | Retell AI | Vapi (typical stack) |
|--------|-----------|----------------------|
| Base rate | ~$0.07–0.09/min | $0.05/min (hosting only) |
| STT | Included | +$0.01–0.03/min |
| LLM | Included | +$0.03–0.08/min (model-dependent) |
| TTS | Included | +$0.01–0.05/min |
| **Total typical** | **$0.07–0.09/min** | **$0.10–0.21/min** |

At moderate volumes, Retell's flat rate often comes out **cheaper** than Vapi's stacked billing, despite Vapi's lower headline price. The gap closes if you use commodity models on Vapi with careful optimization.

Full comparison: [Vapi vs Retell AI 2026](/blog/vapi-vs-retell-ai-2026) | [Retell AI review](/blog/retell-ai-review-2026)

## Is Retell AI Worth the Price?

For enterprise teams and regulated industries, yes. The flat rate plus HIPAA/SOC 2 coverage removes both budget uncertainty and compliance overhead. For individual developers or startups running experiments at low volume, Vapi's flexibility might offer more cost control.

The breakeven math usually favors Retell once you're running 1,000+ minutes/month with a team that values deployment speed over component-level optimization.
