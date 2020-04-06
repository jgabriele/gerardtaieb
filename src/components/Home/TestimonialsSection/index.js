import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import useStyles from "./style"

export default function TestimonialsSection({ title, testimonials }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <h2>{title}</h2>
      {testimonials.map(testimonial => (
        <div className={classes.testimonialWrapper}>
          <div className={classes.testimonial}>
            <img
              className={classes.image}
              src={testimonial.personPicture.file.url}
              alt={testimonial.personName}
            />
            <div>
              <div className={classes.title}>{testimonial.title}</div>
              <div className={classes.message}>
                {testimonial.message.message}
              </div>
              <div>
                – {testimonial.personNAme},{" "}
                <span>{testimonial.personJobTitle}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
