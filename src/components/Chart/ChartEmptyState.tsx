import { BarChartIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export interface ChartEmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
	icon?: IconSvgElement;
	title?: string;
	description?: string;
}

export const ChartEmptyState = forwardRef<HTMLDivElement, ChartEmptyStateProps>(
	(
		{
			className,
			icon: Icon = BarChartIcon,
			title = "0",
			description = "Sem dados para o periodo",
			...props
		},
		ref,
	) => (
		<div
			ref={ref}
			className={cn(
				"flex h-[148px] flex-col items-center justify-center rounded-tile border-2 border-dashed border-border text-center",
				className,
			)}
			{...props}
		>
			<div className="mb-3 flex size-[46px] items-center justify-center rounded-[14px] bg-secondary">
				<HugeiconsIcon icon={Icon} className="size-[22px] text-subtle-foreground" strokeWidth={2} />
			</div>
			<div className="text-[32px] leading-none font-bold text-[#CBD5E1]">{title}</div>
			<div className="mt-1.5 text-xs text-subtle-foreground">{description}</div>
		</div>
	),
);

ChartEmptyState.displayName = "ChartEmptyState";
