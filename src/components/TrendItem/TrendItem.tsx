import { ChartDownIcon, ChartUpIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export type TrendDirection = "up" | "down";

export interface TrendItemProps extends React.HTMLAttributes<HTMLDivElement> {
	label: string;
	delta: string;
	direction: TrendDirection;
	positiveIsUp?: boolean;
}

export const TrendItem = forwardRef<HTMLDivElement, TrendItemProps>(
	({ className, label, delta, direction, positiveIsUp = true, ...props }, ref) => {
		const isPositive = direction === "up" ? positiveIsUp : !positiveIsUp;
		const Icon = direction === "up" ? ChartUpIcon : ChartDownIcon;
		return (
			<div ref={ref} className={cn("flex items-center justify-between", className)} {...props}>
				<span className="text-sm font-semibold">{label}</span>
				<span
					className={cn(
						"inline-flex items-center gap-1.5 text-sm font-bold",
						isPositive ? "text-success" : "text-error",
					)}
				>
					<HugeiconsIcon icon={Icon} className="size-4" />
					{delta}
				</span>
			</div>
		);
	},
);
TrendItem.displayName = "TrendItem";

export const TrendList = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn("flex flex-col gap-4", className)} {...props} />
	),
);
TrendList.displayName = "TrendList";
