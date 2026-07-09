<script lang="ts">
	import { navRoutes } from '$lib/data/routes';

	let mobileOpen = $state(false);

	function toggleMobile() {
		mobileOpen = !mobileOpen;
		document.body.classList.toggle('menu-open', mobileOpen);
	}
</script>

<header class="site-header" data-header="">
	<div class="container nav-shell">
		<a class="brand" href="/" aria-label="VTAQUINO — Engenharia de Proteção Contra Incêndio">
			<img src="/assets/logo-vtaquino-header.png" alt="VTAQUINO" />
		</a>

		<nav class="desktop-nav" aria-label="Navegação principal">
			{#each navRoutes as route}
				<a class="nav-link" href={route.href}>{route.label}</a>
			{/each}
		</nav>

		<button
			class="mobile-toggle"
			type="button"
			aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
			aria-expanded={mobileOpen}
			onclick={toggleMobile}
		>
			<span></span>
			<span></span>
		</button>
	</div>

	<div class="mobile-menu" class:is-open={mobileOpen} data-mobile-menu="">
		{#each navRoutes as route}
			<a href={route.href}>{route.label}</a>
		{/each}
	</div>
</header>

<style>
	.site-header {
		position: fixed;
		inset: 0 0 auto;
		z-index: 50;
		border-bottom: 1px solid var(--line-mid);
		background: rgba(8, 8, 10, 0.03);
		backdrop-filter: blur(18px);
		-webkit-backdrop-filter: blur(18px);
		transform: translateY(0);
		transition: transform 240ms ease;
		will-change: transform;
	}

	.nav-shell {
		width: 100%;
		max-width: 1920px;
		min-height: 72px;
		margin: 0 auto;
		padding: 0 24px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-lg);
	}

	.brand img {
		width: 115px;
		object-fit: contain;
	}

	.desktop-nav {
		display: flex;
		align-items: center;
		gap: var(--space-xs);
		margin-left: auto;
	}

	.nav-link {
		color: var(--muted);
		font-size: var(--text-base);
		font-weight: 500;
		padding: var(--space-xs) var(--space-sm);
		transition: color var(--transition-fast);
	}

	.nav-link:hover,
	.nav-link:focus-visible {
		color: var(--text);
	}

	.mobile-menu a::before {
		content: '';
		width: 5px;
		height: 5px;
		flex: 0 0 auto;
		border-radius: 50%;
		background: var(--accent);
	}

	.mobile-toggle {
		display: none;
		width: 40px;
		height: 40px;
		align-items: center;
		justify-content: center;
		gap: 5px;
		flex-direction: column;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: transparent;
		color: var(--text);
		cursor: pointer;
	}

	.mobile-toggle span {
		width: 16px;
		height: 1px;
		background: currentColor;
	}

	.mobile-menu {
		display: none;
		width: 100%;
		max-width: 1920px;
		margin: 0 auto var(--space-base);
		padding: 12px 16px;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: var(--bg);
		box-shadow: var(--shadow-menu);
		box-sizing: border-box;
	}

	.mobile-menu.is-open {
		display: grid;
	}

	.mobile-menu a {
		display: flex;
		align-items: center;
		gap: 9px;
		padding: 12px var(--space-sm);
		color: var(--muted-2);
		border-bottom: 1px solid var(--line);
		font-weight: 600;
		transition: background var(--transition-fast), color var(--transition-fast);
	}

	.mobile-menu a:hover,
	.mobile-menu a:focus-visible {
		background: var(--card);
		color: var(--text);
	}

	.mobile-menu a:last-child {
		border-bottom: 0;
	}

	@media (max-width: 920px) {
		.desktop-nav {
			display: none;
		}

		.mobile-toggle {
			display: flex;
		}
	}

	@media (max-width: 560px) {
		.nav-shell {
			min-height: 64px;
		}

		.brand img {
			width: 141px;
			height: 22.956px;
			max-width: 42vw;
		}
	}
</style>
