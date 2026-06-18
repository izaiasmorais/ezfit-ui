import type { Meta, StoryObj } from "@storybook/react";
import { ProgressRing } from "./ProgressRing";

const meta = {
	title: "Dados/ProgressRing",
	component: ProgressRing,
	tags: ["autodocs"],
	args: { value: 72, caption: "meta diaria" },
} satisfies Meta<typeof ProgressRing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Sizes: Story = {
	render: () => (
		<div className="flex items-center gap-8">
			<ProgressRing value={72} size={100} strokeWidth={10} caption="meta" />
			<ProgressRing value={72} caption="meta diaria" />
			<ProgressRing value={45} size={160} color="var(--protein)" caption="proteina" />
		</div>
	),
};
