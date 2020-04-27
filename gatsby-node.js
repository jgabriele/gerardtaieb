const path = require(`path`)
const createSlug = require("slug")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `ContentfulArticle`) {
    const url = `/${node.node_locale}/article/${createSlug(
      node.name.toLowerCase()
    )}`

    createNodeField({
      node,
      name: `url`,
      value: url,
    })
  }

  if (node.internal.type === `ContentfulCompagnie`) {
    const url = `/${node.node_locale}/files/${createSlug(
      node.name.toLowerCase()
    )}`

    createNodeField({
      node,
      name: `url`,
      value: url,
    })
  }

  if (node.internal.type === `ContentfulTypeDeContrat`) {
    const parentCompany = getNode(node["compagnie___NODE"][0])
    const url = `/${node.node_locale}/files/${createSlug(
      parentCompany.name.toLowerCase()
    )}/${createSlug(node.name.toLowerCase())}`

    createNodeField({
      node,
      name: `url`,
      value: url,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      blogPosts: allContentfulArticle {
        edges {
          node {
            fields {
              url
            }
            node_locale
            contentful_id
          }
        }
      }

      companies: allContentfulCompagnie {
        nodes {
          node_locale
          fields {
            url
          }
        }
      }

      contractTypes: allContentfulTypeDeContrat {
        nodes {
          node_locale
          fields {
            url
          }
          compagnie {
            fields {
              url
            }
          }
        }
      }
    }
  `)

  // Create home pages
  createPage({
    path: "/",
    component: path.resolve(`./src/templates/home.js`),
    context: {
      locale: "fr",
    },
  })
  createPage({
    path: "/fr",
    component: path.resolve(`./src/templates/home.js`),
    context: {
      locale: "fr",
    },
  })
  // createPage({
  //   path: "/en",
  //   component: path.resolve(`./src/templates/home.js`),
  //   context: {
  //     locale: "en",
  //   },
  // })

  // Create pages for blog posts
  await Promise.all(
    data.blogPosts.edges.map(({ node }) =>
      createPage({
        path: node.fields.url,
        component: path.resolve(`./src/templates/blogPost.js`),
        context: {
          url: node.fields.url,
          locale: node.node_locale,
        },
      })
    )
  )

  // Create pages to list all companies
  createPage({
    path: `/fr/files/`,
    component: path.resolve(`./src/templates/companies.js`),
    context: {
      locale: "fr",
    },
  })

  // Create pages to list all contract types per company
  await Promise.all(
    data.companies.nodes.map(({ fields, node_locale }) =>
      createPage({
        path: fields.url,
        component: path.resolve(`./src/templates/companyContracts.js`),
        context: {
          url: fields.url,
          locale: node_locale,
        },
      })
    )
  )

  // Create pages to list all documents in contract types for company
  await Promise.all(
    data.contractTypes.nodes.map(({ fields, node_locale, compagnie }) =>
      createPage({
        path: fields.url,
        component: path.resolve(`./src/templates/companyContractDocuments.js`),
        context: {
          url: fields.url,
          locale: node_locale,
          parentUrl: compagnie[0].fields.url,
        },
      })
    )
  )
}
