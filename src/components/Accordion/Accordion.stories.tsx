import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./Accordion";

const meta: Meta<typeof Accordion> = {
	title: "Conteudo/Accordion",
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const items = [
	{
		q: "Como registrar uma refeicao?",
		a: 'Toque em "Adicionar refeicao", escolha o horario e informe os macros. O total diario e atualizado automaticamente.',
	},
	{
		q: "Como funciona a meta de agua?",
		a: "Defina uma meta diaria e registre cada copo. O tracker preenche os indicadores conforme voce avanca.",
	},
	{
		q: "Posso sincronizar um dispositivo?",
		a: "Sim. Em Configuracoes > Dispositivo, conecte seu wearable para importar treinos e batimentos.",
	},
];

export const Default: Story = {
	render: () => (
		<Accordion
			type="single"
			collapsible
			defaultValue="item-0"
			className="flex w-[420px] flex-col gap-2.5"
		>
			{items.map((item, index) => (
				<AccordionItem key={item.q} value={`item-${index}`}>
					<AccordionTrigger>{item.q}</AccordionTrigger>
					<AccordionContent>{item.a}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	),
};
