<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import Card from "$lib/components/Card.svelte";
	import Button from "$lib/components/Button.svelte";
</script>

<svelte:head>
	<title>Consultoria — VTAQUINO</title>
	<meta
		name="description"
		content="Consultoria especializada em proteção contra incêndio com metodologia BIM. Da concepção à operação, acompanhamos cada etapa do seu projeto."
	/>
	<meta property="og:title" content="Consultoria — VTAQUINO" />
	<meta
		property="og:description"
		content="Consultoria especializada em proteção contra incêndio com metodologia BIM."
	/>
	<meta property="og:url" content="https://vtaquino.eng.br/consultoria" />
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
		<h1>
			Consultoria especializada em <strong
				>proteção contra incêndio</strong
			>
		</h1>
	</div>
</section>

<section class="page-section">
	<div class="container">
		<p class="pill">Consultoria em projetos de execução de obras</p>
		<div class="consultoria-page-grid">
			<div class="consultoria-page-content">
				<p>
					Da concepção até a operação, acompanhamos cada etapa do seu
					projeto de proteção contra incêndio. Com metodologia BIM e
					foco em prazos e economicidade, oferecemos consultoria
					técnica completa para garantir a conformidade e segurança da
					sua edificação com responsabilidade técnica.
				</p>
				<ul class="consultoria-page-list">
					<li>
						Projetos executivos de proteção contra incêndio e pânico
					</li>
					<li>Modelagem BIM para compatibilização e precisão</li>
					<li>Regularização junto ao Corpo de Bombeiros</li>
					<li>Laudos e pareceres técnicos</li>
					<li>Treinamento de brigada de incêndio</li>
				</ul>
				<Button href="/contato">Solicitar consultoria</Button>
			</div>
			<div class="consultoria-page-stats">
				<div class="stat-card">
					<span class="stat-number">150+</span>
					<span class="stat-label">Projetos realizados</span>
				</div>
				<div class="stat-card">
					<span class="stat-number">98%</span>
					<span class="stat-label">Aprovação em bombeiros</span>
				</div>
				<div class="stat-card">
					<span class="stat-number">12+</span>
					<span class="stat-label">Anos de experiência</span>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="page-section consultoria-cards-section">
	<div class="container">
		<h2 class="section-title">Áreas de atuação</h2>
		<p class="section-subtitle">
			Consultoria técnica completa em proteção contra incêndio
		</p>
		<div class="consultoria-grid">
			<Card
				padding="sm"
				hover="sm"
				iconSize="sm"
				class="consultoria-card"
			>
				{#snippet icon()}
					<svg
						viewBox="0 0 512 512"
						fill="currentColor"
						aria-hidden="true"
						><path
							d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
						/></svg
					>
				{/snippet}
				<h3>Pericial</h3>
				<p>
					Elaboração de laudos e pareceres técnicos periciais em
					sistemas de proteção contra incêndio.
				</p>
			</Card>
			<Card
				padding="sm"
				hover="sm"
				iconSize="sm"
				class="consultoria-card"
			>
				{#snippet icon()}
					<svg
						viewBox="0 0 384 512"
						fill="currentColor"
						aria-hidden="true"
						><path
							d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM112 256l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
						/></svg
					>
				{/snippet}
				<h3>Auditoria</h3>
				<p>
					Auditoria técnica de projetos e instalações de PCI
					existentes, verificando conformidade normativa.
				</p>
			</Card>
			<Card
				padding="sm"
				hover="sm"
				iconSize="sm"
				class="consultoria-card"
			>
				{#snippet icon()}
					<svg
						viewBox="0 0 512 512"
						fill="currentColor"
						aria-hidden="true"
						><path
							d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
						/></svg
					>
				{/snippet}
				<h3>Laudo de reforma</h3>
				<p>
					Laudos técnicos para reformas e adequações de sistemas de
					combate a incêndio.
				</p>
			</Card>
			<Card
				padding="sm"
				hover="sm"
				iconSize="sm"
				class="consultoria-card"
			>
				{#snippet icon()}
					<svg
						viewBox="0 0 640 512"
						fill="currentColor"
						aria-hidden="true"
						><path
							d="M384 32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L398.4 96c-5.2 25.8-22.9 47.1-46.4 57.3L352 448l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0-192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0 0-294.7c-23.5-10.3-41.2-31.6-46.4-57.3L128 96c-17.7 0-32-14.3-32-32s14.3-32 32-32l128 0c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zm55.6 288l144.9 0L512 195.8 439.6 320zM512 416c-62.9 0-115.2-34-126-78.9c-2.6 11-1 22.3-6.7 32.1l-95.2-163.2c-5-8.6-14.2-13.8-24.1-13.8s-19.1 5.3-24.1 13.8l-95.2 163.2c-5.7 9.8-9.3 21.1-6.7 32.1C115.2 382 167.5 416 230.4 416s115.2-34 126-78.9c2.6-11-1-22.3-6.7-32.1z"
						/></svg
					>
				{/snippet}
				<h3>Judicial</h3>
				<p>
					Suporte técnico e pericial em processos judiciais e para
					empresas envolvendo sistemas de proteção contra incêndios.
				</p>
			</Card>
			<Card
				padding="sm"
				hover="sm"
				iconSize="sm"
				class="consultoria-card"
			>
				{#snippet icon()}
					<svg
						viewBox="0 0 576 512"
						fill="currentColor"
						aria-hidden="true"
						><path
							d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z"
						/></svg
					>
				{/snippet}
				<h3>Simulação Computacional</h3>
				<p>
					Simulação de escape e saídas de emergência, e evolução do
					incêndio e da fumaça.
				</p>
			</Card>
			<Card
				padding="sm"
				hover="sm"
				iconSize="sm"
				class="consultoria-card"
			>
				{#snippet icon()}
					<svg
						viewBox="0 0 576 512"
						fill="currentColor"
						aria-hidden="true"
						><path
							d="M499.6 11.3c6.7-10.7 20.5-14.5 31.7-8.5s15.8 19.5 10.6 31L404.8 338.6c2.2 2.3 4.3 4.7 6.3 7.1l97.2-54.7c10.5-5.9 23.6-3.1 30.9 6.4s6.3 23-2.2 31.5l-87 87-71.4 0c-13.2-37.3-48.7-64-90.5-64s-77.4 26.7-90.5 64l-79.6 0L42.3 363.7c-9.7-6.7-13.1-19.6-7.9-30.3s17.4-15.9 28.7-12.4l97.2 30.4c3-3.9 6.1-7.7 9.4-11.3L107.4 236.3c-6.1-10.1-3.9-23.1 5.1-30.7s22.2-7.5 31.1 .1L246 293.6c1.5-.4 3-.8 4.5-1.1l13.6-142.7c1.2-12.3 11.5-21.7 23.9-21.7s22.7 9.4 23.9 21.7l13.5 141.9L499.6 11.3zM64 448s0 0 0 0l448 0s0 0 0 0l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0zM288 0c13.3 0 24 10.7 24 24l0 48c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-48c0-13.3 10.7-24 24-24z"
						/></svg
					>
				{/snippet}
				<h3>Atmosferas Explosivas</h3>
				<p>
					Classificação de áreas, definição de equipamentos e proteção
					elétrica.
				</p>
			</Card>
		</div>
	</div>
</section>

<Footer />

<style>
	.page-hero h1 {
		max-width: 720px;
		margin: 16px auto 0;
	}

	.consultoria-page-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-xl);
		align-items: center;
	}

	.consultoria-page-content p {
		color: var(--muted);
		font-size: 15px;
		line-height: 1.72;
		margin: 0 0 var(--space-lg);
	}

	.consultoria-page-list {
		display: grid;
		gap: var(--space-sm);
		margin: 0 0 var(--space-lg);
		padding: 0;
		list-style: none;
	}

	.consultoria-page-list li {
		position: relative;
		padding-left: 22px;
		color: var(--text);
		font-size: 14px;
		line-height: 1.6;
	}

	.consultoria-page-list li::before {
		content: "";
		position: absolute;
		left: 0;
		top: 0.65em;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--accent);
	}

	.consultoria-page-stats {
		display: grid;
		gap: var(--space-base);
	}

	.consultoria-cards-section {
		padding: 20px 0 100px;
		background: var(--bg);
	}

	.consultoria-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-base);
	}

	:global(.consultoria-card h3) {
		color: var(--accent);
	}

	@media (max-width: 920px) {
		.consultoria-page-grid {
			grid-template-columns: 1fr;
		}
		.consultoria-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 720px) {
		.consultoria-cards-section {
			padding: 20px 0 72px;
		}
	}

	@media (max-width: 560px) {
		.consultoria-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
