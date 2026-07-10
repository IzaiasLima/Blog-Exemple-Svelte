<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import Card from "$lib/components/Card.svelte";
	import Button from "$lib/components/Button.svelte";
</script>

<svelte:head>
	<title>VTAQUINO | Engenharia de Proteção Contra Incêndio</title>
	<meta
		name="description"
		content="VTAQUINO: projeto, execução e manutenção de sistemas de proteção e prevenção contra incêndio e pânico. Metodologia BIM, prazos e economicidade do início ao fim da obra."
	/>
	<meta
		property="og:title"
		content="VTAQUINO | Engenharia de Proteção Contra Incêndio"
	/>
	<meta
		property="og:description"
		content="VTAQUINO: projeto, execução e manutenção de sistemas de proteção e prevenção contra incêndio e pânico. Metodologia BIM, prazos e economicidade do início ao fim da obra."
	/>
	<meta property="og:url" content="https://vtaquino.eng.br/" />
	<meta
		property="og:image"
		content="https://vtaquino.eng.br/assets/og-image.jpg"
	/>
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Header />

<!-- ===== HERO / #inicio ===== -->
<section id="inicio" class="home-hero hero-section">
	<div class="hero-fx" aria-hidden="true"></div>
	<div class="container hero-inner">
		<h1 class="hero-title-gradient">
			Proteção contra incêndio e pânico <strong class="hero-strong"
				>do projeto à execução</strong
			>
		</h1>
		<p class="hero-copy" style="max-width: 600px;">
			Da concepção até a operação, o foco no cliente e na performance
			orienta cada etapa do projeto de proteção contra incêndio.
			Metodologia BIM, prazos e economicidade do início ao fim da obra.
		</p>
		<div class="home-hero-actions">
			<Button href="/contato">Solicitar orçamento</Button>
			<Button href="/servicos" variant="secondary">Nossos serviços</Button
			>
		</div>
	</div>
</section>

<!-- ===== CONTATO / #contato ===== -->
<section id="contato" class="home-section">
	<div class="container">
		<h2 class="section-title">
			Vamos conversar sobre <strong>seu projeto</strong>
		</h2>
		<p class="section-subtitle">
			Entre em contato conosco para solicitar um orçamento ou tirar
			dúvidas sobre nossos serviços.
		</p>
		<div class="contact-grid">
			<Card layout="centered" padding="md" iconSize="md" class="contact-card">
				{#snippet icon()}
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
					>
						<path
							d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
						/>
					</svg>
				{/snippet}
				<h3>Telefone</h3>
				<a href="tel:5561982496399">(61) 98249-6399</a>
			</Card>
			<Card layout="centered" padding="md" iconSize="md" class="contact-card">
				{#snippet icon()}
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
					>
						<path
							d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
						/>
						<polyline points="22,6 12,13 2,6" />
					</svg>
				{/snippet}
				<h3>E-mail</h3>
				<a href="mailto:contato@vtaquino.com.br"
					>contato@vtaquino.com.br</a
				>
			</Card>
			<Card layout="centered" padding="md" iconSize="md" class="contact-card">
				{#snippet icon()}
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
					>
						<path
							d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
						/>
						<circle cx="12" cy="10" r="3" />
					</svg>
				{/snippet}
				<h3>Localização</h3>
				<p>Brasília - DF</p>
			</Card>
			<Card layout="centered" padding="md" iconSize="md" class="contact-card">
				{#snippet icon()}
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
					>
						<path
							d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
						/>
					</svg>
				{/snippet}
				<h3>WhatsApp</h3>
				<a
					href="https://wa.me/5561982496399?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20da%20VTAQUINO%2C%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas."
					target="_blank"
					rel="noopener">Fale conosco</a
				>
			</Card>
		</div>
	</div>
</section>

<Footer />

<style>
	/* ===== Hero Section ===== */
	.home-hero {
		min-height: 640px;
		padding: 140px 0 80px;
		background: radial-gradient(
				circle at 85% 10%,
				rgba(var(--accent-rgb), 0.08),
				transparent 28rem
			),
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

	.home-section {
		padding: 100px 0;
		background: var(--bg);
	}

	/* ===== Contato ===== */
	.contact-grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: var(--space-lg);
		margin-top: var(--space-xl);
	}

	:global(.contact-card h3) {
		margin: 0 0 var(--space-xs);
		font-size: 0.95rem;
	}

	:global(.contact-card a),
	:global(.contact-card p) {
		margin: 0;
		color: var(--muted-2);
		font-size: 13.5px;
	}

	:global(.contact-card a:hover) {
		color: var(--accent);
	}

	/* ===== Responsivo ===== */
	@media (max-width: 920px) {
		.home-hero {
			min-height: 520px;
			padding-top: 120px;
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
