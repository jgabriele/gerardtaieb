import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import useStyles from "./style"

export default function BlogPostPage({ blogPost }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.blogPost}>
        <div
          className={classes.image}
          style={{ backgroundImage: `url(${blogPost.coverImage.file.url})` }}
        ></div>
        <div className={classes.content}>
          <h1>{blogPost.name}</h1>
          <div>{blogPost.name}</div>
          {documentToReactComponents(blogPost.content.json)}
        </div>
      </div>
    </div>
  )
}
