import type { LucideIcon } from "lucide-react";
import { forwardRef, useId } from "react";
import { cn } from "@/lib/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: string;
	hint?: string;
	startIcon?: LucideIcon;
	suffix?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{ className, label, error, hint, startIcon: StartIcon, suffix, id, disabled, ...props },
		ref,
	) => {
		const generatedId = useId();
		const inputId = id ?? generatedId;
		const hasError = Boolean(error);

		const wrapper = cn(
			"flex items-center gap-2.5 rounded-field border bg-background px-3.5 transition-colors",
			"focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/10",
			hasError &&
				"border-error ring-3 ring-error/10 focus-within:border-error focus-within:ring-error/10",
			!hasError && "border-input",
			disabled && "opacity-60",
		);

		return (
			<div className={cn("flex flex-col", className)}>
				{label ? (
					<label
						htmlFor={inputId}
						className={cn("mb-[7px] text-[13px] font-semibold", hasError && "text-error")}
					>
						{label}
					</label>
				) : null}
				<div className={wrapper}>
					{StartIcon ? (
						<StartIcon className="size-[17px] text-subtle-foreground" strokeWidth={2} />
					) : null}
					<input
						ref={ref}
						id={inputId}
						disabled={disabled}
						aria-invalid={hasError}
						className="w-full min-w-0 bg-transparent py-3 font-sans text-sm text-foreground outline-none placeholder:text-subtle-foreground"
						{...props}
					/>
					{suffix ? (
						<span className="font-mono text-xs text-subtle-foreground">{suffix}</span>
					) : null}
				</div>
				{error ? <p className="mt-1.5 text-xs text-error">{error}</p> : null}
				{!error && hint ? <p className="mt-1.5 text-xs text-subtle-foreground">{hint}</p> : null}
			</div>
		);
	},
);

Input.displayName = "Input";
