/**
 * Datos públicos del negocio.
 *
 * IMPORTANTE: no inventar ni modificar direcciones, teléfonos, horarios o
 * servicios. Si cambia algún dato, actualizarlo aquí y revisar también
 * `src/data/seo.ts` y la información estructurada de `src/layouts/Layout.astro`.
 */

export interface Business {
	name: string;
	tagline: string;
	description: string;
	address: {
		street: string;
		postalCode: string;
		city: string;
		province: string;
		region: string;
		country: string;
		countryCode: string;
	};
	phone: {
		display: string;
		href: string;
	};
	email: string;
	hours: {
		days: string;
		opens: string;
		closes: string;
		short: string;
		note: string;
	};
	maps: {
		url: string;
		embedUrl: string;
	};
	/**
	 * Placeholder: no hay número de WhatsApp confirmado.
	 * Si el negocio facilita uno, añadir aquí el enlace completo `https://wa.me/...`
	 * y el botón aparecerá automáticamente en `ContactCta`.
	 */
	whatsapp: string | null;
}

export const business: Business = {
	name: 'Cyber Market',
	tagline: 'Ciber, locutorio y tienda de barrio en Vigo',
	description:
		'Ciber-locutorio, tienda de productos latinoamericanos y punto de servicios en el centro de Vigo: envío de dinero, paquetería, recargas, fotocopias y reparaciones.',
	address: {
		street: 'Avda. García Barbón, 102',
		postalCode: '36201',
		city: 'Vigo',
		province: 'Pontevedra',
		region: 'Galicia',
		country: 'España',
		countryCode: 'ES',
	},
	phone: {
		display: '986 135 225',
		href: '+34986135225',
	},
	email: 'cyber.market.vigo@gmail.com',
	hours: {
		days: 'Lunes a domingo y festivos',
		opens: '10:00',
		closes: '01:00',
		short: 'Todos los días · 10:00–01:00',
		note: 'Abrimos todos los días del año, también los festivos.',
	},
	maps: {
		url: 'https://www.google.com/maps/search/?api=1&query=Avda.+Garc%C3%ADa+Barb%C3%B3n%2C+102%2C+36201+Vigo%2C+Pontevedra',
		// Mapa embebido de Google Maps por búsqueda de dirección (sin API key).
		// Sustituir por el enlace/embed definitivo si se prefiere otro proveedor.
		embedUrl:
			'https://maps.google.com/maps?q=Avda.%20Garc%C3%ADa%20Barb%C3%B3n%2C%20102%2C%2036201%20Vigo%2C%20Pontevedra&output=embed',
	},
	whatsapp: null,
};

export const fullAddress = `${business.address.street}, ${business.address.postalCode} ${business.address.city} (${business.address.province})`;

export const phoneHref = `tel:${business.phone.href}`;

export const emailHref = `mailto:${business.email}`;
