import { ArrowDown01Icon, Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export const Select = SelectPrimitive.Root;
export const SelectGroup = SelectPrimitive.Group;
export const SelectValue = SelectPrimitive.Value;

export const SelectTrigger = forwardRef<
	React.ElementRef<typeof SelectPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<SelectPrimitive.Trigger
		ref={ref}
		className={cn(
			"flex w-full cursor-pointer items-center justify-between gap-2 rounded-field border border-input bg-background px-3.5 py-[11px] font-sans text-sm font-medium text-foreground transition-colors outline-none",
			"hover:border-subtle-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/10 disabled:cursor-not-allowed disabled:opacity-60 data-[placeholder]:text-subtle-foreground",
			className,
		)}
		{...props}
	>
		{children}
		<SelectPrimitive.Icon asChild>
			<HugeiconsIcon
				icon={ArrowDown01Icon}
				className="size-4 text-muted-foreground transition-transform"
			/>
		</SelectPrimitive.Icon>
	</SelectPrimitive.Trigger>
));
SelectTrigger.displayName = "SelectTrigger";

export const SelectContent = forwardRef<
	React.ElementRef<typeof SelectPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
	<SelectPrimitive.Portal>
		<SelectPrimitive.Content
			ref={ref}
			position={position}
			className={cn(
				"z-50 min-w-[8rem] overflow-hidden rounded-list border border-border bg-card p-1.5 shadow-[0_12px_32px_rgba(15,23,42,0.14)]",
				position === "popper" && "data-[side=bottom]:translate-y-1",
				className,
			)}
			{...props}
		>
			<SelectPrimitive.Viewport
				className={cn(position === "popper" && "w-full min-w-[var(--radix-select-trigger-width)]")}
			>
				{children}
			</SelectPrimitive.Viewport>
		</SelectPrimitive.Content>
	</SelectPrimitive.Portal>
));
SelectContent.displayName = "SelectContent";

export const SelectItem = forwardRef<
	React.ElementRef<typeof SelectPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
	<SelectPrimitive.Item
		ref={ref}
		className={cn(
			"relative flex cursor-pointer items-center justify-between rounded-[9px] px-3 py-[9px] text-sm outline-none select-none",
			"focus:bg-secondary data-[state=checked]:font-semibold data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
			className,
		)}
		{...props}
	>
		<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
		<SelectPrimitive.ItemIndicator>
			<HugeiconsIcon icon={Tick02Icon} className="size-4 text-accent-foreground" strokeWidth={3} />
		</SelectPrimitive.ItemIndicator>
	</SelectPrimitive.Item>
));
SelectItem.displayName = "SelectItem";
