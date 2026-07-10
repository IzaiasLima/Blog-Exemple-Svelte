<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
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
		<p class="pill"><span></span> Consultoria</p>
		<h1>
			Consultoria especializada em <strong
				>proteção contra incêndio</strong
			>
		</h1>
	</div>
</section>

<section class="page-section">
	<div class="container">
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
			<article class="consultoria-card">
				<h3>Pericial</h3>
				<p>
					Elaboração de laudos e pareceres técnicos periciais em
					sistemas de proteção contra incêndio.
				</p>
			</article>
			<article class="consultoria-card">
				<h3>Auditoria</h3>
				<p>
					Auditoria técnica de projetos e instalações de PCI
					existentes, verificando conformidade normativa.
				</p>
			</article>
			<article class="consultoria-card">
				<h3>Laudo de reforma</h3>
				<p>
					Laudos técnicos para reformas e adequações de sistemas de
					combate a incêndio.
				</p>
			</article>
			<article class="consultoria-card">
				<h3>Judicial</h3>
				<p>
					Suporte técnico e pericial em processos judiciais e para
					empresas envolvendo sistemas de proteção contra incêndios.
				</p>
			</article>
			<article class="consultoria-card">
				<h3>Simulação Computacional</h3>
				<p>
					Simulação de escape e saídas de emergência, e evolução do
					incêndio e da fumaça.
				</p>
			</article>
			<article class="consultoria-card">
				<h3>Atmosferas Explosivas</h3>
				<p>
					Classificação de áreas, definição de equipamentos e proteção
					elétrica.
				</p>
			</article>
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

	.section-title {
		text-align: center;
		font-size: 2rem;
		font-weight: 800;
		margin: 10px 0 8px;
	}

	.section-subtitle {
		text-align: center;
		color: var(--muted);
		font-size: 15px;
		margin: 0 0 var(--space-xl);
	}

	.consultoria-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-base);
	}

	.consultoria-card {
		padding: var(--space-lg) var(--space-base);
		transition:
			border-color 0.2s,
			transform 0.2s;
	}

	.consultoria-card:hover {
		transform: translateY(-2px);
	}

	.consultoria-card h3 {
		font-size: 1.05rem;
		font-weight: 700;
		margin: 0 0 var(--space-sm);
		color: var(--accent);
	}

	.consultoria-card p {
		color: var(--muted);
		font-size: 14px;
		line-height: 1.65;
		margin: 0;
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
