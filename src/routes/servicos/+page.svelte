<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import Card from "$lib/components/Card.svelte";
	import Button from "$lib/components/Button.svelte";
	import { servicesSubRoutes } from "$lib/data/routes";
</script>

<svelte:head>
	<title>Serviços — VTAQUINO</title>
	<meta
		name="description"
		content="Soluções completas em proteção contra incêndio: projeto, execução, manutenção, regularização CBM e treinamento de brigada. Metodologia BIM."
	/>
	<meta property="og:title" content="Serviços — VTAQUINO" />
	<meta
		property="og:description"
		content="Soluções completas em proteção contra incêndio com metodologia BIM."
	/>
	<meta property="og:url" content="https://vtaquino.eng.br/servicos" />
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
		<!-- <p class="pill"><span></span> Serviços</p> -->
		<h1>Soluções completas em <strong>proteção contra incêndio</strong></h1>
		<p class="page-hero-copy">
			Da concepção à operação, oferecemos serviços especializados em
			proteção e prevenção contra incêndio e pânico. Utilizamos
			metodologia BIM para garantir precisão, economicidade e performance
			em cada etapa.
		</p>
	</div>
</section>

<section class="page-section">
	<div class="container">
		<div class="services-page-grid">
			{#each servicesSubRoutes as service, i}
				<Card
					padding="md"
					iconSize="sm"
					id={service.href.split("#")[1]}
					class="service-page-card"
				>
					{#snippet icon()}
						<span class="service-number">{(i + 1).toString().padStart(2, '0')}</span>
					{/snippet}
					<h2>{service.label}</h2>
					{#if service.items}
						<ul class="service-list">
							{#each service.items as item}
								<li>{item}</li>
							{/each}
						</ul>
					{/if}
				</Card>
			{/each}
		</div>

		<div class="section-cta">
			<p>Solicite um orçamento para seu projeto</p>
			<Button href="/contato">Solicitar orçamento</Button>
		</div>
	</div>
</section>

<Footer />

<style>
	.page-hero h1 {
		max-width: 720px;
		margin: 16px auto 14px;
	}

	.page-hero-copy {
		max-width: 600px;
	}

	.services-page-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: var(--space-lg);
		margin-bottom: var(--space-xl);
	}

	.service-number {
		font-size: 15px;
		font-weight: 800;
		color: var(--accent);
		line-height: 1;
	}

	:global(.service-page-card h2) {
		margin: 0 0 var(--space-xs);
		font-size: 1.1rem;
		font-weight: 700;
		color: var(--text);
	}

	.service-list {
		list-style: none;
		padding: 0;
		margin: var(--space-sm) 0 0;
		border: none;
		display: grid;
		gap: var(--space-2xs);
	}

	.service-list li {
		position: relative;
		padding-left: 16px;
		color: var(--muted);
		font-size: 13px;
		line-height: 1.55;
	}

	.service-list li::before {
		content: "";
		position: absolute;
		left: 0;
		top: 0.6em;
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: var(--accent);
		opacity: 0.6;
	}

	@media (max-width: 920px) {
		.services-page-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 560px) {
		.services-page-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
