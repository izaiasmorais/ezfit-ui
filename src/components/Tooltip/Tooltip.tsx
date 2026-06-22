import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export const TooltipProvider = TooltipPrimitive.Provider;
export const TooltipRoot = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;

export const TooltipContent = forwardRef<
	React.ElementRef<typeof TooltipPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 8, children, ...props }, ref) => (
	<TooltipPrimitive.Portal>
		<TooltipPrimitive.Content
			ref={ref}
			sideOffset={sideOffset}
			className={cn(
				"z-95 rounded-[10px] bg-primary px-3 py-2 text-xs font-medium text-primary-foreground data-[state=delayed-open]:animate-fade-in",
				className,
			)}
			{...props}
		>
			{children}
			<TooltipPrimitive.Arrow className="fill-primary" width={10} height={5} />
		</TooltipPrimitive.Content>
	</TooltipPrimitive.Portal>
));
TooltipContent.displayName = "TooltipContent";

export interface TooltipProps {
	content: ReactNode;
	children: ReactNode;
	side?: React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>["side"];
	delayDuration?: number;
}

export function Tooltip({ content, children, side = "top", delayDuration = 150 }: TooltipProps) {
	return (
		<TooltipPrimitive.Provider delayDuration={delayDuration}>
			<TooltipPrimitive.Root>
				<TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
				<TooltipContent side={side}>{content}</TooltipContent>
			</TooltipPrimitive.Root>
		</TooltipPrimitive.Provider>
	);
}
