import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta = {
	title: "Inputs/Textarea",
	component: Textarea,
	tags: ["autodocs"],
	args: { label: "Notas", placeholder: "Como foi o treino?" },
	decorators: [
		(Story) => (
			<div className="w-[420px]">
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ComHint: Story = {
	args: { hint: "Opcional", rows: 4 },
};

export const ComErro: Story = {
	args: { error: "Campo obrigatorio" },
};
