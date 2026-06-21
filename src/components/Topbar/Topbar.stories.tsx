import { ComputerPhoneSyncIcon, Maximize02Icon, RefreshIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Meta, StoryObj } from "@storybook/react";
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
							<HugeiconsIcon icon={ComputerPhoneSyncIcon} className="size-[17px]" />
							Device
						</span>
						<HugeiconsIcon icon={RefreshIcon} className="size-[17px] cursor-pointer" />
						<HugeiconsIcon icon={Maximize02Icon} className="size-[17px] cursor-pointer" />
					</>
				}
			/>
		</div>
	),
};
