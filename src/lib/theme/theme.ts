import { colors, spacing } from "./tokens";

export const lightTheme = {
	colors: {
		bg: {
			calm: {
				section: colors.white,
				global: colors.grey[50],
				disabled: colors.grey[100],
			},
		},

		text: {
			calm: {
				main: colors.grey[50],
			},
			loud: {
				main: colors.grey[800],
				secondary: colors.grey[500],
				disabled: colors.grey[300],
			},
		},

		lead: {
			calm: {
				enabled: colors.blue[50],
				hover: colors.blue[100],
				active: colors.blue[200],
			},
			loud: {
				enabled: colors.blue[400],
				hover: colors.blue[500],
				active: colors.blue[600],
			},
			border: {
				enabled: colors.blue[100],
			},
		},

		accent: {
			green: {
				calm: {
					enabled: colors.green[50],
					hover: colors.green[100],
					active: colors.green[200],
				},
				loud: {
					enabled: colors.green[400],
					hover: colors.green[500],
					active: colors.green[600],
				},
				border: {
					enabled: colors.green[100],
				},
			},
			cyan: {
				calm: {
					enabled: colors.cyan[50],
					hover: colors.cyan[100],
					active: colors.cyan[200],
				},
				loud: {
					enabled: colors.cyan[400],
					hover: colors.cyan[500],
					active: colors.cyan[600],
				},
				border: {
					enabled: colors.cyan[100],
				},
			},
		},
	},
	spacing: {
		height: {
			base: spacing[40],
			small: spacing[32],
		},
		// @todo Добавить токены в тему
		inner: {},
		outer: {},
		paddings: {},
	},
	cornerRadius: {
		micro: spacing[4],
		componentBase: spacing[8],
	},

	shadows: {
		focus: `0px 0px 0px 4px rgba(192, 206, 255, 0.8)`,
	},
};
