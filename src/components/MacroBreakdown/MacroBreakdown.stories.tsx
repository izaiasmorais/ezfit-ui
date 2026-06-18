import type { Meta, StoryObj } from "@storybook/react";
import { MacroBreakdown } from "./MacroBreakdown";

const meta = {
	title: "Dados/MacroBreakdown",
	component: MacroBreakdown,
	tags: ["autodocs"],
	args: {
		items: [
			{ label: "Protein", value: "128g", goal: "meta 150g", percent: 32, color: "protein" },
			{ label: "Carbs", value: "210g", goal: "meta 280g", percent: 50, color: "carbs" },
			{ label: "Fat", value: "62g", goal: "meta 80g", percent: 18, color: "fat" },
		],
	},
	decorators: [
		(Story) => (
			<div className="w-[460px]">
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof MacroBreakdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
