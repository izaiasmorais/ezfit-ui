import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

export interface SegmentedControlOption {
	value: string;
	label: string;
}

const segmentedControlVariants = cva("inline-grid w-full rounded-pill bg-secondary", {
	variants: {
		size: {
			sm: "gap-1 p-1",
			md: "gap-1.5 p-1.5",
		},
	},
	defaultVariants: { size: "md" },
});

export interface SegmentedControlProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">,
		VariantProps<typeof segmentedControlVariants> {
	options: SegmentedControlOption[];
	value: string;
	onValueChange: (value: string) => void;
}

export function SegmentedControl({
	className,
	options,
	value,
	onValueChange,
	size,
	...props
}: SegmentedControlProps) {
	return (
		<div
			className={cn(segmentedControlVariants({ size }), className)}
			style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}
			{...props}
		>
			{options.map((option) => {
				const selected = option.value === value;
				return (
					<button
						key={option.value}
						type="button"
						aria-pressed={selected}
						onClick={() => onValueChange(option.value)}
						className={cn(
							"cursor-pointer rounded-pill px-3 py-2 font-sans text-[13px] font-semibold whitespace-nowrap transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/25",
							selected
								? "bg-card text-foreground shadow-sm"
								: "text-muted-foreground hover:text-foreground",
						)}
					>
						{option.label}
					</button>
				);
			})}
		</div>
	);
}
