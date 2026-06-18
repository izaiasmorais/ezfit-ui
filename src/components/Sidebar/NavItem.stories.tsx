import type { Meta, StoryObj } from "@storybook/react";
import { Dumbbell } from "lucide-react";
import { NavItem } from "./NavItem";

const meta = {
	title: "Layout/NavItem",
	component: NavItem,
	tags: ["autodocs"],
	args: { icon: Dumbbell, label: "Workouts" },
} satisfies Meta<typeof NavItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Active: Story = { args: { active: true } };

export const States: Story = {
	render: () => (
		<div className="flex w-56 flex-col gap-2">
			<NavItem icon={Dumbbell} label="Default" />
			<NavItem icon={Dumbbell} label="Active" active />
		</div>
	),
};
