// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	trailingSlash: 'always',
	// TODO: define `site` con el dominio definitivo antes de publicar, por ejemplo:
	// site: 'https://tu-dominio.es',
	// Así se generarán URLs canónicas y Open Graph absolutas.
});
