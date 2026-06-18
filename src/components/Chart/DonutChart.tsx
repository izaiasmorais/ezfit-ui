import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { cn } from "@/lib/cn";

export interface DonutChartDatum {
	name: string;
	value: number;
	color: string;
}

export interface DonutChartProps {
	data: DonutChartDatum[];
	size?: number;
	thickness?: number;
	centerValue?: string;
	centerCaption?: string;
	className?: string;
}

export function DonutChart({
	data,
	size = 120,
	thickness = 18,
	centerValue,
	centerCaption,
	className,
}: DonutChartProps) {
	return (
		<div className={cn("relative flex-none", className)} style={{ width: size, height: size }}>
			<ResponsiveContainer width="100%" height="100%">
				<PieChart>
					<Pie
						data={data}
						dataKey="value"
						nameKey="name"
						cx="50%"
						cy="50%"
						innerRadius={size / 2 - thickness}
						outerRadius={size / 2}
						startAngle={90}
						endAngle={-270}
						paddingAngle={0}
						stroke="none"
					>
						{data.map((entry) => (
							<Cell key={entry.name} fill={entry.color} />
						))}
					</Pie>
				</PieChart>
			</ResponsiveContainer>
			{centerValue || centerCaption ? (
				<div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
					{centerValue ? <span className="text-[22px] font-bold">{centerValue}</span> : null}
					{centerCaption ? (
						<span className="text-[10px] tracking-wide text-subtle-foreground uppercase">
							{centerCaption}
						</span>
					) : null}
				</div>
			) : null}
		</div>
	);
}
