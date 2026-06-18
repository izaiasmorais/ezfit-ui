import {
	Area,
	AreaChart as RechartsAreaChart,
	ResponsiveContainer,
	Tooltip,
	type TooltipProps,
} from "recharts";
import { cn } from "@/lib/cn";
import { chartColors } from "@/lib/tokens";
import { ChartTooltip } from "./ChartTooltip";

export interface AreaChartDatum {
	label: string;
	value: number;
}

export interface AreaChartProps {
	data: AreaChartDatum[];
	height?: number;
	color?: string;
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

export function AreaChart({
	data,
	height = 180,
	color = chartColors.accent,
	unit = "",
	className,
}: AreaChartProps) {
	const gradientId = "ezfit-area-gradient";
	return (
		<div className={cn("w-full", className)} style={{ height }}>
			<ResponsiveContainer width="100%" height="100%">
				<RechartsAreaChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: 8 }}>
					<defs>
						<linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
							<stop offset="0%" stopColor={color} stopOpacity={0.45} />
							<stop offset="100%" stopColor={color} stopOpacity={0} />
						</linearGradient>
					</defs>
					<Tooltip cursor={false} content={renderTooltip(unit)} />
					<Area
						type="monotone"
						dataKey="value"
						stroke={color}
						strokeWidth={3}
						strokeLinecap="round"
						fill={`url(#${gradientId})`}
						dot={false}
						activeDot={{ r: 5, fill: "#fff", stroke: color, strokeWidth: 3 }}
					/>
				</RechartsAreaChart>
			</ResponsiveContainer>
		</div>
	);
}
