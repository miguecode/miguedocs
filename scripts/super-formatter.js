import fs from 'fs';
import path from 'path';

const docsDir = path.join(process.cwd(), 'content', 'docs');

function getFiles(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getFiles(fullPath));
        } else if (file.endsWith('.md')) {
            results.push(fullPath);
        }
    });
    return results;
}

function processMarkdownFile(content) {
    let lines = content.split('\n');
    let outputLines = [];
    let inCodeBlock = false;
    let codeBlockLines = [];
    
    // We will separate frontmatter first
    let inFrontmatter = false;
    let frontmatterDone = false;
    let frontmatterLines = [];
    let bodyLines = [];

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        if (line.trim() === '---') {
            if (!inFrontmatter && !frontmatterDone) {
                inFrontmatter = true;
                continue;
            } else if (inFrontmatter) {
                inFrontmatter = false;
                frontmatterDone = true;
                continue;
            }
        }
        if (inFrontmatter) {
            frontmatterLines.push(line);
        } else if (frontmatterDone) {
            bodyLines.push(line);
        }
    }

    // Now process bodyLines
    for (let i = 0; i < bodyLines.length; i++) {
        let line = bodyLines[i];

        if (line.startsWith('```')) {
            if (inCodeBlock) {
                // Closing code block
                inCodeBlock = false;
                codeBlockLines.push(line);
                
                // Re-evaluate language
                let codeText = codeBlockLines.join('\n');
                let lang = codeBlockLines[0].replace('```', '').trim();
                
                // Only fix if it's suspiciously wrong or empty, or default 'typescript' from previous script
                if (lang === 'typescript' || lang === '' || lang === 'text') {
                    if (/(SELECT|INSERT|UPDATE|DELETE|CREATE TABLE|GRANT|REVOKE|ALTER|DROP|INNER JOIN)\b/i.test(codeText)) {
                        lang = 'sql';
                    } else if (/(<\/?html>|<\/?div>|<\/?body>|<\/?script>)/i.test(codeText)) {
                        lang = 'html';
                    } else if (/\b(margin:|padding:|color:|background:|border:|display:|align-items:)\b/i.test(codeText)) {
                        lang = 'css';
                    } else if (/(<\?php|\b(echo|print_r|var_dump)\b|\$[a-zA-Z_])/i.test(codeText)) {
                        lang = 'php';
                    } else if (/(\b(class|function|const|let|var|import)\b|=>|\{|\})/.test(codeText)) {
                        lang = 'typescript'; // Kept as typescript
                    } else {
                        lang = 'text';
                    }
                    codeBlockLines[0] = '```' + lang;
                }
                outputLines.push(...codeBlockLines);
                codeBlockLines = [];
                continue;
            } else {
                inCodeBlock = true;
                codeBlockLines.push(line);
                continue;
            }
        }

        if (inCodeBlock) {
            codeBlockLines.push(line);
            continue;
        }

        // --- Outside code blocks ---

        // Fix pseudo-headings ending in :
        // if a line is just "**Title:**" or "Title:" and it's short, make it a heading!
        let trimmed = line.trim();
        if (trimmed.length > 0 && trimmed.length < 50 && trimmed.endsWith(':') && !trimmed.startsWith('-') && !trimmed.startsWith('#') && !trimmed.startsWith('|')) {
             if (trimmed.startsWith('**') && trimmed.endsWith('**:') || trimmed.endsWith(':**')) {
                 line = '### ' + trimmed.replace(/\*\*/g, '').replace(':', '');
             } else if (!trimmed.includes(' ')) {
                 // Even a single word ending in colon could be a heading 
                 // We will just leave it if it's not bold to be safe, unless we are sure.
             }
        }

        // Wait! Let's check if the line is raw SQL that was missed!
        // We look for a line starting with SELECT, INSERT, etc. that's NOT in a code block.
        // It's dangerous to do line-by-line because SQL might span lines. We should clump paragraphs.
        
        outputLines.push(line);
    }

    // Pass 2: clump raw text into code blocks if they are code
    let finalLines = [];
    let paragraphBuffer = [];

    const flushParagraph = () => {
        if (paragraphBuffer.length === 0) return;
        let text = paragraphBuffer.join('\n');
        
        // Detect SQL
        if (/^(SELECT|INSERT INTO|UPDATE\s+\w+|DELETE FROM|CREATE TABLE|GRANT\s|ALTER TABLE)\b/i.test(text.trim())) {
            finalLines.push('```sql');
            finalLines.push(...paragraphBuffer);
            finalLines.push('```');
        } 
        // Detect PHP
        else if (text.trim().startsWith('<?php')) {
            finalLines.push('```php');
            finalLines.push(...paragraphBuffer);
            finalLines.push('```');
        }
        else {
            finalLines.push(...paragraphBuffer);
        }
        paragraphBuffer = [];
    };

    inCodeBlock = false;
    for (let i = 0; i < outputLines.length; i++) {
        let line = outputLines[i];
        if (line.startsWith('```')) {
            flushParagraph();
            inCodeBlock = !inCodeBlock;
            finalLines.push(line);
            continue;
        }

        if (inCodeBlock) {
            finalLines.push(line);
            continue;
        }

        if (line.trim() === '' || line.trim().startsWith('-') || line.trim().startsWith('#') || line.trim().startsWith('|')) {
            flushParagraph();
            finalLines.push(line);
        } else {
            paragraphBuffer.push(line);
        }
    }
    flushParagraph();

    // Reconstruct
    let result = ['---', ...frontmatterLines, '---'].concat(finalLines).join('\n');
    return result;
}

const files = getFiles(docsDir);
files.forEach(file => {
    // Only target the folders they complained about
    const relPath = file.replace(docsDir, '').replace(/\\/g, '/');
    if (relPath.includes('/backend/') || 
        relPath.includes('/design/') || 
        relPath.includes('/frameworks/') || 
        relPath.includes('/general/') || 
        relPath.includes('/html-css-js/') || 
        relPath.includes('/typescript/')) {
        
        const content = fs.readFileSync(file, 'utf8');
        const newContent = processMarkdownFile(content);
        fs.writeFileSync(file, newContent);
    }
});

console.log('Super formatter complete!');
