import { makeStyles } from "@material-ui/styles"

export default makeStyles({
  footer: {
    color: "white",
    background: "#0e1e2b",
    padding: "0 64px 32px",
    fontSize: 16,

    "@media screen and (max-width: 960px)": {
      padding: "0 32px 32px",
    },
  },

  columns: {
    display: "flex",

    "@media screen and (max-width: 960px)": {
      flexDirection: "column",
    },
  },
  column: {
    flex: 1,
  },
  linkList: {
    margin: 0,
    "& > li": {
      listStyleType: "none",
      margin: 0,
    },
  },

  copyright: {
    opacity: 0.3,
    marginTop: 64,
  },
})
