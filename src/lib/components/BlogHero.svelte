<section class="blog-hero hero-section">
	<div class="hero-fx" aria-hidden="true"></div>
	<div class="container hero-inner">
		<!-- <p class="pill"><span></span> Blog</p> -->
		<h1 class="hero-title-gradient">
			Artigos & <strong class="hero-strong">Insights</strong>
		</h1>
		<p class="hero-copy blog-hero-copy">
			Estratégias, execução e critério para decisões conscientes sobre
			proteção contra incêndio, segurança e prevenção.
		</p>
	</div>
</section>

<style>
	.blog-hero {
		min-height: 520px;
		padding: 120px 0 80px;
		background: radial-gradient(
				circle at 85% 10%,
				rgba(var(--accent-rgb), 0.08),
				transparent 28rem
			),
			var(--panel-2);
	}

	.blog-hero h1 {
		max-width: 900px;
		margin: 42px auto 24px;
		font-weight: 800;
		text-wrap: balance;
	}

	.blog-hero-copy {
		max-width: 560px;
	}

	.blog-hero h1 strong {
		display: inline-block;
	}

	@media (max-width: 920px) {
		.blog-hero {
			min-height: 420px;
			padding-top: 110px;
		}
	}

	@media (max-width: 720px) {
		.blog-hero {
			min-height: 380px;
			padding: 100px 0 60px;
		}
	}

	@media (max-width: 560px) {
		.blog-hero h1 {
			font-size: clamp(1.8rem, 10vw, 2.8rem);
		}
	}
</style>
