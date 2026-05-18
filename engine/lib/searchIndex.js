import fs from 'fs-extra';
import path from 'path';
import frontMatter from 'front-matter';
import { config } from './config.js';

const MAX_TEXT_LEN = 4000;

function stripMarkdown(md) {
    return md
        .replace(/```[\s\S]*?```/g, ' ')
        .replace(/`[^`]*`/g, ' ')
        .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
        .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
        .replace(/<[^>]+>/g, ' ')
        .replace(/[#>*_~\-]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

export async function generateSearchIndex(processedFiles) {
    const languages = config.languages || ['en'];
    const postsRoot = path.join(config.sourceDir, 'posts');
    if (!fs.existsSync(postsRoot)) return;

    const folderSlugs = fs.readdirSync(postsRoot, { withFileTypes: true })
        .filter(d => d.isDirectory())
        .map(d => d.name);

    const dataDir = path.join(config.outputDir, 'static', 'data');
    await fs.ensureDir(dataDir);

    for (const lang of languages) {
        const index = {};
        for (const folderSlug of folderSlugs) {
            const mdPath = path.join(postsRoot, folderSlug, `${lang}.md`);
            if (!fs.existsSync(mdPath)) continue;
            try {
                const raw = fs.readFileSync(mdPath, 'utf-8');
                const { attributes, body } = frontMatter(raw);
                const slug = attributes.slug || folderSlug;
                const text = stripMarkdown(body).toLowerCase().slice(0, MAX_TEXT_LEN);
                index[slug] = text;
            } catch { /* skip */ }
        }
        const outPath = path.join(dataDir, `posts-search-${lang}.json`);
        await fs.writeFile(outPath, JSON.stringify(index));
        if (processedFiles) processedFiles.add(outPath);
    }
}
