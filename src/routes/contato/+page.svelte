<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import Button from "$lib/components/Button.svelte";
</script>

<svelte:head>
	<title>Contato — VTAQUINO</title>
	<meta
		name="description"
		content="Entre em contato com a VTAQUINO. Solicite um orçamento ou tire suas dúvidas sobre projetos de proteção contra incêndio."
	/>
	<meta property="og:title" content="Contato — VTAQUINO" />
	<meta
		property="og:description"
		content="Entre em contato com a VTAQUINO. Solicite um orçamento ou tire suas dúvidas."
	/>
	<meta property="og:url" content="https://vtaquino.eng.br/contato" />
	<meta
		property="og:image"
		content="https://vtaquino.eng.br/assets/og-image.jpg"
	/>
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Header />

<section class="page-hero">
	<div class="container page-hero-inner">
		<p class="pill"><span></span> Contato</p>
		<h1>Fale com a <strong>gente</strong></h1>
		<p class="page-hero-copy">
			Existem várias formas de entrar em contato com a VTAQUINO. Escolha a
			que preferir e aguarde nosso retorno.
		</p>
	</div>
</section>

<section class="page-section">
	<div class="container">
		<div class="contato-grid">
			<div class="contato-form-wrapper">
				<h2>Envie sua mensagem</h2>
				<form
					class="contato-form"
					action="https://api.web3forms.com/submit"
					method="POST"
				>
					<!-- Web3Forms - Replace the access_key below with your real key from https://web3forms.com -->
					<input
						type="hidden"
						name="access_key"
						value="00000000-0000-0000-0000-000000000000"
					/>
					<!-- Redirect after successful submission -->
					<input
						type="hidden"
						name="redirect"
						value="https://vtaquino.eng.br/contato/obrigado"
					/>
					<!-- Honeypot anti-spam (deve ficar oculto) -->
					<input
						type="checkbox"
						name="botcheck"
						class="honeypot"
						tabindex="-1"
						autocomplete="off"
					/>

					<div class="form-field">
						<label for="nome">Nome</label>
						<input
							type="text"
							id="nome"
							name="name"
							placeholder="Seu nome"
							required
						/>
					</div>
					<div class="form-field">
						<label for="email">E-mail</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="seu@email.com"
							required
						/>
					</div>
					<div class="form-field">
						<label for="assunto">Assunto</label>
						<input
							type="text"
							id="assunto"
							name="subject"
							placeholder="Assunto da mensagem"
							required
						/>
					</div>
					<div class="form-field">
						<label for="mensagem">Mensagem</label>
						<textarea
							id="mensagem"
							name="message"
							rows="5"
							placeholder="Sua mensagem"
							required
						></textarea>
					</div>
					<button type="submit" class="btn btn-primary"
						>Enviar mensagem</button
					>
				</form>
			</div>

			<aside class="contato-info">
				<article class="contato-card">
					<div class="contato-card-icon" aria-hidden="true">
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<path
								d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
							/>
							<circle cx="12" cy="10" r="3" />
						</svg>
					</div>
					<h3>Localização</h3>
					<p>Brasília — DF</p>
				</article>

				<article class="contato-card">
					<div class="contato-card-icon" aria-hidden="true">
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<path
								d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
							/>
						</svg>
					</div>
					<h3>WhatsApp</h3>
					<p>
						<a
							href="https://wa.me/5561982496399?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20da%20VTAQUINO%2C%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas."
							target="_blank"
							rel="noopener noreferrer">(61) 98249-6399</a
						>
					</p>
				</article>

				<article class="contato-card">
					<div class="contato-card-icon" aria-hidden="true">
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<path
								d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
							/>
							<polyline points="22,6 12,13 2,6" />
						</svg>
					</div>
					<h3>E-mail</h3>
					<p>
						<a href="mailto:contato@vtaquino.com.br"
							>contato@vtaquino.com.br</a
						>
					</p>
				</article>

				<div class="contato-cta-card">
					<p>Orçamento sem compromisso</p>
					<Button
						href="https://wa.me/5561982496399?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20da%20VTAQUINO%2C%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas."
						variant="primary">Solicitar orçamento</Button
					>
				</div>
			</aside>
		</div>
	</div>
</section>

<Footer />

<style>
	.page-hero h1 {
		max-width: 900px;
		margin: 16px auto 14px;
	}

	.page-hero-inner h1 strong {
		display: inline-block;
	}

	.page-hero-copy {
		max-width: 520px;
	}

	.contato-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-xl);
		align-items: start;
	}

	.contato-form-wrapper h2 {
		font-weight: 800;
		margin: 0 0 var(--space-lg);
	}

	.contato-form {
		display: grid;
		gap: var(--space-base);
	}

	.form-field {
		display: grid;
		gap: 6px;
	}

	.form-field label {
		font-size: 13px;
		font-weight: 600;
		color: var(--text);
	}

	.form-field input,
	.form-field textarea {
		width: 100%;
		padding: 10px 14px;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: var(--panel);
		color: var(--text);
		font-size: 14px;
		font-family: inherit;
		transition: border-color 0.2s;
		box-sizing: border-box;
	}

	.form-field input:focus,
	.form-field textarea:focus {
		outline: none;
		border-color: var(--accent);
	}

	.form-field input::placeholder,
	.form-field textarea::placeholder {
		color: var(--muted);
		opacity: 0.6;
	}

	/* Honeypot - hidden from users, visible to bots */
	:global(.honeypot) {
		display: none !important;
		position: absolute !important;
		left: -9999px !important;
	}

	.contato-form .btn-primary {
		justify-self: start;
		cursor: pointer;
		border: none;
		font-family: inherit;
	}

	.contato-info {
		display: grid;
		gap: var(--space-base);
	}

	.contato-card {
		padding: var(--space-lg) var(--space-base);
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: var(--panel);
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 0 var(--space-base);
		align-items: center;
	}

	.contato-card-icon {
		grid-row: span 2;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 10px;
		background: var(--accent-soft);
		color: var(--accent);
	}

	.contato-card-icon svg {
		width: 22px;
		height: 22px;
	}

	.contato-card h3 {
		font-size: 14px;
		font-weight: 700;
		margin: 0;
		color: var(--text);
	}

	.contato-card p {
		font-size: 13px;
		color: var(--muted);
		margin: 0;
	}

	.contato-card a {
		color: var(--accent);
		text-decoration: none;
	}

	.contato-card a:hover {
		text-decoration: underline;
	}

	.contato-cta-card {
		padding: var(--space-lg) var(--space-base);
		border: 1px solid var(--accent);
		border-radius: var(--radius);
		background: var(--accent-soft);
		text-align: center;
		display: grid;
		gap: var(--space-base);
	}

	.contato-cta-card p {
		font-weight: 600;
		font-size: 14px;
		color: var(--text);
		margin: 0;
	}

	@media (max-width: 920px) {
		.contato-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 720px) {
		.page-section {
			padding: 40px 0 72px;
		}
	}
</style>
