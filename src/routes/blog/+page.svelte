<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { data } = $props();

	let posts = $derived(data.posts as Array<{
		slug: string;
		title: string;
		emphasis: string;
		category: string;
		date: string;
		reading_time: string;
		description: string;
		image: string;
	}>);
</script>

<svelte:head>
	<title>Blog — the blacklist</title>
	<meta name="description" content="Artigos sobre marketing digital para SaaS" />
</svelte:head>

<Header />

<section class="blog-hero">
	<div class="blog-hero-bg" aria-hidden="true"></div>
	<div class="container blog-hero-inner">
		<p class="blog-pill"><span></span> Blog</p>
		<h1>Artigos &<br /><strong>Insights</strong></h1>
		<p class="blog-hero-copy">
			Estratégia, execução e critério para decisões de marketing digital.
		</p>
	</div>
</section>

<section class="blog-listing">
	<div class="container">
		<div class="blog-grid">
			{#each posts as post}
				<a class="blog-card" href="/blog/{post.slug}">
					<div class="blog-card-cover">
						<img
							src="/assets/{post.image}"
							alt=""
							width="1200"
							height="630"
							loading="lazy"
						/>
					</div>
					<div class="blog-card-body">
						<div class="blog-card-meta">
							<span class="blog-card-category">{post.category}</span>
							<span class="blog-card-date">{post.date}</span>
							<span class="blog-card-reading">{post.reading_time} de leitura</span>
						</div>
						<h2>
							{post.title}<strong> {post.emphasis}</strong>
						</h2>
						<p>{post.description}</p>
						<span class="blog-card-cta">Ler artigo →</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<Footer />

<style>
	.blog-hero {
		position: relative;
		min-height: 680px;
		overflow: hidden;
		display: grid;
		align-items: center;
		padding: 30px 0 98px;
		background: linear-gradient(180deg, rgba(239, 19, 56, 0.10), rgba(5, 5, 6, 0) 34%);
	}

	.blog-hero-bg {
		position: absolute;
		inset: -34% -12% auto;
		height: 580px;
		background: radial-gradient(ellipse at 50% 12%, rgba(239, 19, 56, 0.28), rgba(83, 0, 14, 0.10) 42%, rgba(5, 5, 6, 0) 76%);
		filter: blur(12px);
		pointer-events: none;
	}

	.blog-hero-inner {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.blog-pill {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		border: 1px solid var(--accent);
		border-radius: 999px;
		padding: 7px 13px;
		color: var(--text);
		font-family: var(--font-meta);
		font-size: 11px;
		letter-spacing: 0.11em;
		text-transform: uppercase;
	}

	.blog-pill span {
		width: 8px;
		height: 8px;
		border-radius: 999px;
		background: var(--accent);
		box-shadow: 0 0 18px rgba(239, 19, 56, 0.9);
	}

	.blog-hero h1 {
		max-width: 900px;
		margin: 42px auto 24px;
		font-size: clamp(72px, 8vw, 120px);
		line-height: 1.02;
		text-transform: uppercase;
		color: transparent;
		background: linear-gradient(180deg, #fafafa 0%, #949494 100%);
		-webkit-background-clip: text;
		background-clip: text;
	}

	.blog-hero h1 strong {
		display: block;
		color: var(--accent);
		background: none;
		-webkit-background-clip: unset;
		background-clip: unset;
	}

	.blog-hero-copy {
		max-width: 560px;
		margin: 0;
		color: var(--muted-2);
		font-size: 14px;
		line-height: 1.72;
		letter-spacing: 0.08em;
	}

	.blog-listing {
		padding: 0 0 120px;
		background: #050506;
	}

	.blog-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
		gap: clamp(20px, 2.2vw, 36px);
	}

	.blog-card {
		display: grid;
		grid-template-rows: auto 1fr;
		border: 1px solid var(--line);
		border-radius: var(--radius-lg);
		background: var(--card);
		overflow: hidden;
		transition: border-color 200ms ease, transform 200ms ease, box-shadow 200ms ease;
	}

	.blog-card:hover {
		border-color: rgba(239, 19, 56, 0.34);
		transform: translateY(-4px);
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.30);
	}

	.blog-card-cover {
		overflow: hidden;
	}

	.blog-card-cover img {
		width: 100%;
		height: auto;
		aspect-ratio: 1200 / 630;
		object-fit: cover;
		display: block;
		transition: transform 300ms ease;
	}

	.blog-card:hover .blog-card-cover img {
		transform: scale(1.03);
	}

	.blog-card-body {
		display: grid;
		gap: 14px;
		padding: clamp(18px, 2vw, 28px);
	}

	.blog-card-meta {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 8px;
	}

	.blog-card-meta span {
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

	.blog-card-category {
		border-color: rgba(239, 19, 56, 0.60) !important;
		background: rgba(239, 19, 56, 0.10);
		color: #fff !important;
	}

	.blog-card-body h2 {
		margin: 0;
		font-size: clamp(22px, 1.8vw, 28px);
		line-height: 1.05;
		text-transform: uppercase;
		color: var(--text);
		font-weight: 400;
	}

	.blog-card-body h2 strong {
		color: var(--accent);
	}

	.blog-card-body p {
		margin: 0;
		color: var(--muted);
		font-size: 13px;
		line-height: 1.58;
		letter-spacing: 0.04em;
	}

	.blog-card-cta {
		color: var(--accent);
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		transition: letter-spacing 160ms ease;
	}

	.blog-card:hover .blog-card-cta {
		letter-spacing: 0.12em;
	}

	@media (max-width: 920px) {
		.blog-hero {
			min-height: 580px;
			padding-top: 180px;
		}
		.blog-grid {
			grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		}
	}

	@media (max-width: 720px) {
		.blog-hero {
			min-height: 500px;
			padding: 156px 0 74px;
		}
		.blog-listing {
			padding-bottom: 90px;
		}
	}

	@media (max-width: 560px) {
		.blog-hero h1 {
			font-size: clamp(48px, 14vw, 72px);
		}
		.blog-grid {
			grid-template-columns: 1fr;
		}
		.blog-card-meta {
			gap: 6px;
		}
	}
</style>
