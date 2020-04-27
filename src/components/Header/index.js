import React from "react"
import { Link, useStaticQuery } from "gatsby"
import useStyles from "./style"

export default function Header() {
  const classes = useStyles()
  const { generalData } = useStaticQuery(graphql`
    query {
      generalData: contentfulDonneesGenerales(node_locale: { eq: "fr" }) {
        logo {
          file {
            url
          }
        }
      }
    }
  `)
  return (
    <header className={classes.header}>
      <Link to="/fr">
        <img
          className={classes.logo}
          src={generalData.logo.file.url}
          alt="logo"
        />
      </Link>
    </header>
  )
}
