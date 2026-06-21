import {
	DashboardSquare01Icon,
	DropletIcon,
	Dumbbell01Icon,
	Restaurant02Icon,
	Settings01Icon,
} from "@hugeicons/core-free-icons";
import type { Meta, StoryObj } from "@storybook/react";
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
	{ key: "dashboard", icon: DashboardSquare01Icon, label: "Dashboard" },
	{ key: "diet", icon: Restaurant02Icon, label: "Diet & Meals" },
	{ key: "workouts", icon: Dumbbell01Icon, label: "Workouts" },
	{ key: "hydration", icon: DropletIcon, label: "Hydration" },
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
						icon={Settings01Icon}
						label="Settings"
						active={active === "settings"}
						onClick={() => setActive("settings")}
					/>
				</SidebarSection>
			</Sidebar>
		);
	},
};
