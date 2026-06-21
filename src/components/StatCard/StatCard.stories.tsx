import { DropletIcon, FireIcon, Restaurant02Icon, Timer01Icon } from "@hugeicons/core-free-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../Badge";
import { StatCard } from "./StatCard";

const meta = {
	title: "Dados/StatCard",
	component: StatCard,
	tags: ["autodocs"],
	args: { icon: FireIcon, label: "Calorias Queimadas", value: 684 },
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {
		variant: "light",
		icon: Restaurant02Icon,
		iconTone: "fat",
		label: "Calorias Consumidas",
		value: "1.840",
		progress: { value: 74, caption: "660 kcal restantes", color: "var(--fat)" },
		trend: <Badge variant="neutral">0%</Badge>,
	},
};

export const Accent: Story = {
	args: {
		variant: "accent",
		icon: FireIcon,
		label: "Calorias Queimadas",
		value: 684,
		trend: <Badge variant="pro">Active</Badge>,
	},
};

export const Dark: Story = {
	args: {
		variant: "dark",
		icon: Timer01Icon,
		iconTone: "onDark",
		label: "Tempo Ativo",
		value: 45,
		unit: "min",
	},
};

export const Grid: Story = {
	render: () => (
		<div className="grid w-[920px] grid-cols-4 gap-5">
			<StatCard
				icon={Restaurant02Icon}
				iconTone="fat"
				label="Calorias Consumidas"
				value="1.840"
				trend={<Badge variant="neutral">0%</Badge>}
				progress={{ value: 74, caption: "660 kcal restantes", color: "var(--fat)" }}
			/>
			<StatCard
				variant="accent"
				icon={FireIcon}
				label="Calorias Queimadas"
				value={684}
				trend={<Badge variant="pro">Active</Badge>}
			/>
			<StatCard
				icon={DropletIcon}
				iconTone="protein"
				label="Hidratacao"
				value="1.8"
				unit="L"
				trend={<Badge variant="info">+250ml</Badge>}
			/>
			<StatCard
				variant="dark"
				icon={Timer01Icon}
				iconTone="onDark"
				label="Tempo Ativo"
				value={45}
				unit="min"
			/>
		</div>
	),
};
