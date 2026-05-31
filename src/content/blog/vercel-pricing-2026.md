---
title: "Vercel Pricing 2026: Hobby vs Pro vs Enterprise — What You're Really Paying For"
description: "Complete Vercel pricing guide for 2026. Bandwidth, function executions, and the hidden costs that scale your bill — plus when to use Netlify or Cloudflare Pages instead."
pubDate: "2026-05-20"
heroImage: "/thumbs/vercel-pricing-2026.jpg"
tags: ["vercel", "pricing", "hosting", "nextjs", "deployment"]
---

**[Vercel](/tools/vercel/)** has three main plans — Hobby, Pro, and Enterprise — but the headline pricing is only half the picture. The actual cost of Vercel depends on bandwidth, function invocations, edge requests, and build minutes, and overages can quickly push a $20 plan past $200.

Here's how every plan actually works in 2026, what each metered resource costs, and how to decide whether Vercel is the right host for you.

## Vercel Plans Overview

| Plan | Price | Best For |
|------|-------|----------|
| Hobby | $0 | Personal sites, prototypes, learning |
| Pro | $20/user/month | Production apps, small to mid teams |
| Enterprise | Custom | Larger teams needing SLA and compliance |

The headline price is per user — a 3-person Pro team is $60/month before any usage charges.

## Hobby Plan ($0)

Hobby is generous for non-commercial use but explicitly prohibited for commercial projects. Vercel enforces this — if you're running an SaaS, even at low traffic, you need Pro.

**Hobby includes:**
- 100 GB bandwidth/month
- 100 GB-hours function execution
- 1,000 image optimizations/month
- 100 deployments/day
- Vercel domains and free SSL
- Community support

**The catch:** No commercial usage, no team collaboration, no custom DNS for ENS/decentralized features. Side projects fit here; revenue-generating sites don't.

## Pro Plan ($20/user/month)

Pro is the workhorse plan for most production deployments. The base allowances are larger and you're allowed commercial use.

**Pro includes:**
- 1 TB bandwidth/month
- 1,000 GB-hours function execution
- 5,000 image optimizations/month
- Team collaboration
- Password-protected deployments
- Email support
- Web analytics (basic)

**Where bills grow:** Every metered resource has overage pricing, and they add up quickly:

- Bandwidth overage: $40 per 100 GB
- Function execution: $40 per 100 GB-hours
- Edge function executions: $2 per 1M
- Image optimizations: $5 per 1,000

A traffic spike from a viral post can turn a $20 month into a $300 month. Vercel offers spending caps now — set them.

## Enterprise Plan (Custom)

Enterprise starts in the $25K+/year range and includes negotiated commits, dedicated support, and contractual SLAs.

**Enterprise adds:**
- 99.99% uptime SLA
- Dedicated support engineer
- Multi-region deployments
- SAML SSO
- Audit log
- Custom contract terms
- Volume-based pricing

If you're spending more than $1,500/month on Pro, talk to Vercel sales — Enterprise commits usually beat metered Pro at that scale.

## The Hidden Costs

The pricing trap on Vercel isn't the per-seat price. It's the metered overages.

**Bandwidth:** A Next.js app serving images and videos burns bandwidth faster than people expect. Optimize images, lazy-load below the fold, and consider hosting heavy media on Cloudflare R2 or [AWS S3](/tools/aws/).

**Function executions:** Every `getServerSideProps` call, every API route, every server component render counts. Cache aggressively. Use ISR over SSR where possible.

**Image optimizations:** Vercel's `next/image` charges per source image processed. A photo gallery can easily hit the cap. Pre-process images at build time or use a separate CDN for static images.

## Vercel vs Alternatives

| Feature | Vercel Pro | [Netlify](/tools/netlify/) Pro | [Cloudflare](/tools/cloudflare/) Pages |
|---------|-----------|---------------|------------------|
| Price | $20/user | $19/user | $0–$20 |
| Bandwidth | 1 TB | 1 TB | Unlimited |
| Functions | 1,000 GB-hrs | 1,000 GB-hrs | 10M req/day |
| Build minutes | 6,000 | 25,000 | 5,000 |
| Next.js support | Native | Full | Via Workers |
| Pricing model | Per-seat + usage | Per-seat + usage | Mostly flat |

[Cloudflare](/tools/cloudflare/) Pages wins on bandwidth pricing — unlimited even on free. [Netlify](/tools/netlify/) wins on build minutes. Vercel wins on Next.js DX and edge primitives.

See our full [Vercel vs Netlify comparison](/compare/vercel-vs-netlify/) for the deep dive.

## When Vercel Is Worth It

- You're building with Next.js and want the most polished DX
- Your traffic is steady or predictable
- You need the preview deployment workflow for team review
- You're using Vercel's KV, Postgres, or Edge Config products

## When to Look Elsewhere

- You're bandwidth-heavy (video, large images) → Cloudflare Pages
- You're a [Hugo](/tools/hugo/) / [Astro](/tools/astro/) static-only project → Cloudflare or Netlify
- You need a backend tier — consider Railway, Fly, or self-hosting

## Which Plan Should You Pick?

- **Personal site / blog:** Hobby (or migrate to Cloudflare Pages free)
- **Small SaaS, 1–3 devs:** Pro with spending caps set
- **Mid-market team:** Pro until you hit ~$1,500/month, then negotiate Enterprise
- **Large enterprise:** Enterprise from day one

The biggest mistake new Vercel users make is not setting spending caps. The second is using `getServerSideProps` for content that could be statically generated. Both will inflate your bill faster than the per-seat price.

## Ready to compare hosting platforms?

[See how Vercel stacks up against Netlify, Cloudflare Pages, and AWS Amplify →](/category/hosting-deployment/)
