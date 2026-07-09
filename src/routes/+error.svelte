<script lang="ts">
	import { page } from '$app/state';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Button from '$lib/components/Button.svelte';

	let message = $derived(
		page.status === 404
			? 'Página não encontrada'
			: 'Ocorreu um erro inesperado'
	);
</script>

<svelte:head>
	<title>{page.status} — VTAQUINO</title>
	<meta name="description" content="{message}" />
	<meta name="robots" content="noindex" />
</svelte:head>

<Header />

<section class="error-section">
	<div class="container error-inner">
		<span class="error-code">{page.status}</span>
		<h1 class="error-title">{message}</h1>
		<p class="error-copy">
			{page.status === 404
				? 'A página que você procura não existe ou foi movida. Verifique o endereço ou volte para a página inicial.'
				: 'Desculpe, algo deu errado. Tente novamente ou volte para a página inicial.'}
		</p>
		<Button href="/">Voltar para o início</Button>
	</div>
</section>

<Footer />

<style>
	.error-section {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 140px 0 80px;
		background:
			radial-gradient(circle at 50% 40%, rgba(var(--accent-rgb), 0.06), transparent 28rem),
			var(--panel-2);
	}

	.error-inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.error-code {
		font-family: var(--font-display);
		font-size: clamp(6rem, 18vw, 12rem);
		font-weight: 800;
		line-height: 1;
		background: var(--accent-gradient);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		letter-spacing: -0.04em;
		margin-bottom: var(--space-base);
	}

	.error-title {
		font-size: clamp(1.4rem, 3vw, 2rem);
		font-weight: 700;
		color: var(--text);
		margin-bottom: var(--space-md);
	}

	.error-copy {
		max-width: 480px;
		color: var(--muted);
		font-size: 15px;
		line-height: 1.7;
		margin: 0 0 var(--space-xl);
	}

	@media (max-width: 920px) {
		.error-section {
			padding: 120px 0 64px;
		}
	}

	@media (max-width: 720px) {
		.error-section {
			padding: 110px 0 48px;
		}
	}

	@media (max-width: 560px) {
		.error-section {
			padding: 100px 0 40px;
		}
	}
</style>
