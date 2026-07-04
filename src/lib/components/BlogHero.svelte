<section class="blog-hero hero-section">
	<div class="blog-hero-bg" aria-hidden="true"></div>
	<div class="container hero-inner">
		<p class="pill"><span></span> Blog</p>
		<h1 class="hero-title-gradient">Artigos &<br /><strong class="hero-strong">Insights</strong></h1>
		<p class="hero-copy blog-hero-copy">
			Estratégia, execução e critério para decisões de marketing digital.
		</p>
	</div>
</section>

<style>
	.blog-hero {
		min-height: 680px;
		padding: 30px 0 98px;
		background: linear-gradient(180deg, rgba(var(--accent-rgb), 0.10), rgba(5, 5, 6, 0) 34%);
	}

	.blog-hero-bg {
		position: absolute;
		inset: -34% -12% auto;
		height: 580px;
		background: radial-gradient(ellipse at 50% 12%, rgba(var(--accent-rgb), 0.28), rgba(83, 0, 14, 0.10) 42%, rgba(5, 5, 6, 0) 76%);
		filter: blur(12px);
		pointer-events: none;
	}

	.blog-hero h1 {
		max-width: 900px;
		margin: 42px auto 24px;
		font-size: clamp(72px, 8vw, 120px);
		line-height: 1.02;
		text-transform: uppercase;
	}

	.blog-hero-copy {
		max-width: 560px;
		font-size: 14px;
	}

	@media (max-width: 920px) {
		.blog-hero {
			min-height: 580px;
			padding-top: 180px;
		}
	}

	@media (max-width: 720px) {
		.blog-hero {
			min-height: 500px;
			padding: 156px 0 74px;
		}
	}

	@media (max-width: 560px) {
		.blog-hero h1 {
			font-size: clamp(48px, 14vw, 72px);
		}
	}
</style>
