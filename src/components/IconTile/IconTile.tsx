import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export const iconTileVariants = cva("flex flex-none items-center justify-center", {
	variants: {
		tone: {
			neutral: "bg-secondary text-foreground",
			protein: "bg-protein-bg text-protein",
			carbs: "bg-carbs-bg text-carbs-text",
			fat: "bg-fat-bg text-fat",
			cardio: "bg-cardio-bg text-cardio",
			success: "bg-success-bg text-success",
			warning: "bg-warning-bg text-warning",
			error: "bg-error-bg text-error",
			info: "bg-info-bg text-info",
			accent: "bg-accent text-accent-foreground",
			onDark: "bg-white/10 text-white",
			onAccent: "bg-white/15 text-white",
		},
		size: {
			sm: "size-[34px] rounded-[10px]",
			md: "size-[42px] rounded-[14px]",
			lg: "size-[46px] rounded-[14px]",
			xl: "size-[72px] rounded-[22px]",
		},
	},
	defaultVariants: { tone: "neutral", size: "md" },
});

const iconSizeMap: Record<NonNullable<VariantProps<typeof iconTileVariants>["size"]>, string> = {
	sm: "size-[18px]",
	md: "size-5",
	lg: "size-[22px]",
	xl: "size-8",
};

export interface IconTileProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof iconTileVariants> {
	icon: IconSvgElement;
}

export const IconTile = forwardRef<HTMLDivElement, IconTileProps>(
	({ className, tone, size = "md", icon: Icon, ...props }, ref) => (
		<div ref={ref} className={cn(iconTileVariants({ tone, size }), className)} {...props}>
			<HugeiconsIcon icon={Icon} className={iconSizeMap[size ?? "md"]} strokeWidth={2} />
		</div>
	),
);

IconTile.displayName = "IconTile";
