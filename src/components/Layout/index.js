import React from "react"
import Header from "../Header"

import "../../globals/global.css"

export default function Layout({ children }) {
  // TODO handle currentLocale, otherLocaleUrl props
  return (
    <>
      <Header />
      {children}
    </>
  )
}
