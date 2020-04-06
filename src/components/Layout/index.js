import React, { Children } from "react"
import Header from "../Header"

export default function Layout({ children }) {
  // TODO handle currentLocale, otherLocaleUrl props
  return (
    <>
      <Header />
      {children}
    </>
  )
}
