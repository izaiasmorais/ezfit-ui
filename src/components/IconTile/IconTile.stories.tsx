import {
	DropletIcon,
	Dumbbell01Icon,
	FireIcon,
	Restaurant02Icon,
} from "@hugeicons/core-free-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { IconTile } from "./IconTile";

const meta = {
	title: "Primitivos/IconTile",
	component: IconTile,
	tags: ["autodocs"],
	args: { icon: FireIcon, tone: "fat", size: "md" },
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
			<IconTile icon={Restaurant02Icon} tone="fat" />
			<IconTile icon={DropletIcon} tone="protein" />
			<IconTile icon={Dumbbell01Icon} tone="neutral" />
			<IconTile icon={FireIcon} tone="cardio" />
			<IconTile icon={FireIcon} tone="accent" />
		</div>
	),
};

export const Sizes: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<IconTile icon={FireIcon} tone="fat" size="sm" />
			<IconTile icon={FireIcon} tone="fat" size="md" />
			<IconTile icon={FireIcon} tone="fat" size="lg" />
			<IconTile icon={FireIcon} tone="fat" size="xl" />
		</div>
	),
};
