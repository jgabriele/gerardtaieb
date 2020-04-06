import React from "react"
import Layout from "../components/Layout"
import BlogPostsSection from "../components/Home/BlogPostsSection"
import TestimonialsSection from "../components/Home/TestimonialsSection"
import EmailCaptureSection from "../components/Home/EmailCaptureSection"

export default ({ data, location, pageContext }) => {
  const { locale } = pageContext
  const { homeData } = data

  return (
    <Layout
      currentLocale={locale}
      otherLocaleUrl={locale === "en" ? "/fr" : "/en"}
    >
      <BlogPostsSection
        title={homeData.blogPostsSectionTitle}
        blogPosts={homeData.blogPostHighlights}
      />
      <TestimonialsSection
        title={homeData.testimonialsSectionTitle}
        testimonials={homeData.testimonialHighlights}
      />
      <EmailCaptureSection title={homeData.emailCaptureSectionTitle} />
    </Layout>
  )
}

export const query = graphql`
  query($locale: String!) {
    homeData: contentfulHomePage(node_locale: { eq: $locale }) {
      blogPostsSectionTitle
      blogPostHighlights {
        name
        createdAt
        coverImage {
          file {
            url
          }
        }
        fields {
          url
        }
      }
      testimonialsSectionTitle
      testimonialHighlights {
        personPicture {
          file {
            url
          }
        }
        title
        message {
          message
        }
        personName
        personJobTitle
      }
      emailCaptureSectionTitle
    }
  }
`
