import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export interface ProgressRingProps extends React.HTMLAttributes<HTMLDivElement> {
	value: number;
	size?: number;
	strokeWidth?: number;
	color?: string;
	trackColor?: string;
	label?: string;
	caption?: string;
}

export const ProgressRing = forwardRef<HTMLDivElement, ProgressRingProps>(
	(
		{
			className,
			value,
			size = 140,
			strokeWidth = 14,
			color = "var(--accent)",
			trackColor = "var(--secondary)",
			label,
			caption,
			...props
		},
		ref,
	) => {
		const clamped = Math.min(100, Math.max(0, value));
		const radius = (size - strokeWidth) / 2;
		const circumference = 2 * Math.PI * radius;
		const offset = circumference * (1 - clamped / 100);

		return (
			<div
				ref={ref}
				className={cn("relative", className)}
				style={{ width: size, height: size }}
				role="progressbar"
				aria-valuenow={clamped}
				aria-valuemin={0}
				aria-valuemax={100}
				{...props}
			>
				<svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
					<circle
						cx={size / 2}
						cy={size / 2}
						r={radius}
						fill="none"
						stroke={trackColor}
						strokeWidth={strokeWidth}
					/>
					<circle
						cx={size / 2}
						cy={size / 2}
						r={radius}
						fill="none"
						stroke={color}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
						strokeDasharray={circumference}
						strokeDashoffset={offset}
						className="transition-[stroke-dashoffset] duration-500"
					/>
				</svg>
				<div className="absolute inset-0 flex flex-col items-center justify-center">
					<span className="text-[30px] font-bold">{label ?? `${Math.round(clamped)}%`}</span>
					{caption ? <span className="text-xs text-subtle-foreground">{caption}</span> : null}
				</div>
			</div>
		);
	},
);

ProgressRing.displayName = "ProgressRing";
