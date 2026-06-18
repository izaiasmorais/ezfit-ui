import * as TabsPrimitive from "@radix-ui/react-tabs";
import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export const Tabs = TabsPrimitive.Root;

export const TabsList = forwardRef<
	React.ElementRef<typeof TabsPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.List
		ref={ref}
		className={cn("inline-flex items-center gap-1.5 rounded-pill bg-secondary p-1.5", className)}
		{...props}
	/>
));
TabsList.displayName = "TabsList";

export const TabsTrigger = forwardRef<
	React.ElementRef<typeof TabsPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.Trigger
		ref={ref}
		className={cn(
			"cursor-pointer rounded-pill px-[18px] py-[9px] font-sans text-sm font-semibold whitespace-nowrap text-muted-foreground transition-colors outline-none",
			"hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/25",
			"data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:hover:text-primary-foreground",
			className,
		)}
		{...props}
	/>
));
TabsTrigger.displayName = "TabsTrigger";

export const TabsContent = forwardRef<
	React.ElementRef<typeof TabsPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.Content
		ref={ref}
		className={cn("mt-5 outline-none focus-visible:ring-3 focus-visible:ring-ring/25", className)}
		{...props}
	/>
));
TabsContent.displayName = "TabsContent";
