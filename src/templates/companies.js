import React from "react"
import { Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/Layout"
import CompaniesSection from "../components/Companies/CompaniesSection"

export default ({ data, location, pageContext }) => {
  const { locale } = pageContext

  const companies = data.allContentfulCompanyFiles.nodes

  return (
    <Layout
      currentLocale={locale}
      otherLocaleUrl={locale === "en" ? "/fr" : "/en"}
      footerText={documentToReactComponents(data.generalData.footerText.json)}
    >
      <CompaniesSection companies={companies} />
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
        logo {
          file {
            url
          }
        }
      }
    }

    generalData: contentfulGeneralData(node_locale: { eq: "fr" }) {
      footerText {
        json
      }
    }
  }
`
