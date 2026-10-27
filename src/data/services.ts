import type { IconName } from '../types/icons';

export type Accent = 'terracotta' | 'teal' | 'marigold' | 'magenta' | 'green' | 'coffee';

export interface Service {
	slug: string;
	title: string;
	description: string;
	icon: IconName;
	accent: Accent;
	featured?: boolean;
	highlights?: string[];
	link?: {
		label: string;
		href: string;
	};
}

/**
 * Servicios del negocio. No incluir precios, comisiones ni disponibilidad
 * concreta: toda la información práctica se confirma en tienda.
 */
export const services: Service[] = [
	{
		slug: 'ciber-locutorio',
		title: 'Ciber y locutorio',
		description:
			'Ordenadores con internet, impresión, escaneo y acompañamiento para tus gestiones online.',
		icon: 'monitor',
		accent: 'teal',
		featured: true,
		highlights: ['Navegación e impresión', 'Escaneo de documentos', 'Ayuda con trámites online'],
	},
	{
		slug: 'envio-de-dinero',
		title: 'Envío de dinero',
		description:
			'Punto de servicio de Ria y Transfast para enviar dinero al extranjero con atención presencial.',
		icon: 'send',
		accent: 'terracotta',
		featured: true,
		link: { label: 'Cómo enviar dinero', href: '/envio-de-dinero/' },
	},
	{
		slug: 'paqueteria',
		title: 'Punto de paquetería',
		description:
			'Recogida y envío de paquetes con las principales compañías de mensajería y puntos de conveniencia.',
		icon: 'box',
		accent: 'marigold',
		featured: true,
		link: { label: 'Ver compañías', href: '/servicios/#paqueteria' },
	},
	{
		slug: 'recargas',
		title: 'Recargas móviles',
		description:
			'Recarga el saldo de tu móvil de forma rápida y presencial. Consulta los operadores disponibles en tienda.',
		icon: 'smartphone',
		accent: 'magenta',
		featured: true,
		highlights: ['Recarga en el momento', 'Atención en tienda'],
	},
	{
		slug: 'fotocopias',
		title: 'Fotocopias y encuadernación',
		description:
			'Fotocopias, impresión, escaneo, encuadernación y fax para tus documentos y trabajos.',
		icon: 'copy',
		accent: 'coffee',
		featured: true,
		highlights: ['Fotocopias e impresión', 'Encuadernación', 'Servicio de fax'],
	},
	{
		slug: 'reparaciones',
		title: 'Reparación de móviles y ordenadores',
		description:
			'Revisamos incidencias de móviles y ordenadores. Pásate con tu dispositivo y te orientamos.',
		icon: 'wrench',
		accent: 'green',
		featured: true,
	},
	{
		slug: 'liberacion',
		title: 'Liberación de móviles',
		description:
			'Te ayudamos a liberar tu móvil para que puedas utilizarlo con otra operadora.',
		icon: 'unlock',
		accent: 'teal',
	},
	{
		slug: 'componentes',
		title: 'Componentes informáticos',
		description:
			'Venta de componentes informáticos. Cuéntanos qué necesitas y te orientamos.',
		icon: 'chip',
		accent: 'magenta',
	},
];

export const featuredServices = services.filter((service) => service.featured);

export const parcelCarriers = [
	'Celeritas',
	'Amazon',
	'Nickel',
	'GLS',
	'InPost',
	'UPS',
	'Vinted Go',
	'Kanguro',
	'Ontime',
];
