import React from "react"
import Header from "../Header"
import Footer from "../Footer"

import "../../globals/global.css"

export default function Layout({ children, footerText }) {
  // TODO handle currentLocale, otherLocaleUrl props
  return (
    <>
      <Header />
      {children}
      <Footer text={footerText} />
    </>
  )
}
