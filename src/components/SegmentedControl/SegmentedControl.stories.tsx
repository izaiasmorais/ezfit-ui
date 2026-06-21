import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { SegmentedControl } from "./SegmentedControl";

const meta = {
	title: "Inputs/SegmentedControl",
	component: SegmentedControl,
	tags: ["autodocs"],
	args: {
		options: [
			{ value: "male", label: "Masculino" },
			{ value: "female", label: "Feminino" },
		],
		value: "male",
		onValueChange: () => {},
	},
} satisfies Meta<typeof SegmentedControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Genero: Story = {
	render: () => {
		const [value, setValue] = useState("male");
		return (
			<div className="w-[320px]">
				<SegmentedControl
					value={value}
					onValueChange={setValue}
					options={[
						{ value: "male", label: "Masculino" },
						{ value: "female", label: "Feminino" },
					]}
				/>
			</div>
		);
	},
};

export const Ritmo: Story = {
	render: () => {
		const [value, setValue] = useState("0.5");
		return (
			<div className="w-[420px]">
				<SegmentedControl
					size="sm"
					value={value}
					onValueChange={setValue}
					options={[
						{ value: "0.25", label: "0,25 kg" },
						{ value: "0.5", label: "0,5 kg" },
						{ value: "0.75", label: "0,75 kg" },
						{ value: "1", label: "1 kg" },
					]}
				/>
			</div>
		);
	},
};
