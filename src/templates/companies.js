import React from "react"
import Layout from "../components/Layout"
import CompaniesSection from "../components/Companies/CompaniesSection"

export default ({ data, location, pageContext }) => {
  const { locale } = pageContext
  const companies = data.companies.nodes

  return (
    <Layout
      currentLocale={locale}
      otherLocaleUrl={locale === "en" ? "/fr" : "/en"}
    >
      <CompaniesSection companies={companies} />
    </Layout>
  )
}

export const query = graphql`
  query($locale: String!) {
    companies: allContentfulCompagnie(
      filter: { node_locale: { eq: $locale } }
    ) {
      nodes {
        name
        fields {
          url
        }
        logo {
          file {
            url
          }
        }
      }
    }
  }
`
