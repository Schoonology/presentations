import { defaultTheme } from "spectacle";

export const ENGAGED = "👏🏻";

const WHITE = "#ffffff";
const BLACK = "#151515";
const PURPLE = "#6e82e7";
const APRICOT = "#FF955C";
const GREEN = "#6B8769";

export const GRADIENT =
  "linear-gradient(135deg, rgba(15,150,214,1) 0%, rgba(70,26,214,1) 100%)";

export const THEME = {
  ...defaultTheme,
  fonts: {
    monospace: "'Jetbrains Mono'",
    header: "'GT Walsheim', sans-serif",
    text: "'GT Walsheim', sans-serif",
  },
  colors: {
    // e.g. Text
    primary: WHITE,
    // e.g. Headings
    secondary: PURPLE,
    // e.g. backgrounds
    tertiary: BLACK,
    quaternary: APRICOT,
    quinary: GREEN,
  },
} as const;
