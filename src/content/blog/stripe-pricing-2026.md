---
title: "Stripe Pricing 2026: What 2.9% + 30¢ Actually Costs You"
description: "Complete Stripe pricing guide for 2026. How the 2.9% + 30¢ fee works, international and currency costs, chargebacks, and when flat-rate processors are cheaper."
pubDate: "2026-05-22"
heroImage: "/thumbs/stripe-pricing-2026.jpg"
tags: ["stripe", "pricing", "payments", "saas", "ecommerce"]
---
**[Stripe](/tools/stripe/)** has no monthly subscription fee — you pay per transaction. The headline rate is simple, but your real cost depends on where your customers are, what currency they pay in, and how many disputes you handle. Here's exactly what Stripe charges in 2026 and when it stops being the cheapest option.

## Stripe Pricing in 2026

| What you pay | Amount | Applies to |
|--------------|--------|-----------|
| Standard online card | **2.9% + $0.30** | US domestic card payments |
| International cards | +1.5% | Cards issued outside the US |
| Currency conversion | +1–2% | Charges not in your settlement currency |
| Chargeback / dispute | $15 each | Whether you win or lose the dispute |
| Manual card entry | +0.5% | Keyed-in (not swiped/online) payments |

There's no setup fee, no monthly minimum, and no hidden platform charge on the standard plan. You pay only when you get paid.

### What "2.9% + 30¢" means in real money

The fixed 30¢ is what makes Stripe expensive on small transactions and cheap on large ones:

| Transaction | Stripe fee | Effective rate |
|-------------|-----------|----------------|
| $5 | $0.45 | 9.0% |
| $25 | $1.03 | 4.1% |
| $100 | $3.20 | 3.2% |
| $500 | $14.80 | 3.0% |

If you sell low-priced digital products, the per-transaction 30¢ quietly eats a big share of revenue. That's the single most important number to model before committing.

## Stripe's Product Add-Ons

Stripe is no longer just a payment processor. Each product layers its own fee on top of processing:

- **Stripe Billing** — 0.5% on recurring payments (0.8% on the Scale tier with advanced features)
- **Stripe Tax** — 0.5% per transaction where you're registered to collect tax
- **Stripe Radar** (fraud) — included basic, or $0.07 per screened transaction for the advanced ruleset
- **Stripe Connect** (marketplaces/platforms) — 0.25% + $0.25 per active account on the standard option

These stack. A SaaS using Billing + Tax + advanced Radar can pay closer to 4% all-in than the 2.9% sticker rate.

## How Stripe Compares on Price

| Processor | Per-transaction | Monthly fee | Best for |
|-----------|-----------------|-------------|----------|
| Stripe | 2.9% + $0.30 | $0 | Developers, SaaS, custom checkout |
| PayPal | 3.49% + $0.49 | $0 | Buyer trust, quick setup |
| Square | 2.6% + $0.10 | $0 | In-person + online retail |
| [Shopify Payments](/blog/shopify-pricing-2026) | 2.9% + $0.30 (lower on higher plans) | Plan fee | Full ecommerce stores |

Stripe wins on developer experience and flexibility, not on raw rate. For creators selling subscriptions, the alternative isn't another processor — it's a platform that bundles payments, like [Substack](/blog/substack-pricing-2026) or [Beehiiv](/blog/beehiiv-pricing-2026), which take their own cut but remove the build work.

## Is Stripe Worth the Cost?

### It's worth it if:

- You want **full control of checkout** and a best-in-class API
- You're building a **SaaS or marketplace** and need Billing, Tax, or Connect
- You sell **mid-to-high priced** products where the 30¢ is negligible
- You value reliability and global card coverage over the lowest possible rate

### Look elsewhere if:

- You sell **lots of small transactions** — the fixed 30¢ crushes your margin
- You want an all-in-one storefront without writing code
- A bundled platform ([Substack](/blog/substack-pricing-2026), Gumroad) would save you the engineering effort

## Tips to Lower Your Stripe Costs

1. **Raise your price points** — bundle small items so the 30¢ is spread over a larger sale
2. **Negotiate custom rates** — Stripe offers volume pricing above ~$80K/month in processing
3. **Turn off add-ons you don't use** — Billing and Tax fees apply silently once enabled
4. **Win disputes proactively** — $15 per chargeback adds up; use Radar rules to block risky payments
5. **Settle in your customers' currency** when possible to avoid the 1–2% conversion fee

## The Bottom Line

Stripe's 2.9% + 30¢ is fair for a platform with this much power and reliability, but it's not the cheapest way to take money — and the add-on fees mean your real rate is usually higher than the sticker. Model your actual transaction sizes first. If your average sale is over $50 and you need developer flexibility, Stripe is excellent value. If you sell cheap digital goods, a bundled creator platform will often net you more.

[Compare creator and payment tools side by side →](/compare)

## Frequently Asked Questions

### Does Stripe have a monthly fee?

No. Stripe's standard plan has no monthly or setup fee — you pay 2.9% + $0.30 per successful card charge. Add-on products like Billing and Tax carry their own per-transaction fees.

### Why is Stripe so expensive on small payments?

The fixed $0.30 per transaction dominates the cost of small sales. On a $5 charge, fees are effectively 9%. Bundling products into larger transactions reduces the impact.

### Can I negotiate Stripe's pricing?

Yes. High-volume businesses (typically processing $80K+ per month) can request custom interchange-plus pricing that lowers the effective rate.
