import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export interface DateNavigatorProps extends React.HTMLAttributes<HTMLDivElement> {
	label: string;
	onPrev: () => void;
	onNext: () => void;
	onLabelClick?: () => void;
	nextDisabled?: boolean;
}

const arrowButton =
	"flex size-9 flex-none cursor-pointer items-center justify-center rounded-pill text-muted-foreground transition-colors outline-none hover:bg-secondary hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/25 disabled:cursor-not-allowed disabled:opacity-40";

export const DateNavigator = forwardRef<HTMLDivElement, DateNavigatorProps>(
	({ className, label, onPrev, onNext, onLabelClick, nextDisabled = false, ...props }, ref) => (
		<div
			ref={ref}
			className={cn(
				"inline-flex items-center gap-1 rounded-pill border border-border bg-card p-1.5",
				className,
			)}
			{...props}
		>
			<button type="button" aria-label="Dia anterior" onClick={onPrev} className={arrowButton}>
				<HugeiconsIcon icon={ArrowLeft01Icon} className="size-[18px]" strokeWidth={2} />
			</button>
			<button
				type="button"
				onClick={onLabelClick}
				disabled={!onLabelClick}
				className={cn(
					"min-w-20 rounded-pill px-3 py-1.5 text-center font-sans text-sm font-semibold whitespace-nowrap outline-none",
					onLabelClick &&
						"cursor-pointer transition-colors hover:bg-secondary focus-visible:ring-3 focus-visible:ring-ring/25",
				)}
			>
				{label}
			</button>
			<button
				type="button"
				aria-label="Proximo dia"
				onClick={onNext}
				disabled={nextDisabled}
				className={arrowButton}
			>
				<HugeiconsIcon icon={ArrowRight01Icon} className="size-[18px]" strokeWidth={2} />
			</button>
		</div>
	),
);

DateNavigator.displayName = "DateNavigator";
