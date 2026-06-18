import type { Meta, StoryObj } from "@storybook/react";
import { Coffee, Droplet, Dumbbell, Fish, Flame, HeartPulse, Salad } from "lucide-react";
import { HydrationListItem, type ListItem, MealListItem, WorkoutListItem } from "./ListItem";

const meta: Meta<typeof ListItem> = {
	title: "Conteudo/ListItem",
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Meals: Story = {
	render: () => (
		<div className="flex w-[640px] flex-col gap-3">
			<MealListItem
				icon={Coffee}
				iconTone="fat"
				title="Cafe da manha"
				subtitle="08:00 - Aveia, ovos, frutas"
				protein={32}
				carbs={48}
				fat={14}
				calories={450}
			/>
			<MealListItem
				icon={Salad}
				iconTone="cardio"
				title="Almoco"
				subtitle="12:30 - Frango, arroz, salada"
				protein={52}
				carbs={80}
				fat={22}
				calories={720}
			/>
			<MealListItem
				icon={Fish}
				iconTone="protein"
				title="Jantar"
				subtitle="19:30 - Salmao, legumes"
				protein={44}
				carbs={32}
				fat={26}
				calories={540}
			/>
		</div>
	),
};

export const Workouts: Story = {
	render: () => (
		<div className="flex w-[640px] flex-col gap-3">
			<WorkoutListItem
				icon={HeartPulse}
				iconTone="cardio"
				title="Cardio - Esteira"
				subtitle="Intensidade moderada"
				duration="30 min"
				calories={320}
			/>
			<WorkoutListItem
				icon={Flame}
				iconTone="carbs"
				title="Warmup - Alongamento"
				subtitle="Mobilidade"
				duration="15 min"
				calories={90}
			/>
			<WorkoutListItem
				icon={Dumbbell}
				iconTone="neutral"
				title="Forca - Superiores"
				subtitle="4 series - 12 reps"
				duration="40 min"
				calories={280}
			/>
		</div>
	),
};

export const Hydration: Story = {
	render: () => (
		<div className="flex w-[640px] flex-col gap-3">
			<HydrationListItem
				icon={Droplet}
				iconTone="protein"
				title="Manha"
				subtitle="3 copos registrados"
				amount="750 ml"
			/>
			<HydrationListItem
				icon={Droplet}
				iconTone="protein"
				title="Tarde"
				subtitle="4 copos registrados"
				amount="1.0 L"
			/>
			<HydrationListItem
				icon={Droplet}
				iconTone="neutral"
				title="Noite"
				subtitle="Meta restante"
				amount="250 ml"
				muted
			/>
		</div>
	),
};
