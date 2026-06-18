import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export interface ChartLegendItem {
	label: string;
	value?: string;
	color: string;
	shape?: "dot" | "square";
}

export interface ChartLegendProps extends React.HTMLAttributes<HTMLDivElement> {
	items: ChartLegendItem[];
}

export const ChartLegend = forwardRef<HTMLDivElement, ChartLegendProps>(
	({ className, items, ...props }, ref) => (
		<div ref={ref} className={cn("flex flex-wrap gap-3", className)} {...props}>
			{items.map((item) => (
				<div key={item.label} className="inline-flex items-center gap-[7px] text-[13px]">
					<span
						className={cn(
							"size-[11px] flex-none",
							item.shape === "square" ? "rounded-[4px]" : "rounded-full",
						)}
						style={{ background: item.color }}
					/>
					{item.label}
					{item.value ? <span className="text-subtle-foreground">{item.value}</span> : null}
				</div>
			))}
		</div>
	),
);

ChartLegend.displayName = "ChartLegend";
