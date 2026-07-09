export interface RouteItem {
	label: string;
	href: string;
	external?: boolean;
}

export interface RouteGroup {
	title: string;
	items: RouteItem[];
}

/** Top-level navigation links for the header */
export const navRoutes: RouteItem[] = [
	{ label: 'Início', href: '/#inicio' },
	{ label: 'Serviços', href: '/#servicos' },
	{ label: 'Consultoria', href: '/#consultoria' },
	{ label: 'Cases', href: '/blog' },
	{ label: 'Contato', href: '/#contato' },
	{ label: 'Blog', href: '/blog' },
];

/** Sub-items for the Serviços dropdown in the header */
export const servicesSubRoutes: RouteItem[] = [
	{ label: 'Landing pages', href: '/#servicos-landing' },
	{ label: 'Tráfego pago', href: '/#servicos-trafego' },
	{ label: 'Design estratégico', href: '/#servicos-design' },
	{ label: 'SEO', href: '/#servicos-seo' },
	{ label: 'Social media', href: '/#servicos-social' },
];

/** Footer link groups */
export const footerGroups: RouteGroup[] = [
	{
		title: 'Institucional',
		items: [
			{ label: 'Quem somos', href: '/#inicio' },
			{ label: 'Serviços', href: '/#servicos' },
			{ label: 'Consultoria', href: '/#consultoria' },
		],
	},
	{
		title: 'Atendimento',
		items: [
			{ label: 'Cases', href: '/blog' },
			{ label: 'Contato', href: '/#contato' },
			{
				label: 'WhatsApp',
				href: 'https://wa.me/5561982496399?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20da%20VTAQUINO%2C%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas.',
				external: true,
			},
		],
	},
	{
		title: 'Contato',
		items: [
			{ label: 'Brasília - DF', href: '#' },
			{ label: 'contato@vtaquino.com.br', href: 'mailto:contato@vtaquino.com.br' },
			{ label: '(61) 98249-6399', href: 'tel:5561982496399' },
		],
	},
];
