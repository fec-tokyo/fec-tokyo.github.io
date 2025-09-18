// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: import.meta.env.PROD ? "https://fec-tokyo.github.io" : "http://localhost:3000",
	image: {
		responsiveStyles: true,
		layout: "constrained",
	},
	server: {
		port: 3000,
	},
	vite: {
		css: {
			transformer: "lightningcss",
			lightningcss: {
				drafts: {
					customMedia: true,
				},
			},
		},
	},
});
