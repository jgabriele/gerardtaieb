import React from "react"
import Section from "../Section"

import useStyles from "./style"

export default function BlogPostsSection({ title, blogPosts }) {
  const classes = useStyles()
  return (
    <Section title={title}>
      <div className={classes.blogPostsWrapper}>
        {blogPosts.map(post => (
          <a
            key={post.name}
            className={classes.blogPost}
            href={post.fields.url}
          >
            <div
              className={classes.image}
              style={{ backgroundImage: `url(${post.coverImage.file.url})` }}
            ></div>
            <div className={classes.title}>{post.name}</div>
            <div className={classes.date}>{post.createdAt}</div>
          </a>
        ))}
      </div>
    </Section>
  )
}
