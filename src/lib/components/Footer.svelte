<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
</script>

<footer class="site-footer">
	<div class="container footer-grid">
		<div class="footer-col-brand">
			<div class="footer-brand" use:reveal>
				<img src="/assets/logo-vtaquino-header.png" alt="the blacklist" loading="lazy" />
			</div>
			<p class="availability"><span></span> Disponível para novos projetos</p>
			<p>Execução direta. Resultado com critério.</p>
			<div class="footer-social">
				<a href="mailto:equipe@theblacklist.digital" aria-label="Enviar e-mail">
					<svg viewBox="0 0 24 24" aria-hidden="true">
						<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
					</svg>
				</a>
				<a href="https://www.instagram.com/theblacklist.digital/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
					<svg viewBox="0 0 24 24" aria-hidden="true">
						<path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 2 .3 2.7.5.7.3 1.3.6 1.9 1.2.6.6.9 1.2 1.2 1.9.2.7.4 1.6.5 2.7.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 2-.5 2.7-.3.7-.6 1.3-1.2 1.9-.6.6-1.2.9-1.9 1.2-.7.2-1.6.4-2.7.5-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-2-.3-2.7-.5-.7-.3-1.3-.6-1.9-1.2-.6-.6-.9-1.2-1.2-1.9-.2-.7-.4-1.6-.5-2.7-.1-1.3-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.3-2 .5-2.7.3-.7.6-1.3 1.2-1.9.6-.6 1.2-.9 1.9-1.2.7-.2 1.6-.4 2.7-.5C8.4 2.2 8.8 2.2 12 2.2zM12 7c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.3c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3 3.3 1.5 3.3 3.3-1.5 3.3-3.3 3.3zm5.2-8.5c-.7 0-1.2.5-1.2 1.2s.5 1.2 1.2 1.2 1.2-.5 1.2-1.2-.5-1.2-1.2-1.2z"/>
					</svg>
				</a>
				<a href="https://www.linkedin.com/company/theblacklist-digital/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
					<svg viewBox="0 0 24 24" aria-hidden="true">
						<path d="M5.3 7.7H1.4V22h3.9V7.7ZM3.3 1C2 1 1 2 1 3.2s1 2.2 2.3 2.2 2.3-1 2.3-2.2S4.6 1 3.3 1Zm7.9 6.7H7.5V22h3.9v-7.1c0-1.9.4-3.7 2.7-3.7 2.2 0 2.2 2.1 2.2 3.8v7h3.9v-7.9c0-3.9-.8-6.8-5.3-6.8-2.1 0-3.5 1.1-4.1 2.2h-.1l.1-1.8Z"/>
					</svg>
				</a>
			</div>
		</div>
		<div use:reveal>
			<h3>Páginas</h3>
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
			<h3>Contato</h3>
			<a href="mailto:equipe@theblacklist.digital">equipe@theblacklist.digital</a>
			<a href="https://www.instagram.com/theblacklist.digital/" target="_blank" rel="noopener noreferrer">Instagram</a>
			<a href="https://www.linkedin.com/company/theblacklist-digital/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
			<div class="footer-cta">
				<a href="https://theblacklist.digital/contato/" class="btn btn-primary btn-small">Fale conosco</a>
			</div>
		</div>
		<div use:reveal>
			<h3>Políticas</h3>
			<a href="https://theblacklist.digital/politica-de-privacidade/">Política de privacidade</a>
			<a href="https://theblacklist.digital/termos-de-uso/">Termos de uso</a>
		</div>
	</div>
	<div class="container footer-bottom" use:reveal>
		<p>© 2026 the blacklist. Todos os direitos reservados.</p>
	</div>
</footer>

<style>
	.site-footer {
		width: 100vw;
		background: var(--ink);
		color: #c7cace;
		padding: 48px 0;
	}

	.footer-grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 48px;
	}

	.footer-grid h3 {
		margin-bottom: 12px;
		font-size: 0.9rem;
		color: #f1efec;
		font-weight: 700;
		font-family: var(--font-body);
	}

	.footer-grid p,
	.footer-grid a {
		display: block;
		margin: 7px 0;
		color: #b6bac0;
		font-size: 0.86rem;
	}

	.footer-grid a:hover {
		color: #ff9b9b;
	}

	.footer-col-brand {
		max-width: 50%;
	}

	.footer-brand {
		display: inline-flex;
		align-items: center;
		margin-bottom: 6px;
		padding: 10px 16px;
		border-radius: var(--radius);
		background: var(--cream);
	}

	.footer-brand img {
		width: auto;
		height: 38px;
	}

	.availability {
		display: inline-flex;
		align-items: center;
		gap: 7px;
		margin: 12px 0 6px;
	}

	.availability span {
		width: 6px;
		height: 6px;
		border-radius: 3px;
		background: #1eef13;
	}

	.footer-social {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-top: 14px;
	}

	.footer-social a {
		width: 36px;
		height: 36px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border: 1px solid rgba(255, 255, 255, 0.15);
		border-radius: 999px;
		color: #b6bac0;
		transition: border-color var(--transition-fast), color var(--transition-fast), background var(--transition-fast);
	}

	.footer-social a:hover {
		border-color: #ff9b9b;
		color: #ff9b9b;
		background: rgba(255, 155, 155, 0.08);
	}

	.footer-social svg {
		width: 16px;
		height: 16px;
		fill: currentColor;
		display: block;
	}

	.footer-cta {
		margin-top: 10px;
	}

	.footer-cta :global(.btn) {
		min-height: 38px;
		padding: 10px 17px;
		font-size: var(--text-sm);
		font-weight: 700;
	}

	.footer-bottom {
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		color: #8b8f94;
		font-size: 0.8rem;
		margin-top: 32px;
		padding-top: 18px;
	}

	.footer-bottom p {
		margin: 0;
	}

	@media (max-width: 920px) {
		.footer-grid {
			grid-template-columns: 1fr 1fr;
			text-align: center;
		}

		.footer-brand {
			justify-content: center;
		}

		.footer-col-brand {
			max-width: 100%;
			grid-column: 1 / -1;
			text-align: center;
		}

		.footer-social {
			justify-content: center;
		}
	}

	@media (max-width: 560px) {
		.footer-grid {
			grid-template-columns: 1fr;
		}

		.footer-bottom {
			text-align: center;
		}

		.footer-social a {
			width: 40px;
			height: 40px;
		}

		.footer-social svg {
			width: 18px;
			height: 18px;
		}
	}
</style>
