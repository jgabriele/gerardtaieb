import React from "react"
import Layout from "../components/Layout"
import Breadcrumbs from "../components/Breadcrumbs"
import ContractDocumentsSection from "../components/Companies/ContractDocumentsSection"

export default ({ data, location, pageContext }) => {
  const { locale } = pageContext

  const { company, contractType } = data

  const breadcrumbLinks = [
    { name: "Companies", url: `/${locale}/files` },
    { name: company.name, url: company.fields.url },
    { name: contractType.name, url: contractType.fields.url },
  ]

  return (
    <Layout
      currentLocale={locale}
      otherLocaleUrl={locale === "en" ? "/fr" : "/en"}
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
  }
`
