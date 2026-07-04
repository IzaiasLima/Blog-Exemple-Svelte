<script lang="ts">
	import Button from './Button.svelte';

	interface Props {
		toc: string;
	}

	let { toc }: Props = $props();
</script>

<aside class="post-sidebar" aria-label="Navegação do artigo">
	<div class="post-sidebar-card">
		<p>Índice</p>
		<nav>
			{@html toc}
		</nav>
	</div>
	<div class="post-sidebar-cta">
		<span>Próximo passo</span>
		<h2>Quer entender se a Blacklist faz sentido para o seu SaaS?</h2>
		<p>A conversa começa pelo contexto. Depois vem escopo, prazo e critério.</p>
		<Button href="https://theblacklist.digital/contato/" variant="primary" size="small">Fale conosco</Button>
	</div>
</aside>

<style>
	.post-sidebar {
		position: sticky;
		top: 104px;
		display: grid;
		gap: var(--space-md);
	}

	.post-sidebar-card {
		padding: var(--space-base);
		border: 1px solid var(--line);
		border-radius: 8px;
		background: rgba(255, 255, 255, 0.025);
	}

	.post-sidebar-card p {
		margin: 0 0 var(--space-md);
		color: var(--accent);
		font-size: var(--text-xs);
		font-weight: 700;
		letter-spacing: 0.14em;
		text-transform: uppercase;
	}

	.post-sidebar-card nav {
		display: grid;
		gap: 2px;
	}

	.post-sidebar-card nav :global(ul) {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.post-sidebar-card :global(a) {
		display: block;
		padding: 9px 0;
		border-bottom: 1px solid var(--line-light);
		color: var(--muted-2);
		font-size: 12px;
		font-weight: 700;
		line-height: 1.35;
		letter-spacing: 0.04em;
		transition: color var(--transition-fast), padding var(--transition-fast);
	}

	.post-sidebar-card :global(a:last-child) {
		border-bottom: 0;
	}

	.post-sidebar-card :global(a:hover),
	.post-sidebar-card :global(a:focus-visible) {
		color: #fff;
		padding-left: 6px;
		outline: none;
	}

	.post-sidebar-cta {
		display: grid;
		gap: 12px;
		padding: var(--space-base);
		border: 1px solid rgba(var(--accent-rgb), 0.34);
		border-radius: var(--radius);
		background:
			linear-gradient(145deg, rgba(var(--accent-rgb), 0.14), rgba(255, 255, 255, 0.025)),
			rgba(255, 255, 255, 0.02);
	}

	.post-sidebar-cta span {
		display: inline-flex;
		width: fit-content;
		align-items: center;
		justify-content: center;
		min-height: 24px;
		padding: 6px var(--space-sm);
		border-radius: 999px;
		background: rgba(var(--accent-rgb), 0.16);
		color: var(--white);
		font-size: var(--text-2xs);
		font-weight: 800;
		line-height: 1;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.post-sidebar-cta h2 {
		margin: 0;
		color: #fff;
		font-size: 22px;
		line-height: 1;
		letter-spacing: 0.01em;
		text-transform: uppercase;
	}

	.post-sidebar-cta p {
		margin: 0;
		color: var(--muted-2);
		font-size: 12.5px;
		line-height: 1.58;
		letter-spacing: 0.02em;
	}

	.post-sidebar-cta :global(.btn) {
		width: fit-content;
		margin-top: 2px;
	}

	@media (max-width: 920px) {
		.post-sidebar {
			position: static;
		}

		.post-sidebar-card nav :global(a) {
			display: inline-block;
		}
	}
</style>
