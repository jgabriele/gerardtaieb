import React from "react"
import Section from "../../Section"
import Card from "../../Card"

import useStyles from "./style"

export default function ContractDocumentsSection({ title, documents }) {
  const classes = useStyles()

  return (
    <Section title="Documents">
      <div className={classes.documentsWrapper}>
        {documents.map(document => (
          <a key={document.title} href={document.file.url} target="__blank">
            {document.title}
          </a>
        ))}
      </div>
    </Section>
  )
}
