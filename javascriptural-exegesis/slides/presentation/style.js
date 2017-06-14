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
  BRAND_TEXT: 'green',
  PRIMARY_TEXT: 'white',
  SUBTLE_TEXT: 'grey',
  LINK_TEXT: 'cyan',
  bg: getBackground,
}

export const theme = createTheme({
  'primary-bg': '#404040',
  'secondary-bg': '#336699',
  'tertiary-bg': '#e73c71',
  'green': '#6eff00',
  'white': '#f8f8f8',
  'grey': '#909090',
  'cyan': '#00ccff',
}, {
  primary: 'Source Sans Pro',
})

console.log(theme)
