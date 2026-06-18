import type { Meta, StoryObj } from "@storybook/react";
import { Crown } from "lucide-react";
import { Badge } from "./Badge";

const meta = {
	title: "Primitivos/Badge",
	component: Badge,
	tags: ["autodocs"],
	args: { children: "Badge", variant: "neutral" },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = { args: { variant: "active", children: "Active" } };
export const Info: Story = { args: { variant: "info", children: "+250ml" } };
export const Success: Story = { args: { variant: "success", children: "Completo" } };
export const Warning: Story = { args: { variant: "warning", children: "Pendente" } };
export const ErrorBadge: Story = { args: { variant: "error", children: "Acima da meta" } };
export const Neutral: Story = { args: { variant: "neutral", children: "Rascunho" } };

export const Pro: Story = {
	args: {
		variant: "pro",
		children: (
			<>
				<Crown className="size-3" />
				Pro Member
			</>
		),
	},
};

export const Gallery: Story = {
	render: () => (
		<div className="flex flex-wrap gap-2.5">
			<Badge variant="active">Active</Badge>
			<Badge variant="info">+250ml</Badge>
			<Badge variant="pro">
				<Crown className="size-3" />
				Pro Member
			</Badge>
			<Badge variant="success">Completo</Badge>
			<Badge variant="warning">Pendente</Badge>
			<Badge variant="error">Acima da meta</Badge>
			<Badge variant="neutral">Rascunho</Badge>
		</div>
	),
};
