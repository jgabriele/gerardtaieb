import React from "react"
import axios from "axios"
import Section from "../../Section"

import AsymetricSlash from "../../AsymetricSlash"
import { TextField, Button, CircularProgress } from "@material-ui/core"
import useStyles from "./style"

function isEmailValid(email) {
  return !email || email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
}
export default function TestimonialsSection({ title }) {
  const classes = useStyles()
  const [status, setStatus] = React.useState("idle")
  const [email, setEmail] = React.useState("")
  const [errorText, setErrorText] = React.useState("")
  const [successText, setSuccessText] = React.useState("")

  function onInputChange(e) {
    if (isEmailValid(email)) {
      setErrorText("")
    }

    setEmail(e.target.value)
  }

  function onInputBlur() {
    if (!isEmailValid(email)) {
      setErrorText("L'email fourni n'est pas valide")
      return
    }
    setErrorText("")
  }

  async function saveEmail() {
    try {
      setStatus("sending")
      await axios.post(
        "https://api.contentful.com/spaces/mu6l8m30j3xm/environments/master/entries",
        {
          fields: {
            email: {
              fr: email,
            },
          },
        },
        {
          headers: {
            "X-Contentful-Content-Type": "user",
            Authorization:
              "Bearer CFPAT-1o4rwpzAglA1PAe0O_cLZLUHbIVji3LGF18ZX0GaqmY",
          },
        }
      )
      setStatus("success")
      setSuccessText("Email envoyé. Je vous recontacte dès que possible.")
    } catch (e) {
      setErrorText(e.message)
      setStatus("error")
    }
  }

  return (
    <>
      <Section title={title} />
      <div className={classes.emailInputWrapper}>
        <TextField
          value={email}
          onChange={onInputChange}
          onBlur={onInputBlur}
          label="Email"
          placeholder="votre.email@aaa.com"
          variant="outlined"
          type="text"
          error={!!errorText}
          helperText={successText || errorText}
          disabled={!!successText}
          InputProps={{
            className: classes.emailInput,
          }}
        />
        <Button
          className={classes.emailSubmit}
          variant="outlined"
          color="primary"
          size="large"
          onClick={saveEmail}
          disabled={!!successText || !isEmailValid(email)}
        >
          {status === "sending" ? <CircularProgress /> : "Envoyer"}
        </Button>
      </div>
      <AsymetricSlash color="#0e1e2b" />
    </>
  )
}
