---
title: "How to Make Your Website Not Look AI-Generated (30-Point Checklist)"
description: "AI-built websites share the same design patterns — gradients, Inter font, 3-column cards, emoji icons. Here's a 30-point checklist to find and fix every tell."
pubDate: "2026-04-08"
tags: ["ai", "design", "web-design", "checklist"]
---

I've built several websites with AI tools over the past year. Every single first draft looked the same: purple-blue gradient hero, Inter font, three cards in a row, emoji icons everywhere.

Users can tell. Google can probably tell too — Helpful Content Update penalizes content that feels auto-generated, and that includes design.

After dozens of iterations and feedback rounds, I compiled the patterns that make a site scream "AI made this." Here's the full list, organized by category, with specific fixes for each one.

## Why This Matters

Google's Helpful Content Update doesn't just evaluate text. The entire page experience matters — and a template-looking site with generic design signals low effort, regardless of how good the content is.

More practically: users bounce faster from sites that feel generic. If your site looks like every other AI-generated landing page, you're competing on content alone while giving away the design advantage.

## The 6 Categories of AI Design Tells

### 1. Colors

The #1 giveaway is the purple-to-blue gradient background. AI models have seen thousands of SaaS landing pages, and this gradient is their default "looks professional" choice.

**What AI does:**
- Purple-to-blue gradient backgrounds
- Gradient buttons (web 2.0 vibes)
- Box-shadow on every single element
- Alternating section background colors (#F5F5F5, white, #F5F5F5, white)
- 5+ colors competing for attention

**What to do instead:**
- Pick one solid base color. Add one accent color. That's it.
- Use flat-color buttons with subtle hover transitions
- Replace shadows with borders — they're cleaner
- Only change section backgrounds when there's a genuine content shift
- White background + dark text + one accent color covers 90% of use cases

### 2. Typography

AI picks from the same three fonts: Inter, Roboto, Open Sans. All fine fonts — but using them signals "I didn't think about typography at all."

**What AI does:**
- Inter/Roboto/Open Sans everywhere
- Same font family for headings and body
- Uniform size increments (16px → 24px → 32px)
- line-height: 1.5 on everything
- Default letter-spacing on everything

**What to do instead:**
- Try DM Sans, Plus Jakarta Sans, Sora, or Geist for English
- Use Noto Sans JP or BIZ UDGothic for Japanese
- Different font families (or at least weights and spacing) for headings vs body
- Make hero titles dramatically larger — not incremental
- Headings: line-height 1.1–1.3. Body: 1.6–1.8.
- Tighten letter-spacing on large headings (-0.02em)

### 3. Layout

Three columns of identical cards, repeated for every section. That's the AI layout formula.

**What AI does:**
- 3-column card grid repeated 3+ times
- Every section: heading → description → 3 cards
- Everything center-aligned
- Same padding/margin on every section
- Fullscreen hero + big text + 2 CTA buttons (the SaaS template)

**What to do instead:**
- Mix 1-column, 2-column, and list layouts
- Vary the visual structure between sections
- Left-align by default. Center only for heroes or short headings
- Use wider spacing for important sections, tighter for related ones
- Match the hero size and layout to your actual content

### 4. Copy & Microcopy

AI copy is vague, uses buzzwords, and avoids specifics. This is where text and design overlap.

**What AI writes:**
- "Unlock your potential" / "Empower your workflow" / "Seamless experience"
- Japanese: 「〜を、もっと〜に」
- "Learn more" buttons everywhere
- "Features" / "Solutions" / "Benefits" as section headings
- 3-sentence subtitles

**What to write instead:**
- Concrete verbs: calculate, compare, find, build, track
- Japanese: 何ができるかを書く（「旅行費用を計算する」）
- Specific CTAs: "Calculate your budget" / "Compare 3 tools side by side"
- Specific headings: "What you can track" / "How it saves you 3 hours/week"
- Subtitles: 1 sentence max. If you need more, it's body text.

### 5. Images & Icons

AI uses emoji as icons and picks stock photos by keyword — not by meaning.

**What AI does:**
- 🚀 💡 ✨ as section icons
- Stock photos that don't match the content (Tokyo Tower on an Osaka page)
- Same image reused across 5 pages
- AI-generated illustrations with 6 fingers and melted text
- Gradient placeholder boxes where images should be

**What to do instead:**
- Use SVG icon libraries: Lucide, Heroicons, Phosphor
- Match every image to the specific content it illustrates
- No unique image? Design the layout without one. Don't fake it.
- Never use AI illustrations unless you can verify every detail
- If an image isn't real, remove it entirely

### 6. UX & Interaction

AI builds pages that dump everything at once with scroll animations on everything.

**What AI does:**
- 50+ items visible without folding
- Scroll-reveal animations (opacity: 0 → 1) on everything
- All components look identical
- Tiny tap targets on mobile
- 3+ CTA buttons per section

**What to do instead:**
- Show 6–9 items initially, "show more" for the rest
- Skip scroll animations or test them thoroughly (they break with View Transitions)
- Vary component designs between sections
- Minimum 44×44px touch targets on mobile
- Max 2 CTAs per section: primary + secondary

## The Quick Test

Can't go through all 30 items? Here's the 5-second version:

1. **Screenshot your site at full width.** Does it look like every other SaaS landing page?
2. **Remove all text.** Is the layout still distinctive, or is it just cards in rows?
3. **Show it to someone who doesn't know you.** Ask: "Does this look like a template?"

If the answer to any of these is "yes," you have work to do.

## Use Our Free Tool

We built an interactive version of this checklist:

**[AI Design Checker →](/tools/ai-design-checker/)** — check all 30 items, get a score, see your weakest category and priority fixes.

## FAQ

### Does Google penalize AI-generated websites?

Google's Helpful Content Update targets low-value content regardless of how it was made. A well-designed AI-built site with genuine value won't be penalized — but a generic-looking one might rank lower because it signals low effort.

### What's the fastest way to make an AI-built site look human?

Change the font, remove gradients, and vary your layout. These three changes alone eliminate the most obvious AI tells.

### Are AI-generated illustrations OK to use?

Generally no. Current AI image generators produce artifacts (extra fingers, melted text, inconsistent lighting) that users recognize instantly. SVG illustrations or real photographs are safer bets.

### Should I avoid AI tools entirely?

No. AI is great for speed. The key is to treat AI output as a first draft, not a final product. Run it through a checklist like this one, make intentional design choices, and customize until it feels yours.
