<script lang="ts">
	import Card from './Card.svelte';

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
<section class="related-posts" aria-label="Artigos Recentes">
	<div class="container">
		<div class="related-heading">
			<p class="pill"><span></span> Blog</p>
			<h2>Artigos <strong>Recentes</strong></h2>
		</div>
		<div class="related-grid">
			{#each posts as post}
				<Card
					slug={post.slug}
					title={post.title}
					emphasis={post.emphasis}
					category={post.category}
					date={post.date}
					reading_time={post.reading_time}
					description={post.description}
					image={post.image}
					headingLevel="h3"
				/>
			{/each}
		</div>
	</div>
</section>
{/if}

<style>
	.related-posts {
		padding: 0 0 80px;
		background: var(--bg);
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
		/* text-transform: uppercase; */
		text-align: right;
		font-weight: 800;
	}

	.related-heading h2 strong {
		color: var(--accent);
		font-family: inherit;
		font-weight: 800;
	}

	.related-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: clamp(20px, 2.2vw, 36px);
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
			padding-bottom: 64px;
		}
	}

	@media (max-width: 560px) {
		.related-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
