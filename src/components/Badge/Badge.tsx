import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export const badgeVariants = cva(
	"inline-flex items-center gap-1.5 rounded-pill font-semibold whitespace-nowrap",
	{
		variants: {
			variant: {
				active: "bg-accent-300 text-accent-foreground",
				pro: "bg-accent-300 text-accent-muted-foreground",
				info: "bg-info-bg text-info",
				success: "bg-success-bg text-success",
				warning: "bg-warning-bg text-warning",
				error: "bg-error-bg text-error",
				neutral: "bg-secondary text-muted-foreground",
			},
			size: {
				sm: "px-2.5 py-1 text-[11px]",
				md: "px-3 py-[5px] text-xs",
			},
		},
		defaultVariants: { variant: "neutral", size: "md" },
	},
);

export interface BadgeProps
	extends React.HTMLAttributes<HTMLSpanElement>,
		VariantProps<typeof badgeVariants> {}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
	({ className, variant, size, ...props }, ref) => (
		<span ref={ref} className={cn(badgeVariants({ variant, size }), className)} {...props} />
	),
);

Badge.displayName = "Badge";
