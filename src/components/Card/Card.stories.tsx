import type { Meta, StoryObj } from "@storybook/react";
import { Moon, Square, Zap } from "lucide-react";
import { IconTile } from "../IconTile";
import { Card, CardDescription, CardTitle } from "./Card";

const meta = {
	title: "Primitivos/Card",
	component: Card,
	tags: ["autodocs"],
	argTypes: {
		variant: { control: "select", options: ["light", "dark", "accent"] },
		padding: { control: "select", options: ["none", "sm", "md"] },
	},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	render: () => (
		<Card variant="light" className="min-h-[150px] w-72">
			<IconTile icon={Square} tone="neutral" className="mb-4" />
			<CardTitle className="mb-1">Light</CardTitle>
			<CardDescription>Card padrao sobre fundo claro.</CardDescription>
		</Card>
	),
};

export const Dark: Story = {
	render: () => (
		<Card variant="dark" className="min-h-[150px] w-72">
			<IconTile icon={Moon} tone="onDark" className="mb-4" />
			<CardTitle className="mb-1">Dark</CardTitle>
			<CardDescription className="text-subtle-foreground">
				Para metricas de destaque e contraste.
			</CardDescription>
		</Card>
	),
};

export const Accent: Story = {
	render: () => (
		<Card variant="accent" className="min-h-[150px] w-72">
			<IconTile icon={Zap} tone="onAccent" className="mb-4" />
			<CardTitle className="mb-1">Accent / Highlight</CardTitle>
			<CardDescription className="text-accent-muted-foreground">
				Chama atencao para o card ativo.
			</CardDescription>
		</Card>
	),
};

export const Variants: Story = {
	render: () => (
		<div className="grid grid-cols-3 gap-5">
			<Card variant="light" className="min-h-[150px]">
				<IconTile icon={Square} tone="neutral" className="mb-4" />
				<CardTitle className="mb-1">Light</CardTitle>
				<CardDescription>Card padrao sobre fundo claro.</CardDescription>
			</Card>
			<Card variant="dark" className="min-h-[150px]">
				<IconTile icon={Moon} tone="onDark" className="mb-4" />
				<CardTitle className="mb-1">Dark</CardTitle>
				<CardDescription className="text-subtle-foreground">
					Para metricas de destaque.
				</CardDescription>
			</Card>
			<Card variant="accent" className="min-h-[150px]">
				<IconTile icon={Zap} tone="onAccent" className="mb-4" />
				<CardTitle className="mb-1">Accent</CardTitle>
				<CardDescription className="text-accent-muted-foreground">
					Chama atencao para o card ativo.
				</CardDescription>
			</Card>
		</div>
	),
};
