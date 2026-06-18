import type { Meta, StoryObj } from "@storybook/react";
import { TrendItem, TrendList } from "./TrendItem";

const meta = {
	title: "Dados/TrendItem",
	component: TrendItem,
	tags: ["autodocs"],
	args: { label: "Peso", delta: "+2.4%", direction: "up" },
} satisfies Meta<typeof TrendItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	decorators: [
		(Story) => (
			<div className="w-72">
				<Story />
			</div>
		),
	],
};

export const List: Story = {
	render: () => (
		<TrendList className="w-72">
			<TrendItem label="Peso" delta="+2.4%" direction="up" />
			<TrendItem label="Gordura corporal" delta="-1.1%" direction="down" positiveIsUp={false} />
			<TrendItem label="Passos" delta="+12%" direction="up" />
		</TrendList>
	),
};
