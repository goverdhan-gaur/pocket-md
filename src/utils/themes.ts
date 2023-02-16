const colors = {
  beige: '#fbf6ef',
  khaki: '#dbcfbd',
  green: '#71816d',
  black: '#0c0a08',
  pink: '#c5304b',
}

export const lightTheme = {
  theme: 'light',
  background: colors.beige,
  color: colors.black,
  invertBackground: colors.black,
  invertColor: colors.beige,
  highlightColor: colors.green,
  invertHighlightColor: colors.pink,
}

export const darkTheme = {
  theme: 'dark',
  invertBackground: colors.beige,
  invertColor: colors.black,
  background: colors.black,
  color: colors.beige,
  highlightColor: colors.green,
  invertHighlightColor: colors.green,
}
