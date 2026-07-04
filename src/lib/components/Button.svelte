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
		gap: 8px;
		min-height: 46px;
		padding: 13px 21px;
		border: 1px solid transparent;
		border-radius: var(--radius);
		font-size: 14px;
		font-weight: 700;
		line-height: 1;
		transition: transform 160ms ease, border-color 160ms ease, background 160ms ease;
	}

	:global(.btn:hover) {
		transform: translateY(-1px);
	}

	:global(.btn-primary) {
		background: var(--accent);
		border-color: var(--accent);
		color: #fff;
	}

	:global(.btn-small) {
		min-height: 38px;
		padding: 10px 17px;
		font-size: 13px;
	}
</style>
