import React from "react"
import { Link } from "gatsby"
import useStyles from "./style"

export default function Breadcrumbs({ links }) {
  const classes = useStyles()
  return (
    <div className={classes.breadcrumbs}>
      {links.map((breadcrumb, index) => {
        const Component = index === links.length - 1 ? "span" : Link

        return (
          <>
            {index !== 0 && " / "}
            <Component key={breadcrumb.name} to={breadcrumb.url}>
              {breadcrumb.name}
            </Component>
          </>
        )
      })}
    </div>
  )
}
