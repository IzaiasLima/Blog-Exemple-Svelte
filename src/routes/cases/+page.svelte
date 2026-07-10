<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import Button from "$lib/components/Button.svelte";

	const clients = [
		{ img: "patio-brasil.png" },
		{ img: "tecnisa.png" },
		{ img: "colegio-santa-rosa.png" },
		{ img: "brasal-refrigerantes.png" },
		{ img: "anhanguera-educacional.png" },
		{ img: "marisa.png" },
		{ img: "araujo-abreu.png" },
		{ img: "brasilia-international-school.png" },
	];

	const marqueeClients = [...clients, ...clients];

	let marqueeEl: HTMLDivElement | undefined = $state();
	let isDragging = $state(false);
	let rafId: number | undefined;
	let lastTime: number | undefined;
	let startX = 0;
	let scrollStart = 0;

	const SPEED = 0.125; // px/ms ≈ original speed

	function tick(time: number) {
		if (marqueeEl && !isDragging) {
			if (lastTime === undefined) lastTime = time;
			const delta = Math.min(time - lastTime, 50);
			lastTime = time;
			const max = marqueeEl.scrollWidth / 2;
			marqueeEl.scrollLeft = (marqueeEl.scrollLeft + delta * SPEED) % max;
		}
		rafId = requestAnimationFrame(tick);
	}

	function onStart(e: MouseEvent | TouchEvent) {
		isDragging = true;
		lastTime = undefined;
		const cx =
			"touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
		startX = cx;
		scrollStart = marqueeEl?.scrollLeft ?? 0;
	}

	function onMove(e: MouseEvent | TouchEvent) {
		if (!isDragging || !marqueeEl) return;
		e.preventDefault();
		const cx =
			"touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
		marqueeEl.scrollLeft = scrollStart + (startX - cx) * 1.5;
	}

	function onEnd() {
		isDragging = false;
		lastTime = undefined;
	}

	onMount(() => { rafId = requestAnimationFrame(tick); });
	onDestroy(() => { if (rafId !== undefined) cancelAnimationFrame(rafId); });
</script>

<svelte:head>
	<title>Cases de Sucesso — VTAQUINO</title>
	<meta
		name="description"
		content="Conheça alguns dos clientes que confiam na VTAQUINO em projetos de proteção contra incêndio: Pátio Brasil Shopping, Tecnisa, Brasal e mais."
	/>
	<meta property="og:title" content="Cases de Sucesso — VTAQUINO" />
	<meta
		property="og:description"
		content="Conheça alguns dos clientes que confiam na VTAQUINO em projetos de proteção contra incêndio."
	/>
	<meta property="og:url" content="https://vtaquino.eng.br/cases" />
	<meta
		property="og:image"
		content="https://vtaquino.eng.br/assets/og-image.jpg"
	/>
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Header />

<section class="page-hero">
	<div class="container page-hero-inner">
		<!-- <p class="pill"><span></span> Clientes satisfeitos</p> -->
		<h1>Cases de <strong class="hero-strong-inline">Sucesso</strong></h1>
		<p class="page-hero-copy">
			Todo cliente merece o melhor atendimento com a melhor qualidade na
			execução dos serviços prestados. Garantimos a excelência em nossos
			projetos do início ao fim da obra ou reforma, seja residencial ou
			industrial.
		</p>
	</div>
</section>

<section class="page-section cases-section">
	<div class="container">
		<div class="cases-header">
			<!-- <p class="pill"><span></span> Confiam na VTAQUINO</p> -->
			<h2>
				Conheça alguns de <strong>nossos clientes satisfeitos</strong>.
			</h2>
			<p class="cases-subtitle">
				Marcas que já contaram com a VTAQUINO em seus projetos de
				proteção contra incêndio.
			</p>
		</div>

		<div
			class="clients-marquee"
			bind:this={marqueeEl}
			onmousedown={onStart}
			onmousemove={onMove}
			onmouseup={onEnd}
			onmouseleave={onEnd}
			ontouchstart={onStart}
			ontouchmove={onMove}
			ontouchend={onEnd}
			role="listbox"
			tabindex="0"
			aria-label="Clientes que confiam na VTAQUINO"
		>
			<div class="clients-track">
				{#each marqueeClients as client, i (client.img + i)}
					<article class="client-card">
						<img
							class="client-logo"
							src="/assets/clients/{client.img}"
							alt=""
							loading="lazy"
							draggable="false"
						/>
					</article>
				{/each}
			</div>
		</div>

		<div class="section-cta">
			<!-- <p class="pill"><span></span> Seja o próximo case</p> -->
			<h2>
				E seja você também mais um <strong>cliente satisfeito</strong>.
			</h2>
			<p class="cases-subtitle">
				Faça um orçamento sem compromisso e conheça a experiência da
				VTAQUINO em projetos de proteção contra incêndio.
			</p>
			<Button href="/contato">Solicitar orçamento</Button>
		</div>
	</div>
</section>

<Footer />

<style>
	.page-hero h1 {
		max-width: 900px;
		margin: 16px auto 14px;
	}
	.page-hero-copy {
		max-width: 600px;
	}

	.cases-header {
		text-align: center;
		margin-bottom: var(--space-xl);
	}

	.cases-header h2 {
		font-weight: 800;
		margin: 0 auto var(--space-md);
		max-width: 540px;
		text-wrap: balance;
	}

	.cases-header h2 strong {
		color: var(--accent);
	}

	.cases-subtitle {
		color: var(--muted);
		font-size: 15px;
		margin: 0;
		max-width: 500px;
		margin-inline: auto;
	}

	.clients-marquee {
		overflow: auto hidden;
		margin-bottom: var(--space-xl);
		mask-image: linear-gradient(
			to right,
			transparent 0%,
			black 4%,
			black 96%,
			transparent 100%
		);
		-webkit-mask-image: linear-gradient(
			to right,
			transparent 0%,
			black 4%,
			black 96%,
			transparent 100%
		);
		cursor: grab;
		-webkit-overflow-scrolling: touch;
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.clients-marquee::-webkit-scrollbar {
		display: none;
	}

	.clients-marquee:active {
		cursor: grabbing;
	}

	.clients-track {
		display: flex;
		gap: var(--space-lg);
		width: max-content;
		pointer-events: none;
		user-select: none;
		-webkit-user-select: none;
	}

	.client-card {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: var(--space-lg) var(--space-base);
		min-width: 160px;
		/* Remove card styling — logos only, no visual card */
		border: none;
		border-radius: 0;
		background: transparent;
		box-shadow: none;
		overflow: visible;
		transition: none;
	}

	.client-card::before,
	.client-card:hover::before {
		display: none;
	}

	.client-card:hover {
		border-color: inherit;
		box-shadow: none;
		transform: none;
	}

	.client-logo {
		width: 100%;
		max-width: 150px;
		height: auto;
		max-height: 72px;
		object-fit: contain;
		transition: transform var(--transition-base);
	}

	.client-card:hover .client-logo {
		transform: scale(1.08);
	}

	.section-cta {
		border-top: 1px solid var(--line);
	}

	.section-cta h2 {
		max-width: 480px;
		margin: 0 auto var(--space-md);
		text-wrap: balance;
	}

	.section-cta .cases-subtitle {
		margin-bottom: var(--space-lg);
	}
</style>
