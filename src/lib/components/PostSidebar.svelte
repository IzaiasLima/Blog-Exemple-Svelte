<script lang="ts">
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
		<a class="btn btn-primary btn-small" href="https://theblacklist.digital/contato/">Fale conosco</a>
	</div>
</aside>

<style>
	.post-sidebar {
		position: sticky;
		top: 104px;
		display: grid;
		gap: 14px;
	}

	.post-sidebar-card {
		padding: 18px;
		border: 1px solid var(--line);
		border-radius: 8px;
		background: rgba(255, 255, 255, 0.025);
	}

	.post-sidebar-card p {
		margin: 0 0 14px;
		color: var(--accent);
		font-size: 10px;
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
		border-bottom: 1px solid rgba(255, 255, 255, 0.06);
		color: var(--muted-2);
		font-size: 12px;
		font-weight: 700;
		line-height: 1.35;
		letter-spacing: 0.04em;
		transition: color 160ms ease, padding 160ms ease;
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
		padding: 18px;
		border: 1px solid rgba(239, 19, 56, 0.34);
		border-radius: 8px;
		background:
			linear-gradient(145deg, rgba(239, 19, 56, 0.14), rgba(255, 255, 255, 0.025)),
			rgba(255, 255, 255, 0.02);
	}

	.post-sidebar-cta span {
		display: inline-flex;
		width: fit-content;
		align-items: center;
		justify-content: center;
		min-height: 24px;
		padding: 6px 10px;
		border-radius: 999px;
		background: rgba(239, 19, 56, 0.16);
		color: #fff;
		font-size: 9px;
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
