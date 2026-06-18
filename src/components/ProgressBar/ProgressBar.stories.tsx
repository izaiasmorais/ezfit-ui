import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "./ProgressBar";

const meta = {
	title: "Dados/ProgressBar",
	component: ProgressBar,
	tags: ["autodocs"],
	args: { value: 74, label: "Proteina", valueLabel: "74%", color: "protein" },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	decorators: [
		(Story) => (
			<div className="w-80">
				<Story />
			</div>
		),
	],
};

export const Stack: Story = {
	render: () => (
		<div className="flex w-96 flex-col gap-[22px]">
			<ProgressBar value={74} label="Proteina" valueLabel="74%" color="protein" />
			<ProgressBar value={52} label="Carboidratos" valueLabel="52%" color="carbs" />
			<ProgressBar
				value={90}
				label="Meta de agua"
				valueLabel="90% - 200ml restantes"
				color="accent"
			/>
		</div>
	),
};
