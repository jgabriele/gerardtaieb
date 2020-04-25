import React from "react"
import Header from "../Header"
import Footer from "../Footer"

import "../../globals/global.css"

import useStyle from "./style"

export default function Layout({ children }) {
  // TODO handle currentLocale, otherLocaleUrl props
  const classes = useStyle()

  return (
    <>
      <Header />
      <div className={classes.page}>{children}</div>
      <Footer />
    </>
  )
}
