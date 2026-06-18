import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Tooltip } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
	title: "Feedback/Tooltip",
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
	render: () => (
		<Tooltip content="Dica rapida do sistema">
			<Button variant="secondary">Hover p/ tooltip</Button>
		</Tooltip>
	),
};
