import type { Meta, StoryObj } from "@storybook/react";
import { Trash2 } from "lucide-react";
import { Button } from "../Button";
import { IconTile } from "../IconTile";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./Dialog";

const meta: Meta = {
	title: "Feedback/Dialog",
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Confirm: Story = {
	render: () => (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Abrir modal</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<IconTile icon={Trash2} tone="error" size="lg" />
				</DialogHeader>
				<DialogTitle>Excluir registro?</DialogTitle>
				<DialogDescription>
					Esta acao nao pode ser desfeita. O registro de "Cafe da manha" sera removido
					permanentemente do seu diario.
				</DialogDescription>
				<DialogFooter>
					<DialogClose asChild>
						<Button variant="secondary" className="flex-1">
							Cancelar
						</Button>
					</DialogClose>
					<DialogClose asChild>
						<Button variant="destructive" className="flex-1 bg-error text-white hover:bg-error/90">
							Excluir
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	),
};
