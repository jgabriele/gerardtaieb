import { makeStyles } from "@material-ui/styles"

export default makeStyles({
  card: {
    display: "block",
    maxWidth: 400,
    width: "100%",
    height: 300,
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    textDecoration: "none",
  },
  image: {
    width: "100%",
    height: 200,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  title: {
    padding: "16px 0 0 16px",
    fontSize: 24,
  },
  date: {
    color: "#999",
    padding: "0 16px",
    fontSize: 14,
    fontWeight: "bold",
  },
})
