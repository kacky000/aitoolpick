---
title: "How to Switch from Evernote to Obsidian: Complete Migration Guide"
description: "Step-by-step guide to migrating from Evernote to Obsidian in 2026. Export notes, convert formats, preserve tags, and set up your new vault."
pubDate: "2026-04-04"
tags: ["evernote", "obsidian", "migration", "note-taking"]
---

Evernote's declining free tier and rising prices have pushed many long-time users to look elsewhere. [Obsidian](/tools/obsidian) — with its free personal plan, local-first storage, and powerful linking — has become the top destination for Evernote refugees.

But migrating years of notes isn't trivial. Here's how to do it without losing anything.

## Why People Are Switching

Before we dive in, here's why the move makes sense:

| Factor | Evernote | Obsidian |
|--------|----------|---------|
| Price (personal) | $10.83/mo (free: 50 notes max) | Free |
| Storage | Cloud-only | Local files (your computer) |
| Privacy | Stored on Evernote servers | Your files, your control |
| Format | Proprietary | Plain Markdown |
| Offline access | Limited on free | Full offline |
| Customization | Minimal | 1,500+ plugins |

For a deeper comparison, see our [Obsidian vs Evernote](/blog/obsidian-vs-evernote-2026) breakdown.

## Step 1: Export Your Evernote Data

### Option A: Export as ENEX (Recommended)
1. Open Evernote desktop app
2. Select a notebook (or all notes with Ctrl/Cmd+A)
3. Go to **File → Export Notes**
4. Choose **ENEX format (.enex)**
5. Save the file

Repeat for each notebook if you want to maintain organization.

### Option B: Export as HTML
If ENEX gives you trouble, export as HTML. Obsidian's importer handles both formats.

**Important:** Export from the **desktop app**, not the web version. The web version may not export attachments properly.

## Step 2: Install Obsidian and Create a Vault

1. Download [Obsidian](https://obsidian.md) (free)
2. Create a new vault — choose a folder on your computer
3. Pick a location you control (e.g., Documents/ObsidianVault)

**Pro tip:** If you want cloud sync, place your vault in iCloud Drive, Google Drive, or Dropbox. Obsidian Sync ($4/mo) is the official option but not required.

## Step 3: Import with the Obsidian Importer Plugin

Obsidian has a first-party importer that handles Evernote conversions:

1. Open Obsidian Settings → **Community Plugins** → Browse
2. Search for **"Importer"** (by Obsidian team)
3. Install and enable it
4. Go to **Settings → Importer**
5. Select **Evernote (.enex)** as the format
6. Choose your exported .enex file(s)
7. Click **Import**

The importer converts:
- Note content → Markdown files
- Tags → Obsidian tags (#tag format)
- Attachments → Saved in an attachments folder
- Creation/modification dates → Preserved in frontmatter
- Internal links → Converted where possible

## Step 4: Organize Your New Vault

After import, your notes will be in Obsidian but likely need restructuring:

### Folder Structure
Evernote uses notebooks and stacks. In Obsidian, you can replicate this with folders:
```
/Vault
  /Work
    /Projects
    /Meeting Notes
  /Personal
    /Journal
    /Reading Notes
  /Reference
```

Or go folder-light and rely on links and tags instead — that's the Obsidian way.

### Fix Tags
The importer converts Evernote tags, but check for:
- Spaces in tags (Obsidian uses `#kebab-case` or `#CamelCase`)
- Nested tags (use `#parent/child` format)

### Handle Attachments
Images and files are imported to an attachments folder. In Settings → Files & Links, set your default attachment location to keep things tidy.

## Step 5: Set Up Essential Plugins

Obsidian's power comes from plugins. Here are the must-haves for Evernote converts:

| Plugin | Replaces | What It Does |
|--------|----------|-------------|
| **Calendar** | Evernote's note calendar | Daily notes calendar view |
| **Dataview** | Evernote's saved searches | Query your notes like a database |
| **Templater** | Evernote templates | Powerful note templates |
| **Quick Switcher++** | Evernote search | Enhanced search and navigation |
| **Periodic Notes** | — | Weekly/monthly note templates |

## Step 6: Rebuild Your Workflow

The biggest adjustment isn't technical — it's mental. Evernote is a *filing cabinet* (put notes in folders). Obsidian is a *knowledge graph* (connect notes with links).

### Key mindset shifts:
1. **Link first, folder later** — Use `[[double brackets]]` to connect related notes
2. **Daily notes** — Start each day with a daily note and link to projects/topics
3. **Tags for status, links for relationships** — Use tags like `#todo` or `#review`, use links for "this note relates to that note"
4. **Graph view** — Check your graph periodically to find unlinked notes and clusters

## Common Migration Issues

| Problem | Solution |
|---------|---------|
| Garbled formatting | Re-export from Evernote desktop (not web) |
| Missing images | Check attachments folder, re-import if needed |
| Duplicate notes | Use "Find and Replace" plugin to identify duplicates |
| Broken internal links | Manually update `[[links]]` between related notes |
| Large vault is slow | Enable "Restricted" mode for plugins, use SSD storage |

## Is Obsidian Right for You?

Obsidian is ideal if you want **privacy, control, and customization**. But it's not for everyone.

**Switch to Obsidian if:**
- You want free, offline note-taking
- You're comfortable with Markdown
- You value data ownership
- You like tinkering with plugins

**Stay with Evernote (or switch to [Notion](/tools/notion)) if:**
- You need real-time collaboration
- You prefer a polished, ready-to-use UI
- You don't want to manage plugins
- You rely heavily on web clipping

## Next Steps

- Explore [best Obsidian alternatives](/blog/best-obsidian-alternatives-2026) if you're still deciding
- Read our [Evernote review](/blog/evernote-review-2026) for a full assessment
- Check [best note-taking apps for 2026](/blog/best-note-taking-apps-2026) for more options
