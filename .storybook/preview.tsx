import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import "../src/styles.css";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: { color: /(background|color)$/i, date: /Date$/i },
		},
		backgrounds: {
			default: "app",
			values: [
				{ name: "app", value: "#EEF1F5" },
				{ name: "white", value: "#FFFFFF" },
				{ name: "dark", value: "#0F172A" },
			],
		},
		layout: "centered",
	},
	decorators: [
		withThemeByClassName({
			themes: { light: "", dark: "dark" },
			defaultTheme: "light",
		}),
	],
};

export default preview;
