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
				description="Verde-lima de destaque e o navy primario do sistema."
				swatches={[
					{ name: "Lime 400", token: "accent", value: "#A3E635" },
					{ name: "Lime 300", token: "accent-300", value: "#BEF264" },
					{ name: "Primary", token: "primary", value: "#1E293B" },
					{ name: "Primary FG", token: "primary-foreground", value: "#FFFFFF", ring: true },
				]}
			/>
			<SwatchGrid
				title="Superficies & Neutros"
				description="Backgrounds, bordas e hierarquia de texto."
				swatches={[
					{ name: "Background", token: "background", value: "#FFFFFF", ring: true },
					{ name: "Muted", token: "muted", value: "#F8FAFC", ring: true },
					{ name: "Secondary", token: "secondary", value: "#F1F5F9", ring: true },
					{ name: "Border", token: "border", value: "#E2E8F0", ring: true },
					{ name: "Foreground", token: "foreground", value: "#1E293B" },
					{ name: "Muted FG", token: "muted-foreground", value: "#64748B" },
					{ name: "Subtle FG", token: "subtle-foreground", value: "#94A3B8" },
					{ name: "Ring", token: "ring", value: "#1E293B" },
				]}
			/>
			<SwatchGrid
				title="Semanticas"
				description="Feedback de estado."
				swatches={[
					{ name: "Success", token: "success", value: "#22C55E" },
					{ name: "Warning", token: "warning", value: "#F59E0B" },
					{ name: "Error", token: "error", value: "#EF4444" },
					{ name: "Info", token: "info", value: "#3B82F6" },
				]}
			/>
			<SwatchGrid
				title="Categorias (Macros & Treino)"
				description="Cores por tipo de macro e atividade."
				swatches={[
					{ name: "Proteina", token: "protein", value: "#3B82F6" },
					{ name: "Carboidrato", token: "carbs", value: "#EAB308" },
					{ name: "Gordura", token: "fat", value: "#F97316" },
					{ name: "Cardio", token: "cardio", value: "#22C55E" },
				]}
			/>
		</div>
	),
};
