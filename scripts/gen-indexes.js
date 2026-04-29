/**
 * gen-indexes.js
 * Regenera el index.mdx de cada sección con una lista de apuntes y subsecciones.
 * Uso: node scripts/gen-indexes.js
 */

import fs from 'fs';
import path from 'path';

const docsDir = path.join(process.cwd(), 'content', 'docs');
const docsRoute = '/docs'; // ruta base en el sitio

// Extrae el title del frontmatter de un archivo
function getTitle(filePath) {
    if (!fs.existsSync(filePath)) return null;
    const content = fs.readFileSync(filePath, 'utf8');
    const match = content.match(/^---[\s\S]*?title:\s*["']?(.+?)["']?\s*?\n[\s\S]*?---/m);
    return match ? match[1].trim() : null;
}

// Devuelve todos los index.mdx dentro del árbol, excluyendo el raíz
function getSectionIndexes(dir, depth = 0) {
    let results = [];
    for (const entry of fs.readdirSync(dir)) {
        const full = path.join(dir, entry);
        if (fs.statSync(full).isDirectory()) {
            results = results.concat(getSectionIndexes(full, depth + 1));
        } else if (entry === 'index.mdx' && depth > 0) {
            results.push(full);
        }
    }
    return results;
}

// Resuelve un nombre de página del meta.json a { title, absoluteUrl, isFolder }
function resolvePageEntry(name, sectionDir, sectionUrlPath) {
    const pageUrl = `${sectionUrlPath}/${name}`;

    // Archivo .md
    const mdPath = path.join(sectionDir, name + '.md');
    if (fs.existsSync(mdPath)) {
        return { title: getTitle(mdPath) || name, url: pageUrl, isFolder: false };
    }
    // Archivo .mdx (que no sea index)
    const mdxPath = path.join(sectionDir, name + '.mdx');
    if (fs.existsSync(mdxPath) && name !== 'index') {
        return { title: getTitle(mdxPath) || name, url: pageUrl, isFolder: false };
    }
    // Subcarpeta
    const folderPath = path.join(sectionDir, name);
    if (fs.existsSync(folderPath) && fs.statSync(folderPath).isDirectory()) {
        const metaPath = path.join(folderPath, 'meta.json');
        let title = name;
        if (fs.existsSync(metaPath)) {
            title = JSON.parse(fs.readFileSync(metaPath, 'utf8')).title || name;
        } else {
            title = getTitle(path.join(folderPath, 'index.mdx')) || name;
        }
        return { title, url: pageUrl, isFolder: true };
    }
    return null;
}

function generateIndexContent(indexPath) {
    const sectionDir = path.dirname(indexPath);
    const metaPath = path.join(sectionDir, 'meta.json');
    const sectionTitle = getTitle(indexPath) || path.basename(sectionDir);

    // Calcular la URL absoluta de esta sección
    const relToContent = path.relative(docsDir, sectionDir).replace(/\\/g, '/');
    const sectionUrlPath = `${docsRoute}/${relToContent}`;

    if (!fs.existsSync(metaPath)) {
        console.log(`  Skipping (no meta.json): ${path.relative(docsDir, indexPath)}`);
        return null;
    }

    const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
    let pages = (meta.pages || []).filter(p => p !== 'index' && !p.startsWith('...'));

    // FALLBACK: si no hay pages, leer el filesystem directamente
    if (pages.length === 0) {
        const entries = fs.readdirSync(sectionDir).sort();
        pages = entries
            .filter(entry => {
                if (entry === 'index.mdx' || entry === 'meta.json') return false;
                const full = path.join(sectionDir, entry);
                const stat = fs.statSync(full);
                if (stat.isDirectory()) {
                    // Solo incluir carpetas que tengan index.mdx
                    return fs.existsSync(path.join(full, 'index.mdx'));
                }
                return entry.endsWith('.md') || (entry.endsWith('.mdx') && entry !== 'index.mdx');
            })
            .map(entry => entry.replace(/\.mdx?$/, ''));
    }

    if (pages.length === 0) {
        console.log(`  Skipping (nothing found): ${path.relative(docsDir, indexPath)}`);
        return null;
    }

    const resolved = pages
        .map(name => resolvePageEntry(name, sectionDir, sectionUrlPath))
        .filter(Boolean);

    if (resolved.length === 0) return null;

    const articles = resolved.filter(p => !p.isFolder);
    const folders  = resolved.filter(p => p.isFolder);

    let body = '';

    if (articles.length > 0) {
        const n = articles.length;
        body += `Esta sección reúne **${n} apunte${n !== 1 ? 's' : ''}** sobre ${sectionTitle.toLowerCase()}. `;
        body += `Podés navegar desde la barra lateral izquierda o usar los links de abajo.\n\n`;
        body += `## Apuntes\n\n`;
        for (const p of articles) body += `- [${p.title}](${p.url})\n`;
    }

    if (folders.length > 0) {
        if (body) body += '\n';
        body += `## Secciones\n\n`;
        for (const p of folders) body += `- [${p.title}](${p.url})\n`;
    }

    return `---\ntitle: "${sectionTitle}"\n---\n\n# ${sectionTitle}\n\n${body}`;
}

const indexes = getSectionIndexes(docsDir);
let updated = 0;
for (const indexPath of indexes) {
    const content = generateIndexContent(indexPath);
    if (content) {
        fs.writeFileSync(indexPath, content, 'utf8');
        console.log(`✅ ${path.relative(docsDir, indexPath)}`);
        updated++;
    }
}
console.log(`\nListo! ${updated} índices actualizados.`);
