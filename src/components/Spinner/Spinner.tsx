import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "@/lib/cn";

const spinnerVariants = cva("animate-spin-slow rounded-full border-secondary border-t-accent", {
	variants: {
		size: {
			sm: "size-6 border-[3px]",
			md: "size-9 border-4",
			lg: "size-[54px] border-[5px]",
		},
	},
	defaultVariants: { size: "md" },
});

export interface SpinnerProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof spinnerVariants> {}

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
	({ className, size, ...props }, ref) => (
		<div
			ref={ref}
			role="status"
			aria-label="Carregando"
			className={cn(spinnerVariants({ size }), className)}
			{...props}
		/>
	),
);

Spinner.displayName = "Spinner";
