<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
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
		<p class="pill"><span></span> Serviços</p>
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
			{#each servicesSubRoutes as service}
				<article
					id={service.href.split("#")[1]}
					class="service-page-card"
				>
					<div class="service-page-card-icon" aria-hidden="true">
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<path
								d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
							/>
						</svg>
					</div>
					<h2>{service.label}</h2>
					{#if service.items}
						<ul class="service-card-list">
							{#each service.items as item}
								<li>{item}</li>
							{/each}
						</ul>
					{/if}
				</article>
			{/each}
		</div>

		<div class="page-cta">
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
		letter-spacing: 0.02em;
	}

	.services-page-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: var(--space-lg);
		margin-bottom: var(--space-xl);
	}

	.service-page-card {
		padding: var(--space-lg);
		transition:
			border-color var(--transition-base),
			transform var(--transition-base),
			box-shadow var(--transition-base);
	}

	.service-page-card:hover {
		transform: translateY(-3px);
	}

	.service-page-card-icon {
		width: 40px;
		height: 40px;
		margin-bottom: var(--space-base);
		border-radius: 10px;
	}

	.service-page-card-icon svg {
		width: 22px;
		height: 22px;
	}

	.service-page-card h2 {
		margin: 0 0 var(--space-xs);
		font-size: 1.1rem;
		font-weight: 700;
		color: var(--text);
	}

	.service-card-list {
		list-style: none;
		padding: 0;
		margin: var(--space-sm) 0 0;
		border: none;
		display: grid;
		gap: 6px;
	}

	.service-card-list li {
		position: relative;
		padding-left: 16px;
		color: var(--muted);
		font-size: 13px;
		line-height: 1.55;
	}

	.service-card-list li::before {
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

	.page-cta {
		text-align: center;
		padding: var(--space-xl) 0 0;
	}

	.page-cta p {
		color: var(--muted);
		font-size: 15px;
		margin: 0 0 var(--space-lg);
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
