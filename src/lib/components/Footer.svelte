<script lang="ts">
	import { footerGroups } from '$lib/data/routes';
</script>

<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-col-brand">
        <div class="footer-brand">
          <a href="/">
            <img src="/assets/logo-vtaquino-header.png" alt="VTAQUINO — Fire Consultancy" width="130" height="52" />
          </a>
        </div>
        <p>Projetos e instalações de proteção e prevenção contra incêndio e pânico, do projeto executivo à manutenção.</p>
      </div>
      {#each footerGroups as group}
        <div>
          <h3>{group.title}</h3>
          {#each group.items as item}
            {#if item.href === '#'}
              <p>{item.label}</p>
            {:else if item.external}
              <a href={item.href} target="_blank" rel="noopener">{item.label}</a>
            {:else}
              <a href={item.href}>{item.label}</a>
            {/if}
          {/each}
        </div>
      {/each}
    </div>
    <div class="footer-bottom">© 2026 VTAQUINO. Todos os direitos reservados.</div>
  </div>
</footer>

<style>
	.site-footer {
		width: 100%;
		background: var(--ink);
		color: #c7cace;
		padding: var(--space-xl) 0;
	}

	.footer-grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: var(--space-xl);
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
		color: var(--accent-light);
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

	.footer-bottom {
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		color: var(--muted-2);
		font-size: 0.8rem;
		margin-top: 32px;
		padding-top: var(--space-base);
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
	}

	@media (max-width: 560px) {
		.footer-grid {
			grid-template-columns: 1fr;
		}

		.footer-bottom {
			text-align: center;
		}
	}
</style>
