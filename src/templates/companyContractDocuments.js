import React from "react"
import { makeStyles } from "@material-ui/styles"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const useStyles = makeStyles({})

export default ({ data, location, pageContext }) => {
  const classes = useStyles()
  const { locale } = pageContext

  const contractType = data.contractType

  return (
    <Layout
      currentLocale={locale}
      otherLocaleUrl={locale === "en" ? "/fr" : "/en"}
    >
      {contractType.name}
      {contractType.documents.map(document => (
        <a href={document.file.url}>{document.file.title}</a>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query($url: String!, $locale: String!) {
    contractType: contentfulContractType(
      node_locale: { eq: $locale }
      fields: { url: { eq: $url } }
    ) {
      name
      documents {
        file {
          url
        }
        title
      }
    }
  }
`
