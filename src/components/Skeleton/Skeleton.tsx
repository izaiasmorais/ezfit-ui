import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn("skeleton rounded-[7px]", className)} {...props} />
	),
);

Skeleton.displayName = "Skeleton";
