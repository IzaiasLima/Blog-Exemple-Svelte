<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import BlogHero from '$lib/components/BlogHero.svelte';
	import Card from '$lib/components/Card.svelte';
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
	<title>VTAQUINO - Blog</title>
	<meta name="description" content="Artigos sobre proteção contra incêndio, segurança e prevenção" />
	<meta property="og:title" content="Blog — VTAQUINO" />
	<meta property="og:description" content="Artigos sobre proteção contra incêndio, segurança e prevenção" />
	<meta property="og:url" content="https://vtaquino.eng.br/blog/" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://vtaquino.eng.br/assets/og-image.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Header />

<BlogHero />

<section class="blog-listing">
	<div class="container">
		<div class="blog-grid">
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
				/>
			{/each}
		</div>
	</div>
</section>

<Footer />

<style>
	.blog-listing {
		padding: 120px 0;
		background: var(--bg);
	}

	.blog-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
		gap: clamp(20px, 2.2vw, 36px);
	}

	@media (max-width: 920px) {
		.blog-grid {
			grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		}
	}

	@media (max-width: 720px) {
		.blog-listing {
			padding-bottom: 90px;
		}
	}

	@media (max-width: 560px) {
		.blog-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
