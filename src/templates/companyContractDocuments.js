import React from "react"
import { Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/Layout"
import Breadcrumbs from "../components/Breadcrumbs"
import ContractDocumentsSection from "../components/Companies/ContractDocumentsSection"

export default ({ data, location, pageContext }) => {
  const { locale } = pageContext

  const company = data.company
  const contractType = data.contractType

  const breadcrumbLinks = [
    { name: "Companies", url: `/${locale}/files` },
    { name: company.name, url: company.fields.url },
    { name: contractType.name, url: contractType.fields.url },
  ]

  return (
    <Layout
      currentLocale={locale}
      otherLocaleUrl={locale === "en" ? "/fr" : "/en"}
      footerText={documentToReactComponents(data.generalData.footerText.json)}
    >
      <Breadcrumbs links={breadcrumbLinks} />

      <ContractDocumentsSection documents={contractType.documents} />
    </Layout>
  )
}

export const query = graphql`
  query($url: String!, $locale: String!, $parentUrl: String!) {
    contractType: contentfulContractType(
      node_locale: { eq: $locale }
      fields: { url: { eq: $url } }
    ) {
      name
      fields {
        url
      }
      documents {
        file {
          url
        }
        title
      }
    }

    company: contentfulCompanyFiles(
      node_locale: { eq: $locale }
      fields: { url: { eq: $parentUrl } }
    ) {
      name
      fields {
        url
      }
    }

    generalData: contentfulGeneralData(node_locale: { eq: "fr" }) {
      footerText {
        json
      }
    }
  }
`
