import { darken, lighten } from "@mui/material/styles";

export const getColorScheme = (colors: {
	main: string;
	dark?: string;
	light?: string;
	contrastText?: string;
}) => ({
	main: colors.main,
	dark: colors.dark ? colors.dark : darken(colors.main, 0.3),
	light: colors.light ? colors.light : lighten(colors.main, 0.2),
	contrastText: colors.contrastText ? colors.contrastText : "#FFFFFF",
});
