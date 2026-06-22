import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DatePicker } from "./DatePicker";

const meta: Meta<typeof DatePicker> = {
	title: "Inputs/DatePicker",
	component: DatePicker,
	parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
	render: () => {
		const [value, setValue] = useState("2026-06-21");
		return (
			<div className="w-72">
				<DatePicker value={value} onChange={setValue} />
			</div>
		);
	},
};

export const Aberto: Story = {
	render: () => {
		const [value, setValue] = useState("2026-06-21");
		return (
			<div className="flex h-[460px] w-72 flex-col">
				<DatePicker value={value} onChange={setValue} />
			</div>
		);
	},
};
