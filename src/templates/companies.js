import React from "react"
import { Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/Layout"
import CompaniesSection from "../components/Companies/CompaniesSection"

export default ({ data, location, pageContext }) => {
  const { locale } = pageContext

  const { generalData } = data
  const companies = data.allContentfulCompanyFiles.nodes

  return (
    <Layout
      currentLocale={locale}
      otherLocaleUrl={locale === "en" ? "/fr" : "/en"}
      logoSrc={generalData.logo.file.url}
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
      logo {
        file {
          url
        }
      }
    }
  }
`
