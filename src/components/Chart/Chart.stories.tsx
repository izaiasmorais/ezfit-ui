import type { Meta, StoryObj } from "@storybook/react";
import { chartColors } from "@/lib/tokens";
import { AreaChart } from "./AreaChart";
import { BarChart } from "./BarChart";
import { ChartEmptyState } from "./ChartEmptyState";
import { ChartLegend } from "./ChartLegend";
import { ChartTooltip } from "./ChartTooltip";
import { DonutChart } from "./DonutChart";

const meta: Meta = {
	title: "Graficos/Charts",
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

const barData = [
	{ label: "6h", value: 120 },
	{ label: "9h", value: 250 },
	{ label: "12h", value: 190 },
	{ label: "15h", value: 400 },
	{ label: "18h", value: 412 },
	{ label: "21h", value: 150 },
];

const areaData = [
	{ label: "Seg", value: 320 },
	{ label: "Ter", value: 480 },
	{ label: "Qua", value: 410 },
	{ label: "Qui", value: 620 },
	{ label: "Sex", value: 540 },
	{ label: "Sab", value: 720 },
	{ label: "Dom", value: 600 },
];

const donutData = [
	{ name: "Protein", value: 32, color: chartColors.protein },
	{ name: "Carbs", value: 50, color: chartColors.carbs },
	{ name: "Fat", value: 18, color: chartColors.fat },
];

export const Bar: Story = {
	render: () => (
		<div className="w-[560px] rounded-card bg-card p-7 shadow-card">
			<h3 className="text-lg font-bold">Activity Overview</h3>
			<p className="mb-2 text-[13px] text-subtle-foreground">Hourly intensity breakdown</p>
			<BarChart data={barData} activeIndex={4} unit="kcal" />
		</div>
	),
};

export const Area: Story = {
	render: () => (
		<div className="w-[420px] rounded-card bg-card p-7 shadow-card">
			<h3 className="text-lg font-bold">Calorias Queimadas</h3>
			<p className="mb-4 text-[13px] text-subtle-foreground">Ultimos 7 dias</p>
			<AreaChart data={areaData} unit="kcal" />
		</div>
	),
};

export const Donut: Story = {
	render: () => (
		<div className="w-[420px] rounded-card bg-card p-7 shadow-card">
			<div className="flex items-center gap-5">
				<DonutChart data={donutData} centerValue="2.1k" centerCaption="kcal" />
				<ChartLegend
					className="flex-col gap-2.5"
					items={donutData.map((d) => ({
						label: d.name,
						value: `${d.value}%`,
						color: d.color,
						shape: "square",
					}))}
				/>
			</div>
		</div>
	),
};

export const Tooltip: Story = {
	render: () => (
		<ChartTooltip
			title="Quarta - 14h"
			rows={[{ label: "Calorias", value: "412 kcal", color: chartColors.accent }]}
		/>
	),
};

export const Legend: Story = {
	render: () => (
		<ChartLegend
			items={[
				{ label: "Cardio", value: "30m", color: chartColors.accent },
				{ label: "Warmup", value: "15m", color: chartColors.carbs },
			]}
		/>
	),
};

export const Empty: Story = {
	render: () => (
		<div className="w-[320px]">
			<ChartEmptyState />
		</div>
	),
};
