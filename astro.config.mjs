// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: import.meta.env.PROD ? "https://fec-tokyo.github.io" : "http://localhost:3000",
	image: {
		responsiveStyles: true,
		layout: "constrained",
	},
	redirects: {
		"/tokushoho": "https://fec.or.jp/tokushoho/tokyo/2026/",
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
