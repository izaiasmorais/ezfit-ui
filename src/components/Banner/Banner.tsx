import { cva, type VariantProps } from "class-variance-authority";
import { AlertCircle, AlertTriangle, CheckCircle2, Info, type LucideIcon, X } from "lucide-react";
import { forwardRef } from "react";
import { cn } from "@/lib/cn";

const bannerVariants = cva("flex items-center gap-3.5 rounded-list border p-[15px] px-[18px]", {
	variants: {
		variant: {
			success: "border-success-border bg-success-bg",
			warning: "border-warning-border bg-warning-bg",
			error: "border-error-border bg-error-bg",
			info: "border-info-border bg-info-bg",
		},
	},
	defaultVariants: { variant: "info" },
});

const iconByVariant: Record<
	NonNullable<VariantProps<typeof bannerVariants>["variant"]>,
	LucideIcon
> = {
	success: CheckCircle2,
	warning: AlertTriangle,
	error: AlertCircle,
	info: Info,
};

const iconColor: Record<NonNullable<VariantProps<typeof bannerVariants>["variant"]>, string> = {
	success: "text-success",
	warning: "text-warning",
	error: "text-error",
	info: "text-info",
};

const titleColor: Record<NonNullable<VariantProps<typeof bannerVariants>["variant"]>, string> = {
	success: "text-[#166534]",
	warning: "text-[#92400E]",
	error: "text-[#991B1B]",
	info: "text-[#1E40AF]",
};

const textColor: Record<NonNullable<VariantProps<typeof bannerVariants>["variant"]>, string> = {
	success: "text-[#15803D]",
	warning: "text-[#B45309]",
	error: "text-[#B91C1C]",
	info: "text-[#1D4ED8]",
};

export interface BannerProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof bannerVariants> {
	title?: string;
	onDismiss?: () => void;
}

export const Banner = forwardRef<HTMLDivElement, BannerProps>(
	({ className, variant = "info", title, children, onDismiss, ...props }, ref) => {
		const resolved = variant ?? "info";
		const Icon = iconByVariant[resolved];
		return (
			<div ref={ref} role="alert" className={cn(bannerVariants({ variant }), className)} {...props}>
				<Icon className={cn("size-5 flex-none", iconColor[resolved])} strokeWidth={2} />
				<div className="flex-1 text-sm">
					{title ? (
						<span className={cn("font-semibold", titleColor[resolved])}>{title} </span>
					) : null}
					<span className={textColor[resolved]}>{children}</span>
				</div>
				{onDismiss ? (
					<button
						type="button"
						onClick={onDismiss}
						aria-label="Fechar"
						className={cn(
							"flex-none cursor-pointer opacity-60 transition-opacity hover:opacity-100",
							iconColor[resolved],
						)}
					>
						<X className="size-[17px]" />
					</button>
				) : null}
			</div>
		);
	},
);

Banner.displayName = "Banner";
