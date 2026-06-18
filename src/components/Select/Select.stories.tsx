import type { Meta, StoryObj } from "@storybook/react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./Select";

const meta = {
	title: "Inputs/Select",
	component: Select,
	tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="w-52">
			<Select defaultValue="hoje">
				<SelectTrigger>
					<SelectValue placeholder="Selecione" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="hoje">Hoje</SelectItem>
					<SelectItem value="semana">Esta semana</SelectItem>
					<SelectItem value="mes">Este mes</SelectItem>
				</SelectContent>
			</Select>
		</div>
	),
};

export const Placeholder: Story = {
	render: () => (
		<div className="w-52">
			<Select>
				<SelectTrigger>
					<SelectValue placeholder="Escolha um periodo" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="hoje">Hoje</SelectItem>
					<SelectItem value="semana">Esta semana</SelectItem>
					<SelectItem value="mes">Este mes</SelectItem>
				</SelectContent>
			</Select>
		</div>
	),
};
