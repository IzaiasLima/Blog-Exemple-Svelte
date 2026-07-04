<script lang="ts">
	import Button from './Button.svelte';

	let mobileOpen = $state(false);
	let servicesOpen = $state(false);

	function toggleMobile() {
		mobileOpen = !mobileOpen;
		document.body.classList.toggle('menu-open', mobileOpen);
	}
</script>

<header class="site-header" data-header="">
	<div class="container nav-shell">
		<a class="brand" href="https://theblacklist.digital/" aria-label="a Blacklist">
			<img src="/assets/logo-nav-figma.svg" alt="the blacklist" />
		</a>

		<nav class="desktop-nav" aria-label="Navegação principal">
			<div class="nav-dropdown">
				<button
					class="nav-link nav-button"
					type="button"
					aria-expanded={servicesOpen}
					onclick={() => (servicesOpen = !servicesOpen)}
				>
					Serviços
					<img
						class="nav-chevron"
						src="/assets/nav-chevron-figma.svg"
						alt=""
						aria-hidden="true"
						loading="lazy"
					/>
				</button>
				<div class="services-menu" class:is-open={servicesOpen} data-services-menu="">
					<a href="https://theblacklist.digital/landing-page-para-saas/">Landing pages</a>
					<a href="https://theblacklist.digital/trafego-pago-para-saas/">Tráfego pago</a>
					<a href="https://theblacklist.digital/design-para-saas/">Design estratégico</a>
					<a href="https://theblacklist.digital/seo-para-saas/">SEO</a>
					<a href="https://theblacklist.digital/social-media-para-saas/">Social media</a>
				</div>
			</div>
			<a class="nav-link" href="https://theblacklist.digital/sobre/">Sobre</a>
			<a class="nav-link is-active" href="https://theblacklist.digital/blog/">Blog</a>
			<a class="nav-link" href="https://theblacklist.digital/contato/">Contato</a>
		</nav>

		<div class="nav-actions">
			<Button href="https://theblacklist.digital/contato/" variant="primary" size="small">Fale conosco</Button>
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
	</div>

	<div class="mobile-menu" class:is-open={mobileOpen} data-mobile-menu="">
		<a href="https://theblacklist.digital/landing-page-para-saas/">Landing pages</a>
		<a href="https://theblacklist.digital/trafego-pago-para-saas/">Tráfego pago</a>
		<a href="https://theblacklist.digital/design-para-saas/">Design estratégico</a>
		<a href="https://theblacklist.digital/seo-para-saas/">SEO</a>
		<a href="https://theblacklist.digital/social-media-para-saas/">Social media</a>
		<a href="https://theblacklist.digital/sobre/">Sobre</a>
		<a href="https://theblacklist.digital/blog/">Blog</a>
		<a href="https://theblacklist.digital/contato/">Contato</a>
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
		width: min(1116px, calc(100% - 32px));
		min-height: 72px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-lg);
	}

	.brand img {
		width: 141px;
		height: 22.956px;
		aspect-ratio: 141 / 22.956;
		object-fit: contain;
	}

	.desktop-nav,
	.nav-actions {
		display: flex;
		align-items: center;
		gap: var(--space-xs);
	}

	.nav-link {
		color: var(--muted);
		font-size: var(--text-sm);
		font-weight: 500;
		padding: var(--space-xs) var(--space-sm);
		transition: color var(--transition-fast);
	}

	.nav-link:hover,
	.nav-link:focus-visible {
		color: var(--text);
	}

	.nav-link.is-active {
		color: var(--text);
	}

	.nav-button {
		display: flex;
		align-items: center;
		gap: 5px;
		border: 0;
		background: transparent;
		cursor: pointer;
	}

	.nav-chevron {
		width: 12px;
		height: 12px;
		flex: 0 0 auto;
	}

	.nav-dropdown {
		position: relative;
	}

	.services-menu {
		position: absolute;
		top: calc(100% + 12px);
		left: 0;
		width: 250px;
		padding: var(--space-xs);
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: var(--bg);
		box-shadow: var(--shadow-menu);
		opacity: 0;
		visibility: hidden;
		transform: translateY(-4px);
		transition: opacity 180ms ease, transform 180ms ease, visibility 180ms ease;
		display: grid;
	}

	.services-menu.is-open,
	.nav-dropdown:hover .services-menu {
		opacity: 1;
		visibility: visible;
		transform: translateY(0);
	}

	.services-menu a {
		display: flex;
		align-items: center;
		gap: 9px;
		color: var(--muted-2);
		font-size: var(--text-sm);
		font-weight: 600;
		padding: var(--space-sm) 12px;
		border-radius: 6px;
		transition: background var(--transition-fast), color var(--transition-fast);
	}

	.services-menu a::before,
	.mobile-menu a::before {
		content: '';
		width: 5px;
		height: 5px;
		flex: 0 0 auto;
		border-radius: 50%;
		background: var(--accent);
	}

	.services-menu a:hover {
		background: var(--card);
		color: var(--text);
	}

	.site-header :global(.btn):hover {
		transform: none;
		filter: brightness(1.08);
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
		width: min(var(--page-width), var(--max));
		margin: 0 auto var(--space-base);
		padding: 12px;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: var(--bg);
		box-shadow: var(--shadow-menu);
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

		.nav-actions :global(.btn) {
			display: none;
		}
	}
</style>
