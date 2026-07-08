<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	interface Props {
		slug: string;
		title: string;
		emphasis: string;
		category: string;
		date: string;
		reading_time: string;
		description: string;
		image: string;
		headingLevel?: 'h2' | 'h3';
	}

	let {
		slug,
		title,
		emphasis,
		category,
		date,
		reading_time,
		description,
		image,
		headingLevel = 'h2',
	}: Props = $props();
</script>

<a class="card" href="/blog/{slug}" use:reveal>
	<div class="card-cover">
		<img
			class="img-blur-up"
			src="/assets/{image}"
			alt=""
			width="1200"
			height="630"
			loading="lazy"
		/>
	</div>
	<div class="card-body">
		<div class="card-meta">
			<span class="card-category">{category}</span>
			<span>{date}</span>
			<span>{reading_time} de leitura</span>
		</div>
		{#if headingLevel === 'h3'}
			<h3>{title}<strong> {emphasis}</strong></h3>
		{:else}
			<h2>{title}<strong> {emphasis}</strong></h2>
		{/if}
		<p>{description}</p>
		<span class="card-cta">Ler artigo <span aria-hidden="true">→</span></span>
	</div>
</a>
