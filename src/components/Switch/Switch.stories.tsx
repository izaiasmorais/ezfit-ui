import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

const meta = {
	title: "Inputs/Switch",
	component: Switch,
	tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { defaultChecked: true } };
export const Off: Story = { args: { defaultChecked: false } };
export const Disabled: Story = { args: { disabled: true, defaultChecked: true } };

export const SettingsList: Story = {
	render: () => (
		<div className="flex w-80 flex-col gap-4">
			{["Lembrete de hidratacao", "Sincronizar dispositivo", "Notificacoes de treino"].map(
				(label, index) => (
					<label key={label} className="flex items-center justify-between">
						<span className="text-sm font-medium">{label}</span>
						<Switch defaultChecked={index !== 1} />
					</label>
				),
			)}
		</div>
	),
};
