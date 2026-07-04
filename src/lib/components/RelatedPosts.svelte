<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	interface Post {
		slug: string;
		title: string;
		emphasis: string;
		category: string;
		date: string;
		reading_time: string;
		description: string;
		image: string;
	}

	let { posts }: { posts: Post[] } = $props();
</script>

{#if posts.length > 0}
<section class="related-posts" aria-label="Artigos recentes">
	<div class="container">
		<div class="related-heading">
			<p class="pill"><span></span> Blog</p>
			<h2>Artigos <strong>recentes</strong></h2>
		</div>
		<div class="related-grid">
			{#each posts as post}
				<a class="related-card" href="/blog/{post.slug}" use:reveal>
					<div class="related-card-cover">
						<img
							class="img-blur-up"
							src="/assets/{post.image}"
							alt=""
							width="1200"
							height="630"
							loading="lazy"
						/>
					</div>
					<div class="related-card-body">
						<div class="related-card-meta">
							<span class="related-card-category">{post.category}</span>
							<span class="related-card-date">{post.date}</span>
							<span class="related-card-reading">{post.reading_time} de leitura</span>
						</div>
						<h3>
							{post.title}<strong> {post.emphasis}</strong>
						</h3>
						<p>{post.description}</p>
						<span class="related-card-cta">Ler artigo →</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
{/if}

<style>
	.related-posts {
		padding: 0 0 120px;
		background: #050506;
	}

	.related-heading {
		display: flex;
		align-items: end;
		justify-content: space-between;
		gap: 28px;
		margin-bottom: 44px;
	}

	.related-heading h2 {
		margin: 0;
		color: var(--text);
		font-size: clamp(44px, 4.4vw, 68px);
		line-height: 0.95;
		text-transform: uppercase;
		text-align: right;
		font-weight: 400;
		font-family: var(--font-display);
	}

	.related-heading h2 strong {
		color: var(--accent);
		font-family: inherit;
		font-weight: 400;
	}

	.related-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: clamp(20px, 2.2vw, 36px);
	}

	.related-card {
		display: grid;
		grid-template-rows: auto 1fr;
		border: 1px solid var(--line);
		border-radius: var(--radius-lg);
		background: var(--card);
		overflow: hidden;
		transition: border-color 200ms ease, transform 200ms ease, box-shadow 200ms ease;
		text-decoration: none;
	}

	.related-card:hover {
		border-color: rgba(239, 19, 56, 0.34);
		transform: translateY(-4px);
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.30);
		transition: transform 200ms ease, border-color 200ms ease, box-shadow 200ms ease;
	}

	.related-card-cover {
		overflow: hidden;
	}

	.related-card-cover img {
		width: 100%;
		height: auto;
		aspect-ratio: 1200 / 630;
		object-fit: cover;
		display: block;
		transition: transform 300ms ease;
	}

	.related-card:hover .related-card-cover img {
		transform: scale(1.03);
	}

	.related-card-body {
		display: grid;
		gap: 14px;
		padding: clamp(18px, 2vw, 28px);
	}

	.related-card-meta {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 8px;
	}

	.related-card-meta span {
		display: inline-flex;
		align-items: center;
		min-height: 22px;
		padding: 5px 9px;
		border: 1px solid rgba(255, 255, 255, 0.10);
		border-radius: 999px;
		color: var(--muted);
		font-size: 9px;
		font-weight: 700;
		line-height: 1;
		letter-spacing: 0.10em;
		text-transform: uppercase;
	}

	.related-card-category {
		border-color: rgba(239, 19, 56, 0.60) !important;
		background: rgba(239, 19, 56, 0.10);
		color: #fff !important;
	}

	.related-card-body h3 {
		margin: 0;
		font-size: clamp(22px, 1.8vw, 28px);
		line-height: 1.05;
		text-transform: uppercase;
		color: var(--text);
		font-weight: 400;
		font-family: var(--font-display);
	}

	.related-card-body h3 strong {
		color: var(--accent);
		font-family: inherit;
		font-weight: 400;
	}

	.related-card-body p {
		margin: 0;
		color: var(--muted);
		font-size: 13px;
		line-height: 1.58;
		letter-spacing: 0.04em;
	}

	.related-card-cta {
		color: var(--accent);
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		transition: letter-spacing 160ms ease;
	}

	.related-card:hover .related-card-cta {
		letter-spacing: 0.12em;
	}

	@media (max-width: 920px) {
		.related-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
		.related-heading {
			align-items: center;
			flex-direction: column;
			text-align: center;
		}
		.related-heading h2 {
			text-align: center;
		}
	}

	@media (max-width: 720px) {
		.related-posts {
			padding-bottom: 90px;
		}
	}

	@media (max-width: 560px) {
		.related-grid {
			grid-template-columns: 1fr;
		}
		.related-card-meta {
			gap: 6px;
		}
	}
</style>
