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
	<div class="hero-bg-glow" aria-hidden="true"></div>
	<div class="post-hero-light" aria-hidden="true"></div>
	<div class="hero-fade" aria-hidden="true"></div>
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
		min-height: 930px;
		padding: 30px 0 138px;
		background: linear-gradient(180deg, rgba(var(--accent-rgb), 0.12), rgba(5, 5, 6, 0) 34%);
	}

	.post-hero::before {
		content: '';
		position: absolute;
		inset: -34% -12% auto;
		height: 680px;
		background: radial-gradient(ellipse at 50% 12%, rgba(var(--accent-rgb), 0.34), rgba(83, 0, 14, 0.12) 42%, rgba(5, 5, 6, 0) 76%);
		filter: blur(12px);
		pointer-events: none;
	}

	.post-hero::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(180deg, rgba(5, 5, 6, 0.08), #050506 86%);
		pointer-events: none;
	}

	.hero-bg-glow {
		position: absolute;
		inset: -14% -12%;
		z-index: 0;
		pointer-events: none;
		background:
			radial-gradient(ellipse 70% 50% at 50% 18%, rgba(var(--accent-rgb), 0.35) 0%, transparent 70%),
			radial-gradient(ellipse 60% 40% at 30% 40%, rgba(150, 8, 28, 0.18) 0%, transparent 60%),
			radial-gradient(ellipse 50% 38% at 70% 35%, rgba(200, 50, 70, 0.12) 0%, transparent 55%);
		animation: glowPulse 6s ease-in-out infinite alternate;
	}

	@keyframes glowPulse {
		0% {
			opacity: 0.7;
			transform: scale(1) translateY(0);
		}
		100% {
			opacity: 1;
			transform: scale(1.08) translateY(-10px);
		}
	}

	.post-hero-light {
		position: absolute;
		inset: -10%;
		background:
			radial-gradient(ellipse 65% 55% at 30% 35%, rgba(var(--accent-rgb), 0.2) 0%, transparent 100%),
			radial-gradient(ellipse 55% 50% at 70% 25%, rgba(150, 8, 28, 0.14) 0%, transparent 100%);
		filter: blur(80px);
		animation: aboutGradShift 7s ease-in-out infinite;
	}

	@keyframes aboutGradShift {
		0%, 100% {
			--agl-x: 30%;
			--agl-y: 35%;
			--agr-x: 70%;
			--agr-y: 25%;
		}
		50% {
			--agl-x: 60%;
			--agl-y: 28%;
			--agr-x: 40%;
			--agr-y: 38%;
		}
	}

	.hero-fade {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 38%;
		z-index: 0;
		background: linear-gradient(to bottom, transparent, var(--bg));
		pointer-events: none;
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
		border: 1px solid var(--line-strong);
		border-radius: 999px;
		color: var(--muted-2);
		font-size: var(--text-xs);
		font-weight: 700;
		line-height: 1;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.post-meta span:first-child {
		border-color: rgba(var(--accent-rgb), 0.78);
		background: rgba(var(--accent-rgb), 0.12);
		color: var(--white);
	}

	.post-hero h1 {
		max-width: 1200px;
		margin: 42px auto 28px;
		font-size: clamp(78px, 7.6vw, 132px);
		line-height: 1.02;
		letter-spacing: 0;
		text-transform: uppercase;
	}

	.post-hero h1 span {
		display: block;
		font-family: inherit;
		font-weight: 400;
	}

	.post-hero h1 strong {
		font-family: inherit;
		font-weight: 400;
	}

	@media (max-width: 920px) {
		.post-hero {
			min-height: 780px;
			padding-top: 210px;
		}
		.post-hero h1 {
			font-size: clamp(72px, 12vw, 112px);
		}
	}

	@media (max-width: 720px) {
		.post-hero {
			min-height: 690px;
			padding: 176px 0 94px;
		}
		.post-hero h1 {
			font-size: clamp(58px, 13vw, 88px);
		}
		.hero-copy {
			max-width: 560px;
		}
	}

	@media (max-width: 560px) {
		.post-hero {
			min-height: 620px;
			padding: 146px 0 74px;
		}
		.post-hero h1 {
			font-size: clamp(48px, 16vw, 72px);
			line-height: 1.02;
		}
		.hero-copy {
			font-size: 12px;
			letter-spacing: 0.06em;
		}
	}
</style>
