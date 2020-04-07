import React from "react"
import Section from "../../Section"
import Card from "../../Card"

import useStyles from "./style"

export default function ContractTypesSection({ title, contractTypes }) {
  const classes = useStyles()

  return (
    <Section title="Types de contrats">
      <div className={classes.contractTypesWrapper}>
        {contractTypes.map(contractType => (
          <Card
            id={contractType.name}
            url={contractType.fields.url}
            imageSrc={contractType.logo.file.url}
            title={contractType.name}
          />
        ))}
      </div>
    </Section>
  )
}
