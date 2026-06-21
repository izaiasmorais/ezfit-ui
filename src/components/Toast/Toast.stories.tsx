import { Tick02Icon } from "@hugeicons/core-free-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { ToastProvider, useToast } from "./Toast";

const meta: Meta = {
	title: "Feedback/Toast",
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<ToastProvider>
				<Story />
			</ToastProvider>
		),
	],
};

export default meta;
type Story = StoryObj;

function Demo() {
	const { toast } = useToast();
	return (
		<Button
			variant="accent"
			onClick={() =>
				toast({
					title: "Treino registrado",
					description: "Sua sessao de cardio foi salva.",
					icon: Tick02Icon,
				})
			}
		>
			Disparar toast
		</Button>
	);
}

export const Default: Story = {
	render: () => <Demo />,
};
