<script lang="ts">
	interface Props {
		href?: string;
		variant?: 'primary' | 'secondary';
		size?: 'small' | 'normal';
		children?: import('svelte').Snippet;
	}

	let { href = '#', variant = 'primary', size = 'normal', children }: Props = $props();
</script>

<a {href} class="btn btn-{variant}" class:btn-small={size === 'small'}>
	{#if children}{@render children()}{/if}
</a>

<style>
	:global(.btn) {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-xs);
		min-height: 46px;
		padding: 13px 21px;
		border: 1px solid transparent;
		border-radius: var(--radius);
		font-size: var(--text-base);
		font-weight: 700;
		line-height: 1;
		transition: transform 180ms ease, border-color 180ms ease, background 180ms ease, box-shadow 180ms ease;
	}

	:global(.btn:hover) {
		transform: scale(1.04);
	}

	/* VTAQUINO primary */
	:global(.btn-primary) {
		background: var(--accent-gradient);
		border-color: transparent;
		color: #fff;
		box-shadow: 0 12px 26px rgba(223, 31, 46, 0.32);
	}

	:global(.btn-primary:hover) {
		box-shadow: 0 16px 32px rgba(223, 31, 46, 0.42);
	}

	/* VTAQUINO secondary */
	:global(.btn-secondary) {
		border-color: var(--accent);
		background: var(--panel);
		color: var(--text);
	}

	:global(.btn-secondary:hover) {
		border-color: var(--accent-dark);
		background: var(--accent-soft);
	}

	:global(.btn-small) {
		min-height: 38px;
		padding: 10px 17px;
		font-size: var(--text-sm);
	}
</style>
