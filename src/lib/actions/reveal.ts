/**
 * Svelte action: reveal
 *
 * Adds a fade-in + translate-up animation when an element scrolls into view.
 * Usage: <div use:reveal>
 *
 * The element gets the class "reveal" on mount and "is-visible"
 * once it enters the viewport (with ~120px bottom offset).
 */
export function reveal(node: HTMLElement) {
	node.classList.add('reveal');

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('is-visible');
					observer.unobserve(node);
				}
			}
		},
		{
			rootMargin: '0px 0px -120px 0px',
			threshold: 0
		}
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
