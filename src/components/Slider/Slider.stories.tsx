import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Slider } from "./Slider";

const meta = {
	title: "Inputs/Slider",
	component: Slider,
	tags: ["autodocs"],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="w-80">
			<Slider defaultValue={[65]} max={100} step={1} />
		</div>
	),
};

export const WithLabel: Story = {
	render: () => {
		const [value, setValue] = useState(65);
		return (
			<div className="w-80">
				<div className="mb-5 flex items-center justify-between">
					<span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
						Slider meta
					</span>
					<span className="font-mono text-[13px] font-bold">{value}%</span>
				</div>
				<Slider value={[value]} onValueChange={(v) => setValue(v[0] ?? 0)} max={100} step={1} />
			</div>
		);
	},
};
