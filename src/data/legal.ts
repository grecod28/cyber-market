import { business, fullAddress } from './business';

export interface LegalSection {
	title: string;
	paragraphs: string[];
	items?: string[];
}

export interface LegalPage {
	eyebrow: string;
	title: string;
	description: string;
	updated: string;
	intro: string;
	sections: LegalSection[];
}

/**
 * Textos legales de ejemplo.
 *
 * Antes de publicar, revisar con asesoramiento legal y completar los datos
 * fiscales del titular, el proveedor de hosting y las cookies reales.
 */
export const legalNotice: LegalPage = {
	eyebrow: 'Información legal',
	title: 'Aviso legal',
	description:
		'Información sobre el titular y las condiciones de uso del sitio web informativo de Cyber Market.',
	updated: 'Octubre de 2026',
	intro:
		'Este sitio web es una página informativa de Cyber Market. No es una tienda online y no permite contratar servicios, realizar pagos ni enviar dinero.',
	sections: [
		{
			title: 'Titular del sitio web',
			paragraphs: [
				`${business.name}`,
				`${fullAddress}`,
				`Teléfono: ${business.phone.display}`,
				`Correo electrónico: ${business.email}`,
			],
		},
		{
			title: 'Objeto',
			paragraphs: [
				'El sitio tiene carácter meramente informativo y da a conocer los servicios y productos de la tienda física de Cyber Market en Vigo. No permite realizar compras, pagos, reservas, envíos de dinero ni contrataciones online.',
			],
		},
		{
			title: 'Uso del sitio',
			paragraphs: [
				'La persona usuaria se compromete a utilizar este sitio de forma diligente, lícita y respetuosa, y a no realizar actuaciones que puedan dañar su funcionamiento, su contenido o los derechos de terceros.',
			],
		},
		{
			title: 'Propiedad intelectual e industrial',
			paragraphs: [
				'Los textos, el diseño, las ilustraciones y el código de este sitio pertenecen a Cyber Market o se utilizan con autorización. No se permite su reproducción, distribución o transformación sin permiso expreso.',
				'Las denominaciones Ria, Transfast y las compañías de paquetería se mencionan únicamente como referencia descriptiva de los servicios disponibles. No se utilizan sus logotipos ni se sugiere patrocinio o vinculación más allá de la prestación de los servicios.',
			],
		},
		{
			title: 'Enlaces y servicios de terceros',
			paragraphs: [
				'El sitio incluye enlaces externos y un mapa embebido de Google Maps. Cyber Market no controla el contenido, las políticas ni la disponibilidad de esos servicios de terceros. El acceso a ellos se realiza bajo la responsabilidad de la persona usuaria y conforme a sus propias condiciones.',
			],
		},
		{
			title: 'Responsabilidad y vigencia',
			paragraphs: [
				'La información sobre servicios, horarios y disponibilidad puede cambiar. Para confirmar cualquier dato antes de desplazarte, llama a la tienda o consulta presencialmente. Cyber Market no se responsabiliza de errores u omisiones puntuales en la información publicada.',
			],
		},
		{
			title: 'Legislación aplicable',
			paragraphs: [
				'Este sitio se rige por la legislación española que resulte de aplicación. Cualquier controversia se someterá a los juzgados y tribunales competentes conforme a la normativa vigente.',
			],
		},
		{
			title: 'Contacto',
			paragraphs: [
				`Para cualquier consulta relacionada con este aviso legal, puedes escribir a ${business.email} o llamar al ${business.phone.display}.`,
			],
		},
	],
};

export const privacyPolicy: LegalPage = {
	eyebrow: 'Información legal',
	title: 'Privacidad y cookies',
	description:
		'Información sobre el tratamiento de datos personales y el uso de cookies en el sitio web informativo de Cyber Market.',
	updated: 'Octubre de 2026',
	intro:
		'En Cyber Market tratamos los datos personales con respeto y solo utilizamos la información necesaria para atenderte. Esta web es informativa y no incluye formularios de registro ni de pago.',
	sections: [
		{
			title: 'Responsable del tratamiento',
			paragraphs: [
				`${business.name}`,
				`${fullAddress}`,
				`Correo electrónico: ${business.email}`,
			],
		},
		{
			title: 'Datos que podemos tratar',
			paragraphs: [
				'No hay formularios, cuentas de usuario ni área privada en esta web. Solo podemos tratar los datos que nos facilitas voluntariamente por teléfono, por correo electrónico o presencialmente en la tienda, como tu nombre, datos de contacto y la información necesaria para atender tu consulta o gestionar un servicio.',
			],
		},
		{
			title: 'Finalidad del tratamiento',
			paragraphs: [
				'Utilizamos los datos para responder a tus consultas, gestionar los servicios que solicitas en la tienda, mantener la comunicación contigo y cumplir las obligaciones legales que correspondan.',
			],
		},
		{
			title: 'Base jurídica',
			paragraphs: [
				'El tratamiento se basa en tu consentimiento cuando nos contactas, en la ejecución de la relación de servicio cuando realizas una gestión y, en su caso, en el cumplimiento de obligaciones legales o en el interés legítimo de atender consultas y mantener la seguridad del negocio.',
			],
		},
		{
			title: 'Conservación de los datos',
			paragraphs: [
				'Conservamos los datos durante el tiempo necesario para atender la finalidad para la que se facilitaron y, después, durante los plazos que exija la normativa aplicable. Cuando dejan de ser necesarios, se eliminan o se anonimizan de forma segura.',
			],
		},
		{
			title: 'Destinatarios y proveedores',
			paragraphs: [
				'No cedemos datos personales a terceros salvo obligación legal. Podemos contar con proveedores tecnológicos, como el servicio de alojamiento web o el correo electrónico, que actúan como encargados del tratamiento y están sujetos a sus propias obligaciones de confidencialidad.',
				'La página de contacto incluye un mapa de Google Maps. Al cargarse, ese servicio de terceros puede recoger datos técnicos y utilizar cookies. Su funcionamiento se rige por las políticas de Google.',
			],
		},
		{
			title: 'Tus derechos',
			paragraphs: [
				`Puedes solicitar el acceso, la rectificación, la supresión, la oposición, la limitación o la portabilidad de tus datos escribiendo a ${business.email}. Indica en el asunto «Protección de datos» y acredita tu identidad si es necesario.`,
				'También puedes presentar una reclamación ante la Agencia Española de Protección de Datos a través de su sitio web www.aepd.es.',
			],
			items: [
				'Acceso: conocer qué datos tratamos sobre ti.',
				'Rectificación: corregir datos inexactos o incompletos.',
				'Supresión: solicitar la eliminación cuando ya no sean necesarios.',
				'Oposición y limitación: oponerte o limitar determinados tratamientos.',
				'Portabilidad: recibir tus datos en un formato estructurado cuando sea aplicable.',
			],
		},
		{
			title: 'Cookies',
			paragraphs: [
				'Este sitio no utiliza cookies propias, herramientas de analítica ni publicidad. Únicamente el mapa de Google Maps de la página de contacto puede establecer cookies de terceros al mostrarse. Si no deseas cargarlo, puedes evitar visitar esa página o bloquear las cookies de terceros en la configuración de tu navegador.',
			],
		},
		{
			title: 'Cambios en esta política',
			paragraphs: [
				'Podemos actualizar esta política para adaptarla a cambios normativos o de funcionamiento del sitio. La versión vigente será la publicada en esta página.',
			],
		},
	],
};
