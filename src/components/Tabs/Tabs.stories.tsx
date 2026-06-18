import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";

const meta = {
	title: "Conteudo/Tabs",
	component: Tabs,
	tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Tabs defaultValue="meals" className="w-[420px]">
			<TabsList>
				<TabsTrigger value="meals">Refeicoes</TabsTrigger>
				<TabsTrigger value="work">Treinos</TabsTrigger>
				<TabsTrigger value="hydro">Hidratacao</TabsTrigger>
			</TabsList>
			<TabsContent value="meals" className="text-sm text-muted-foreground">
				Lista de refeicoes do dia.
			</TabsContent>
			<TabsContent value="work" className="text-sm text-muted-foreground">
				Treinos registrados.
			</TabsContent>
			<TabsContent value="hydro" className="text-sm text-muted-foreground">
				Registro de hidratacao.
			</TabsContent>
		</Tabs>
	),
};
