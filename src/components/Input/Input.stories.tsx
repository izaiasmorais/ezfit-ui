import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { SearchInput } from "./SearchInput";

const meta = {
	title: "Inputs/Input",
	component: Input,
	tags: ["autodocs"],
	args: { label: "Nome da refeicao", placeholder: "Ex.: Cafe da manha" },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithSuffix: Story = {
	args: { label: "Calorias", defaultValue: "450", suffix: "kcal" },
};
export const WithError: Story = {
	args: { label: "Input com erro", defaultValue: "abc", error: "Digite um valor numerico valido." },
};
export const WithHint: Story = {
	args: { label: "Agua", defaultValue: "1.8", suffix: "L", hint: "Meta diaria de 3.0L." },
};
export const Disabled: Story = {
	args: { label: "Bloqueado", defaultValue: "Indisponivel", disabled: true },
};

export const Search: Story = {
	render: () => (
		<div className="w-80">
			<SearchInput label="Buscar" placeholder="Buscar refeicoes, treinos..." />
		</div>
	),
};

export const Form: Story = {
	render: () => (
		<div className="flex w-96 flex-col gap-[18px]">
			<Input label="Nome da refeicao" placeholder="Ex.: Cafe da manha" />
			<div className="flex gap-3.5">
				<Input label="Calorias" defaultValue="450" suffix="kcal" className="flex-1" />
				<Input label="Agua" defaultValue="1.8" suffix="L" className="flex-1" />
			</div>
			<SearchInput label="Buscar" placeholder="Buscar refeicoes, treinos..." />
			<Input label="Input com erro" defaultValue="abc" error="Digite um valor numerico valido." />
		</div>
	),
};
