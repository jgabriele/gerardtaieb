import React from "react"
import { Link } from "gatsby"
import useStyles from "./style"

export default function Header({ logoSrc }) {
  const classes = useStyles()
  return (
    <header className={classes.header}>
      <Link to="/fr">
        <img className={classes.logo} src={logoSrc} alt="logo" />
      </Link>
    </header>
  )
}
