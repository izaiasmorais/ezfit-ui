import { forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface TopbarProps extends React.HTMLAttributes<HTMLDivElement> {
	brand?: ReactNode;
	actions?: ReactNode;
	title?: string;
	subtitle?: string;
}

export const Topbar = forwardRef<HTMLDivElement, TopbarProps>(
	({ className, brand, actions, title, subtitle, children, ...props }, ref) => (
		<div
			ref={ref}
			className={cn("overflow-hidden rounded-card border border-border bg-card", className)}
			{...props}
		>
			<div className="flex items-center justify-between border-b border-border-soft px-6 py-[18px]">
				<div className="text-[15px] font-bold tracking-wide">{brand}</div>
				{actions ? (
					<div className="flex items-center gap-[18px] text-muted-foreground">{actions}</div>
				) : null}
			</div>
			{title || subtitle || children ? (
				<div className="p-6">
					{title ? <h3 className="mb-1 text-[28px] font-bold tracking-tight">{title}</h3> : null}
					{subtitle ? <p className="text-sm text-muted-foreground">{subtitle}</p> : null}
					{children}
				</div>
			) : null}
		</div>
	),
);

Topbar.displayName = "Topbar";
