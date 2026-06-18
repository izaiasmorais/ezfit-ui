import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { forwardRef, useId } from "react";
import { cn } from "@/lib/cn";

export interface RadioGroupProps
	extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {}

export const RadioGroup = forwardRef<
	React.ElementRef<typeof RadioGroupPrimitive.Root>,
	RadioGroupProps
>(({ className, ...props }, ref) => (
	<RadioGroupPrimitive.Root
		ref={ref}
		className={cn("flex flex-col gap-3.5", className)}
		{...props}
	/>
));
RadioGroup.displayName = "RadioGroup";

export interface RadioGroupItemProps
	extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
	label?: string;
}

export const RadioGroupItem = forwardRef<
	React.ElementRef<typeof RadioGroupPrimitive.Item>,
	RadioGroupItemProps
>(({ className, label, id, ...props }, ref) => {
	const generatedId = useId();
	const itemId = id ?? generatedId;

	const dot = (
		<RadioGroupPrimitive.Item
			ref={ref}
			id={itemId}
			className={cn(
				"flex size-[22px] flex-none cursor-pointer items-center justify-center rounded-full border-2 bg-background transition-all outline-none",
				"border-input data-[state=checked]:border-[6px] data-[state=checked]:border-primary",
				"focus-visible:ring-3 focus-visible:ring-ring/25 disabled:cursor-not-allowed disabled:opacity-60",
				className,
			)}
			{...props}
		/>
	);

	if (!label) return dot;

	return (
		<label htmlFor={itemId} className="flex cursor-pointer items-center gap-3.5">
			{dot}
			<span className="text-sm font-medium">{label}</span>
		</label>
	);
});
RadioGroupItem.displayName = "RadioGroupItem";
