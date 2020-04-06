import React from "react"

import useStyles from "./style"

export default function ArticlesPreviewSection({ title, blogPosts }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <h2>{title}</h2>
      <div className={classes.blogPostsWrapper}>
        {blogPosts.map(post => (
          <a className={classes.blogPost} href="/fr/article/blog-post-lie">
            <div
              className={classes.image}
              style={{ backgroundImage: `url(${post.coverImage.file.url})` }}
            ></div>
            <div className={classes.title}>{post.name}</div>
            <div className={classes.date}>{post.createdAt}</div>
          </a>
        ))}
      </div>
    </div>
  )
}
