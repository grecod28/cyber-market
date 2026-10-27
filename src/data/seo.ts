/**
 * Metadatos de cada página.
 * Los títulos son completos: no se añade ningún sufijo automático en el layout.
 */

export const seo = {
	defaultTitle: 'Cyber Market | Ciber, locutorio y tienda de barrio en Vigo',
	defaultDescription:
		'Ciber-locutorio y tienda de barrio en Vigo: envío de dinero con Ria y Transfast, paquetería, recargas, fotocopias, reparaciones y productos latinoamericanos. Abierto todos los días de 10:00 a 01:00.',
	ogImage: '/og-cyber-market.png',
	pages: {
		home: {
			title: 'Cyber Market | Ciber, locutorio y tienda de barrio en Vigo',
			description:
				'Ciber, locutorio y tienda latinoamericana en Avda. García Barbón, 102 (Vigo). Envío de dinero, paquetería, recargas, fotocopias y reparaciones. Todos los días de 10:00 a 01:00.',
		},
		productos: {
			title: 'Productos latinoamericanos en Vigo | Cyber Market',
			description:
				'Harinas y masas, snacks, bebidas, salsas, panadería, café y mate. Descubre la selección orientativa de productos latinoamericanos de Cyber Market en Vigo.',
		},
		dinero: {
			title: 'Envío de dinero con Ria y Transfast en Vigo | Cyber Market',
			description:
				'Somos punto de servicio de Ria y Transfast en Vigo. Te explicamos qué documentación suele necesitarse para enviar dinero y te invitamos a consultar las condiciones en tienda.',
		},
		servicios: {
			title: 'Ciber, paquetería, recargas y reparaciones en Vigo | Cyber Market',
			description:
				'Ciber y locutorio, recargas móviles, punto de recogida y envío de paquetería, fotocopias, encuadernación, fax, reparación y liberación de móviles y componentes informáticos.',
		},
		contacto: {
			title: 'Contacto y ubicación en Vigo | Cyber Market',
			description:
				'Visítanos en Avda. García Barbón, 102, 36201 Vigo. Teléfono 986 135 225. Abierto de lunes a domingo y festivos, de 10:00 a 01:00. Consulta el mapa y cómo llegar.',
		},
		avisoLegal: {
			title: 'Aviso legal | Cyber Market',
			description:
				'Información legal sobre el sitio web informativo de Cyber Market, ciber-locutorio y tienda de barrio en Vigo.',
		},
		privacidad: {
			title: 'Privacidad y cookies | Cyber Market',
			description:
				'Información sobre el tratamiento de datos personales y el uso de cookies en el sitio web informativo de Cyber Market en Vigo.',
		},
	},
} as const;
