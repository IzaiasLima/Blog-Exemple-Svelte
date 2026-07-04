import type { PageServerLoad } from './$types';
import matter from 'gray-matter';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

/** Parse a Brazilian date string (dd/mm/aaaa) to timestamp */
function parseDateBrazil(d: string): number {
	const [day, month, year] = d.split('/').map(Number);
	if (!day || !month || !year) return 0;
	return new Date(year, month - 1, day).getTime();
}

export const prerender = true;

export const load: PageServerLoad = () => {
	const postsDir = join(process.cwd(), 'src/posts');
	const files = readdirSync(postsDir).filter((f: string) => f.endsWith('.md'));

	const posts = files
		.map((f: string) => {
			const slug = f.replace(/\.md$/, '');
			const content = readFileSync(join(postsDir, f), 'utf-8');
			const { data } = matter(content);
			const sortDate = parseDateBrazil(String(data.date || ''));
			return {
				slug,
				title: String(data.title || ''),
				emphasis: String(data.emphasis || ''),
				category: String(data.category || ''),
				date: String(data.date || ''),
				reading_time: String(data.reading_time || ''),
				description: String(data.description || ''),
				image: String(data.image || ''),
				sortDate
			};
		})
		.sort((a: { sortDate: number }, b: { sortDate: number }) => b.sortDate - a.sortDate)
		.map(({ sortDate, ...rest }) => rest);

	return { posts };
};
