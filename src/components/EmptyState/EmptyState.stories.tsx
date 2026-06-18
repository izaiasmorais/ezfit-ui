import type { Meta, StoryObj } from "@storybook/react";
import { Plus, Utensils } from "lucide-react";
import { Button } from "../Button";
import { EmptyState } from "./EmptyState";

const meta = {
	title: "Feedback/EmptyState",
	component: EmptyState,
	tags: ["autodocs"],
	args: {
		icon: Utensils,
		title: "Nenhuma refeicao registrada",
		description: "Comece adicionando sua primeira refeicao do dia para acompanhar seus macros.",
	},
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		action: (
			<Button variant="accent">
				<Plus className="size-[17px]" />
				Adicionar refeicao
			</Button>
		),
	},
	decorators: [
		(Story) => (
			<div className="w-[560px]">
				<Story />
			</div>
		),
	],
};
