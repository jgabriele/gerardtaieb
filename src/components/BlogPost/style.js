import { makeStyles } from "@material-ui/styles"

export default makeStyles({
  root: {
    top: -60,
    display: "flex",
    position: "relative",
    background:
      "linear-gradient(0deg, #f6f6f6 calc(100% - 550px), #0e1e2b calc(100% - 550px))",
    paddingTop: 100,
    justifyContent: "center",
  },

  blogPost: {
    width: 1000,
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  },

  image: {
    width: 1000,
    height: 550,
    backgroundSize: "cover",
  },

  content: {
    padding: "16px 64px",
    background: "#f6f6f6",
  },
})
