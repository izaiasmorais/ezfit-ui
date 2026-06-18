import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta = {
	title: "Inputs/Checkbox",
	component: Checkbox,
	tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = { args: { defaultChecked: true, label: "Cafe da manha" } };
export const Unchecked: Story = { args: { defaultChecked: false, label: "Almoco" } };
export const Disabled: Story = {
	args: { disabled: true, defaultChecked: true, label: "Bloqueado" },
};

export const List: Story = {
	render: () => (
		<div className="flex flex-col gap-3.5">
			<Checkbox defaultChecked label="Cafe da manha" />
			<Checkbox label="Almoco" />
			<Checkbox defaultChecked label="Jantar" />
		</div>
	),
};
