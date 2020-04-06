import React, { Children } from "react"
import useStyles from "./style"

export default function Layout() {
  const classes = useStyles()
  return (
    <header className={classes.header}>
      <a href="/fr">Logo</a>
      <a href="/en">English</a>
    </header>
  )
}
