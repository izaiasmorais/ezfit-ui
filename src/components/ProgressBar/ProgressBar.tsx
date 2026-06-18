import { forwardRef } from "react";
import { cn } from "@/lib/cn";
import type { CategoryColor } from "@/lib/tokens";

const colorVar: Record<CategoryColor, string> = {
	protein: "var(--protein)",
	carbs: "var(--carbs)",
	fat: "var(--fat)",
	cardio: "var(--cardio)",
	accent: "var(--accent)",
	primary: "var(--primary)",
};

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
	value: number;
	label?: string;
	valueLabel?: string;
	color?: CategoryColor;
}

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
	({ className, value, label, valueLabel, color = "accent", ...props }, ref) => {
		const clamped = Math.min(100, Math.max(0, value));
		return (
			<div ref={ref} className={cn("flex flex-col", className)} {...props}>
				{label || valueLabel ? (
					<div className="mb-2 flex justify-between text-[13px]">
						{label ? <span className="font-semibold">{label}</span> : <span />}
						{valueLabel ? <span className="text-muted-foreground">{valueLabel}</span> : null}
					</div>
				) : null}
				<div
					role="progressbar"
					aria-valuenow={clamped}
					aria-valuemin={0}
					aria-valuemax={100}
					className="h-[9px] overflow-hidden rounded-pill bg-secondary"
				>
					<div
						className="h-full rounded-pill transition-[width] duration-300"
						style={{ width: `${clamped}%`, background: colorVar[color] }}
					/>
				</div>
			</div>
		);
	},
);

ProgressBar.displayName = "ProgressBar";
