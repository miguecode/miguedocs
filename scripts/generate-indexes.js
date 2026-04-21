import fs from 'fs';
import path from 'path';

const docsDir = path.join(process.cwd(), 'content', 'docs');

function getTitleFromMeta(dir) {
  const metaPath = path.join(dir, 'meta.json');
  if (fs.existsSync(metaPath)) {
    try {
      const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
      if (meta.title) return meta.title;
    } catch (e) {}
  }
  return path.basename(dir);
}

function ensureIndex(dir) {
  const indexPathMdx = path.join(dir, 'index.mdx');
  const indexPathMd = path.join(dir, 'index.md');
  
  if (!fs.existsSync(indexPathMdx) && !fs.existsSync(indexPathMd)) {
    const title = getTitleFromMeta(dir);
    const content = `---
title: ${title}
---

# ${title}

Selecciona un artículo en el menú lateral para comenzar.
`;
    fs.writeFileSync(indexPathMdx, content, 'utf8');
  }

  // search subdirectories
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      ensureIndex(fullPath);
    }
  }
}

// Ensure an index for the root and all subfolders
ensureIndex(docsDir);
console.log('Indexes generated!');
