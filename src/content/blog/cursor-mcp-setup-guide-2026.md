---
title: "Cursor MCP Setup Guide 2026: Connect External Tools to Your AI IDE"
description: "Step-by-step Cursor MCP (Model Context Protocol) setup. Connect databases, browsers, APIs, and internal tools so your AI knows your full stack."
pubDate: "2026-05-15"
tags: ["cursor", "mcp", "ai-coding", "tutorial"]
heroImage: "/thumbs/cursor-mcp-setup-guide-2026.jpg"
---

MCP (Model Context Protocol) is the standard for letting AI tools talk to external systems. Cursor supports it natively in 2026, and once you set it up, your AI IDE gets dramatically smarter. Here's the full setup guide.

## Why MCP Matters

Without MCP, Cursor only sees your codebase. With MCP, it can:
- Query your actual database to write a correct migration
- Read your Linear/Jira ticket to understand the task before coding
- Hit your internal API docs server for accurate types
- Drive a real browser via Playwright to verify a UI change
- Talk to Figma to pull design tokens

This collapses the gap between "AI generates plausible code" and "AI generates code that fits your real environment."

## Step 1: Locate Cursor's MCP Config

On macOS: `~/Library/Application Support/Cursor/User/mcp.json`
On Windows: `%APPDATA%\Cursor\User\mcp.json`
On Linux: `~/.config/Cursor/User/mcp.json`

You can also access it via Cursor Settings → MCP.

## Step 2: Add Your First Server (Filesystem)

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/yourname/code"
      ]
    }
  }
}
```

Restart Cursor. The filesystem server lets the AI browse paths outside your current workspace — useful for cross-repo work.

## Step 3: Add Postgres (or Your Database)

```json
"postgres": {
  "command": "npx",
  "args": [
    "-y",
    "@modelcontextprotocol/server-postgres",
    "postgresql://user:pass@localhost:5432/dev"
  ]
}
```

⚠️ **Read-only role recommended.** Don't give MCP write access to your prod DB.

## Step 4: Add Playwright for Browser Automation

```json
"playwright": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-playwright"]
}
```

Now Cursor's agent mode can take screenshots, click elements, and verify UI changes end-to-end.

## Step 5: Useful Third-Party Servers

In 2026, the MCP ecosystem has matured. Common picks:

- **Linear MCP**: Read ticket context directly into prompts
- **Slack MCP**: Search past discussions for design decisions
- **GitHub MCP**: Browse PRs, issues, file diffs across repos
- **Notion MCP**: Pull design docs and specs
- **Custom internal API server**: Roll your own with the MCP SDK

## Step 6: Verify Servers Are Loaded

In Cursor, open a new chat and type `@mcp`. Available servers should appear. If they don't:
1. Check `mcp.json` syntax (valid JSON)
2. Check Cursor's MCP logs (Settings → MCP → Show logs)
3. Run the server command manually in terminal to see errors
4. Make sure `npx`/`node` are on Cursor's PATH (a common issue on macOS)

## Common Gotchas

### Cursor can't find Node
On macOS with nvm, Cursor's GUI launch doesn't pick up your shell's Node. Fix by setting absolute paths in `command`, or by launching Cursor from terminal once.

### Server hangs forever
Some MCP servers print debug output to stdout instead of stderr, corrupting the JSON-RPC stream. Update to the latest version or switch to a different implementation.

### Too many servers slow Cursor down
Each server adds startup time and context overhead. Only enable the ones you actually use this session.

## A Practical MCP Setup for Web Devs

```json
{
  "mcpServers": {
    "postgres": { ... },
    "github": { ... },
    "playwright": { ... },
    "linear": { ... }
  }
}
```

This combo lets the AI:
- Read tickets (Linear)
- Understand code context (GitHub)
- Query data (Postgres)
- Verify UI (Playwright)

You suddenly have a junior dev that can read your tickets, query your DB, and click around your app.

## Security Considerations

- **Use read-only credentials** wherever possible
- **Don't commit MCP configs with secrets** — gitignore them
- **Audit third-party MCP servers** before installing — they run with your privileges
- **Rotate API keys** if you suspect a leak

## What's Next

MCP is the most important addition to AI IDEs since chat. Adoption in 2026 has crossed the chasm — most serious AI dev tools support it. Get comfortable with it now and your AI workflow scales as the ecosystem grows.

→ Compare AI IDEs at the [AIToolPick comparison tool](/compare/)

Related reading:
- [Cursor Pricing 2026](/blog/cursor-pricing-2026/)
- [Cursor Tips for Power Users 2026](/blog/cursor-tips-for-power-users-2026/)
- [Best AI Coding Tools for Startups 2026](/blog/best-ai-coding-tools-for-startups-2026/)
