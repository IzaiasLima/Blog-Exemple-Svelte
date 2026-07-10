<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import Button from "$lib/components/Button.svelte";
</script>

<svelte:head>
	<title>Mensagem enviada — VTAQUINO</title>
	<meta
		name="description"
		content="Sua mensagem foi enviada com sucesso. Em breve entraremos em contato."
	/>
	<meta property="og:title" content="Mensagem enviada — VTAQUINO" />
	<meta
		property="og:description"
		content="Sua mensagem foi enviada com sucesso."
	/>
	<meta property="og:type" content="website" />
	<meta name="robots" content="noindex" />
</svelte:head>

<Header />

<section class="page-hero">
	<div class="container page-hero-inner">
		<div class="success-icon" aria-hidden="true">
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
			>
				<path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
				<polyline points="22 4 12 14.01 9 11.01" />
			</svg>
		</div>
		<!-- <p class="pill"><span></span> Enviado com sucesso</p> -->
		<h1>Mensagem <strong>enviada</strong></h1>
		<p class="page-hero-copy">
			Recebemos sua mensagem e entraremos em contato em breve. Agradecemos
			pelo interesse nos serviços da VTAQUINO.
		</p>
		<div class="hero-actions">
			<Button href="/">Voltar para o início</Button>
		</div>
	</div>
</section>

<Footer />

<style>
	.page-hero {
		min-height: 520px;
		padding: 140px 0 80px;
		display: flex;
		align-items: center;
	}

	.success-icon {
		width: 64px;
		height: 64px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		background: var(--accent-soft);
		color: var(--accent);
		margin-bottom: var(--space-base);
	}

	.success-icon svg {
		width: 32px;
		height: 32px;
	}

	.page-hero h1 {
		max-width: 600px;
		margin: 16px auto 14px;
	}

	.page-hero-copy {
		max-width: 480px;
		margin: 0 0 var(--space-xl);
	}

	.hero-actions {
		display: flex;
		gap: var(--space-md);
	}

	@media (max-width: 720px) {
		.page-hero {
			padding: 110px 0 60px;
			min-height: 440px;
		}
	}
</style>
