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
                    @use "@/css/mixins" as mixin;
                    @use "@/css/vars" as var;
                    `,
				},
			},
		},
	},
});
