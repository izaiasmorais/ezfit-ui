import {
	ActivityIcon,
	Dumbbell01Icon,
	RunningShoesIcon,
	WorkoutKickingIcon,
} from "@hugeicons/core-free-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { SelectableCard, SelectableCardGroup } from "./SelectableCard";

const meta = {
	title: "Inputs/SelectableCard",
	component: SelectableCard,
	tags: ["autodocs"],
	args: { title: "Moderado", description: "3 a 5 treinos por semana" },
} satisfies Meta<typeof SelectableCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Lista: Story = {
	render: () => {
		const [value, setValue] = useState("moderate");
		return (
			<div className="w-[460px]">
				<SelectableCardGroup
					value={value}
					onValueChange={setValue}
					items={[
						{ value: "sedentary", title: "Sedentario", description: "Pouco ou nenhum exercicio" },
						{ value: "light", title: "Leve", description: "1 a 3 treinos por semana" },
						{ value: "moderate", title: "Moderado", description: "3 a 5 treinos por semana" },
						{ value: "active", title: "Ativo", description: "6 a 7 treinos por semana" },
					]}
				/>
			</div>
		);
	},
};

export const GridComIcones: Story = {
	render: () => {
		const [value, setValue] = useState("desk");
		return (
			<div className="w-[460px]">
				<SelectableCardGroup
					columns={2}
					value={value}
					onValueChange={setValue}
					items={[
						{ value: "desk", title: "Escritorio", icon: ActivityIcon },
						{ value: "light", title: "Em pe leve", icon: RunningShoesIcon },
						{ value: "active", title: "Ativo", icon: WorkoutKickingIcon },
						{ value: "heavy", title: "Trabalho pesado", icon: Dumbbell01Icon },
					]}
				/>
			</div>
		);
	},
};
