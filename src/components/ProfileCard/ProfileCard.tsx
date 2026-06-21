import { UserIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface ProfileCardProps extends React.HTMLAttributes<HTMLDivElement> {
	name: string;
	badge?: ReactNode;
	online?: boolean;
	avatar?: ReactNode;
}

export const ProfileCard = forwardRef<HTMLDivElement, ProfileCardProps>(
	({ className, name, badge, online = true, avatar, ...props }, ref) => (
		<div
			ref={ref}
			className={cn(
				"inline-flex items-center gap-3.5 rounded-pill bg-card py-3 pr-[18px] pl-3 shadow-card",
				className,
			)}
			{...props}
		>
			<div className="relative">
				<div className="flex size-[46px] items-center justify-center overflow-hidden rounded-full bg-linear-[135deg,#BEF264,#A3E635]">
					{avatar ?? (
						<HugeiconsIcon
							icon={UserIcon}
							className="size-[22px] text-accent-foreground"
							strokeWidth={2}
						/>
					)}
				</div>
				{online ? (
					<span className="absolute right-px bottom-px size-3 rounded-full border-2 border-card bg-success" />
				) : null}
			</div>
			<div className="pr-2">
				<div className="text-[15px] font-bold">{name}</div>
				{badge ? <div className="mt-[3px]">{badge}</div> : null}
			</div>
		</div>
	),
);

ProfileCard.displayName = "ProfileCard";
