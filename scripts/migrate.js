import fs from 'fs';
import path from 'path';

const sourceDirs = [
  path.join(process.cwd(), 'content', 'Apuntes de Desarrollo Web'),
  path.join(process.cwd(), 'content', 'Nuevos apuntes')
];
const targetDocsDir = path.join(process.cwd(), 'content', 'docs');

// delete default mdx that came with the scaffold
try { fs.unlinkSync(path.join(targetDocsDir, 'index.mdx')); } catch {}
try { fs.unlinkSync(path.join(targetDocsDir, 'test.mdx')); } catch {}

function slugify(text) {
  // Remove leading numbers like "1. ", "0. "
  let name = text.replace(/^\d+\.\s*/, '');
  
  // Custom dictionary for specific known folders to force English
  const dict = {
    'Apuntes de Desarrollo Web': 'web-development',
    'Nuevos apuntes': 'new-notes',
    'General': 'general',
    'La Web (Arquitectura, APIs, JSON, Endpoints, Hosting)': 'web-fundamentals',
    'HTML, CSS y JavaScript': 'html-css-js',
    'TypeScript': 'typescript',
    'Frameworks y Librerías (Angular, Astro, Tailwind CSS)': 'frameworks',
    'Backend (PHP, Bases de Datos, Node.js)': 'backend',
    'Diseño': 'design',
    'Angular': 'angular',
    'Desarrollo Web, Front y Back': 'introduction'
  };
  
  if (dict[name]) return dict[name];

  return name
    .toLowerCase()
    .normalize('NFD') // remove accents
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-') // replace non-alphanumeric with hyphens
    .replace(/(^-|-$)+/g, ''); // trim hyphens
}

function getTitle(text) {
  // Remove leading numbers AND the .md extension for the title
  return text.replace(/^\d+\.\s*/, '').replace(/\.md$/, '');
}

function processDirectory(source, target) {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  const items = fs.readdirSync(source);

  for (const item of items) {
    const sourcePath = path.join(source, item);
    const stat = fs.statSync(sourcePath);

    if (stat.isDirectory()) {
      const slug = slugify(item);
      const title = getTitle(item);
      const newTarget = path.join(target, slug);
      
      processDirectory(sourcePath, newTarget);
      
      // Write meta.json for the folder
      fs.writeFileSync(path.join(newTarget, 'meta.json'), JSON.stringify({ title }, null, 2));
    } else if (item.endsWith('.md')) {
      const slug = item === 'Desarrollo Web, Front y Back.md' ? 'introduction' : slugify(item.replace('.md', ''));
      const title = getTitle(item);
      const content = fs.readFileSync(sourcePath, 'utf8');
      
      let newContent = content;
      if (!content.startsWith('---')) {
        newContent = `---
title: "${title}"
---

${content}`;
      }

      fs.writeFileSync(path.join(target, `${slug}.md`), newContent);
    }
  }
}

for (const sourceDir of sourceDirs) {
  if (fs.existsSync(sourceDir)) {
    let baseSlug = slugify(path.basename(sourceDir));
    if (path.basename(sourceDir) === 'Apuntes de Desarrollo Web') {
       baseSlug = 'web-development';
    }
    const targetDir = path.join(targetDocsDir, baseSlug);
    processDirectory(sourceDir, targetDir);
    // Write meta.json for root source dir too
    fs.writeFileSync(path.join(targetDir, 'meta.json'), JSON.stringify({ title: path.basename(sourceDir) }, null, 2));

    // clean up original dir
    fs.rmSync(sourceDir, { recursive: true, force: true });
  }
}

console.log('Migration complete!');
