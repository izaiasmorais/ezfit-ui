import type { IconSvgElement } from "@hugeicons/react";
import { forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { IconTile, type IconTileProps } from "../IconTile";

export interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
	icon: IconSvgElement;
	iconTone?: IconTileProps["tone"];
	title: string;
	subtitle?: string;
	trailing?: ReactNode;
	interactive?: boolean;
}

export const ListItem = forwardRef<HTMLDivElement, ListItemProps>(
	(
		{
			className,
			icon,
			iconTone = "neutral",
			title,
			subtitle,
			trailing,
			interactive = false,
			...props
		},
		ref,
	) => (
		<div
			ref={ref}
			className={cn(
				"flex items-center gap-4 rounded-list bg-muted p-4",
				interactive && "cursor-pointer transition-colors hover:bg-secondary",
				className,
			)}
			{...props}
		>
			<IconTile icon={icon} tone={iconTone} size="lg" />
			<div className="min-w-0 flex-1">
				<div className="truncate text-[15px] font-semibold">{title}</div>
				{subtitle ? (
					<div className="truncate text-xs text-subtle-foreground">{subtitle}</div>
				) : null}
			</div>
			{trailing ? <div className="flex items-center gap-3.5">{trailing}</div> : null}
		</div>
	),
);
ListItem.displayName = "ListItem";

export interface MealListItemProps extends Omit<ListItemProps, "trailing"> {
	protein: number;
	carbs: number;
	fat: number;
	calories: number;
}

export const MealListItem = forwardRef<HTMLDivElement, MealListItemProps>(
	({ protein, carbs, fat, calories, ...props }, ref) => (
		<ListItem
			ref={ref}
			trailing={
				<>
					<span className="text-xs font-semibold text-protein">P {protein}g</span>
					<span className="text-xs font-semibold text-carbs-text">C {carbs}g</span>
					<span className="text-xs font-semibold text-fat">G {fat}g</span>
					<span className="min-w-16 text-right text-[15px] font-bold">{calories} kcal</span>
				</>
			}
			{...props}
		/>
	),
);
MealListItem.displayName = "MealListItem";

export interface WorkoutListItemProps extends Omit<ListItemProps, "trailing"> {
	duration: string;
	calories: number;
}

export const WorkoutListItem = forwardRef<HTMLDivElement, WorkoutListItemProps>(
	({ duration, calories, ...props }, ref) => (
		<ListItem
			ref={ref}
			trailing={
				<>
					<span className="text-[13px] font-semibold text-muted-foreground">{duration}</span>
					<span className="min-w-20 text-right text-[15px] font-bold">{calories} kcal</span>
				</>
			}
			{...props}
		/>
	),
);
WorkoutListItem.displayName = "WorkoutListItem";

export interface HydrationListItemProps extends Omit<ListItemProps, "trailing"> {
	amount: string;
	muted?: boolean;
}

export const HydrationListItem = forwardRef<HTMLDivElement, HydrationListItemProps>(
	({ amount, muted = false, ...props }, ref) => (
		<ListItem
			ref={ref}
			trailing={
				<span className={cn("text-[15px] font-bold", muted && "text-subtle-foreground")}>
					{amount}
				</span>
			}
			{...props}
		/>
	),
);
HydrationListItem.displayName = "HydrationListItem";
