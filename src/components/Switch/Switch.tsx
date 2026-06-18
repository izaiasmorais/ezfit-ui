import * as SwitchPrimitive from "@radix-ui/react-switch";
import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {}

export const Switch = forwardRef<React.ElementRef<typeof SwitchPrimitive.Root>, SwitchProps>(
	({ className, ...props }, ref) => (
		<SwitchPrimitive.Root
			ref={ref}
			className={cn(
				"peer inline-flex h-[27px] w-[46px] flex-none cursor-pointer items-center rounded-pill p-[3px] transition-colors outline-none",
				"focus-visible:ring-3 focus-visible:ring-ring/25 disabled:cursor-not-allowed disabled:opacity-60",
				"bg-input data-[state=checked]:bg-accent",
				className,
			)}
			{...props}
		>
			<SwitchPrimitive.Thumb className="pointer-events-none block size-[21px] rounded-full bg-white shadow-[0_1px_3px_rgba(15,23,42,0.3)] transition-transform data-[state=checked]:translate-x-[19px]" />
		</SwitchPrimitive.Root>
	),
);

Switch.displayName = "Switch";
