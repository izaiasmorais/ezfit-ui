import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
	title: "Fundamentos/Tipografia",
	parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

const scale = [
	{
		sample: "Display",
		className: "text-[56px] font-bold tracking-[-0.03em] leading-none",
		spec: "56 / 700 - -0.03em",
	},
	{
		sample: "Heading H1",
		className: "text-[40px] font-bold tracking-[-0.02em] leading-none",
		spec: "40 / 700",
	},
	{
		sample: "Heading H2",
		className: "text-[30px] font-semibold tracking-[-0.01em] leading-none",
		spec: "30 / 600",
	},
	{ sample: "Heading H3", className: "text-[22px] font-semibold leading-none", spec: "22 / 600" },
	{ sample: "Heading H4", className: "text-[17px] font-semibold leading-none", spec: "17 / 600" },
	{
		sample: "Body - texto de paragrafo padrao.",
		className: "text-[15px] text-[#475569]",
		spec: "15 / 400",
	},
	{
		sample: "Caption - metadados e legendas.",
		className: "text-[13px] text-muted-foreground",
		spec: "13 / 400",
	},
];

export const Scale: Story = {
	render: () => (
		<div className="max-w-[820px] rounded-card bg-card p-9 shadow-card">
			{scale.map((row) => (
				<div
					key={row.spec}
					className="flex items-baseline justify-between gap-6 border-b border-border-soft py-[18px] last:border-0"
				>
					<span className={row.className}>{row.sample}</span>
					<span className="font-mono text-xs whitespace-nowrap text-subtle-foreground">
						{row.spec}
					</span>
				</div>
			))}
			<div className="mt-7 flex flex-wrap gap-7 border-t border-border-soft pt-6">
				{[
					{ w: "font-normal", l: "Regular - 400" },
					{ w: "font-medium", l: "Medium - 500" },
					{ w: "font-semibold", l: "SemiBold - 600" },
					{ w: "font-bold", l: "Bold - 700" },
				].map((weight) => (
					<div key={weight.l}>
						<div className={`text-[30px] ${weight.w}`}>Aa</div>
						<div className="mt-1 font-mono text-[11px] text-subtle-foreground">{weight.l}</div>
					</div>
				))}
				<div className="border-l border-border-soft pl-7">
					<div className="font-mono text-[30px]">0123</div>
					<div className="mt-1 font-mono text-[11px] text-subtle-foreground">
						Space Mono - tokens
					</div>
				</div>
			</div>
		</div>
	),
};
