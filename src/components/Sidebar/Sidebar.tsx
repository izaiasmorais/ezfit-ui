import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {}

export const Sidebar = forwardRef<HTMLElement, SidebarProps>(
	({ className, children, ...props }, ref) => (
		<nav
			ref={ref}
			className={cn("rounded-card bg-card p-[18px] pt-[22px] shadow-card", className)}
			{...props}
		>
			{children}
		</nav>
	),
);
Sidebar.displayName = "Sidebar";

export interface SidebarBrandProps extends React.HTMLAttributes<HTMLDivElement> {
	name: string;
	logo?: string;
}

export const SidebarBrand = forwardRef<HTMLDivElement, SidebarBrandProps>(
	({ className, name, logo, ...props }, ref) => (
		<div
			ref={ref}
			className={cn("flex items-center gap-3 px-2.5 pt-1.5 pb-[22px]", className)}
			{...props}
		>
			<div className="flex size-[42px] items-center justify-center rounded-[14px] bg-accent text-lg font-bold text-accent-foreground">
				{logo ?? name.charAt(0)}
			</div>
			<span className="text-lg font-bold">{name}</span>
		</div>
	),
);
SidebarBrand.displayName = "SidebarBrand";

export interface SidebarSectionProps extends React.HTMLAttributes<HTMLDivElement> {
	label?: string;
}

export const SidebarSection = forwardRef<HTMLDivElement, SidebarSectionProps>(
	({ className, label, children, ...props }, ref) => (
		<div ref={ref} className={cn("flex flex-col", className)} {...props}>
			{label ? (
				<span className="px-2.5 pt-5 pb-2.5 font-mono text-[11px] tracking-widest text-subtle-foreground uppercase">
					{label}
				</span>
			) : null}
			<div className="flex flex-col gap-1">{children}</div>
		</div>
	),
);
SidebarSection.displayName = "SidebarSection";
