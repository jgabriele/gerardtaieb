import React from "react"
import { Link, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import useStyles from "./style"

export default function Footer() {
  const classes = useStyles()
  const { generalData } = useStaticQuery(graphql`
    query {
      generalData: contentfulDonneesGenerales(node_locale: { eq: "fr" }) {
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

  return (
    <footer className={classes.footer}>
      <div className={classes.columns}>
        <div className={classes.column}>
          <h3>Documents généraux</h3>
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
          <h3>Pages du site</h3>
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
          <h3>Les articles les plus appréciés</h3>
          <ul className={classes.linkList}>
            {generalData.bestArticles.map(article => (
              <li>
                <Link to={article.fields.url}>{article.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={classes.copyright}>
        {documentToReactComponents(generalData.footerText.json)}
      </div>
    </footer>
  )
}
