import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/Layout"
import Breadcrumbs from "../components/Breadcrumbs"
import ContractTypesSection from "../components/Companies/ContractTypesSection"

export default ({ data, location, pageContext }) => {
  const { locale } = pageContext

  const { company, generalData } = data

  const breadcrumbLinks = [
    { name: "Companies", url: `/${locale}/files` },
    { name: company.name, url: company.fields.url },
  ]

  return (
    <Layout
      currentLocale={locale}
      otherLocaleUrl={locale === "en" ? "/fr" : "/en"}
      logoSrc={generalData.logo.file.url}
      footerText={documentToReactComponents(data.generalData.footerText.json)}
    >
      <Breadcrumbs links={breadcrumbLinks} />

      <ContractTypesSection contractTypes={company.contractTypes} />
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
