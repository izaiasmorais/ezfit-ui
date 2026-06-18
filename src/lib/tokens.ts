export const colors = {
	primary: "#1E293B",
	primaryForeground: "#FFFFFF",
	accent: "#A3E635",
	accent300: "#BEF264",
	background: "#FFFFFF",
	foreground: "#1E293B",
	appBg: "#EEF1F5",
	muted: "#F8FAFC",
	mutedForeground: "#64748B",
	subtleForeground: "#94A3B8",
	secondary: "#F1F5F9",
	secondaryForeground: "#0F172A",
	border: "#E2E8F0",
	ring: "#1E293B",
	success: "#22C55E",
	warning: "#F59E0B",
	error: "#EF4444",
	info: "#3B82F6",
	protein: "#3B82F6",
	carbs: "#EAB308",
	carbsText: "#CA8A04",
	fat: "#F97316",
	cardio: "#22C55E",
} as const;

export const chartColors = {
	protein: colors.protein,
	carbs: colors.carbs,
	fat: colors.fat,
	cardio: colors.cardio,
	accent: colors.accent,
	primary: colors.primary,
	muted: colors.secondary,
	grid: "#F1F5F9",
} as const;

export const radius = {
	input: "8px",
	field: "12px",
	button: "14px",
	list: "16px",
	tile: "18px",
	card: "24px",
	pill: "999px",
} as const;

export const fontFamily = {
	sans: "'Space Grotesk', ui-sans-serif, system-ui, sans-serif",
	mono: "'Space Mono', ui-monospace, monospace",
} as const;

export type CategoryColor = "protein" | "carbs" | "fat" | "cardio" | "accent" | "primary";
