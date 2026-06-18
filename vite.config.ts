import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
	plugins: [react(), tailwindcss(), dts({ include: ["src"], exclude: ["src/**/*.stories.tsx"] })],
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
		},
	},
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			formats: ["es"],
			fileName: "index",
		},
		rollupOptions: {
			external: (id) => !id.startsWith(".") && !id.startsWith("/") && !id.startsWith("@/"),
			output: {
				assetFileNames: (assetInfo) =>
					assetInfo.names?.some((name) => name.endsWith(".css")) ? "styles.css" : "[name][extname]",
			},
		},
	},
});
