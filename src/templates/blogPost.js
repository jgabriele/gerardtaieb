import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/Layout"
import BlogPostPage from "../components/BlogPost"

export default ({ data, pageContext }) => {
  const { locale } = pageContext

  return (
    <Layout
      currentLocale={locale}
      otherLocaleUrl={locale === "en" ? "/fr" : "/en"}
      footerText={documentToReactComponents(data.generalData.footerText.json)}
    >
      <BlogPostPage blogPost={data.blogPost} />
    </Layout>
  )
}

export const query = graphql`
  query($locale: String!, $url: String!) {
    blogPost: contentfulBlogPost(
      node_locale: { eq: $locale }
      fields: { url: { eq: $url } }
    ) {
      coverImage {
        file {
          url
        }
      }
      name
      createdAt
      content {
        json
      }
    }

    generalData: contentfulGeneralData(node_locale: { eq: "fr" }) {
      footerText {
        json
      }
    }
  }
`