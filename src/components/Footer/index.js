import React from "react"
import { Link, useStaticQuery } from "gatsby"
import useStyles from "./style"

export default function Footer({ text }) {
  const classes = useStyles()
  const { generalData } = useStaticQuery(graphql`
    query {
      generalData: contentfulGeneralData(node_locale: { eq: "fr" }) {
        commonDocuments {
          file {
            url
          }
          title
        }
        bestArticles {
          name
          fields {
            url
          }
        }
        footerText {
          json
        }
      }
    }
  `)

  console.log(generalData)
  return (
    <footer className={classes.footer}>
      <div className={classes.columns}>
        <div className={classes.column}>
          <div>Documents généraux</div>
          <ul className={classes.linkList}>
            {generalData.commonDocuments.map(document => (
              <li>
                <a target="__blank" href={document.file.url}>
                  {document.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.column}>
          <div>Pages du site</div>
          <ul className={classes.linkList}>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/fr/files">Fichiers par compagnie</Link>
            </li>
          </ul>
        </div>
        <div className={classes.column}>
          <div>Les articles les plus appréciés</div>
          <ul className={classes.linkList}>
            {generalData.bestArticles.map(article => (
              <li>
                <Link to={article.fields.url}>{article.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={classes.copyright}>{text}</div>
    </footer>
  )
}
