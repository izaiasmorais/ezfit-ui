import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { HydrationTracker } from "./HydrationTracker";

const meta = {
	title: "Dados/HydrationTracker",
	component: HydrationTracker,
	tags: ["autodocs"],
	args: { total: 8, filled: 4, caption: "4 de 8 copos - 1.8L / 3.0L" },
} satisfies Meta<typeof HydrationTracker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	decorators: [
		(Story) => (
			<div className="w-[460px]">
				<Story />
			</div>
		),
	],
};

export const Interactive: Story = {
	render: () => {
		const [filled, setFilled] = useState(4);
		return (
			<div className="w-[460px]">
				<HydrationTracker
					total={8}
					filled={filled}
					caption={`${filled} de 8 copos`}
					onCupClick={(index) => setFilled(index + 1 === filled ? index : index + 1)}
				/>
			</div>
		);
	},
};
