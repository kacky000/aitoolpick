---
title: "How to Switch from Notion to Obsidian: Complete Migration Guide"
description: "Step-by-step guide to migrate from Notion to Obsidian — export your notes, handle databases, fix broken links, and set up the right plugins to replace what you lose."
pubDate: "2026-04-05"
heroImage: "/thumbs/how-to-switch-from-notion-to-obsidian.jpg"
tags: ["notion", "obsidian", "migration", "note-taking"]
---

Notion is powerful but comes with a cost: your data lives in the cloud on someone else's server, load times can crawl, and the monthly bill adds up. Obsidian, on the other hand, stores everything as plain Markdown files on your own machine — fast, offline, and free. If you've been thinking about making the switch, this guide walks you through every step.

Before you start, check out our [Notion vs Obsidian comparison](/blog/notion-vs-obsidian-which-note-app) for a high-level breakdown of the trade-offs between the two apps.

## What Transfers Well (and What Doesn't)

Not everything survives the move cleanly. Set realistic expectations before you begin.

**Transfers well:**
- Plain text notes and rich text formatting (headings, bold, italic, bullet lists)
- Inline images that are embedded in pages
- Basic tables (converted to Markdown tables)
- Page hierarchy (subpages become subfolders)
- Tags stored as page properties

**Transfers poorly or not at all:**
- Notion databases with formulas, rollups, and relations — these become flat Markdown files
- Linked databases and filtered views
- Comments and page history
- Embedded files other than images (PDFs, videos need manual re-linking)
- Web bookmarks stored as full-page embeds
- Notion integrations and automations

If your Notion workspace is mostly pages and docs, you'll lose very little. If you rely heavily on relational databases, expect to spend time rebuilding those structures in Obsidian using plugins like Dataview.

## Step 1: Export Your Notion Workspace

Notion provides a built-in export option that outputs Markdown and CSV files.

1. Open Notion and click **Settings & Members** in the left sidebar
2. Go to **Settings** > scroll down to the **Export content** section
3. Click **Export all workspace content**
4. Select **Markdown & CSV** as the export format
5. Enable **Include subpages** and **Create folders for subpages**
6. Click **Export** — Notion will email you a download link within a few minutes

The download is a `.zip` file. Extract it to a temporary folder (e.g., `~/Desktop/notion-export`). You'll see a folder structure that mirrors your Notion workspace, with `.md` files for pages and `.csv` files for each database.

**Time estimate:** Export itself takes 5–15 minutes depending on workspace size.

## Step 2: Clean Up the Export

Notion's export isn't perfectly clean. Before importing into Obsidian, do a quick cleanup pass.

**Rename files with URL-encoded characters.** Notion names files using the page title plus a unique ID suffix (e.g., `My Notes abc123def456.md`). The ID suffix breaks wikilinks. Use a bulk rename tool or a terminal command to strip the IDs:

```bash
# Example using a shell script — adjust for your OS
for f in **/*.md; do
  mv "$f" "$(echo "$f" | sed 's/ [a-f0-9]\{32\}\.md$/.md/')"
done
```

**Check for broken image paths.** Images are exported into subfolders. If paths look like `My Notes abc123/image.png`, they may need updating after renaming files.

**Flatten or keep hierarchy.** Decide now whether you want your Obsidian vault to mirror Notion's folder structure or use a flatter approach with tags and links. Restructuring is easier before you import than after.

**Time estimate:** 30 minutes to 2 hours depending on workspace size and how much cleanup is needed.

## Step 3: Create Your Obsidian Vault

1. Download and install [Obsidian](https://obsidian.md) — it's free
2. Open Obsidian and select **Open folder as vault**
3. Choose a clean, empty folder (e.g., `~/Documents/MyVault`)
4. Move your cleaned-up Notion export files into this vault folder

Obsidian will immediately index all `.md` files and display them in the left sidebar. Your note content is readable right away.

Read our [full Obsidian review](/blog/obsidian-review-2026) for a deeper look at the app's strengths and limitations before committing fully.

## Step 4: Fix Internal Links

Notion exports links as full URLs or plain text references rather than Obsidian-style wikilinks (`[[Page Name]]`). You'll need to update these.

**Option A — Manual fix for small vaults:** Use Obsidian's built-in search (`Ctrl/Cmd + Shift + F`) to find text like `[Page Name](Page Name ...UUID...)` and replace with `[[Page Name]]`.

**Option B — Use the Importer plugin:** Obsidian has an official **Importer** plugin (available in Community Plugins) that handles Notion exports specifically. It strips UUID suffixes from filenames and converts links automatically. This is the recommended approach for large workspaces.

To install:
1. Open **Settings** > **Community plugins** > **Browse**
2. Search for "Importer" (official Obsidian plugin)
3. Install and enable it
4. Run **Importer** > select **Notion** as the source > point it to your export folder

## Step 5: Rebuild Databases with Dataview

Notion databases become flat CSV files and Markdown notes in Obsidian. To get filtering, sorting, and query functionality back, install the **Dataview** plugin.

Dataview lets you write queries like:

```dataview
TABLE status, due-date
FROM #projects
WHERE status = "In Progress"
SORT due-date ASC
```

It reads YAML frontmatter from your notes as structured data — similar to Notion properties. You'll need to add frontmatter to your migrated notes manually or with a template.

## Step 6: Essential Plugin Recommendations

These plugins cover most of what Notion offered:

| Plugin | Replaces |
|--------|----------|
| **Dataview** | Notion databases and filtered views |
| **Templater** | Notion templates |
| **Calendar** | Notion calendar view for daily notes |
| **Kanban** | Notion board view |
| **Tasks** | Notion task management |
| **Tag Wrangler** | Notion tag management |
| **Obsidian Git** | Auto-backup to GitHub (replaces Notion's cloud sync) |

Install all plugins via **Settings > Community Plugins > Browse**.

## Migration Timeline Estimate

| Workspace Size | Estimated Time |
|----------------|---------------|
| Small (under 100 notes) | 2–4 hours |
| Medium (100–500 notes) | 1–2 days |
| Large (500+ notes, heavy databases) | 3–7 days |
| Very large teams / complex databases | 1–2 weeks |

## Common Pitfalls to Avoid

**Don't skip the cleanup step.** Importing raw Notion exports with UUID-suffixed filenames leads to hundreds of broken links that are painful to fix retroactively.

**Don't expect databases to just work.** If your Notion workflow depends on relational databases, spend time learning Dataview before you migrate — otherwise you'll hit a wall immediately.

**Don't abandon Notion before you're settled.** Run both apps in parallel for 2–4 weeks. Keep Notion active until you're confident Obsidian covers all your use cases.

**Don't forget mobile sync.** Obsidian sync costs $10/month, or you can use iCloud, Dropbox, or Obsidian Git for free. Plan your sync strategy before migrating.

## Is the Switch Worth It?

For users who want full data ownership, offline access, and long-term portability, yes — the migration effort pays off. For teams who depend on Notion's collaboration, real-time comments, and shared workspaces, the trade-off may not be worth it yet.

If you're still weighing the decision, our [Notion review](/blog/notion-review-2026) covers what Notion does best and where it still falls short, so you can make an informed call.

---

## Looking for the Best Note-Taking App for Your Needs?

Browse our full reviews and comparisons of productivity tools at AIToolPick. Whether you stay with Notion, move to Obsidian, or try something else entirely, we cover the full landscape of tools to help you work smarter.

[Compare Notion vs Obsidian →](/blog/notion-vs-obsidian-which-note-app)
