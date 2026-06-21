import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
	title: "Fundamentos/Cores",
	parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

interface Swatch {
	name: string;
	token: string;
	value: string;
	ring?: boolean;
}

function SwatchGrid({
	title,
	description,
	swatches,
}: {
	title: string;
	description: string;
	swatches: Swatch[];
}) {
	return (
		<div className="mb-5 rounded-card bg-card p-7 shadow-card">
			<h3 className="text-base font-semibold">{title}</h3>
			<p className="mb-6 text-[13px] text-subtle-foreground">{description}</p>
			<div className="grid grid-cols-4 gap-5">
				{swatches.map((swatch) => (
					<div key={swatch.token} className="flex flex-col gap-3">
						<div
							className="h-[92px] rounded-[16px]"
							style={{
								background: swatch.value,
								boxShadow: swatch.ring
									? "inset 0 0 0 1px #E2E8F0"
									: "inset 0 0 0 1px rgba(15,23,42,0.06)",
							}}
						/>
						<div>
							<div className="text-sm font-semibold">{swatch.name}</div>
							<div className="font-mono text-xs text-muted-foreground">{swatch.value}</div>
							<div className="font-mono text-[11px] text-subtle-foreground">{swatch.token}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export const Palette: Story = {
	render: () => (
		<div className="max-w-[920px]">
			<SwatchGrid
				title="Primarias & Marca"
				description="Azul de acao do sistema, fundo soft e o ink primario."
				swatches={[
					{ name: "Action / Primary", token: "accent", value: "#2B4BF2" },
					{ name: "Action soft", token: "accent-300", value: "#E8ECFD", ring: true },
					{ name: "Ink", token: "primary", value: "#16181D" },
					{ name: "White", token: "primary-foreground", value: "#FFFFFF", ring: true },
				]}
			/>
			<SwatchGrid
				title="Superficies & Neutros"
				description="Backgrounds, bordas e hierarquia de texto em tons de gray."
				swatches={[
					{ name: "Background", token: "background", value: "#FFFFFF", ring: true },
					{ name: "App bg", token: "app-bg", value: "#F4F6FA", ring: true },
					{ name: "Gray 100", token: "secondary", value: "#EEF0F4", ring: true },
					{ name: "Border", token: "border", value: "#E5E7EB", ring: true },
					{ name: "Ink (texto 1)", token: "foreground", value: "#16181D" },
					{ name: "Gray 500 (texto 2)", token: "muted-foreground", value: "#6B7280" },
					{ name: "Gray 400 (texto 3)", token: "subtle-foreground", value: "#8B93A2" },
					{ name: "Ring", token: "ring", value: "#2B4BF2" },
				]}
			/>
			<SwatchGrid
				title="Semanticas"
				description="Feedback de estado. Danger e info acompanham a nova paleta."
				swatches={[
					{ name: "Success", token: "success", value: "#22C55E" },
					{ name: "Warning", token: "warning", value: "#F59E0B" },
					{ name: "Danger", token: "error", value: "#F23B47" },
					{ name: "Info", token: "info", value: "#2B4BF2" },
				]}
			/>
			<SwatchGrid
				title="Categorias (Macros & Treino)"
				description="Proteina azul, carbo gray, gordura/caloria laranja e cardio verde."
				swatches={[
					{ name: "Proteina", token: "protein", value: "#2B4BF2" },
					{ name: "Carboidrato", token: "carbs", value: "#C4C9D2", ring: true },
					{ name: "Gordura / Caloria", token: "fat", value: "#F97316" },
					{ name: "Cardio", token: "cardio", value: "#22C55E" },
				]}
			/>
		</div>
	),
};
