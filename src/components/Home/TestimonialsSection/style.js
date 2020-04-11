import { makeStyles } from "@material-ui/styles"

export default makeStyles({
  root: {
    background: "#eee",
  },
  testimonialWrapper: {
    padding: "64px 32px",
    boxSizing: "border-box",
    borderBottom: "1px solid #fff",

    "&:first-child": {
      paddingTop: 0,
    },

    "&:last-child": {
      borderBottom: "none",
    },
  },
  testimonial: {
    width: "100%",
    display: "flex",
    alignItems: "center",

    "@media screen and (max-width: 960px)": {
      flexDirection: "column",
    },
  },
  image: {
    width: 120,
    height: 120,
    margin: 0,
    marginRight: 32,
    borderRadius: "50%",
    boxSizing: "border-box",
    maxWidth: "100%",

    "@media screen and (max-width: 960px)": {
      marginRight: 0,
      marginBottom: 32,
    },
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  message: {
    color: "#555",
    margin: "16px 0",
    fontSize: 16,
    fontStyle: "oblique",
  },
})
