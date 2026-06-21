import { Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { forwardRef, useId } from "react";
import { cn } from "@/lib/cn";

export interface CheckboxProps
	extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
	label?: string;
}

export const Checkbox = forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
	({ className, label, id, ...props }, ref) => {
		const generatedId = useId();
		const checkboxId = id ?? generatedId;

		const box = (
			<CheckboxPrimitive.Root
				ref={ref}
				id={checkboxId}
				className={cn(
					"flex size-[22px] flex-none cursor-pointer items-center justify-center rounded-[7px] border-2 transition-colors outline-none",
					"border-input bg-background",
					"data-[state=checked]:border-accent data-[state=checked]:bg-accent",
					"focus-visible:ring-3 focus-visible:ring-ring/25 disabled:cursor-not-allowed disabled:opacity-60",
					className,
				)}
				{...props}
			>
				<CheckboxPrimitive.Indicator>
					<HugeiconsIcon
						icon={Tick02Icon}
						className="size-[15px] text-accent-foreground"
						strokeWidth={3}
					/>
				</CheckboxPrimitive.Indicator>
			</CheckboxPrimitive.Root>
		);

		if (!label) return box;

		return (
			<label htmlFor={checkboxId} className="flex cursor-pointer items-center gap-3.5">
				{box}
				<span className="text-sm font-medium">{label}</span>
			</label>
		);
	},
);

Checkbox.displayName = "Checkbox";
