import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { FilterChips } from "./FilterChips";

const meta: Meta<typeof FilterChips> = {
	title: "Conteudo/FilterChips",
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FilterChips>;

export const Default: Story = {
	render: () => {
		const [value, setValue] = useState("all");
		return (
			<FilterChips
				value={value}
				onValueChange={setValue}
				items={[
					{ value: "all", label: "Todos" },
					{ value: "protein", label: "Alta proteina" },
					{ value: "lowcarb", label: "Low carb" },
				]}
			/>
		);
	},
};
