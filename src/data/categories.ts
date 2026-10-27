import type { IconName } from '../types/icons';
import type { Accent } from './services';

export interface ProductCategory {
	slug: string;
	name: string;
	description: string;
	icon: IconName;
	accent: Accent;
	items: string[];
}

/**
 * Categorías orientativas de la despensa latinoamericana.
 * No incluir precios, marcas concretas ni stock: cambia con frecuencia.
 */
export const categories: ProductCategory[] = [
	{
		slug: 'harinas-y-masas',
		name: 'Harinas y masas',
		description: 'La base de arepas, tortillas, tamales y muchas recetas de casa.',
		icon: 'basket',
		accent: 'marigold',
		items: ['Harina de maíz', 'Harina de trigo', 'Arepas', 'Tortillas', 'Masa para tamales', 'Yuca'],
	},
	{
		slug: 'snacks-y-dulces',
		name: 'Snacks y dulces',
		description: 'Antojos para picar entre horas o compartir.',
		icon: 'spark',
		accent: 'magenta',
		items: ['Gominolas', 'Chocolates', 'Galletas', 'Snacks', 'Dulces típicos'],
	},
	{
		slug: 'bebidas',
		name: 'Bebidas',
		description: 'Refrescos y bebidas para acompañar la comida o refrescarte.',
		icon: 'bottle',
		accent: 'teal',
		items: ['Refrescos', 'Aguas saborizadas', 'Jugos', 'Maltas'],
	},
	{
		slug: 'salsas-y-condimentos',
		name: 'Salsas y condimentos',
		description: 'El toque de sabor que buscas para tus platos.',
		icon: 'flame',
		accent: 'terracotta',
		items: ['Salsas picantes', 'Adobos', 'Especias', 'Caldos', 'Condimentos'],
	},
	{
		slug: 'panaderia-y-bolleria',
		name: 'Panadería y bollería',
		description: 'Pan y bollería para el desayuno, la merienda o cualquier momento.',
		icon: 'bread',
		accent: 'coffee',
		items: ['Pan', 'Pan dulce', 'Bollería', 'Empanadas'],
	},
	{
		slug: 'cafe-y-mate',
		name: 'Café y mate',
		description: 'Café para llevar y opciones para los amantes del mate.',
		icon: 'coffee',
		accent: 'green',
		items: ['Café molido', 'Café instantáneo', 'Café para llevar', 'Yerba mate'],
	},
];
