---
title: "How to Use Vapi Squads 2026: Multi-Agent Voice Workflows Explained"
description: "How to use Vapi Squads in 2026: what Squads are, how handoffs work, when to use them, and step-by-step setup for multi-agent voice call workflows."
pubDate: "2026-08-25"
tags: ["vapi", "voice-ai", "ai-agents", "how-to", "multi-agent"]
---

Vapi removed its Flow Studio visual builder in August 2026. The replacement for complex, multi-step voice workflows is **Squads** — a code-based system that lets multiple specialized AI agents hand off calls to each other while keeping full conversation context.

Here's what Squads are, when they make sense, and how to set them up.

## What Are Vapi Squads?

A Squad is a group of Vapi assistants that work together on a single call. Instead of one agent trying to handle every part of a conversation, you assign different assistants to different tasks. When the conversation hits a handoff point, the active assistant transfers control to the next specialist — and the caller never has to repeat themselves.

**Example: Medical intake workflow**
1. **Intake agent** → collects name, DOB, insurance information
2. **Symptom screening agent** → asks clinical questions based on intake
3. **Scheduling agent** → books an appointment in your system
4. **Confirmation agent** → reads back appointment details and answers FAQs

Each assistant is focused on its task. Context (what was said in earlier stages) carries over automatically.

## When to Use Squads

Squads solve a specific problem: **single-prompt agents fail at complex, multi-step conversations.**

A single assistant with a 10,000-word system prompt trying to handle intake, screening, scheduling, and confirmation will drift, lose track, and respond inconsistently. Breaking this into four focused agents produces better outputs at each stage.

**Use Squads when:**
- Your call flow has distinct phases (intake → qualification → scheduling → confirmation)
- Different steps require different knowledge bases or tools
- Handoffs are conditional (e.g., "if caller mentions billing, transfer to billing specialist")
- You need to maintain conversation context across multiple agents

**Don't use Squads when:**
- Your workflow is simple and linear (single agent handles it fine)
- You want low-code setup (Squads require code)
- You're building a chatbot, not a voice agent (Squads are voice-specific)

## Setting Up a Vapi Squad: Step by Step

### Step 1: Create individual assistants

Each squad member is a standard Vapi assistant. Create them via the API:

```json
POST https://api.vapi.ai/assistant
{
  "name": "Intake Agent",
  "model": {
    "provider": "openai",
    "model": "gpt-5-6-sol",
    "messages": [
      {
        "role": "system",
        "content": "You are a medical intake specialist. Collect: full name, date of birth, and insurance provider. Once you have all three, say 'transferring you to the next specialist.'"
      }
    ]
  },
  "voice": {
    "provider": "elevenlabs",
    "voiceId": "your-voice-id"
  }
}
```

### Step 2: Define handoff conditions

Each assistant needs to know when to hand off. Set this in the assistant's system prompt:

- Use explicit trigger phrases ("say 'transferring now'" to trigger handoff)
- Or define function tools that call a `transferCall` action

### Step 3: Create the Squad

```json
POST https://api.vapi.ai/squad
{
  "name": "Medical Intake Squad",
  "members": [
    {
      "assistantId": "intake-agent-id",
      "assistantOverrides": {},
      "handoffMessage": "Connecting you to our scheduling team now.",
      "handoffConditions": {
        "triggerPhrase": "transferring you to the next specialist"
      },
      "destinations": [
        {
          "type": "assistant",
          "assistantId": "symptom-screening-agent-id"
        }
      ]
    },
    {
      "assistantId": "symptom-screening-agent-id",
      "destinations": [
        {
          "type": "assistant",
          "assistantId": "scheduling-agent-id"
        }
      ]
    },
    {
      "assistantId": "scheduling-agent-id",
      "destinations": [
        {
          "type": "assistant",
          "assistantId": "confirmation-agent-id"
        }
      ]
    },
    {
      "assistantId": "confirmation-agent-id"
    }
  ]
}
```

### Step 4: Create an inbound phone number using the Squad

```json
POST https://api.vapi.ai/phone-number
{
  "provider": "twilio",
  "number": "+1XXXXXXXXXX",
  "squadId": "your-squad-id"
}
```

Incoming calls to this number will start with the first squad member (intake agent) and flow through the defined handoff chain.

## How Context Transfer Works

When an assistant hands off to the next squad member, Vapi passes:
- The full conversation transcript up to that point
- Any variables the previous assistant stored (via function calls)
- The caller's speech metadata (silence detection settings, etc.)

The receiving assistant has full context — the caller doesn't need to re-introduce themselves or repeat information.

## Common Squad Patterns

**Linear sequence** (most common)
`Agent A → Agent B → Agent C → End`
Use for: intake flows, onboarding sequences, survey calls

**Conditional routing**
`Intake → if billing issue → Billing Agent | if support issue → Support Agent`
Use for: customer service triage, multi-department contact centers

**Specialist escalation**
`Tier 1 Agent → if unresolved → Tier 2 Agent → if unresolved → Human handoff`
Use for: technical support, complex sales objections

## Cost Considerations

Each agent in a Squad is a separate Vapi assistant, but costs are still per-minute for the full call:
- You pay one $0.05/min platform fee for the entire call duration
- LLM costs accumulate per assistant (each agent uses tokens independently)
- Longer conversations with more handoffs cost more in LLM tokens

For a 5-minute call that passes through 3 agents, expect roughly the same platform cost as a single 5-minute agent, but potentially higher LLM costs if each agent runs a large system prompt.

## Squads vs the Old Flow Studio

| | Flow Studio (removed) | Squads |
|--|----------------------|--------|
| **Interface** | Visual drag-and-drop | Code (API/JSON) |
| **Complexity** | Low (no-code) | High (requires development) |
| **Flexibility** | Limited | Full control |
| **Handoff logic** | Built-in visual triggers | Custom code |
| **Context passing** | Automatic | Automatic |

If you built workflows in Flow Studio, you'll need to re-implement them as Squads. Vapi provided a migration guide in August 2026 — check their documentation for the exact mapping of Flow Studio blocks to Squad concepts.

## Getting Started

1. Review Vapi's [Squads documentation](https://docs.vapi.ai) (check for the latest Squads API reference)
2. Build and test each assistant individually before assembling the Squad
3. Use Vapi's dashboard to monitor handoff events and conversation logs during testing
4. Deploy to a test phone number before going to production

[Vapi pricing breakdown →](/blog/vapi-pricing-2026) | [Vapi vs Retell AI →](/blog/vapi-vs-retell-ai-2026) | [Best AI voice agent platforms 2026 →](/blog/best-ai-voice-agent-platforms-2026)
