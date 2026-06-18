import { forwardRef } from "react";
import { cn } from "@/lib/cn";
import type { CategoryColor } from "@/lib/tokens";

export interface MacroItem {
	label: string;
	value: string;
	goal?: string;
	percent: number;
	color: CategoryColor;
}

export interface MacroBreakdownProps extends React.HTMLAttributes<HTMLDivElement> {
	items: MacroItem[];
}

const cellTone: Record<CategoryColor, { bg: string; text: string }> = {
	protein: { bg: "bg-protein-bg", text: "text-protein" },
	carbs: { bg: "bg-carbs-bg", text: "text-carbs-text" },
	fat: { bg: "bg-fat-bg", text: "text-fat" },
	cardio: { bg: "bg-cardio-bg", text: "text-cardio" },
	accent: { bg: "bg-accent/15", text: "text-accent-foreground" },
	primary: { bg: "bg-secondary", text: "text-foreground" },
};

const barColor: Record<CategoryColor, string> = {
	protein: "var(--protein)",
	carbs: "var(--carbs)",
	fat: "var(--fat)",
	cardio: "var(--cardio)",
	accent: "var(--accent)",
	primary: "var(--primary)",
};

export const MacroBreakdown = forwardRef<HTMLDivElement, MacroBreakdownProps>(
	({ className, items, ...props }, ref) => (
		<div ref={ref} className={cn("flex flex-col", className)} {...props}>
			<div className="grid gap-3.5" style={{ gridTemplateColumns: `repeat(${items.length}, 1fr)` }}>
				{items.map((item) => {
					const tone = cellTone[item.color];
					return (
						<div key={item.label} className={cn("rounded-tile p-5 text-center", tone.bg)}>
							<div className={cn("text-[26px] font-bold", tone.text)}>{item.value}</div>
							<div className={cn("mt-0.5 text-[13px] font-semibold", tone.text)}>{item.label}</div>
							{item.goal ? (
								<div className="mt-1.5 text-[11px] text-subtle-foreground">{item.goal}</div>
							) : null}
						</div>
					);
				})}
			</div>
			<div className="mt-5 flex h-3 overflow-hidden rounded-pill">
				{items.map((item) => (
					<div
						key={item.label}
						style={{ width: `${item.percent}%`, background: barColor[item.color] }}
					/>
				))}
			</div>
			<div className="mt-2 flex justify-between text-[11px] text-subtle-foreground">
				{items.map((item) => (
					<span key={item.label}>
						{item.label} {item.percent}%
					</span>
				))}
			</div>
		</div>
	),
);

MacroBreakdown.displayName = "MacroBreakdown";
