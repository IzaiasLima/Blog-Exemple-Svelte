<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import PostHero from '$lib/components/PostHero.svelte';
	import PostArticle from '$lib/components/PostArticle.svelte';
	import PostShareNav from '$lib/components/PostShareNav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.title} {data.emphasis} — the blacklist</title>
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
<PostShareNav />
<Footer />
