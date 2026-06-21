import {
	Activity01Icon,
	Add01Icon,
	Apple01Icon,
	Calendar03Icon,
	ChartUpIcon,
	DashboardSquare01Icon,
	DropletIcon,
	Dumbbell01Icon,
	FireIcon,
	Notification03Icon,
	Restaurant02Icon,
	Search01Icon,
	Settings01Icon,
	Tick02Icon,
	Timer01Icon,
	UserIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
	title: "Fundamentos/Icones",
	parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

const icons: { icon: IconSvgElement; label: string }[] = [
	{ icon: DashboardSquare01Icon, label: "dashboard" },
	{ icon: Restaurant02Icon, label: "dieta" },
	{ icon: Dumbbell01Icon, label: "treino" },
	{ icon: DropletIcon, label: "hidratacao" },
	{ icon: FireIcon, label: "calorias" },
	{ icon: Timer01Icon, label: "tempo" },
	{ icon: Activity01Icon, label: "cardio" },
	{ icon: Settings01Icon, label: "ajustes" },
	{ icon: Calendar03Icon, label: "data" },
	{ icon: ChartUpIcon, label: "tendencia" },
	{ icon: Notification03Icon, label: "alertas" },
	{ icon: Search01Icon, label: "buscar" },
	{ icon: Tick02Icon, label: "concluido" },
	{ icon: Add01Icon, label: "adicionar" },
	{ icon: UserIcon, label: "perfil" },
	{ icon: Apple01Icon, label: "nutricao" },
];

export const Library: Story = {
	render: () => (
		<div className="max-w-[920px] rounded-card bg-card p-7 shadow-card">
			<h3 className="mb-1 font-mono text-xs tracking-widest text-muted-foreground uppercase">
				Icones - hugeicons - stroke 2px
			</h3>
			<p className="mb-6 text-[13px] text-subtle-foreground">Conjunto de linha, traco uniforme.</p>
			<div className="grid grid-cols-8 gap-4">
				{icons.map(({ icon: Icon, label }) => (
					<div
						key={label}
						className="flex flex-col items-center gap-2 rounded-[16px] bg-muted px-2 py-4"
					>
						<HugeiconsIcon icon={Icon} className="size-6 text-foreground" strokeWidth={2} />
						<span className="text-[11px] text-muted-foreground">{label}</span>
					</div>
				))}
			</div>
		</div>
	),
};
