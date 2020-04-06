import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default ({ data, location, pageContext }) => {
  const { locale } = pageContext

  return (
    <Layout
      currentLocale={locale}
      otherLocaleUrl={locale === "en" ? "/fr" : "/en"}
    >
      Test
    </Layout>
  )
}

export const query = graphql`
  query($locale: String!) {
    allContentfulBlogPost(filter: { node_locale: { eq: $locale } }) {
      nodes {
        fields {
          url
        }
        node_locale
        contentful_id
      }
    }
  }
`
