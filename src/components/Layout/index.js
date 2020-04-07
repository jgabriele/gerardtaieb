import React from "react"
import Header from "../Header"
import Footer from "../Footer"

import "../../globals/global.css"

import useStyle from "./style"

export default function Layout({ children, logoSrc, footerText }) {
  // TODO handle currentLocale, otherLocaleUrl props
  const classes = useStyle()

  return (
    <>
      <Header logoSrc={logoSrc} />
      <div className={classes.page}>{children}</div>
      <Footer text={footerText} />
    </>
  )
}
