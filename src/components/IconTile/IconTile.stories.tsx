import type { Meta, StoryObj } from "@storybook/react";
import { Droplet, Dumbbell, Flame, Utensils } from "lucide-react";
import { IconTile } from "./IconTile";

const meta = {
	title: "Primitivos/IconTile",
	component: IconTile,
	tags: ["autodocs"],
	args: { icon: Flame, tone: "fat", size: "md" },
	argTypes: {
		tone: {
			control: "select",
			options: [
				"neutral",
				"protein",
				"carbs",
				"fat",
				"cardio",
				"success",
				"warning",
				"error",
				"info",
				"accent",
			],
		},
		size: { control: "select", options: ["sm", "md", "lg", "xl"] },
	},
} satisfies Meta<typeof IconTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Tones: Story = {
	render: () => (
		<div className="flex gap-4">
			<IconTile icon={Utensils} tone="fat" />
			<IconTile icon={Droplet} tone="protein" />
			<IconTile icon={Dumbbell} tone="neutral" />
			<IconTile icon={Flame} tone="cardio" />
			<IconTile icon={Flame} tone="accent" />
		</div>
	),
};

export const Sizes: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<IconTile icon={Flame} tone="fat" size="sm" />
			<IconTile icon={Flame} tone="fat" size="md" />
			<IconTile icon={Flame} tone="fat" size="lg" />
			<IconTile icon={Flame} tone="fat" size="xl" />
		</div>
	),
};
