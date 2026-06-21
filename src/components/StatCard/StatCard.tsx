import type { IconSvgElement } from "@hugeicons/react";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { IconTile, type IconTileProps } from "../IconTile";

const statCardVariants = cva("rounded-card p-6", {
	variants: {
		variant: {
			light: "bg-card text-card-foreground shadow-card",
			accent: "bg-accent text-accent-foreground shadow-accent",
			dark: "bg-primary text-primary-foreground shadow-dark",
		},
	},
	defaultVariants: { variant: "light" },
});

export interface StatCardProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof statCardVariants> {
	icon: IconSvgElement;
	iconTone?: IconTileProps["tone"];
	label: string;
	value: ReactNode;
	unit?: string;
	trend?: ReactNode;
	progress?: { value: number; caption?: string; color?: string };
	footer?: ReactNode;
}

const labelTone: Record<NonNullable<StatCardProps["variant"]>, string> = {
	light: "text-muted-foreground",
	accent: "text-accent-muted-foreground",
	dark: "text-subtle-foreground",
};

const defaultIconTone: Record<NonNullable<StatCardProps["variant"]>, IconTileProps["tone"]> = {
	light: "neutral",
	accent: "onAccent",
	dark: "onDark",
};

export const StatCard = forwardRef<HTMLDivElement, StatCardProps>(
	(
		{
			className,
			variant = "light",
			icon,
			iconTone,
			label,
			value,
			unit,
			trend,
			progress,
			footer,
			...props
		},
		ref,
	) => {
		const resolvedVariant = variant ?? "light";
		return (
			<div ref={ref} className={cn(statCardVariants({ variant }), className)} {...props}>
				<div className="mb-[18px] flex items-start justify-between">
					<IconTile icon={icon} tone={iconTone ?? defaultIconTone[resolvedVariant]} />
					{trend ? <div>{trend}</div> : null}
				</div>
				<div className={cn("mb-1 text-[13px]", labelTone[resolvedVariant])}>{label}</div>
				<div className="text-[34px] leading-none font-bold tracking-tight">
					{value}
					{unit ? (
						<span className={cn("ml-1 text-[15px] font-medium", labelTone[resolvedVariant])}>
							{unit}
						</span>
					) : null}
				</div>
				{progress ? (
					<>
						<div className="mt-4 h-1.5 overflow-hidden rounded-pill bg-secondary">
							<div
								className="h-full rounded-pill"
								style={{
									width: `${progress.value}%`,
									background: progress.color ?? "var(--accent)",
								}}
							/>
						</div>
						{progress.caption ? (
							<div className={cn("mt-2 text-xs", labelTone[resolvedVariant])}>
								{progress.caption}
							</div>
						) : null}
					</>
				) : null}
				{footer ? <div className="mt-[18px]">{footer}</div> : null}
			</div>
		);
	},
);

StatCard.displayName = "StatCard";
