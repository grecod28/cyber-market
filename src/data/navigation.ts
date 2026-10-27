export interface NavItem {
	label: string;
	href: string;
}

export const navigation: NavItem[] = [
	{ label: 'Inicio', href: '/' },
	{ label: 'Productos latinos', href: '/productos-latinos/' },
	{ label: 'Envío de dinero', href: '/envio-de-dinero/' },
	{ label: 'Otros servicios', href: '/servicios/' },
	{ label: 'Contacto', href: '/contacto/' },
];
