<script lang="ts">
	import PostSidebar from './PostSidebar.svelte';

	interface Props {
		image: string;
		description: string;
		lead: string;
		content: string;
		toc: string;
	}

	let { image, description, lead, content, toc }: Props = $props();
</script>

<article class="post-article" aria-label="Artigo">
	<div class="container post-article-shell">
		<figure class="post-cover">
			<img
				class="post-cover-image img-blur-up"
				src="/assets/{image}"
				alt="capa do artigo"
				width="1200"
				height="630"
				loading="lazy"
			/>
			<figcaption>{description}</figcaption>
		</figure>

		<div class="post-layout">
			<PostSidebar {toc} />
			<div class="post-content">
				<section>
					<p class="post-lead">{lead}</p>
					{@html content}
				</section>
			</div>
		</div>
	</div>
</article>

<style>
	.post-article {
		padding: 0 0 80px;
		background: var(--bg);
	}

	.post-article-shell {
		overflow: visible;
		padding: clamp(22px, 2.7vw, 52px);
		/* border-top: 4px solid var(--accent);
		border-bottom: 4px solid var(--accent);
		border-radius: clamp(18px, 2.2vw, 32px);
		background: var(--panel);
		box-shadow: var(--shadow-card); */
	}

	.post-cover {
		margin: 0;
	}

	.post-cover-image {
		width: 100%;
		height: auto;
		aspect-ratio: 1200 / 630;
		display: block;
		border-radius: clamp(14px, 1.6vw, 24px);
		object-fit: cover;
		box-shadow: var(--shadow-image);
	}

	.post-cover figcaption {
		margin: 14px 0 0;
		color: var(--muted);
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-align: center;
	}

	.post-layout {
		width: min(100%, 1088px);
		margin: clamp(54px, 6vw, 110px) auto 0;
		display: grid;
		grid-template-columns: minmax(190px, 240px) minmax(0, 1fr);
		gap: clamp(36px, 5vw, 76px);
		align-items: start;
	}

	.post-content {
		min-width: 0;
	}

	.post-content :global(section + section) {
		margin-top: clamp(54px, 5vw, 96px);
	}

	.post-content :global(h2) {
		max-width: 680px;
		margin: 0 0 18px;
		color: var(--text);
		font-size: clamp(34px, 3vw, 52px);
		line-height: 1;
		letter-spacing: 0.01em;
		/* text-transform: uppercase; */
		font-weight: 800;
	}

	.post-content :global(p) {
		max-width: 780px;
		margin: 0 0 14px;
		color: var(--muted);
		font-size: clamp(15px, 0.95vw, 17px);
		line-height: 1.72;
		letter-spacing: 0.015em;
	}

	.post-content :global(.post-lead) {
		color: var(--text);
		font-size: clamp(17px, 1.15vw, 20px);
		line-height: 1.58;
		letter-spacing: 0.01em;
		font-weight: 600;
	}

	.post-content :global(p:last-child) {
		margin-bottom: 0;
	}

	.post-content :global(a) {
		color: var(--accent-dark);
		font-weight: 700;
		text-decoration: underline;
		text-decoration-color: rgba(var(--accent-rgb), 0.40);
		text-underline-offset: 3px;
	}

	.post-content :global(ul) {
		display: grid;
		gap: 9px;
		margin: 22px 0;
		padding: 0;
		list-style: none;
	}

	.post-content :global(li) {
		position: relative;
		padding-left: 20px;
		color: var(--muted);
		font-size: clamp(14px, 0.92vw, 16px);
		line-height: 1.62;
		letter-spacing: 0.01em;
	}

	.post-content :global(li::before) {
		content: '';
		position: absolute;
		left: 0;
		top: 0.78em;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--accent);
	}

	.post-content :global(table) {
		width: 100%;
		border-collapse: collapse;
	}

	.post-content :global(th),
	.post-content :global(td) {
		padding: 14px 16px;
		border-bottom: 1px solid var(--line);
		color: var(--muted);
		font-size: 12.5px;
		line-height: 1.5;
		letter-spacing: 0.015em;
		text-align: left;
	}

	.post-content :global(th) {
		color: var(--text);
		background: rgba(var(--accent-rgb), 0.06);
		font-size: 10px;
		font-weight: 700;
		letter-spacing: 0.14em;
		text-transform: uppercase;
	}

	.post-content :global(td:first-child) {
		color: var(--text);
		font-weight: 700;
	}

	.post-content :global(tr:last-child td) {
		border-bottom: 0;
	}

	@media (max-width: 920px) {
		.post-layout {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 720px) {
		.post-article {
			padding-bottom: 64px;
		}
	}

	@media (max-width: 560px) {
		.post-article-shell {
			border-top-width: 3px;
			border-bottom-width: 3px;
		}

		.post-content :global(h2) {
			text-align: center;
		}

		.post-content :global(p) {
			font-size: 14.5px;
		}

		.post-content :global(.post-lead) {
			font-size: 16px;
		}
	}
</style>
