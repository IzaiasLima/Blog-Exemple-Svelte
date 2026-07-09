<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import Button from "$lib/components/Button.svelte";
</script>

<svelte:head>
	<title>Quem Somos — VTAQUINO</title>
	<meta
		name="description"
		content="Conheça a história da VTAQUINO, empresa de engenharia especializada em proteção e prevenção contra incêndio e pânico, fundada em 2011."
	/>
	<meta property="og:title" content="Quem Somos — VTAQUINO" />
	<meta
		property="og:description"
		content="Conheça a história da VTAQUINO, empresa de engenharia especializada em proteção e prevenção contra incêndio e pânico, fundada em 2011."
	/>
	<meta property="og:url" content="https://vtaquino.eng.br/quem-somos" />
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
		<p class="pill"><span></span> Quem Somos</p>
		<h1>
			Engenharia de proteção contra incêndio <strong
				>criada para mergulhar na necessidade específica de cada cliente</strong
			>
		</h1>
	</div>
</section>

<section class="page-section">
	<div class="container">
		<div class="about-grid">
			<div class="about-content">
				<p>
					A <strong>VTAQUINO</strong> é uma empresa de engenharia
					dedicada a projetos e instalações de proteção e prevenção
					contra incêndio e pânico, criada em <strong>2011</strong>.
				</p>
				<p>
					Propomos soluções focadas nas necessidades específicas do
					cliente, com
					<strong
						>viabilidade técnico-financeira, legislativa e normativa</strong
					>. Contamos com governança técnica experiente e uma rede de
					consultores e parceiros.
				</p>
				<p>
					Utilizamos a <strong>metodologia BIM</strong> (Building
					Information Modeling) e ferramentas integradas para as fases
					de projeto, execução e manutenção.
					<strong>Prazos e economicidade</strong>, da concepção até a
					operação.
				</p>
				<blockquote class="about-quote">
					Foco no cliente, na performance e na inovação — convergindo
					para resultados com alto valor agregado em cada projeto de
					PCI.
				</blockquote>
			</div>
			<div class="about-stats">
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

		<div class="values-section">
			<h2 class="section-title">Nossos pilares</h2>
			<div class="values-grid">
				<article class="value-card">
					<div class="value-card-icon" aria-hidden="true">
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
							<circle cx="9" cy="7" r="4" />
							<path
								d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
							/>
						</svg>
					</div>
					<h3>Foco no cliente</h3>
					<p>
						Soluções técnico-financeiras, legislativas e normativas
						construídas para a necessidade específica de cada obra.
					</p>
				</article>
				<article class="value-card">
					<div class="value-card-icon" aria-hidden="true">
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<path d="M22 12h-4l-3 9L9 3l-3 9H2" />
						</svg>
					</div>
					<h3>Performance</h3>
					<p>
						Prazos e economicidade acompanhados do início ao fim da
						obra ou reforma.
					</p>
				</article>
				<article class="value-card">
					<div class="value-card-icon" aria-hidden="true">
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<path d="M12 2l3 7h7l-5 5 2 7-7-4-7 4 2-7-5-5h7z" />
						</svg>
					</div>
					<h3>Inovação</h3>
					<p>
						Metodologia BIM e ferramentas de integração para todas
						as fases de projeto, execução e manutenção.
					</p>
				</article>
			</div>
		</div>

		<div class="about-cta">
			<h2>Vamos conversar sobre <strong>seu projeto</strong></h2>
			<p>
				Entre em contato para solicitar um orçamento ou tirar dúvidas.
			</p>
			<Button href="/contato">Fale conosco</Button>
		</div>
	</div>
</section>

<Footer />

<style>
	.page-hero h1 {
		max-width: 900px;
		margin: 16px auto 0;
	}

	.about-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-xl);
		align-items: start;
		margin-bottom: var(--space-xl);
	}

	.about-content p {
		color: var(--muted);
		font-size: 15px;
		line-height: 1.72;
		margin: 0 0 var(--space-lg);
	}

	.about-content p strong {
		color: var(--text);
		font-weight: 700;
	}

	.about-stats {
		display: grid;
		gap: var(--space-base);
	}

	.about-quote {
		margin: var(--space-lg) 0 0;
		padding: var(--space-base) var(--space-lg);
		border-left: 3px solid var(--accent);
		background: var(--accent-soft);
		border-radius: 0 var(--radius) var(--radius) 0;
		color: var(--text);
		font-size: 15px;
		font-style: italic;
		line-height: 1.65;
	}

	.values-section {
		padding: var(--space-xl) 0;
	}

	.section-title {
		text-align: center;
		font-size: 2rem;
		font-weight: 800;
		margin: 0 0 var(--space-lg);
	}

	.values-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-base);
	}

	.value-card {
		padding: var(--space-xl) var(--space-lg);
		transition:
			border-color 0.2s,
			transform 0.2s,
			box-shadow 0.2s;
		text-align: center;
	}

	.value-card:hover {
		transform: translateY(-3px);
	}

	.value-card-icon {
		width: 44px;
		height: 44px;
		margin: 0 auto var(--space-base);
		border-radius: 12px;
	}

	.value-card-icon svg {
		width: 24px;
		height: 24px;
	}

	.value-card h3 {
		margin: 0 0 var(--space-sm);
		font-size: 1.1rem;
		font-weight: 700;
	}

	.value-card p {
		margin: 0;
		color: var(--muted);
		font-size: 14px;
		line-height: 1.65;
	}

	.about-cta {
		text-align: center;
		padding: var(--space-xl) 0 0;
		border-top: 1px solid var(--line);
	}

	.about-cta h2 {
		font-weight: 800;
		margin-bottom: var(--space-md);
	}

	.about-cta h2 strong {
		color: var(--accent);
	}

	.about-cta p {
		color: var(--muted);
		font-size: 15px;
		margin: 0 0 var(--space-lg);
	}

	@media (max-width: 920px) {
		.about-grid {
			grid-template-columns: 1fr;
		}
		.values-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 640px) {
		.values-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
