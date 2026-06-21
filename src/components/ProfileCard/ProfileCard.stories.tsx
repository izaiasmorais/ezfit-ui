import { CrownIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../Badge";
import { ProfileCard } from "./ProfileCard";

const meta = {
	title: "Layout/ProfileCard",
	component: ProfileCard,
	tags: ["autodocs"],
	args: { name: "Alex Doe", online: true },
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		badge: (
			<Badge variant="pro">
				<HugeiconsIcon icon={CrownIcon} className="size-3" />
				Pro Member
			</Badge>
		),
	},
};

export const Offline: Story = {
	args: { online: false, badge: <Badge variant="neutral">Free</Badge> },
};
