import React from "react"
import Section from "../Section"

import AsymetricSlash from "../../AsymetricSlash"
// import useStyles from "./style"

export default function TestimonialsSection({ title }) {
  // const classes = useStyles()

  return (
    <>
      <Section title={title} />
      <AsymetricSlash color="#0e1e2b" />
    </>
  )
}
