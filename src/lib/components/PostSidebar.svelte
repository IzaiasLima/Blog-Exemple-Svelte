<script lang="ts">
	import Card from "./Card.svelte";
	import Button from "./Button.svelte";

	interface Props {
		toc: string;
	}

	let { toc }: Props = $props();
</script>

<aside class="post-sidebar" aria-label="Navegação do artigo">
	<Card padding="xs" border="light" class="sidebar-toc">
		<p class="card-meta-title">Índice</p>
		<nav>
			{@html toc}
		</nav>
	</Card>
	<Card padding="xs" variant="accent" class="sidebar-cta">
		<span class="cta-label">Próximo passo</span>
		<h2>Vamos conversar sobre seu projeto?</h2>
		<p>
			Solicite um orçamento ou tire dúvidas sobre nossos serviços de
			proteção contra incêndio.
		</p>
		<Button href="/contato" variant="primary" size="small"
			>Fale conosco</Button
		>
	</Card>
</aside>

<style>
	.post-sidebar {
		position: sticky;
		top: 104px;
		display: grid;
		gap: var(--space-md);
	}

	/* ===== TOC Card Overrides ===== */
	:global(.sidebar-toc) {
		box-shadow: none;
		transition: none;
	}

	:global(.sidebar-toc)::before {
		display: none;
	}

	:global(.sidebar-toc):hover {
		border-color: var(--line);
		box-shadow: none;
		transform: none;
	}

	:global(.sidebar-toc nav) {
		display: grid;
		gap: 2px;
	}

	:global(.sidebar-toc ul) {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	:global(.sidebar-toc a) {
		display: block;
		padding: 9px 0;
		border-bottom: 1px solid var(--line-light);
		color: var(--muted);
		font-size: 12px;
		font-weight: 700;
		line-height: 1.35;
		letter-spacing: 0.04em;
		transition:
			color var(--transition-fast),
			padding var(--transition-fast);
	}

	:global(.sidebar-toc a:last-child) {
		border-bottom: 0;
	}

	:global(.sidebar-toc a:hover),
	:global(.sidebar-toc a:focus-visible) {
		color: var(--accent-dark);
		padding-left: 6px;
		outline: none;
	}

	/* ===== CTA Card Overrides ===== */
	:global(.sidebar-cta) {
		border-color: rgba(var(--accent-rgb), 0.3);
		box-shadow: none;
		transition: none;
	}

	:global(.sidebar-cta)::before {
		display: none;
	}

	:global(.sidebar-cta):hover {
		border-color: rgba(var(--accent-rgb), 0.3);
		box-shadow: none;
		transform: none;
	}

	:global(.sidebar-cta .cta-label) {
		display: inline-flex;
		width: fit-content;
		align-items: center;
		justify-content: center;
		min-height: 24px;
		padding: 6px var(--space-sm);
		border-radius: 999px;
		background: var(--accent);
		color: var(--white);
		font-size: var(--text-2xs);
		font-weight: 800;
		line-height: 1;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	:global(.sidebar-cta h2) {
		margin: 0;
		color: var(--text);
		font-size: 22px;
		line-height: 1;
		letter-spacing: 0.01em;
		text-transform: uppercase;
		font-weight: 800;
	}

	:global(.sidebar-cta p) {
		margin: 0;
		color: var(--muted);
		font-size: 12.5px;
		line-height: 1.58;
		letter-spacing: 0.02em;
	}

	:global(.sidebar-cta .btn) {
		width: fit-content;
		margin-top: 2px;
	}

	/* ===== Responsive ===== */
	@media (max-width: 920px) {
		.post-sidebar {
			position: static;
		}

		:global(.sidebar-toc nav) {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			column-gap: var(--space-base);
		}

		:global(.sidebar-toc a) {
			display: inline-block;
		}
	}
</style>
