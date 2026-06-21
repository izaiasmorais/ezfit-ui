import { Cancel01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;
export const DialogPortal = DialogPrimitive.Portal;

export const DialogOverlay = forwardRef<
	React.ElementRef<typeof DialogPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Overlay
		ref={ref}
		className={cn(
			"fixed inset-0 z-90 flex items-center justify-center bg-[rgba(15,23,42,0.45)] p-6 backdrop-blur-[3px] data-[state=open]:animate-fade-in",
			className,
		)}
		{...props}
	/>
));
DialogOverlay.displayName = "DialogOverlay";

export interface DialogContentProps
	extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
	showClose?: boolean;
}

export const DialogContent = forwardRef<
	React.ElementRef<typeof DialogPrimitive.Content>,
	DialogContentProps
>(({ className, children, showClose = true, ...props }, ref) => (
	<DialogPortal>
		<DialogOverlay>
			<DialogPrimitive.Content
				ref={ref}
				className={cn(
					"relative w-full max-w-[420px] rounded-card bg-card p-[30px] shadow-[0_24px_64px_rgba(15,23,42,0.3)] outline-none data-[state=open]:animate-toast-in",
					className,
				)}
				onOpenAutoFocus={(event) => event.preventDefault()}
				{...props}
			>
				{children}
				{showClose ? (
					<DialogPrimitive.Close
						className="absolute top-[30px] right-[30px] flex size-[34px] cursor-pointer items-center justify-center rounded-[11px] bg-secondary text-muted-foreground transition-colors hover:bg-secondary-hover outline-none focus-visible:ring-3 focus-visible:ring-ring/25"
						aria-label="Fechar"
					>
						<HugeiconsIcon icon={Cancel01Icon} className="size-[18px]" />
					</DialogPrimitive.Close>
				) : null}
			</DialogPrimitive.Content>
		</DialogOverlay>
	</DialogPortal>
));
DialogContent.displayName = "DialogContent";

export const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn("mb-2 flex items-start justify-between gap-3", className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

export const DialogTitle = forwardRef<
	React.ElementRef<typeof DialogPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Title
		ref={ref}
		className={cn("mt-3.5 mb-1.5 text-xl font-bold", className)}
		{...props}
	/>
));
DialogTitle.displayName = "DialogTitle";

export const DialogDescription = forwardRef<
	React.ElementRef<typeof DialogPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Description
		ref={ref}
		className={cn("mb-6 text-sm leading-relaxed text-muted-foreground", className)}
		{...props}
	/>
));
DialogDescription.displayName = "DialogDescription";

export const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn("flex gap-3", className)} {...props} />
);
DialogFooter.displayName = "DialogFooter";
