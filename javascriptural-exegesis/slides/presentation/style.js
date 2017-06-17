import createTheme from "spectacle/lib/themes/default"

var backgroundColors = ['primary-bg', 'secondary-bg', 'tertiary-bg']
var keys = []
function getBackground(key) {
  var index = keys.indexOf(key)

  if (index === -1) {
    index = keys.push(key) - 1
  }

  return backgroundColors[index % backgroundColors.length]
}

export const colors = {
  PRIMARY_BG: 'primary-bg',
  SECONDARY_BG: 'secondary-bg',
  TERTIARY_BG: 'tertiary-bg',
  SEPIA_BG: 'sepia-bg',
  BRAND_TEXT: 'green',
  PRIMARY_TEXT: 'white',
  SUBTLE_TEXT: 'grey',
  JOKE_TEXT: 'dark_grey',
  INVISIBLE_TEXT: 'very_dark_grey',
  LINK_TEXT: 'cyan',
  JAVASCRIPT: 'gold',
  TRANSPARENT: 'transparent',
  bg: getBackground,
}

export const theme = createTheme({
  'primary-bg': '#303030',
  'secondary-bg': '#2040a0',
  'tertiary-bg': '#6020a0',
  'sepia-bg': '#605040',
  'green': '#6eff00',
  'white': '#f8f8f8',
  'grey': 'rgba(255, 255, 255, 0.7)',
  'dark_grey': 'rgba(255, 255, 255, 0.4)',
  'very_dark_grey': 'rgba(255, 255, 255, 0.1)',
  'cyan': '#00ccff',
  'gold': '#ffcc00',
  'transparent': 'transparent',
}, {
  primary: 'Source Sans Pro',
})

console.log(theme)
