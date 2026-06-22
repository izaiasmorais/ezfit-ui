import { ArrowLeft01Icon, ArrowRight01Icon, Calendar03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { forwardRef, useState } from "react";
import { cn } from "@/lib/cn";

const MONTHS = [
	"Janeiro",
	"Fevereiro",
	"Março",
	"Abril",
	"Maio",
	"Junho",
	"Julho",
	"Agosto",
	"Setembro",
	"Outubro",
	"Novembro",
	"Dezembro",
];

const WEEKDAYS = ["D", "S", "T", "Q", "Q", "S", "S"];

function pad(value: number): string {
	return String(value).padStart(2, "0");
}

function parseISO(value: string | undefined): Date | null {
	const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value ?? "");
	if (!match) return null;
	return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
}

function toISO(date: Date): string {
	return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function formatDisplay(date: Date): string {
	return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()}`;
}

function sameDay(a: Date, b: Date): boolean {
	return (
		a.getFullYear() === b.getFullYear() &&
		a.getMonth() === b.getMonth() &&
		a.getDate() === b.getDate()
	);
}

export interface DatePickerProps {
	value?: string;
	onChange?: (value: string) => void;
	placeholder?: string;
	className?: string;
	disabled?: boolean;
}

export const DatePicker = forwardRef<HTMLButtonElement, DatePickerProps>(
	({ value, onChange, placeholder = "Selecionar data", className, disabled }, ref) => {
		const selected = parseISO(value);
		const today = new Date();
		const base = selected ?? today;
		const [view, setView] = useState({ year: base.getFullYear(), month: base.getMonth() });
		const [open, setOpen] = useState(false);

		function handleOpenChange(next: boolean) {
			setOpen(next);
			if (next) {
				const reference = parseISO(value) ?? new Date();
				setView({ year: reference.getFullYear(), month: reference.getMonth() });
			}
		}

		function goToMonth(delta: number) {
			setView((current) => {
				const next = current.month + delta;
				if (next < 0) return { year: current.year - 1, month: 11 };
				if (next > 11) return { year: current.year + 1, month: 0 };
				return { year: current.year, month: next };
			});
		}

		function pick(date: Date) {
			onChange?.(toISO(date));
			setOpen(false);
		}

		const firstWeekday = new Date(view.year, view.month, 1).getDay();
		const cells = Array.from(
			{ length: 42 },
			(_, index) => new Date(view.year, view.month, 1 - firstWeekday + index),
		);

		return (
			<PopoverPrimitive.Root open={open} onOpenChange={handleOpenChange}>
				<PopoverPrimitive.Trigger asChild>
					<button
						ref={ref}
						type="button"
						disabled={disabled}
						className={cn(
							"flex h-11 w-full items-center justify-between gap-2.5 rounded-field border border-input bg-background px-3.5 font-sans text-sm transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/10 disabled:opacity-60",
							className,
						)}
					>
						<span className={selected ? "text-foreground" : "text-subtle-foreground"}>
							{selected ? formatDisplay(selected) : placeholder}
						</span>
						<HugeiconsIcon
							icon={Calendar03Icon}
							className="size-[18px] text-muted-foreground"
							strokeWidth={2}
						/>
					</button>
				</PopoverPrimitive.Trigger>
				<PopoverPrimitive.Portal>
					<PopoverPrimitive.Content
						align="start"
						sideOffset={8}
						className="z-50 w-[300px] rounded-list border border-border bg-card p-3.5 outline-none data-[state=open]:animate-fade-in"
					>
						<div className="mb-3 flex items-center justify-between">
							<span className="text-sm font-semibold text-foreground">
								{MONTHS[view.month]} {view.year}
							</span>
							<div className="flex items-center gap-1">
								<button
									type="button"
									onClick={() => goToMonth(-1)}
									aria-label="Mês anterior"
									className="flex size-8 items-center justify-center rounded-field text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
								>
									<HugeiconsIcon icon={ArrowLeft01Icon} className="size-[18px]" strokeWidth={2} />
								</button>
								<button
									type="button"
									onClick={() => goToMonth(1)}
									aria-label="Próximo mês"
									className="flex size-8 items-center justify-center rounded-field text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
								>
									<HugeiconsIcon icon={ArrowRight01Icon} className="size-[18px]" strokeWidth={2} />
								</button>
							</div>
						</div>

						<div className="mb-1 grid grid-cols-7 gap-1">
							{WEEKDAYS.map((day, index) => (
								<div
									key={`${day}-${index}`}
									className="flex h-8 items-center justify-center text-[11px] font-medium text-subtle-foreground"
								>
									{day}
								</div>
							))}
						</div>

						<div className="grid grid-cols-7 gap-1">
							{cells.map((date) => {
								const inMonth = date.getMonth() === view.month;
								const isToday = sameDay(date, today);
								const isSelected = selected !== null && sameDay(date, selected);
								return (
									<button
										key={toISO(date)}
										type="button"
										onClick={() => pick(date)}
										className={cn(
											"flex h-8 items-center justify-center rounded-field text-[13px] tabular-nums transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/25",
											isSelected
												? "bg-accent font-semibold text-accent-foreground"
												: inMonth
													? "text-foreground hover:bg-secondary"
													: "text-subtle-foreground hover:bg-secondary",
											!isSelected && isToday && "border border-accent text-accent",
										)}
									>
										{date.getDate()}
									</button>
								);
							})}
						</div>

						<div className="mt-3 flex items-center justify-between border-t border-border-soft pt-3">
							<button
								type="button"
								onClick={() => {
									onChange?.("");
									setOpen(false);
								}}
								className="text-[13px] font-semibold text-muted-foreground transition-colors hover:text-foreground"
							>
								Limpar
							</button>
							<button
								type="button"
								onClick={() => pick(new Date())}
								className="text-[13px] font-semibold text-accent transition-colors hover:brightness-95"
							>
								Hoje
							</button>
						</div>
					</PopoverPrimitive.Content>
				</PopoverPrimitive.Portal>
			</PopoverPrimitive.Root>
		);
	},
);

DatePicker.displayName = "DatePicker";
