<script lang="ts">
	interface Props {
		slug: string;
		title: string;
		prev: string | null;
		next: string | null;
	}

	let { slug, title, prev, next }: Props = $props();

	let postUrl = $derived(`https://vtaquino.eng.br/blog/${slug}/`);
	let encodedUrl = $derived(encodeURIComponent(postUrl));
	let encodedTitle = $derived(encodeURIComponent(title));
</script>

<section class="post-share-nav" aria-label="Compartilhar e navegar entre posts">
	<div class="container post-share-nav-inner">
		<div class="post-share-row">
			<div class="post-share-links" aria-label="Compartilhar artigo">
				<span>Compartilhe:</span>
				<a
					href="https://www.facebook.com/sharer/sharer.php?u={encodedUrl}"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Compartilhar no Facebook"
				>
					<svg viewBox="0 0 24 24" aria-hidden="true">
						<path
							d="M14 8.2h2.6V4.3c-.5-.1-2-.2-3.8-.2-3.7 0-6.2 2.3-6.2 6.5v3.7H2.5v4.4h4.1V24h4.9v-5.3h4.1l.7-4.4h-4.8V11c0-1.3.4-2.8 2.5-2.8Z"
						/>
					</svg>
				</a>
				<a
					href="https://twitter.com/intent/tweet?url={encodedUrl}&text={encodedTitle}"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Compartilhar no X"
				>
					<svg viewBox="0 0 24 24" aria-hidden="true">
						<path
							d="M17.7 3h3.1l-6.8 7.7L22 21h-6.4l-5-6.4L4.9 21H1.8l7.2-8.2L1.4 3h6.5l4.5 5.8L17.7 3Zm-1.1 16.2h1.7L7 4.7H5.2l11.4 14.5Z"
						/>
					</svg>
				</a>
				<a
					href="https://www.linkedin.com/sharing/share-offsite/?url={encodedUrl}"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Compartilhar no LinkedIn"
				>
					<svg viewBox="0 0 24 24" aria-hidden="true">
						<path
							d="M5.3 7.7H1.4V22h3.9V7.7ZM3.3 1C2 1 1 2 1 3.2s1 2.2 2.3 2.2 2.3-1 2.3-2.2S4.6 1 3.3 1Zm7.9 6.7H7.5V22h3.9v-7.1c0-1.9.4-3.7 2.7-3.7 2.2 0 2.2 2.1 2.2 3.8v7h3.9v-7.9c0-3.9-.8-6.8-5.3-6.8-2.1 0-3.5 1.1-4.1 2.2h-.1l.1-1.8Z"
						/>
					</svg>
				</a>
			</div>
		</div>

		<div class="post-nav-row" aria-label="Navegação entre posts">
			{#if prev}
				<a class="post-nav-link" href="/blog/{prev}/">
					<span aria-hidden="true">‹‹</span>
					Anterior
				</a>
			{:else}
				<span class="post-nav-link is-disabled" aria-disabled="true">
					<span aria-hidden="true">‹‹</span>
					Anterior
				</span>
			{/if}
			{#if next}
				<a class="post-nav-link" href="/blog/{next}/">
					Próximo
					<span aria-hidden="true">››</span>
				</a>
			{:else}
				<span class="post-nav-link is-disabled" aria-disabled="true">
					Próximo
					<span aria-hidden="true">››</span>
				</span>
			{/if}
		</div>

		<div class="post-blog-row">
			<h2>Blog</h2>
			<a class="post-blog-button" href="/blog/">Ver todos os posts</a>
		</div>
	</div>
</section>

<style>
	.post-share-nav {
		padding: 0 0 80px;
		background: var(--bg);
	}

	.post-share-nav-inner {
		width: min(1100px, calc(100vw - 48px));
		margin: 0 auto;
	}

	.post-share-row {
		min-height: 58px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: var(--space-xl);
	}

	.post-share-links {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-base);
	}

	.post-share-links span {
		color: var(--accent);
		font-size: var(--text-sm);
		font-weight: 700;
		letter-spacing: 0.08em;
	}

	.post-share-links a {
		width: 24px;
		height: 24px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		color: var(--muted);
		transition: color var(--transition-fast), transform var(--transition-fast);
	}

	.post-share-links a:hover,
	.post-share-links a:focus-visible {
		color: var(--accent);
		transform: translateY(-2px);
		outline: none;
	}

	.post-share-links svg {
		width: 21px;
		height: 21px;
		display: block;
		fill: currentColor;
	}

	.post-nav-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-lg);
		margin-bottom: var(--space-xl);
	}

	.post-nav-link {
		display: inline-flex;
		align-items: center;
		gap: var(--space-sm);
		color: var(--text);
		font-size: var(--text-sm);
		font-weight: 800;
		line-height: 1;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		transition: color var(--transition-fast), transform var(--transition-fast);
	}

	a.post-nav-link:hover,
	a.post-nav-link:focus-visible {
		color: var(--accent);
		outline: none;
	}

	a.post-nav-link:first-child:hover,
	a.post-nav-link:first-child:focus-visible {
		transform: translateX(-4px);
	}

	a.post-nav-link:last-child:hover,
	a.post-nav-link:last-child:focus-visible {
		transform: translateX(4px);
	}

	.post-nav-link span {
		color: var(--muted);
		font-size: 22px;
		line-height: 0;
	}

	.post-nav-link.is-disabled {
		color: rgba(0, 0, 0, 0.30);
	}

	.post-nav-link.is-disabled span {
		color: rgba(0, 0, 0, 0.20);
	}

	.post-blog-row {
		display: flex;
		align-items: end;
		justify-content: space-between;
		gap: 28px;
		padding-bottom: var(--space-base);
		border-bottom: 1px solid rgba(var(--accent-rgb), 0.30);
	}

	.post-blog-row h2 {
		margin: 0;
		color: var(--text);
		/* font-size: clamp(38px, 4vw, 62px); */
		line-height: 0.95;
		text-transform: uppercase;
		font-weight: 800;
	}

	.post-blog-button {
		min-height: 42px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 11px var(--space-base);
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: var(--panel);
		color: var(--text);
		font-size: var(--text-sm);
		font-weight: 700;
		line-height: 1;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		transition: border-color var(--transition-fast), background var(--transition-fast), color var(--transition-fast);
	}

	.post-blog-button:hover,
	.post-blog-button:focus-visible {
		border-color: var(--accent);
		background: var(--accent-soft);
		color: var(--accent-dark);
		outline: none;
	}

	@media (max-width: 720px) {
		.post-share-nav {
			padding-bottom: 64px;
		}
		.post-share-row {
			flex-direction: column;
			margin-bottom: 36px;
		}
		.post-nav-row {
			margin-bottom: 36px;
		}
	}

	@media (max-width: 560px) {
		.post-share-nav-inner {
			width: min(var(--page-width), var(--max));
		}
		.post-share-links {
			flex-wrap: wrap;
			gap: 14px;
		}
		.post-share-links span {
			flex: 0 0 100%;
			text-align: center;
		}
		.post-nav-link {
			gap: 7px;
			font-size: 11px;
			letter-spacing: 0.06em;
		}
		.post-nav-link span {
			font-size: 18px;
		}
		.post-blog-row {
			align-items: flex-start;
			flex-direction: column;
			gap: 12px;
		}
	}
</style>
