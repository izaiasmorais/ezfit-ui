import { Add01Icon, Settings01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
	title: "Primitivos/Button",
	component: Button,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["primary", "accent", "secondary", "ghost", "destructive"],
		},
		size: { control: "select", options: ["sm", "md", "icon"] },
	},
	args: { children: "Botao", variant: "primary", size: "md" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { variant: "primary", children: "Primario" } };
export const Accent: Story = { args: { variant: "accent", children: "Accent" } };
export const Secondary: Story = { args: { variant: "secondary", children: "Secundario" } };
export const Ghost: Story = { args: { variant: "ghost", children: "Ghost" } };
export const Destructive: Story = { args: { variant: "destructive", children: "Destructive" } };

export const WithIcon: Story = {
	args: {
		children: (
			<>
				<HugeiconsIcon icon={Add01Icon} className="size-[17px]" />
				Com icone
			</>
		),
	},
};

export const IconOnly: Story = {
	args: {
		size: "icon",
		variant: "secondary",
		children: <HugeiconsIcon icon={Settings01Icon} className="size-[19px]" />,
	},
};

export const Disabled: Story = {
	args: { disabled: true, variant: "secondary", children: "Disabled" },
};
export const Loading: Story = { args: { loading: true, children: "Salvando" } };

export const AllVariants: Story = {
	render: () => (
		<div className="flex flex-wrap items-center gap-3.5">
			<Button variant="primary">Primario</Button>
			<Button variant="accent">Accent</Button>
			<Button variant="secondary">Secundario</Button>
			<Button variant="ghost">Ghost</Button>
			<Button variant="destructive">Destructive</Button>
			<Button>
				<HugeiconsIcon icon={Add01Icon} className="size-[17px]" />
				Com icone
			</Button>
			<Button size="icon" variant="secondary">
				<HugeiconsIcon icon={Settings01Icon} className="size-[19px]" />
			</Button>
			<Button variant="secondary" disabled>
				Disabled
			</Button>
		</div>
	),
};
