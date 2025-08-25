// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	image: {
		responsiveStyles: true,
		layout: "constrained",
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
                    @use "@/css/_mixins.scss" as mixin;
                    @use "@/css/_vars.scss" as var;
                    `,
				},
			},
		},
	},
});
