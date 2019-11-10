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
            frontmatter {
              path
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
      path: node.frontmatter.path,
      component: workPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })

  createRedirect({
    fromPath: 'https://keisukewatanuki.work/*',
    toPath: 'https://www.keisukewatanuki.work/:splat',
    isPermanent: true,
    force: true,
  })
}
