<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Button from '$lib/components/Button.svelte';
	import { servicesSubRoutes } from '$lib/data/routes';
</script>

<svelte:head>
	<title>VTAQUINO — Fire Consultancy</title>
	<meta name="description" content="Projetos e instalações de proteção e prevenção contra incêndio e pânico, do projeto executivo à manutenção." />
	<meta property="og:title" content="VTAQUINO — Fire Consultancy" />
	<meta property="og:description" content="Projetos e instalações de proteção e prevenção contra incêndio e pânico." />
	<meta property="og:type" content="website" />
</svelte:head>

<Header />

<!-- ===== HERO / #inicio ===== -->
<section id="inicio" class="home-hero hero-section">
	<div class="hero-fx" aria-hidden="true"></div>
	<div class="container hero-inner">
		<p class="pill"><span></span> Fire Consultancy</p>
		<h1 class="hero-title-gradient">
			Proteção contra incêndio<br />
			<strong class="hero-strong">com responsabilidade técnica</strong>
		</h1>
		<p class="hero-copy" style="max-width: 600px;">
			Do projeto executivo à manutenção, garantimos a conformidade e segurança da sua edificação
			com soluções completas em proteção e prevenção contra incêndio e pânico.
		</p>
		<div class="home-hero-actions">
			<Button href="/#contato">Solicitar orçamento</Button>
			<Button href="/#servicos" variant="secondary">Nossos serviços</Button>
		</div>
	</div>
</section>

<!-- ===== SERVIÇOS / #servicos ===== -->
<section id="servicos" class="home-section">
	<div class="container">
		<p class="pill"><span></span> Serviços</p>
		<h2 class="section-title">
			Soluções completas em <strong>proteção contra incêndio</strong>
		</h2>
		<p class="section-copy">
			Da concepção à manutenção, oferecemos serviços especializados para garantir a segurança
			da sua edificação em conformidade com as normas técnicas vigentes.
		</p>

		<div class="services-grid">
			{#each servicesSubRoutes as service}
				<article id={service.href.replace('/#', '')} class="service-card">
					<div class="service-card-icon" aria-hidden="true">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
							<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
						</svg>
					</div>
					<h3>{service.label}</h3>
					<p>
						{service.label === 'Landing pages' && 'Criação de landing pages de alta conversão para campanhas de marketing digital.'}
						{service.label === 'Tráfego pago' && 'Gestão de campanhas de tráfego pago com foco em ROI e segmentação estratégica.'}
						{service.label === 'Design estratégico' && 'Design focado em resultados, unindo estética e funcionalidade para sua marca.'}
						{service.label === 'SEO' && 'Otimização para mecanismos de busca com técnicas avançadas de SEO on-page e off-page.'}
						{service.label === 'Social media' && 'Gestão de redes sociais com conteúdo estratégico para engajamento e crescimento.'}
					</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- ===== CONSULTORIA / #consultoria ===== -->
<section id="consultoria" class="home-section home-section-alt">
	<div class="container">
		<p class="pill"><span></span> Consultoria</p>
		<h2 class="section-title">
			Consultoria especializada em <strong>segurança contra incêndio</strong>
		</h2>
		<div class="consultoria-grid">
			<div class="consultoria-content">
				<p>
					Com anos de experiência no mercado, oferecemos consultoria técnica completa para
					projetos de proteção contra incêndio e pânico. Analisamos sua edificação, identificamos
					as necessidades e propomos soluções eficientes que atendem rigorosamente à legislação.
				</p>
				<ul class="consultoria-list">
					<li>Análise de conformidade com normas técnicas (NBR, CBPMER, CBMDF)</li>
					<li>Projetos executivos de proteção contra incêndio</li>
					<li>Regularização junto ao Corpo de Bombeiros</li>
					<li>Laudos e pareceres técnicos</li>
					<li>Treinamento de brigada de incêndio</li>
				</ul>
				<Button href="/#contato">Solicitar consultoria</Button>
			</div>
			<div class="consultoria-stats">
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

<!-- ===== CONTATO / #contato ===== -->
<section id="contato" class="home-section">
	<div class="container">
		<p class="pill"><span></span> Contato</p>
		<h2 class="section-title">
			Vamos conversar sobre <strong>seu projeto</strong>
		</h2>
		<p class="section-copy">
			Entre em contato conosco para solicitar um orçamento ou tirar dúvidas sobre nossos serviços.
		</p>
		<div class="contact-grid">
			<div class="contact-card">
				<div class="contact-card-icon" aria-hidden="true">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
						<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
					</svg>
				</div>
				<h3>Telefone</h3>
				<a href="tel:5561982496399">(61) 98249-6399</a>
			</div>
			<div class="contact-card">
				<div class="contact-card-icon" aria-hidden="true">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
						<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
						<polyline points="22,6 12,13 2,6"/>
					</svg>
				</div>
				<h3>E-mail</h3>
				<a href="mailto:contato@vtaquino.com.br">contato@vtaquino.com.br</a>
			</div>
			<div class="contact-card">
				<div class="contact-card-icon" aria-hidden="true">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
						<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
						<circle cx="12" cy="10" r="3"/>
					</svg>
				</div>
				<h3>Localização</h3>
				<p>Brasília - DF</p>
			</div>
			<div class="contact-card">
				<div class="contact-card-icon" aria-hidden="true">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
						<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
					</svg>
				</div>
				<h3>WhatsApp</h3>
				<a href="https://wa.me/5561982496399?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20da%20VTAQUINO%2C%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas." target="_blank" rel="noopener">Fale conosco</a>
			</div>
		</div>
	</div>
</section>

<Footer />

<style>
	/* ===== Hero Section ===== */
	.home-hero {
		min-height: 640px;
		padding: 140px 0 80px;
		background:
			radial-gradient(circle at 85% 10%, rgba(var(--accent-rgb), 0.08), transparent 28rem),
			var(--panel-2);
	}

	.home-hero h1 {
		max-width: 900px;
		margin: 42px auto 24px;
		font-weight: 800;
		text-wrap: balance;
	}

	.home-hero-actions {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-md);
		margin-top: var(--space-xl);
	}

	/* ===== Shared Section ===== */
	.home-section {
		padding: 100px 0;
		background: var(--bg);
	}

	.home-section-alt {
		background: var(--panel-2);
	}

	.section-title {
		text-align: center;
		max-width: 720px;
		margin: 16px auto 14px;
		font-weight: 800;
		text-wrap: balance;
	}

	.section-title strong {
		color: var(--accent);
	}

	.section-copy {
		max-width: 600px;
		margin: 0 auto 48px;
		color: var(--muted);
		font-size: 15px;
		line-height: 1.7;
		letter-spacing: 0.02em;
		text-align: center;
	}

	/* ===== Services Grid ===== */
	.services-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: var(--space-lg);
	}

	.service-card {
		padding: var(--space-xl) var(--space-lg);
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: var(--panel);
		transition: border-color var(--transition-base), transform var(--transition-base), box-shadow var(--transition-base);
		scroll-margin-top: 96px;
	}

	.service-card:hover {
		border-color: var(--accent);
		transform: translateY(-3px);
		box-shadow: var(--shadow-card);
	}

	.service-card-icon {
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: var(--space-base);
		border-radius: 10px;
		background: var(--accent-soft);
		color: var(--accent);
	}

	.service-card-icon svg {
		width: 22px;
		height: 22px;
	}

	.service-card h3 {
		margin: 0 0 var(--space-xs);
		font-size: 1.1rem;
		font-weight: 700;
		color: var(--text);
	}

	.service-card p {
		margin: 0;
		color: var(--muted);
		font-size: 13.5px;
		line-height: 1.6;
		letter-spacing: 0.01em;
	}

	/* ===== Consultoria ===== */
	.consultoria-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-xl);
		align-items: center;
		margin-top: var(--space-xl);
	}

	.consultoria-content p {
		color: var(--muted);
		font-size: 15px;
		line-height: 1.72;
		margin: 0 0 var(--space-lg);
	}

	.consultoria-list {
		display: grid;
		gap: var(--space-sm);
		margin: 0 0 var(--space-lg);
		padding: 0;
		list-style: none;
	}

	.consultoria-list li {
		position: relative;
		padding-left: 22px;
		color: var(--text);
		font-size: 14px;
		line-height: 1.6;
	}

	.consultoria-list li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.65em;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--accent);
	}

	.consultoria-stats {
		display: grid;
		gap: var(--space-base);
	}

	.stat-card {
		display: grid;
		gap: 4px;
		padding: var(--space-lg) var(--space-base);
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: var(--panel);
		text-align: center;
	}

	.stat-number {
		font-family: var(--font-display);
		font-size: 2.8rem;
		font-weight: 800;
		color: var(--accent);
		line-height: 1;
	}

	.stat-label {
		color: var(--muted);
		font-size: 13px;
		font-weight: 600;
		letter-spacing: 0.04em;
	}

	/* ===== Contato ===== */
	.contact-grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: var(--space-lg);
		margin-top: var(--space-xl);
	}

	.contact-card {
		padding: var(--space-lg);
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: var(--panel);
		text-align: center;
		transition: border-color var(--transition-fast), transform var(--transition-fast);
	}

	.contact-card:hover {
		border-color: var(--accent);
		transform: translateY(-3px);
	}

	.contact-card-icon {
		width: 44px;
		height: 44px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto var(--space-md);
		border-radius: 12px;
		background: var(--accent-soft);
		color: var(--accent);
	}

	.contact-card-icon svg {
		width: 22px;
		height: 22px;
	}

	.contact-card h3 {
		margin: 0 0 var(--space-xs);
		font-size: 0.95rem;
		font-weight: 700;
		color: var(--text);
	}

	.contact-card a,
	.contact-card p {
		margin: 0;
		color: var(--muted-2);
		font-size: 13.5px;
	}

	.contact-card a:hover {
		color: var(--accent);
	}

	/* ===== Responsivo ===== */
	@media (max-width: 920px) {
		.home-hero {
			min-height: 520px;
			padding-top: 120px;
		}

		.services-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.consultoria-grid {
			grid-template-columns: 1fr;
		}

		.contact-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 720px) {
		.home-section {
			padding: 72px 0;
		}

		.home-hero {
			min-height: 440px;
			padding: 110px 0 60px;
		}

		.home-hero-actions {
			flex-direction: column;
			gap: var(--space-sm);
		}
	}

	@media (max-width: 560px) {
		.services-grid,
		.contact-grid {
			grid-template-columns: 1fr;
		}

		.home-hero h1 {
			font-size: clamp(1.8rem, 10vw, 2.8rem);
		}

		.home-hero-actions {
			flex-direction: column;
			width: 100%;
		}

		.home-hero-actions :global(.btn) {
			width: 100%;
		}
	}
</style>
