export interface RouteItem {
	label: string;
	href: string;
	external?: boolean;
}

export interface ServiceCard {
	label: string;
	href: string;
	items: string[];
}

export interface RouteGroup {
	title: string;
	items: RouteItem[];
}

/** Top-level navigation links for the header */
export const navRoutes: RouteItem[] = [
	{ label: 'Início', href: '/' },
	{ label: 'Quem Somos', href: '/quem-somos' },
	{ label: 'Serviços', href: '/servicos' },
	{ label: 'Consultoria', href: '/consultoria' },
	{ label: 'Cases', href: '/cases' },
	{ label: 'Blog', href: '/blog' },
	{ label: 'Contato', href: '/contato' },
];

/** Cards for the Serviços page */
export const servicesSubRoutes: ServiceCard[] = [
	{
		label: 'Sistemas de proteção passiva',
		href: '/servicos#protecao-passiva',
		items: [
			'Pinturas retardantes e passivação',
			'Portas, cortinas e vidros corta-fogo',
			'Compartimentação vertical e horizontal',
			'Firestop',
		],
	},
	{
		label: 'Extintores, hidrantes e mangotinhos',
		href: '/servicos#extintores-hidrantes',
		items: [
			'Dimensionamento por norma e ocupação',
			'Redes de hidrantes e mangotinhos',
			'Especificação e distribuição de extintores',
		],
	},
	{
		label: 'Sinalização e saídas de emergência',
		href: '/servicos#sinalizacao-saidas',
		items: [
			'Sinalização de combate e abandono',
			'Iluminação de emergência',
			'Rotas e saídas de emergência',
		],
	},
	{
		label: 'Chuveiros automáticos (sprinklers)',
		href: '/servicos#sprinklers',
		items: [
			'Projeto hidráulico de sprinklers',
			'Resposta automática a princípios de incêndio',
		],
	},
	{
		label: 'Detecção e alarme de incêndio',
		href: '/servicos#deteccao-alarme',
		items: [
			'Sistemas automáticos e manuais',
			'Central de alarme e acionadores',
		],
	},
	{
		label: 'Pressurização e controle de fumaça',
		href: '/servicos#pressurizacao-fumaca',
		items: [
			'Pressurização de escadas de emergência',
			'Controle de fumaça em áreas críticas',
		],
	},
	{
		label: 'Extinção com agentes especiais',
		href: '/servicos#agentes-especiais',
		items: [
			'Cozinhas industriais',
			'Data centers e transformadores',
			'Parques de tanques',
		],
	},
	{
		label: 'Sistemas de gás canalizado',
		href: '/servicos#gas-canalizado',
		items: [
			'GLP, GNV e GN',
			'Projeto e instalação conforme norma',
		],
	},
	{
		label: 'Eletromobilidade',
		href: '/servicos#eletromobilidade',
		items: [
			'Grupo de pesquisa ativa',
			'Projetos específicos para veículos e baterias elétricas',
			'Ciência e tecnologia no desenvolvimento de soluções de proteção para instalações e edificações',
		],
	},
];

/** Footer link groups */
export const footerGroups: RouteGroup[] = [
	{
		title: 'Institucional',
		items: [
			{ label: 'Início', href: '/' },
			{ label: 'Quem Somos', href: '/quem-somos' },
			{ label: 'Serviços', href: '/servicos' },
			{ label: 'Cases', href: '/cases' },
			{ label: 'Consultoria', href: '/consultoria' },
		],
	},
	{
		title: 'Atendimento',
		items: [
			{ label: 'Contato', href: '/contato' },
			{ label: 'Blog', href: '/blog' },
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
