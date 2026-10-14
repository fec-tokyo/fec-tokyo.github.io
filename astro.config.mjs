// @ts-check
import { defineConfig, envField } from "astro/config";

// プレビュー用ビルド（npm run build:preview）。/preview/ 配下に置く前提で、noindex を付ける
const isPreview = process.env.PREVIEW === "true";

// https://astro.build/config
export default defineConfig({
	site: import.meta.env.PROD ? "https://fec-tokyo.github.io" : "http://localhost:3000",
	base: isPreview ? "/preview/" : undefined,
	env: {
		schema: {
			PREVIEW: envField.boolean({ context: "server", access: "public", default: false }),
		},
	},
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
