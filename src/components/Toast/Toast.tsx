import * as ToastPrimitive from "@radix-ui/react-toast";
import { Check, type LucideIcon, X } from "lucide-react";
import { createContext, type ReactNode, useCallback, useContext, useMemo, useState } from "react";
import { cn } from "@/lib/cn";

export interface ToastOptions {
	title: string;
	description?: string;
	icon?: LucideIcon;
	duration?: number;
}

interface ToastEntry extends ToastOptions {
	id: number;
	open: boolean;
}

interface ToastContextValue {
	toast: (options: ToastOptions) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast(): ToastContextValue {
	const context = useContext(ToastContext);
	if (!context) throw new Error("useToast deve ser usado dentro de ToastProvider");
	return context;
}

export interface ToastProviderProps {
	children: ReactNode;
	duration?: number;
}

export function ToastProvider({ children, duration = 3600 }: ToastProviderProps) {
	const [toasts, setToasts] = useState<ToastEntry[]>([]);

	const toast = useCallback((options: ToastOptions) => {
		setToasts((current) => {
			const id = (current[current.length - 1]?.id ?? 0) + 1;
			return [...current, { ...options, id, open: true }];
		});
	}, []);

	const setOpen = useCallback((id: number, open: boolean) => {
		if (open) return;
		setToasts((current) => current.filter((entry) => entry.id !== id));
	}, []);

	const value = useMemo(() => ({ toast }), [toast]);

	return (
		<ToastContext.Provider value={value}>
			<ToastPrimitive.Provider duration={duration} swipeDirection="right">
				{children}
				{toasts.map((entry) => {
					const Icon = entry.icon ?? Check;
					return (
						<ToastPrimitive.Root
							key={entry.id}
							open={entry.open}
							duration={entry.duration ?? duration}
							onOpenChange={(open) => setOpen(entry.id, open)}
							className="flex items-center gap-3.5 rounded-list bg-primary px-[18px] py-[15px] text-primary-foreground shadow-[0_16px_40px_rgba(15,23,42,0.35)] data-[state=open]:animate-toast-in"
						>
							<div className="flex size-[38px] flex-none items-center justify-center rounded-[12px] bg-accent/20">
								<Icon className="size-[19px] text-accent" strokeWidth={3} />
							</div>
							<div className="flex-1">
								<ToastPrimitive.Title className="text-sm font-semibold">
									{entry.title}
								</ToastPrimitive.Title>
								{entry.description ? (
									<ToastPrimitive.Description className="text-xs text-subtle-foreground">
										{entry.description}
									</ToastPrimitive.Description>
								) : null}
							</div>
							<ToastPrimitive.Close
								aria-label="Fechar"
								className="flex-none cursor-pointer text-muted-foreground transition-colors hover:text-primary-foreground"
							>
								<X className="size-[17px]" />
							</ToastPrimitive.Close>
						</ToastPrimitive.Root>
					);
				})}
				<ToastPrimitive.Viewport
					className={cn(
						"fixed right-6 bottom-6 z-95 flex w-[340px] max-w-[calc(100vw-2rem)] flex-col gap-3 outline-none",
					)}
				/>
			</ToastPrimitive.Provider>
		</ToastContext.Provider>
	);
}
