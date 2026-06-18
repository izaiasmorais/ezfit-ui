import { Droplet } from "lucide-react";
import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export interface HydrationTrackerProps extends React.HTMLAttributes<HTMLDivElement> {
	total: number;
	filled: number;
	caption?: string;
	onCupClick?: (index: number) => void;
}

export const HydrationTracker = forwardRef<HTMLDivElement, HydrationTrackerProps>(
	({ className, total, filled, caption, onCupClick, ...props }, ref) => (
		<div ref={ref} className={cn("flex flex-col", className)} {...props}>
			<div className="flex gap-2.5">
				{Array.from({ length: total }).map((_, index) => {
					const isFilled = index < filled;
					return (
						<button
							// biome-ignore lint/suspicious/noArrayIndexKey: copos formam uma lista posicional fixa sem id estavel
							key={index}
							type="button"
							aria-label={`Copo ${index + 1}${isFilled ? " preenchido" : ""}`}
							onClick={onCupClick ? () => onCupClick(index) : undefined}
							disabled={!onCupClick}
							className={cn(
								"flex h-11 flex-1 items-center justify-center rounded-[14px] transition-colors",
								onCupClick && "cursor-pointer",
								isFilled ? "bg-protein" : "bg-info-bg",
							)}
						>
							<Droplet
								className={cn("size-[18px]", isFilled ? "text-white" : "text-[#BFDBFE]")}
								strokeWidth={2}
							/>
						</button>
					);
				})}
			</div>
			{caption ? <div className="mt-2.5 text-xs text-subtle-foreground">{caption}</div> : null}
		</div>
	),
);

HydrationTracker.displayName = "HydrationTracker";
