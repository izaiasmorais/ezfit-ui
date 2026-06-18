import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";

const meta = {
	title: "Feedback/Skeleton",
	component: Skeleton,
	tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { className: "h-3.5 w-60" } };

export const Card: Story = {
	render: () => (
		<div className="flex w-72 flex-col gap-2.5">
			<Skeleton className="h-3.5 w-[70%]" />
			<Skeleton className="h-3.5 w-full" />
			<Skeleton className="h-3.5 w-[45%]" />
			<div className="mt-1.5 flex gap-2.5">
				<Skeleton className="size-11 rounded-[14px]" />
				<div className="flex flex-1 flex-col justify-center gap-2">
					<Skeleton className="h-3 w-[60%]" />
					<Skeleton className="h-3 w-[80%]" />
				</div>
			</div>
		</div>
	),
};
