import { forwardRef, useId } from "react";
import { cn } from "@/lib/cn";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	error?: string;
	hint?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, label, error, hint, id, disabled, rows = 3, ...props }, ref) => {
		const generatedId = useId();
		const textareaId = id ?? generatedId;
		const hasError = Boolean(error);

		return (
			<div className={cn("flex flex-col", className)}>
				{label ? (
					<label
						htmlFor={textareaId}
						className={cn("mb-[7px] text-[13px] font-semibold", hasError && "text-error")}
					>
						{label}
					</label>
				) : null}
				<textarea
					ref={ref}
					id={textareaId}
					rows={rows}
					disabled={disabled}
					aria-invalid={hasError}
					className={cn(
						"w-full min-w-0 resize-y rounded-field border bg-background px-3.5 py-3 font-sans text-sm text-foreground transition-colors outline-none",
						"placeholder:text-subtle-foreground focus:border-ring focus:ring-3 focus:ring-ring/10",
						hasError
							? "border-error ring-3 ring-error/10 focus:border-error focus:ring-error/10"
							: "border-input",
						disabled && "opacity-60",
					)}
					{...props}
				/>
				{error ? <p className="mt-1.5 text-xs text-error">{error}</p> : null}
				{!error && hint ? <p className="mt-1.5 text-xs text-subtle-foreground">{hint}</p> : null}
			</div>
		);
	},
);

Textarea.displayName = "Textarea";
