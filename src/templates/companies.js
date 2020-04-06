import React from "react"
// import { makeStyles } from "@material-ui/styles"
import { Link } from "gatsby"
import Layout from "../components/Layout"

// const useStyles = makeStyles({})

export default ({ data, location, pageContext }) => {
  // const classes = useStyles()
  const { locale } = pageContext

  const companies = data.allContentfulCompanyFiles.nodes

  return (
    <Layout
      currentLocale={locale}
      otherLocaleUrl={locale === "en" ? "/fr" : "/en"}
    >
      {companies.map(company => (
        <Link to={company.fields.url}>{company.name}</Link>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query($locale: String!) {
    allContentfulCompanyFiles(filter: { node_locale: { eq: $locale } }) {
      nodes {
        name
        fields {
          url
        }
      }
    }
  }
`
