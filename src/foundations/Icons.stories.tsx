import type { Meta, StoryObj } from "@storybook/react";
import {
	Apple,
	Bell,
	Calendar,
	Check,
	Droplet,
	Dumbbell,
	Flame,
	HeartPulse,
	LayoutGrid,
	type LucideIcon,
	Plus,
	Search,
	Settings,
	Timer,
	TrendingUp,
	User,
	Utensils,
} from "lucide-react";

const meta: Meta = {
	title: "Fundamentos/Icones",
	parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

const icons: { icon: LucideIcon; label: string }[] = [
	{ icon: LayoutGrid, label: "dashboard" },
	{ icon: Utensils, label: "dieta" },
	{ icon: Dumbbell, label: "treino" },
	{ icon: Droplet, label: "hidratacao" },
	{ icon: Flame, label: "calorias" },
	{ icon: Timer, label: "tempo" },
	{ icon: HeartPulse, label: "cardio" },
	{ icon: Settings, label: "ajustes" },
	{ icon: Calendar, label: "data" },
	{ icon: TrendingUp, label: "tendencia" },
	{ icon: Bell, label: "alertas" },
	{ icon: Search, label: "buscar" },
	{ icon: Check, label: "concluido" },
	{ icon: Plus, label: "adicionar" },
	{ icon: User, label: "perfil" },
	{ icon: Apple, label: "nutricao" },
];

export const Library: Story = {
	render: () => (
		<div className="max-w-[920px] rounded-card bg-card p-7 shadow-card">
			<h3 className="mb-1 font-mono text-xs tracking-widest text-muted-foreground uppercase">
				Icones - lucide - stroke 2px
			</h3>
			<p className="mb-6 text-[13px] text-subtle-foreground">Conjunto de linha, traco uniforme.</p>
			<div className="grid grid-cols-8 gap-4">
				{icons.map(({ icon: Icon, label }) => (
					<div
						key={label}
						className="flex flex-col items-center gap-2 rounded-[16px] bg-muted px-2 py-4"
					>
						<Icon className="size-6 text-foreground" strokeWidth={2} />
						<span className="text-[11px] text-muted-foreground">{label}</span>
					</div>
				))}
			</div>
		</div>
	),
};
