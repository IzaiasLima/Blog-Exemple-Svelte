<script lang="ts">
	import Button from './Button.svelte';
	import { reveal } from '$lib/actions/reveal';
</script>

<footer class="site-footer">
	<div class="container footer-grid">
		<div class="footer-brand" use:reveal>
			<p class="availability"><span></span> Disponível para novos projetos</p>
			<a class="footer-logo-link" href="https://theblacklist.digital/" aria-label="Voltar para a home">
				<img src="/assets/logo-footer-figma.svg" alt="the blacklist" loading="lazy" />
			</a>
			<p>Execução direta. Resultado com critério.</p>
		</div>
		<div use:reveal>
			<h2>Páginas</h2>
			<a href="https://theblacklist.digital/">Home</a>
			<a href="https://theblacklist.digital/landing-page-para-saas/">Landing page para SaaS</a>
			<a href="https://theblacklist.digital/trafego-pago-para-saas/">Tráfego pago para SaaS</a>
			<a href="https://theblacklist.digital/design-para-saas/">Design para SaaS</a>
			<a href="https://theblacklist.digital/seo-para-saas/">SEO para SaaS</a>
			<a href="https://theblacklist.digital/social-media-para-saas/">Social media para SaaS</a>
			<a href="https://theblacklist.digital/blog/">Blog</a>
			<a href="https://theblacklist.digital/sobre/">Sobre</a>
		</div>
		<div use:reveal>
			<h2>Contato</h2>
			<a href="mailto:equipe@theblacklist.digital">equipe@theblacklist.digital</a>
			<a href="https://www.instagram.com/theblacklist.digital/" target="_blank" rel="noopener noreferrer">Instagram</a>
			<a href="https://www.linkedin.com/company/theblacklist-digital/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
			<Button href="https://theblacklist.digital/contato/" variant="primary" size="small">Fale conosco</Button>
		</div>
		<div use:reveal>
			<h2>Políticas</h2>
			<a href="https://theblacklist.digital/politica-de-privacidade/">Política de privacidade</a>
		</div>
	</div>
	<div class="container footer-bottom" use:reveal>
		<p>© 2026 the blacklist. Todos os direitos reservados.</p>
	</div>
</footer>

<style>
	.site-footer {
		border-top: 1px solid var(--line);
		background: #050506;
		padding: 48px 0 28px;
	}

	.footer-grid {
		display: grid;
		grid-template-columns: 1.4fr 0.9fr 1fr 0.8fr;
		gap: 48px;
	}

	.footer-logo-link {
		display: inline-block;
		margin: 34px 0 18px;
		max-width: 100%;
	}

	.footer-logo-link img {
		width: 475px;
		height: 77.334px;
		aspect-ratio: 475 / 77.334;
		display: block;
		object-fit: contain;
		max-width: 100%;
	}

	.footer-brand p,
	.site-footer a,
	.footer-bottom p {
		color: var(--muted);
		font-size: 13px;
		letter-spacing: 0.08em;
	}

	.site-footer h2 {
		margin: 0 0 14px;
		color: var(--accent);
		font-size: 14px;
		letter-spacing: 0.14em;
		text-transform: uppercase;
	}

	.site-footer a {
		display: block;
		margin: 0 0 9px;
		font-weight: 700;
	}

	.availability {
		display: inline-flex;
		align-items: center;
		gap: 7px;
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 999px;
		padding: 6px 11px;
		color: #d4d4d8;
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 1.166px;
	}

	.availability span {
		width: 6px;
		height: 6px;
		border-radius: 3px;
		background: #1eef13;
		box-shadow: none;
	}

	.footer-bottom {
		display: flex;
		justify-content: flex-end;
		margin-top: 28px;
	}

	.footer-bottom p {
		margin: 0;
	}

	@media (max-width: 920px) {
		.footer-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 560px) {
		.footer-bottom {
			justify-content: flex-start;
		}
	}
</style>
