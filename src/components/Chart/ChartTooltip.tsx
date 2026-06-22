import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export interface ChartTooltipRow {
	label: string;
	value: string;
	color?: string;
}

export interface ChartTooltipProps extends React.HTMLAttributes<HTMLDivElement> {
	title?: string;
	rows: ChartTooltipRow[];
}

export const ChartTooltip = forwardRef<HTMLDivElement, ChartTooltipProps>(
	({ className, title, rows, ...props }, ref) => (
		<div
			ref={ref}
			className={cn(
				"min-w-[150px] rounded-[14px] bg-primary px-4 py-3 text-primary-foreground",
				className,
			)}
			{...props}
		>
			{title ? <div className="mb-1.5 text-[11px] text-subtle-foreground">{title}</div> : null}
			{rows.map((row) => (
				<div key={row.label} className="flex items-center gap-2 text-[13px] font-semibold">
					{row.color ? (
						<span className="size-[9px] flex-none rounded-full" style={{ background: row.color }} />
					) : null}
					{row.label}
					<span className="ml-auto">{row.value}</span>
				</div>
			))}
		</div>
	),
);

ChartTooltip.displayName = "ChartTooltip";
