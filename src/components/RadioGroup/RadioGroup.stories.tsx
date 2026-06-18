import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "./RadioGroup";

const meta = {
	title: "Inputs/RadioGroup",
	component: RadioGroup,
	tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Intensity: Story = {
	render: () => (
		<RadioGroup defaultValue="moderado">
			<RadioGroupItem value="leve" label="Leve" />
			<RadioGroupItem value="moderado" label="Moderado" />
			<RadioGroupItem value="intenso" label="Intenso" />
		</RadioGroup>
	),
};
