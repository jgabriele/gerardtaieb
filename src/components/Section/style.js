import { makeStyles } from "@material-ui/styles"

export default makeStyles({
  root: {
    padding: "0 64px 96px",

    "@media screen and (max-width: 960px)": {
      padding: "0 32px 48px",
    },
  },
  title: {
    margin: 0,
    padding: "96px 0",
    fontSize: 42,
    textAlign: "center",

    "@media screen and (max-width: 960px)": {
      padding: "64px 0",
    },
  },
})
