<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		children: Snippet;
		icon?: Snippet;
		padding?: "sm" | "md" | "lg" | "fluid" | "xs";
		layout?: "vertical" | "centered" | "horizontal";
		hover?: "sm" | "md";
		border?: "default" | "light" | "accent";
		variant?: "default" | "accent";
		iconSize?: "sm" | "md";
		id?: string;
		class?: string;
	}

	let {
		children,
		icon,
		padding = "md",
		layout = "vertical",
		hover = "md",
		border = "default",
		variant = "default",
		iconSize,
		id = "",
		class: className = "",
	}: Props = $props();
</script>

<article
	{id}
	class="card-wrapper
		{layout === 'horizontal' ? 'card-layout-horizontal' : ''}
		{layout === 'centered' ? 'card-layout-centered' : ''}
		{hover === 'sm' ? 'card-hover-sm' : ''}
		{border === 'light' ? 'card-border-light' : ''}
		{border === 'accent' ? 'card-border-accent' : ''}
		{variant === 'accent' ? 'card-variant-accent' : ''}
		{padding === 'sm' ? 'card-padding-sm' : ''}
		{padding === 'md' ? 'card-padding-md' : ''}
		{padding === 'lg' ? 'card-padding-lg' : ''}
		{padding === 'fluid' ? 'card-padding-fluid' : ''}
		{padding === 'xs' ? 'card-padding-xs' : ''}
		{className}"
>
	{#if icon && iconSize}
		<div class="card-icon card-icon-{iconSize}" aria-hidden="true">
			{@render icon()}
		</div>
	{/if}
	<div class="card-body">
		{@render children()}
	</div>
</article>

<style>
	/* ===== Card Shell ===== */
	.card-wrapper {
		position: relative;
		border: 1px solid var(--border);
		border-radius: var(--radius);
		background: var(--panel);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
		overflow: hidden;
		transition:
			border-color var(--transition-base),
			transform var(--transition-base),
			box-shadow var(--transition-base);
	}

	/* Gradient top bar */
	.card-wrapper::before {
		content: "";
		position: absolute;
		top: -1px;
		left: -1px;
		right: -1px;
		height: 3px;
		border-radius: var(--radius) var(--radius) 0 0;
		background: linear-gradient(
			to right,
			var(--accent) 0%,
			var(--accent-light) 35%,
			transparent 100%
		);
		pointer-events: none;
		z-index: 1;
	}

	/* Hover (medium — default) */
	.card-wrapper:hover {
		border-color: var(--border-hover);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
		transform: translateY(-3px);
	}

	/* ===== Layout Variants ===== */

	/* Vertical (default) — flex column with gap */
	.card-wrapper:not(.card-layout-horizontal) {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}

	/* Horizontal — side-by-side icon + content */
	.card-layout-horizontal {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 0 var(--space-base);
		align-items: center;
	}

	/* Centered — centered text + icon auto-centered */
	.card-layout-centered {
		text-align: center;
	}

	.card-layout-centered .card-icon {
		margin-inline: auto;
	}

	/* ===== Hover Variants ===== */
	.card-hover-sm:hover {
		transform: translateY(-2px);
	}

	/* ===== Border Variants ===== */
	.card-border-light {
		border-width: 1px;
		border-color: var(--line);
	}

	.card-border-accent {
		border-color: var(--accent);
	}

	/* ===== Variant ===== */
	.card-variant-accent {
		background: var(--accent-soft);
	}

	/* ===== Padding Variants ===== */
	.card-padding-sm {
		padding: var(--space-lg) var(--space-base);
	}

	.card-padding-md {
		padding: var(--space-lg);
	}

	.card-padding-lg {
		padding: var(--space-xl) var(--space-lg);
	}

	.card-padding-fluid {
		padding: clamp(18px, 2vw, 28px);
	}

	.card-padding-xs {
		padding: var(--space-base);
	}

	/* ===== Icon ===== */
	.card-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--accent-soft);
		color: var(--accent);
	}

	.card-icon :global(svg) {
		display: block;
	}

	.card-icon-sm {
		width: 40px;
		height: 40px;
		border-radius: 10px;
	}

	.card-icon-sm :global(svg) {
		width: 22px;
		height: 22px;
	}

	.card-icon-md {
		width: 44px;
		height: 44px;
		border-radius: 12px;
	}

	.card-icon-md :global(svg) {
		width: 24px;
		height: 24px;
	}

	/* ===== Shared Content Typography ===== */
	.card-body :global(h3) {
		margin: 0 0 var(--space-sm);
		font-size: 1.05rem;
		font-weight: 700;
		color: var(--text);
	}

	.card-body :global(p) {
		margin: 0;
		color: var(--muted);
		font-size: 14px;
		line-height: 1.65;
	}
</style>
