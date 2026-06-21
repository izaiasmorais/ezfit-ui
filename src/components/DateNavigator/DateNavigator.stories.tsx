import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DateNavigator } from "./DateNavigator";

const meta = {
	title: "Layout/DateNavigator",
	component: DateNavigator,
	tags: ["autodocs"],
	args: { label: "Hoje", onPrev: () => {}, onNext: () => {} },
} satisfies Meta<typeof DateNavigator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => {
		const [day, setDay] = useState(0);
		const label = day === 0 ? "Hoje" : day === -1 ? "Ontem" : day === 1 ? "Amanha" : `${day} dias`;
		return (
			<DateNavigator
				label={label}
				onPrev={() => setDay((d) => d - 1)}
				onNext={() => setDay((d) => d + 1)}
				onLabelClick={() => setDay(0)}
				nextDisabled={day >= 1}
			/>
		);
	},
};
