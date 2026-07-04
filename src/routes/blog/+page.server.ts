import type { PageServerLoad } from './$types';
import matter from 'gray-matter';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

export const prerender = true;

export const load: PageServerLoad = () => {
	const postsDir = join(process.cwd(), 'src/posts');
	const files = readdirSync(postsDir).filter((f) => f.endsWith('.md'));

	const posts = files
		.map((f) => {
			const slug = f.replace(/\.md$/, '');
			const content = readFileSync(join(postsDir, f), 'utf-8');
			const { data } = matter(content);
			return {
				slug,
				title: String(data.title || ''),
				emphasis: String(data.emphasis || ''),
				category: String(data.category || ''),
				date: String(data.date || ''),
				reading_time: String(data.reading_time || ''),
				description: String(data.description || ''),
				image: String(data.image || '')
			};
		})
		// Ordena do mais recente para o mais antigo (assume formato dd/mm/aaaa)
		.sort((a, b) => {
			const parseDate = (d: string) => {
				const [day, month, year] = d.split('/').map(Number);
				return new Date(year, month - 1, day).getTime();
			};
			return parseDate(b.date) - parseDate(a.date);
		});

	return { posts };
};
