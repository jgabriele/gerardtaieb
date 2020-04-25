import { makeStyles } from "@material-ui/styles"

export default makeStyles({
  footer: {
    color: "white",
    background: "#0e1e2b",
    padding: "32px 64px",
    fontSize: 16,
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
    marginTop: 32,
  },
})
