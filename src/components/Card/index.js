import React from "react"
import { Link } from "gatsby"

import useStyles from "./style"

export default function Card({ id, url, imageSrc, title, subtitle }) {
  const classes = useStyles()

  return (
    <Link key={id} className={classes.card} to={url}>
      <div
        className={classes.image}
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>
      <div className={classes.title}>{title}</div>
      <div className={classes.date}>{subtitle}</div>
    </Link>
  )
}
