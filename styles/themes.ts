export const themes = {
  main: {
    primary: '#fff',
    secondary: '#586069',
    black: '#1b1f23',
    gray: '#586069',
    'gray-light': '#6a737d',
    'gray-dark': '#24292e',
  },
}

export type ThemeName = keyof typeof themes
export type ThemeType = typeof themes.main
