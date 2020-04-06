import React from "react"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
  delimiter: {
    display: "block",
  },
})

export default function AsymetricSlash({
  color = "white",
  backgroundColor,
  children,
}) {
  const classes = useStyles()
  const points = direction === "left" ? "0,5 100,0 100,5" : "0,0 100,0 100,5"

  return (
    <svg
      className={classes.delimiter}
      style={{ backgroundColor }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 5"
      preserveAspectRatio="none"
    >
      <polygon fill={color} points={points}></polygon>
    </svg>
  )
}
