import React from "react"
import Section from "../../Section"
import Card from "../../Card"

import useStyles from "./style"

export default function CompaniesSection({ title, companies }) {
  const classes = useStyles()

  return (
    <Section title="Compagnies">
      <div className={classes.companiesWrapper}>
        {companies.map(company => (
          <Card
            key={company.name}
            id={company.name}
            url={company.fields.url}
            imageSrc={company.logo.file.url}
            title={company.name}
          />
        ))}
      </div>
    </Section>
  )
}
