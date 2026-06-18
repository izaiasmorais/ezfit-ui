import type { Meta, StoryObj } from "@storybook/react";
import { Banner } from "./Banner";

const meta = {
	title: "Feedback/Banner",
	component: Banner,
	tags: ["autodocs"],
	args: {
		variant: "info",
		title: "Novo recurso.",
		children: "Agora voce pode exportar relatorios.",
	},
	argTypes: { variant: { control: "select", options: ["success", "warning", "error", "info"] } },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
	args: {
		variant: "success",
		title: "Meta atingida!",
		children: "Voce bateu sua meta de proteina hoje.",
	},
};
export const Warning: Story = {
	args: {
		variant: "warning",
		title: "Hidratacao baixa.",
		children: "Faltam 1.2L para sua meta diaria.",
	},
};
export const ErrorBanner: Story = {
	args: {
		variant: "error",
		title: "Falha na sincronizacao.",
		children: "Nao foi possivel conectar ao dispositivo.",
	},
};
export const InfoBanner: Story = {
	args: {
		variant: "info",
		title: "Novo recurso.",
		children: "Agora voce pode exportar seus relatorios semanais.",
	},
};

export const Dismissible: Story = {
	args: { onDismiss: () => undefined },
	decorators: [
		(Story) => (
			<div className="w-[560px]">
				<Story />
			</div>
		),
	],
};

export const Stack: Story = {
	render: () => (
		<div className="flex w-[560px] flex-col gap-3">
			<Banner variant="success" title="Meta atingida!" onDismiss={() => undefined}>
				Voce bateu sua meta de proteina hoje.
			</Banner>
			<Banner variant="warning" title="Hidratacao baixa." onDismiss={() => undefined}>
				Faltam 1.2L para sua meta diaria.
			</Banner>
			<Banner variant="error" title="Falha na sincronizacao." onDismiss={() => undefined}>
				Nao foi possivel conectar ao dispositivo.
			</Banner>
			<Banner variant="info" title="Novo recurso." onDismiss={() => undefined}>
				Agora voce pode exportar seus relatorios semanais.
			</Banner>
		</div>
	),
};
