import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export interface NavItemProps extends React.HTMLAttributes<HTMLButtonElement> {
	icon: IconSvgElement;
	label: string;
	active?: boolean;
}

export const NavItem = forwardRef<HTMLButtonElement, NavItemProps>(
	({ className, icon: Icon, label, active = false, ...props }, ref) => (
		<button
			ref={ref}
			type="button"
			aria-current={active ? "page" : undefined}
			className={cn(
				"flex w-full cursor-pointer items-center gap-3 rounded-list px-4 py-[13px] text-left font-sans text-sm font-semibold transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/25",
				active
					? "bg-accent text-accent-foreground"
					: "text-muted-foreground hover:bg-secondary hover:text-foreground",
				className,
			)}
			{...props}
		>
			<HugeiconsIcon icon={Icon} className="size-[19px] flex-none" strokeWidth={2} />
			<span>{label}</span>
		</button>
	),
);

NavItem.displayName = "NavItem";
