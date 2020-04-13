import React from "react"
import { Helmet } from "react-helmet"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "../../globals/theme"

export default function BodyWrap({ children }) {
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  )
}
