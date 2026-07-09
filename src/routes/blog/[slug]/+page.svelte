<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import PostHero from '$lib/components/PostHero.svelte';
	import PostArticle from '$lib/components/PostArticle.svelte';
	import PostShareNav from '$lib/components/PostShareNav.svelte';
	import RelatedPosts from '$lib/components/RelatedPosts.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { data } = $props();

	let pageTitle = $derived(`${data.title} ${data.emphasis} — VTAQUINO`);
	let pageUrl = $derived(`https://vtaquino.com.br/blog/${data.slug}/`);
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta property="og:title" content="{data.title} {data.emphasis}" />
	<meta property="og:description" content="{data.description}" />
	<meta property="og:image" content="https://vtaquino.com.br/assets/{data.image}" />
	<meta property="og:url" content="{pageUrl}" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Header />
<PostHero
	title={data.title}
	emphasis={data.emphasis}
	hero={data.hero}
	category={data.category}
	date={data.date}
	reading_time={data.reading_time}
/>
<PostArticle
	image={data.image}
	description={data.description}
	lead={data.lead}
	content={data.content}
	toc={data.toc}
/>
<PostShareNav
	slug={data.slug}
	title={data.title}
	prev={data.prev}
	next={data.next}
/>
<RelatedPosts posts={data.recentPosts} />
<Footer />
