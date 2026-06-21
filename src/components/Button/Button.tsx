import { Loading03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 font-sans font-semibold whitespace-nowrap transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/25 disabled:pointer-events-none disabled:opacity-70",
	{
		variants: {
			variant: {
				primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
				accent: "bg-accent-300 text-accent-foreground hover:bg-accent",
				secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover",
				ghost: "bg-transparent text-muted-foreground hover:bg-secondary hover:text-foreground",
				destructive: "bg-error-bg text-error hover:bg-error/15",
			},
			size: {
				sm: "h-9 rounded-button px-4 text-[13px]",
				md: "h-11 rounded-button px-[22px] text-sm",
				icon: "h-11 w-11 rounded-button",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "md",
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ className, variant, size, loading = false, disabled, children, type = "button", ...props },
		ref,
	) => {
		return (
			<button
				ref={ref}
				type={type}
				className={cn(buttonVariants({ variant, size }), className)}
				disabled={disabled || loading}
				{...props}
			>
				{loading ? (
					<HugeiconsIcon icon={Loading03Icon} className="size-[18px] animate-spin-slow" />
				) : (
					children
				)}
			</button>
		);
	},
);

Button.displayName = "Button";
