<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import Button from "$lib/components/Button.svelte";
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
		<p class="pill"><span></span> Clientes satisfeitos</p>
		<h1>Cases de <strong>Sucesso</strong></h1>
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
			<p class="pill"><span></span> Confiam na VTAQUINO</p>
			<h2>
				Conheça alguns de <strong>nossos clientes satisfeitos</strong>.
			</h2>
			<p class="cases-subtitle">
				Marcas que já contaram com a VTAQUINO em seus projetos de
				proteção contra incêndio.
			</p>
		</div>

		<div class="clients-grid">
			{#each [{ name: "Pátio Brasil Shopping", img: "patio-brasil.png" }, { name: "Tecnisa", img: "tecnisa.png" }, { name: "Colégio Santa Rosa", img: "colegio-santa-rosa.png" }, { name: "Brasal Refrigerantes", img: "brasal-refrigerantes.png" }, { name: "Anhanguera Educacional", img: "anhanguera-educacional.png" }, { name: "Marisa", img: "marisa.png" }, { name: "Araújo Abreu", img: "araujo-abreu.png" }, { name: "Brasília International School", img: "brasilia-international-school.png" }] as client}
				<article class="client-card">
					<img
						class="client-logo"
						src="/assets/clients/{client.img}"
						alt={client.name}
						loading="lazy"
					/>
					<span class="client-name">{client.name}</span>
				</article>
			{/each}
		</div>

		<div class="cases-cta">
			<p class="pill"><span></span> Seja o próximo case</p>
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
	.page-hero h1 strong {
		display: inline-block;
	}

	.page-hero-copy {
		max-width: 600px;
		letter-spacing: 0.02em;
	}

	.cases-header {
		text-align: center;
		margin-bottom: var(--space-xl);
	}

	.cases-header .pill {
		margin-bottom: var(--space-base);
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

	.clients-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: var(--space-base);
		margin-bottom: var(--space-xl);
	}

	.client-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-sm);
		padding: var(--space-lg) var(--space-base);
		transition:
			border-color 0.2s,
			transform 0.2s,
			box-shadow 0.2s;
		text-align: center;
	}

	.client-card:hover {
		transform: translateY(-2px);
	}

	.client-logo {
		width: 100%;
		max-width: 120px;
		height: auto;
		max-height: 56px;
		object-fit: contain;
		margin-bottom: var(--space-xs);
	}

	.client-name {
		font-size: 13px;
		font-weight: 600;
		color: var(--text);
		line-height: 1.3;
	}

	.cases-cta {
		text-align: center;
		padding: var(--space-xl) 0 0;
		border-top: 1px solid var(--line);
	}

	.cases-cta .pill {
		margin-bottom: var(--space-base);
	}

	.cases-cta h2 {
		font-weight: 800;
		margin: 0 auto var(--space-md);
		max-width: 480px;
		text-wrap: balance;
	}

	.cases-cta h2 strong {
		color: var(--accent);
	}

	.cases-cta .cases-subtitle {
		margin-bottom: var(--space-lg);
	}

	@media (max-width: 920px) {
		.clients-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 720px) {
		.clients-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 560px) {
		.clients-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
