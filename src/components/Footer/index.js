import React from "react"
import useStyles from "./style"

export default function Footer({ text }) {
  const classes = useStyles()
  return <footer className={classes.footer}>{text}</footer>
}
