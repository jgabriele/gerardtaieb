import { makeStyles } from "@material-ui/styles"

export default makeStyles({
  root: {
    display: "flex",
    position: "relative",
    background:
      "linear-gradient(0deg, #f6f6f6 calc(100% - 50vh), #0e1e2b calc(100% - 50vh))",
    paddingTop: 48,
    marginBottom: 48,
    justifyContent: "center",

    "@media screen and (max-width: 960px)": {
      paddingTop: 16,
      marginBottom: 0,
    },
  },

  blogPost: {
    maxWidth: 1000,
    width: "100%",
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  },

  image: {
    maxWidth: 1000,
    width: "100%",
    height: "35vw",
    backgroundSize: "cover",
    backgroundPosition: "center",

    "@media screen and (max-width: 960px)": {
      height: "60vw",
    },
  },

  content: {
    padding: "16px 64px",
    background: "#f6f6f6",

    "@media screen and (max-width: 960px)": {
      padding: "16px 32px",
    },
  },
})
