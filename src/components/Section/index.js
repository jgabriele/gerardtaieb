import React from "react"

import useStyles from "./style"

export default function Section({ title, children }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>{title}</h2>
      {children}
    </div>
  )
}
