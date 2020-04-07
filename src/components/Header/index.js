import React from "react"
import { Link } from "gatsby"
import useStyles from "./style"

export default function Header() {
  const classes = useStyles()
  return (
    <header className={classes.header}>
      <Link href="/fr">Logo</Link>
    </header>
  )
}
