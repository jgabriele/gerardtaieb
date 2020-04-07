import React from "react"
import Section from "../../Section"
import AsymetricSlash from "../../AsymetricSlash"

import useStyles from "./style"

export default function TestimonialsSection({ title, testimonials }) {
  const classes = useStyles()

  return (
    <>
      <AsymetricSlash color="#eee" />
      <div className={classes.root}>
        <Section title={title}>
          <div>
            {testimonials.map(testimonial => (
              <div
                key={testimonial.personName}
                className={classes.testimonialWrapper}
              >
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
                      – {testimonial.personName},{" "}
                      <span>{testimonial.personJobTitle}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
      <AsymetricSlash color="#eee" direction="right" />
    </>
  )
}
