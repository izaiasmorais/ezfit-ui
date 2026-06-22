import * as SliderPrimitive from "@radix-ui/react-slider";
import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {}

export const Slider = forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
	({ className, ...props }, ref) => (
		<SliderPrimitive.Root
			ref={ref}
			className={cn("relative flex h-[22px] w-full touch-none items-center select-none", className)}
			{...props}
		>
			<SliderPrimitive.Track className="relative h-2 w-full grow rounded-pill bg-secondary">
				<SliderPrimitive.Range className="absolute h-full rounded-pill bg-accent" />
			</SliderPrimitive.Track>
			<SliderPrimitive.Thumb
				className="block size-[22px] rounded-full border-[3px] border-accent bg-white outline-none focus-visible:ring-3 focus-visible:ring-ring/25 disabled:opacity-60"
				aria-label="Valor"
			/>
		</SliderPrimitive.Root>
	),
);

Slider.displayName = "Slider";
