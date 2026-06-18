import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export interface FilterChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	selected?: boolean;
}

export const FilterChip = forwardRef<HTMLButtonElement, FilterChipProps>(
	({ className, selected = false, ...props }, ref) => (
		<button
			ref={ref}
			type="button"
			aria-pressed={selected}
			className={cn(
				"cursor-pointer rounded-pill px-3.5 py-[7px] font-sans text-[13px] whitespace-nowrap transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/25",
				selected
					? "bg-primary font-semibold text-primary-foreground"
					: "bg-secondary font-medium text-muted-foreground hover:bg-secondary-hover",
				className,
			)}
			{...props}
		/>
	),
);
FilterChip.displayName = "FilterChip";

export interface FilterChipsItem {
	value: string;
	label: string;
}

export interface FilterChipsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
	items: FilterChipsItem[];
	value: string;
	onValueChange: (value: string) => void;
}

export const FilterChips = forwardRef<HTMLDivElement, FilterChipsProps>(
	({ className, items, value, onValueChange, ...props }, ref) => (
		<div ref={ref} className={cn("flex flex-wrap gap-2", className)} {...props}>
			{items.map((item) => (
				<FilterChip
					key={item.value}
					selected={item.value === value}
					onClick={() => onValueChange(item.value)}
				>
					{item.label}
				</FilterChip>
			))}
		</div>
	),
);
FilterChips.displayName = "FilterChips";
