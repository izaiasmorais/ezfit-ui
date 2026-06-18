import {
	Bar,
	Cell,
	BarChart as RechartsBarChart,
	ResponsiveContainer,
	Tooltip,
	type TooltipProps,
	XAxis,
} from "recharts";
import { cn } from "@/lib/cn";
import { chartColors } from "@/lib/tokens";
import { ChartTooltip } from "./ChartTooltip";

export interface BarChartDatum {
	label: string;
	value: number;
}

export interface BarChartProps {
	data: BarChartDatum[];
	activeIndex?: number;
	height?: number;
	unit?: string;
	className?: string;
}

function renderTooltip(unit: string) {
	return function TooltipContent({ active, payload, label }: TooltipProps<number, string>) {
		if (!active || !payload?.length) return null;
		const point = payload[0];
		return (
			<ChartTooltip
				title={String(label)}
				rows={[
					{
						label: "Valor",
						value: `${point?.value ?? 0}${unit ? ` ${unit}` : ""}`,
						color: chartColors.accent,
					},
				]}
			/>
		);
	};
}

export function BarChart({ data, activeIndex, height = 220, unit = "", className }: BarChartProps) {
	return (
		<div className={cn("w-full", className)} style={{ height }}>
			<ResponsiveContainer width="100%" height="100%">
				<RechartsBarChart data={data} margin={{ top: 24, right: 0, bottom: 0, left: 0 }}>
					<XAxis
						dataKey="label"
						axisLine={false}
						tickLine={false}
						tick={{ fontSize: 11, fill: "#94A3B8" }}
						dy={8}
					/>
					<Tooltip cursor={false} content={renderTooltip(unit)} />
					<Bar dataKey="value" radius={[10, 10, 10, 10]} maxBarSize={40}>
						{data.map((entry, index) => (
							<Cell
								key={entry.label}
								fill={index === activeIndex ? chartColors.accent : "#CBD5E1"}
							/>
						))}
					</Bar>
				</RechartsBarChart>
			</ResponsiveContainer>
		</div>
	);
}
