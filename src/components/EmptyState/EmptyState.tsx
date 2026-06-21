import type { IconSvgElement } from "@hugeicons/react";
import { forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { IconTile } from "../IconTile";

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
	icon: IconSvgElement;
	title: string;
	description?: string;
	action?: ReactNode;
}

export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
	({ className, icon, title, description, action, ...props }, ref) => (
		<div
			ref={ref}
			className={cn(
				"flex flex-col items-center rounded-card bg-card p-12 text-center shadow-card",
				className,
			)}
			{...props}
		>
			<IconTile icon={icon} tone="neutral" size="xl" className="mb-5 text-subtle-foreground" />
			<h3 className="mb-1.5 text-lg font-bold">{title}</h3>
			{description ? (
				<p className="mb-[22px] max-w-[340px] text-sm leading-relaxed text-muted-foreground">
					{description}
				</p>
			) : null}
			{action}
		</div>
	),
);

EmptyState.displayName = "EmptyState";
