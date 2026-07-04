import type { PageServerLoad, EntryGenerator } from './$types';
import matter from 'gray-matter';
import { marked } from 'marked';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { error } from '@sveltejs/kit';

interface TocItem {
	id: string;
	text: string;
	level: number;
}

function slugify(text: string): string {
	return text
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^\w\s-]/g, '')
		.replace(/[\s_]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

function buildTocHtml(items: TocItem[]): string {
	if (items.length === 0) return '';
	let html = '<ul>\n';
	for (const item of items) {
		html += `<li><a href="#${item.id}">${item.text}</a></li>\n`;
	}
	html += '</ul>\n';
	return html;
}

/** Remove manually written TOC from markdown body (links with anchors only) */
function removeManualToc(body: string): string {
	return body.replace(/^\s*(- \[.*?\]\(#.*?\)\s*\n)+/, '').trimStart();
}

export const prerender = true;

export const entries: EntryGenerator = () => {
	const files = readdirSync(process.cwd()).filter(
		(f) => f.endsWith('.md') && f !== 'README.md'
	);
	return files.map((f) => ({ slug: f.replace(/\.md$/, '') }));
};

export const load: PageServerLoad = ({ params }) => {
	const filePath = join(process.cwd(), `${params.slug}.md`);

	if (!existsSync(filePath)) {
		error(404, `Post "${params.slug}" não encontrado`);
	}

	const file = readFileSync(filePath, 'utf-8');
	const { data: metadata, content: rawContent } = matter(file);

	// Remove manual TOC do markdown (já geramos um programaticamente)
	const content = removeManualToc(rawContent);

	// 1. Lex the markdown to extract headings for TOC
	const tokens = marked.lexer(content);
	const tocItems: TocItem[] = [];

	for (const token of tokens) {
		if (token.type === 'heading') {
			const heading = token as { type: 'heading'; depth: number; text: string; raw: string };
			const id = slugify(heading.text);
			tocItems.push({ id, text: heading.text, level: heading.depth });
		}
	}

	// 2. Build TOC HTML
	const tocHtml = buildTocHtml(tocItems);

	// 3. Convert markdown to HTML with custom renderer that adds heading IDs
	const renderer = new marked.Renderer();
	renderer.heading = function ({ text, depth }: { text: string; depth: number }) {
		const id = slugify(text);
		return `<h${depth} id="${id}">${text}</h${depth}>`;
	};

	// async: false garante retorno síncrono (string em vez de Promise)
	const contentHtml = marked.parse(content, { renderer, async: false }) as string;

	return {
		slug: params.slug,
		title: String(metadata.title || ''),
		emphasis: String(metadata.emphasis || ''),
		hero: String(metadata.hero || ''),
		category: String(metadata.category || ''),
		date: String(metadata.date || ''),
		reading_time: String(metadata.reading_time || ''),
		image: String(metadata.image || ''),
		description: String(metadata.description || ''),
		alt: String(metadata.alt || ''),
		lead: String(metadata.lead || ''),
		content: contentHtml,
		toc: tocHtml
	};
};
