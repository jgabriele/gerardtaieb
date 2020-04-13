import { makeStyles } from "@material-ui/styles"

export default makeStyles({
  emailInputWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 64,
    marginTop: -64,

    "@media screen and (max-width: 960px)": {
      alignItems: "center",
      marginTop: -32,
      marginBottom: 32,
      flexDirection: "column",
    },
  },
  emailInput: {
    width: "80vw",
    // /!\ Min width here
    "@media screen and (min-width: 960px)": {
      width: "40vw",
      borderTopRightRadius: "0!important",
      borderBottomRightRadius: "0!important",
    },
  },
  emailSubmit: {
    marginTop: "32px!important",
    width: "40vw",

    "@media screen and (min-width: 960px)": {
      width: "auto",
      marginTop: "0px!important",

      height: 61,
      borderLeft: "none",
      borderTopLeftRadius: "0!important",
      borderBottomLeftRadius: "0!important",
    },
  },
})
