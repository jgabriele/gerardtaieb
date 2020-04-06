import { makeStyles } from "@material-ui/styles"

export default makeStyles({
  root: {
    padding: "0 64px 96px",
  },
  testimonialWrapper: {
    padding: "64px 32px",
    boxSizing: "border-box",
    borderBottom: "1px solid #fff",
  },
  testimonial: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 120,
    margin: 0,
    marginRight: 32,
    borderRadius: "50%",
    boxSizing: "border-box",
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
