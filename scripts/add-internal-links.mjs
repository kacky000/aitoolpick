/**
 * Auto-inject internal links into blog posts.
 * For each blog post, if it mentions a tool name that isn't already linked,
 * add a link to that tool's page (first occurrence only).
 */
import fs from 'fs';
import path from 'path';

const BLOG_DIR = path.resolve('src/content/blog');
const TOOLS_PATH = path.resolve('src/data/tools.json');

const tools = JSON.parse(fs.readFileSync(TOOLS_PATH, 'utf-8'));

// Build tool name → link mapping (longer names first to avoid partial matches)
const toolLinks = tools
  .map(t => ({
    name: t.name,
    slug: t.slug,
    link: `/tools/${t.slug}/`,
    pattern: new RegExp(`(?<![\\[/])\\b(${t.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\b(?![\\]\\(])`, 'i'),
  }))
  .sort((a, b) => b.name.length - a.name.length);

const blogFiles = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));

let totalLinksAdded = 0;
let filesModified = 0;

for (const file of blogFiles) {
  const filePath = path.join(BLOG_DIR, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Split frontmatter and body
  const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!fmMatch) continue;

  const frontmatter = fmMatch[1];
  let body = fmMatch[2];
  let linksAdded = 0;
  const alreadyLinked = new Set();

  // Track tools already linked in the body
  const existingLinks = body.match(/\[([^\]]+)\]\([^)]+\/tools\/[^)]+\)/g) || [];
  existingLinks.forEach(l => {
    const match = l.match(/\/tools\/([^/]+)\//);
    if (match) alreadyLinked.add(match[1]);
  });

  for (const tool of toolLinks) {
    if (alreadyLinked.has(tool.slug)) continue;
    if (linksAdded >= 5) break; // Max 5 new links per post

    // Don't link to the tool the post is about (check filename)
    if (file.includes(tool.slug)) continue;

    // Skip if tool name only appears in headings
    const headingPattern = new RegExp(`^#+.*${tool.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'im');

    // Check if tool name appears in body (not in headings or existing links)
    if (tool.pattern.test(body) && !headingPattern.test(body.split('\n').filter(l => tool.pattern.test(l))[0] || '')) {
      // Replace first occurrence only (skip if it's in a heading line)
      const lines = body.split('\n');
      let replaced = false;
      for (let i = 0; i < lines.length; i++) {
        if (replaced) break;
        if (lines[i].startsWith('#')) continue; // skip headings
        if (lines[i].includes('](')) continue; // skip lines with existing links
        if (tool.pattern.test(lines[i])) {
          lines[i] = lines[i].replace(tool.pattern, `[$1](${tool.link})`);
          replaced = true;
        }
      }
      if (replaced) {
        body = lines.join('\n');
        alreadyLinked.add(tool.slug);
        linksAdded++;
        totalLinksAdded++;
      }
    }
  }

  if (linksAdded > 0) {
    const newContent = `---\n${frontmatter}\n---\n${body}`;
    fs.writeFileSync(filePath, newContent, 'utf-8');
    filesModified++;
  }
}

console.log(`Done: ${totalLinksAdded} links added across ${filesModified} files (${blogFiles.length} total posts)`);
