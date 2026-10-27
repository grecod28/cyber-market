/**
 * Información sobre el servicio de envío de dinero.
 *
 * No añadir comisiones, tipos de cambio, importes, destinos concretos ni
 * formularios. Todo eso se consulta y se gestiona presencialmente en tienda.
 */
export interface MoneyRequirement {
	title: string;
	description: string;
}

export const moneyTransfer = {
	eyebrow: 'Envío de dinero',
	title: 'Envía dinero al extranjero con Ria y Transfast',
	intro:
		'Somos punto de servicio de Ria y Transfast en Vigo. Si necesitas enviar dinero a tu familia o a alguien de confianza, puedes hacerlo en la tienda con atención presencial y en español.',
	requirements: [
		{
			title: 'Documento de identidad',
			description:
				'Trae un documento de identidad en vigor. En tienda te confirmamos cuál es válido para tu caso.',
		},
		{
			title: 'Datos del beneficiario',
			description:
				'Nombre completo, país de destino y la forma en que la persona recibirá el dinero.',
		},
		{
			title: 'Importe del envío',
			description:
				'Indícanos cuánto quieres enviar. Las condiciones y la disponibilidad se confirman en el momento, en tienda.',
		},
	] satisfies MoneyRequirement[],
	steps: [
		'Acércate a Cyber Market en horario de apertura.',
		'Entrega tu documento de identidad y los datos del beneficiario.',
		'Confirma con nosotros la operación y sus condiciones.',
		'Conserva el comprobante para cualquier consulta posterior.',
	],
	notes: {
		online: 'Esta web es solo informativa. No permite iniciar un envío de dinero, calcular comisiones ni consultar tipos de cambio.',
		store: 'Los destinos disponibles, las comisiones y el tipo de cambio se consultan en tienda. No publicamos importes porque pueden cambiar.',
		trademarks:
			'Ria y Transfast son marcas de sus respectivos titulares y se mencionan únicamente para identificar los servicios disponibles.',
	},
} as const;
