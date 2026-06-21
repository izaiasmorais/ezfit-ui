import type { IconSvgElement } from "@hugeicons/react";
import { forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { IconTile, type IconTileProps } from "../IconTile";

export interface SelectableCardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	title: string;
	description?: string;
	icon?: IconSvgElement;
	iconTone?: IconTileProps["tone"];
	selected?: boolean;
	trailing?: ReactNode;
}

export const SelectableCard = forwardRef<HTMLButtonElement, SelectableCardProps>(
	(
		{
			className,
			title,
			description,
			icon,
			iconTone = "neutral",
			selected = false,
			trailing,
			...props
		},
		ref,
	) => (
		<button
			ref={ref}
			type="button"
			aria-pressed={selected}
			className={cn(
				"flex w-full cursor-pointer items-center gap-3.5 rounded-tile border-2 bg-card p-4 text-left transition-colors outline-none",
				"focus-visible:ring-3 focus-visible:ring-ring/25",
				selected ? "border-primary" : "border-border hover:border-input",
				className,
			)}
			{...props}
		>
			{icon ? <IconTile icon={icon} tone={selected ? "accent" : iconTone} size="sm" /> : null}
			<div className="min-w-0 flex-1">
				<div className="text-sm font-semibold">{title}</div>
				{description ? (
					<div className="mt-0.5 text-[13px] text-subtle-foreground">{description}</div>
				) : null}
			</div>
			{trailing ? <div className="flex-none">{trailing}</div> : null}
		</button>
	),
);
SelectableCard.displayName = "SelectableCard";

export interface SelectableCardItem {
	value: string;
	title: string;
	description?: string;
	icon?: IconSvgElement;
	iconTone?: IconTileProps["tone"];
}

export interface SelectableCardGroupProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
	items: SelectableCardItem[];
	value: string;
	onValueChange: (value: string) => void;
	columns?: number;
}

export function SelectableCardGroup({
	className,
	items,
	value,
	onValueChange,
	columns = 1,
	...props
}: SelectableCardGroupProps) {
	return (
		<div
			className={cn("grid gap-2.5", className)}
			style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
			{...props}
		>
			{items.map((item) => (
				<SelectableCard
					key={item.value}
					title={item.title}
					description={item.description}
					icon={item.icon}
					iconTone={item.iconTone}
					selected={item.value === value}
					onClick={() => onValueChange(item.value)}
				/>
			))}
		</div>
	);
}
