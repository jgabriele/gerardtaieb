import React from "react"
import Section from "../../Section"
import Card from "../../Card"

import useStyles from "./style"

export default function BlogPostsSection({ title, blogPosts }) {
  const classes = useStyles()

  return (
    <Section title={title}>
      <div className={classes.blogPostsWrapper}>
        {blogPosts.map(post => (
          <div key={post.name} className={classes.blogPostWrapper}>
            <Card
              id={post.name}
              url={post.fields.url}
              imageSrc={post.coverImage.file.url}
              title={post.name}
              subtitle={post.createdAt}
            />
          </div>
        ))}
      </div>
    </Section>
  )
}
