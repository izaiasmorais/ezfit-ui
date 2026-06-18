import type { Meta, StoryObj } from "@storybook/react";
import { Droplet, Dumbbell, LayoutGrid, Settings, Utensils } from "lucide-react";
import { useState } from "react";
import { NavItem } from "./NavItem";
import { Sidebar, SidebarBrand, SidebarSection } from "./Sidebar";

const meta = {
	title: "Layout/Sidebar",
	component: Sidebar,
	tags: ["autodocs"],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

const mainItems = [
	{ key: "dashboard", icon: LayoutGrid, label: "Dashboard" },
	{ key: "diet", icon: Utensils, label: "Diet & Meals" },
	{ key: "workouts", icon: Dumbbell, label: "Workouts" },
	{ key: "hydration", icon: Droplet, label: "Hydration" },
];

export const Default: Story = {
	render: () => {
		const [active, setActive] = useState("dashboard");
		return (
			<Sidebar className="w-72">
				<SidebarBrand name="FitTrack" logo="F" />
				<SidebarSection label="Menu">
					{mainItems.map((item) => (
						<NavItem
							key={item.key}
							icon={item.icon}
							label={item.label}
							active={active === item.key}
							onClick={() => setActive(item.key)}
						/>
					))}
				</SidebarSection>
				<SidebarSection label="System">
					<NavItem
						icon={Settings}
						label="Settings"
						active={active === "settings"}
						onClick={() => setActive("settings")}
					/>
				</SidebarSection>
			</Sidebar>
		);
	},
};
