import React from "react"
import Layout from "../components/Layout"
import BlogPostPage from "../components/BlogPost"

export default ({ data, pageContext }) => {
  const { locale } = pageContext

  const companies = data.blogPost

  return (
    <Layout
      currentLocale={locale}
      otherLocaleUrl={locale === "en" ? "/fr" : "/en"}
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
  }
`
