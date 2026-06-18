import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface DataTableColumn<T> {
	header: string;
	align?: "left" | "right";
	cell: (row: T) => ReactNode;
}

export interface DataTableProps<T> extends React.HTMLAttributes<HTMLTableElement> {
	columns: DataTableColumn<T>[];
	data: T[];
	getRowKey: (row: T, index: number) => string | number;
}

export function DataTable<T>({ columns, data, getRowKey, className, ...props }: DataTableProps<T>) {
	return (
		<table className={cn("w-full border-collapse", className)} {...props}>
			<thead>
				<tr>
					{columns.map((column) => (
						<th
							key={column.header}
							className={cn(
								"pb-3.5 font-mono text-[11px] font-bold tracking-wider text-subtle-foreground uppercase",
								column.align === "right" ? "text-right" : "text-left",
							)}
						>
							{column.header}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((row, index) => (
					<tr key={getRowKey(row, index)} className="border-t border-border-soft">
						{columns.map((column) => (
							<td
								key={column.header}
								className={cn(
									"py-3.5 text-sm",
									column.align === "right" ? "text-right" : "text-left",
								)}
							>
								{column.cell(row)}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}
