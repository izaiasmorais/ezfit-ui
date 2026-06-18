import type { Meta, StoryObj } from "@storybook/react";
import { Maximize2, MonitorSmartphone, RefreshCw } from "lucide-react";
import { Topbar } from "./Topbar";

const meta = {
	title: "Layout/Topbar",
	component: Topbar,
	tags: ["autodocs"],
} satisfies Meta<typeof Topbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="w-[620px]">
			<Topbar
				brand="EZFIT"
				title="Good Morning!"
				subtitle="Here is your daily activity for 2026-01-18"
				actions={
					<>
						<span className="flex cursor-pointer items-center gap-1.5 text-[13px] font-medium">
							<MonitorSmartphone className="size-[17px]" />
							Device
						</span>
						<RefreshCw className="size-[17px] cursor-pointer" />
						<Maximize2 className="size-[17px] cursor-pointer" />
					</>
				}
			/>
		</div>
	),
};
