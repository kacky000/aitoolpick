/**
 * Add internal links to blog posts for category pages and best-for pages.
 * Links keywords like "project management" to /category/project-management/
 * and "freelancers" to /best-for/freelancers/
 */
import fs from 'fs';
import path from 'path';

const BLOG_DIR = path.resolve('src/content/blog');

const categoryLinks = [
  { keyword: 'project management', url: '/category/project-management/', pattern: /(?<![[\/(])project management(?![)\]])/i },
  { keyword: 'task management', url: '/category/task-management/', pattern: /(?<![[\/(])task management(?![)\]])/i },
  { keyword: 'note-taking', url: '/category/note-taking/', pattern: /(?<![[\/(])note[- ]taking(?![)\]])/i },
  { keyword: 'time tracking', url: '/category/time-tracking/', pattern: /(?<![[\/(])time tracking(?![)\]])/i },
  { keyword: 'AI chatbot', url: '/category/ai-chatbot/', pattern: /(?<![[\/(])AI chatbot(?:s)?(?![)\]])/i },
  { keyword: 'AI coding', url: '/category/ai-coding/', pattern: /(?<![[\/(])AI coding(?![)\]])/i },
  { keyword: 'email marketing', url: '/category/email-marketing/', pattern: /(?<![[\/(])email marketing(?![)\]])/i },
  { keyword: 'video conferencing', url: '/category/video-conferencing/', pattern: /(?<![[\/(])video conferencing(?![)\]])/i },
  { keyword: 'CRM', url: '/category/crm/', pattern: /(?<![[\/(])\bCRM\b(?![)\]])/i },
];

const audienceLinks = [
  { keyword: 'freelancers', url: '/best-for/freelancers/', pattern: /(?<![[\/(])\bfreelancers\b(?![)\]])/i },
  { keyword: 'startups', url: '/best-for/startups/', pattern: /(?<![[\/(])\bstartups\b(?![)\]])/i },
  { keyword: 'small teams', url: '/best-for/small-teams/', pattern: /(?<![[\/(])small teams(?![)\]])/i },
  { keyword: 'developers', url: '/best-for/developers/', pattern: /(?<![[\/(])\bdevelopers\b(?![)\]])/i },
  { keyword: 'designers', url: '/best-for/designers/', pattern: /(?<![[\/(])\bdesigners\b(?![)\]])/i },
  { keyword: 'remote teams', url: '/best-for/remote-teams/', pattern: /(?<![[\/(])remote teams(?![)\]])/i },
  { keyword: 'content creators', url: '/best-for/content-creators/', pattern: /(?<![[\/(])content creators(?![)\]])/i },
  { keyword: 'marketers', url: '/best-for/marketers/', pattern: /(?<![[\/(])\bmarketers\b(?![)\]])/i },
];

const allLinks = [...categoryLinks, ...audienceLinks];

const blogFiles = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));

let totalLinksAdded = 0;
let filesModified = 0;

for (const file of blogFiles) {
  const filePath = path.join(BLOG_DIR, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!fmMatch) continue;

  const frontmatter = fmMatch[1];
  let body = fmMatch[2];

  // Skip if already has many internal links
  const existingInternalLinks = (body.match(/\]\(\//g) || []).length;
  if (existingInternalLinks >= 5) continue;

  let linksAdded = 0;
  const maxLinks = 2; // Conservative: max 2 category/audience links per post

  for (const link of allLinks) {
    if (linksAdded >= maxLinks) break;

    // Check if this link URL already exists in the body
    if (body.includes(link.url)) continue;

    // Find first occurrence in non-heading, non-link line
    const lines = body.split('\n');
    let replaced = false;
    for (let i = 0; i < lines.length; i++) {
      if (replaced) break;
      if (lines[i].startsWith('#')) continue;
      if (lines[i].includes('](')) continue;
      if (lines[i].startsWith('!')) continue; // skip images
      if (link.pattern.test(lines[i])) {
        lines[i] = lines[i].replace(link.pattern, (match) => `[${match}](${link.url})`);
        replaced = true;
      }
    }
    if (replaced) {
      body = lines.join('\n');
      linksAdded++;
      totalLinksAdded++;
    }
  }

  if (linksAdded > 0) {
    const newContent = `---\n${frontmatter}\n---\n${body}`;
    fs.writeFileSync(filePath, newContent, 'utf-8');
    filesModified++;
  }
}

console.log(`Done: ${totalLinksAdded} category/audience links added across ${filesModified} files`);
