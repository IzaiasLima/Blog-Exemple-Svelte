<script lang="ts">
	interface Props {
		title: string;
		emphasis: string;
		hero: string;
		category: string;
		date: string;
		reading_time: string;
	}

	let { title, emphasis, hero, category, date, reading_time }: Props = $props();
</script>

<section class="post-hero hero-section" aria-labelledby="post-title">
	<div class="hero-fx" aria-hidden="true"></div>
	<div class="container hero-inner">
		<p class="pill"><span></span>Blog</p>
		<div class="post-meta" aria-label="Dados do artigo">
			<span>{category}</span>
			<span>{date}</span>
			<span>{reading_time} de leitura</span>
		</div>
		<h1 id="post-title"><span class="hero-title-gradient">{title}</span> <strong class="hero-strong">{emphasis}</strong></h1>
		<p class="hero-copy" style="max-width: 690px;">{hero}</p>
	</div>
</section>

<style>
	.post-hero {
		min-height: 420px;
		padding: 120px 0 64px;
		background:
			radial-gradient(circle at 85% 10%, rgba(var(--accent-rgb), 0.08), transparent 28rem),
			var(--panel-2);
	}

	.post-meta {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: var(--space-sm);
		margin-top: var(--space-lg);
	}

	.post-meta span {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-height: 28px;
		padding: var(--space-xs) 12px;
		border: 1px solid var(--line);
		border-radius: 999px;
		color: var(--muted);
		font-size: var(--text-xs);
		font-weight: 700;
		line-height: 1;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.post-meta span:first-child {
		border-color: rgba(var(--accent-rgb), 0.50);
		background: rgba(var(--accent-rgb), 0.08);
		color: var(--accent-dark);
	}

	.post-hero h1 {
		max-width: 1200px;
		margin: 42px auto 28px;
		font-weight: 800;
		text-wrap: balance;
	}

	.post-hero h1 span {
		display: block;
		font-family: inherit;
		font-weight: 800;
	}

	.post-hero h1 strong {
		font-family: inherit;
		font-weight: 800;
	}

	@media (max-width: 920px) {
		.post-hero {
			min-height: 380px;
			padding-top: 110px;
		}
	}

	@media (max-width: 720px) {
		.post-hero {
			min-height: 340px;
			padding: 100px 0 50px;
		}
	}

	@media (max-width: 560px) {
		.post-hero {
			min-height: 300px;
			padding: 90px 0 40px;
		}
	}
</style>
