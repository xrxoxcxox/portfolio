const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage, createRedirect } = actions
  const workPostTemplate = path.resolve(`src/templates/workTemplate.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/markdown-pages/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: workPostTemplate,
      context: { slug: node.fields.slug }, // additional data can be passed via context
    })
  })

  createRedirect({
    fromPath: 'https://keisukewatanuki.work/*',
    toPath: 'https://www.keisukewatanuki.work/:splat',
    isPermanent: true,
    force: true,
  })
}

const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `markdown-pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
