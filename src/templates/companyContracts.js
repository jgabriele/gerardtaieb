import React from "react"
import { makeStyles } from "@material-ui/styles"
// import { Link } from "gatsby"
import Layout from "../components/Layout"

// const useStyles = makeStyles({})

export default ({ data, location, pageContext }) => {
  // const classes = useStyles()
  const { locale } = pageContext

  const company = data.company

  return (
    <Layout
      currentLocale={locale}
      otherLocaleUrl={locale === "en" ? "/fr" : "/en"}
    >
      {company.name}
      {company.contractTypes.map(contract => (
        <Link to={contract.fields.url}>{contract.name}</Link>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query($url: String!, $locale: String!) {
    company: contentfulCompanyFiles(
      node_locale: { eq: $locale }
      fields: { url: { eq: $url } }
    ) {
      name
      node_locale
      fields {
        url
      }
      contractTypes {
        name
        type
      }
    }
  }
`
