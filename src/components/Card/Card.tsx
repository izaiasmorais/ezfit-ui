import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export const cardVariants = cva("rounded-card", {
	variants: {
		variant: {
			light: "bg-card text-card-foreground shadow-card",
			dark: "bg-primary text-primary-foreground shadow-dark",
			accent: "bg-accent text-accent-foreground shadow-accent",
		},
		padding: {
			none: "p-0",
			sm: "p-5",
			md: "p-7",
		},
	},
	defaultVariants: { variant: "light", padding: "md" },
});

export interface CardProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof cardVariants> {}

export const Card = forwardRef<HTMLDivElement, CardProps>(
	({ className, variant, padding, ...props }, ref) => (
		<div ref={ref} className={cn(cardVariants({ variant, padding }), className)} {...props} />
	),
);
Card.displayName = "Card";

export const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn("mb-4 flex items-start justify-between gap-3", className)}
			{...props}
		/>
	),
);
CardHeader.displayName = "CardHeader";

export const CardTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
	({ className, ...props }, ref) => (
		<h3 ref={ref} className={cn("text-base font-semibold", className)} {...props} />
	),
);
CardTitle.displayName = "CardTitle";

export const CardDescription = forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p ref={ref} className={cn("text-[13px] text-subtle-foreground", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

export const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => <div ref={ref} className={cn(className)} {...props} />,
);
CardContent.displayName = "CardContent";
