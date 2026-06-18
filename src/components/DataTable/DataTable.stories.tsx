import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../Badge";
import { DataTable, type DataTableColumn } from "./DataTable";

interface DayRow {
	day: string;
	calories: string;
	workout: string;
	status: "completo" | "acima" | "pendente";
}

const rows: DayRow[] = [
	{ day: "Segunda", calories: "1.940", workout: "45 min", status: "completo" },
	{ day: "Terca", calories: "2.180", workout: "30 min", status: "completo" },
	{ day: "Quarta", calories: "2.640", workout: "-", status: "acima" },
	{ day: "Quinta", calories: "1.760", workout: "60 min", status: "pendente" },
];

const statusBadge: Record<DayRow["status"], React.ReactNode> = {
	completo: <Badge variant="success">Completo</Badge>,
	acima: <Badge variant="error">Acima</Badge>,
	pendente: <Badge variant="warning">Pendente</Badge>,
};

const columns: DataTableColumn<DayRow>[] = [
	{ header: "Dia", cell: (row) => <span className="font-semibold">{row.day}</span> },
	{ header: "Calorias", cell: (row) => row.calories },
	{ header: "Treino", cell: (row) => <span className="text-muted-foreground">{row.workout}</span> },
	{ header: "Status", align: "right", cell: (row) => statusBadge[row.status] },
];

const meta: Meta = {
	title: "Conteudo/DataTable",
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
	render: () => (
		<div className="w-[560px] rounded-card bg-card p-7 shadow-card">
			<DataTable columns={columns} data={rows} getRowKey={(row) => row.day} />
		</div>
	),
};
