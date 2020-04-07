import Typography from "typography"
import elkGlenTheme from "typography-theme-elk-glen"

elkGlenTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  a: {
    textDecoration: "none",
    fontWeight: "bold",
    textShadow: "none",
    backgroundImage: "none",
    color: "inherit",
  },
  "a:hover": {
    textDecoration: "underline",
  },
  "img, p": {
    margin: 0,
  },
})
const typography = new Typography(elkGlenTheme)

export default typography
