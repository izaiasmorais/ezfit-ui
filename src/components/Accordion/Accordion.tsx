import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export const Accordion = AccordionPrimitive.Root;

export const AccordionItem = forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item
		ref={ref}
		className={cn("overflow-hidden rounded-list border border-border-soft", className)}
		{...props}
	/>
));
AccordionItem.displayName = "AccordionItem";

export const AccordionTrigger = forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Header className="flex">
		<AccordionPrimitive.Trigger
			ref={ref}
			className={cn(
				"group flex flex-1 cursor-pointer items-center justify-between p-4 text-left text-sm font-semibold outline-none focus-visible:ring-3 focus-visible:ring-ring/25",
				className,
			)}
			{...props}
		>
			{children}
			<HugeiconsIcon
				icon={ArrowDown01Icon}
				className="size-[18px] flex-none text-subtle-foreground transition-transform group-data-[state=open]:rotate-180"
			/>
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className="overflow-hidden text-[13px] leading-relaxed text-muted-foreground data-[state=closed]:animate-[ezfade_0.18s_ease] data-[state=open]:animate-[ezfade_0.18s_ease]"
		{...props}
	>
		<div className={cn("px-4 pb-4", className)}>{children}</div>
	</AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";
