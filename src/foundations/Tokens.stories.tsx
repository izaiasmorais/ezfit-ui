import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
	title: "Fundamentos/Tokens",
	parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

const spacing = [
	{ token: "space.1", px: 4 },
	{ token: "space.2", px: 8 },
	{ token: "space.3", px: 12 },
	{ token: "space.4", px: 16 },
	{ token: "space.6", px: 24 },
	{ token: "space.8", px: 32 },
	{ token: "space.12", px: 48 },
];

const radii = [
	{ token: "radius-input", value: "8px" },
	{ token: "radius-field", value: "10px" },
	{ token: "radius-button", value: "10px" },
	{ token: "radius-list", value: "12px" },
	{ token: "radius-tile", value: "14px" },
	{ token: "radius-card", value: "16px" },
	{ token: "radius-pill", value: "9999px" },
];

const shadows = ["shadow-sm", "shadow-md", "shadow-lg", "shadow-xl"];

export const Spacing: Story = {
	render: () => (
		<div className="max-w-[520px] rounded-card bg-card p-7 shadow-card">
			<h3 className="mb-1 font-mono text-xs tracking-widest text-muted-foreground uppercase">
				Espacamento
			</h3>
			<p className="mb-6 text-[13px] text-subtle-foreground">Base 4 / 8px.</p>
			<div className="flex flex-col gap-3.5">
				{spacing.map((item) => (
					<div key={item.token} className="flex items-center gap-4">
						<span className="w-14 font-mono text-xs text-muted-foreground">{item.px}px</span>
						<div className="h-4 rounded-[3px] bg-accent" style={{ width: item.px }} />
						<span className="font-mono text-[11px] text-subtle-foreground">{item.token}</span>
					</div>
				))}
			</div>
		</div>
	),
};

export const Radius: Story = {
	render: () => (
		<div className="max-w-[640px] rounded-card bg-card p-7 shadow-card">
			<h3 className="mb-1 font-mono text-xs tracking-widest text-muted-foreground uppercase">
				Border Radius
			</h3>
			<p className="mb-6 text-[13px] text-subtle-foreground">Cantos do sistema.</p>
			<div className="grid grid-cols-5 gap-4">
				{radii.map((item) => (
					<div key={item.token} className="text-center">
						<div
							className="mb-2 h-16 border border-border bg-secondary"
							style={{ borderRadius: item.value }}
						/>
						<div className="text-xs font-semibold">{item.token}</div>
						<div className="font-mono text-[11px] text-subtle-foreground">{item.value}</div>
					</div>
				))}
			</div>
		</div>
	),
};

export const Shadows: Story = {
	render: () => (
		<div className="max-w-[640px] rounded-card bg-card p-7 shadow-card">
			<h3 className="mb-1 font-mono text-xs tracking-widest text-muted-foreground uppercase">
				Sombras / Elevacao
			</h3>
			<p className="mb-7 text-[13px] text-subtle-foreground">Quatro niveis de profundidade.</p>
			<div className="grid grid-cols-4 gap-6 p-2">
				{shadows.map((shadow) => (
					<div key={shadow} className="text-center">
						<div className={`mb-2.5 h-16 rounded-[16px] bg-card ${shadow}`} />
						<div className="text-xs font-semibold">{shadow.replace("shadow-", "")}</div>
					</div>
				))}
			</div>
		</div>
	),
};
