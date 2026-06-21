import { Add01Icon, Restaurant02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { EmptyState } from "./EmptyState";

const meta = {
	title: "Feedback/EmptyState",
	component: EmptyState,
	tags: ["autodocs"],
	args: {
		icon: Restaurant02Icon,
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
				<HugeiconsIcon icon={Add01Icon} className="size-[17px]" />
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
