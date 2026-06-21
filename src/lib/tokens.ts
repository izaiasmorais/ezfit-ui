export const colors = {
	primary: "#16181D",
	primaryForeground: "#FFFFFF",
	accent: "#2B4BF2",
	accentHover: "#2540DA",
	accent300: "#E8ECFD",
	background: "#FFFFFF",
	foreground: "#16181D",
	appBg: "#F4F6FA",
	muted: "#F5F7FA",
	mutedForeground: "#6B7280",
	subtleForeground: "#8B93A2",
	secondary: "#EEF0F4",
	secondaryForeground: "#16181D",
	border: "#E5E7EB",
	ring: "#2B4BF2",
	success: "#22C55E",
	warning: "#F59E0B",
	error: "#F23B47",
	info: "#2B4BF2",
	protein: "#2B4BF2",
	carbs: "#C4C9D2",
	carbsText: "#6B7280",
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
	grid: "#EEF0F4",
} as const;

export const radius = {
	input: "8px",
	field: "10px",
	button: "10px",
	list: "12px",
	tile: "14px",
	card: "16px",
	pill: "999px",
} as const;

export const fontFamily = {
	sans: "'Manrope', ui-sans-serif, system-ui, sans-serif",
	mono: "'Space Mono', ui-monospace, monospace",
} as const;

export type CategoryColor = "protein" | "carbs" | "fat" | "cardio" | "accent" | "primary";
