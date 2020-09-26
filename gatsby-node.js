const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage, createRedirect } = actions
  const workPostTemplate = path.resolve(`src/templates/workTemplate.js`)
  const result = await graphql(`
    {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/markdown-pages/" } }
        sort: { order: DESC, fields: [frontmatter___end] }
        limit: 1000
      ) {
        edges {
          node {
            id
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
  const posts = result.data.allMdx.edges
  posts.forEach(({ node }, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    createPage({
      path: node.fields.slug,
      component: workPostTemplate,
      context: {
        id: node.id,
        previous,
        next,
      },
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
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: value,
    })
  }
}
