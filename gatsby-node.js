const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage, createRedirect } = actions
  const workPostTemplate = path.resolve(`src/templates/workTemplate.js`)
  const result = await graphql(`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "/markdown-pages/" } }, sort: { order: DESC, fields: [frontmatter___end] }, limit: 1000) {
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

const fetch = require(`node-fetch`)
exports.sourceNodes = async ({ actions: { createNode }, createContentDigest }) => {
  const token = { 'X-FIGMA-TOKEN': process.env.GATSBY_FIGMA_TOKEN }
  const team = await fetch(`https://api.figma.com/v1/teams/${process.env.GATSBY_FIGMA_TEAM_ID}/projects`, { headers: token })
  const result = await team.json()
  const projects = await result.projects
  const files = await Promise.all(
    projects.map(async (project) => {
      const response = await fetch(`https://api.figma.com/v1/projects/${project.id}/files`, { headers: token })
      const result = await response.json()
      return result.files
    })
  )
  const versions = await Promise.all(
    files.flat().map(async (file) => {
      const response = await fetch(`https://api.figma.com/v1/files/${file.key}/versions`, { headers: token })
      const result = await response.json()
      return result.versions
    })
  )

  const allVersions = versions.flat()

  createNode({
    id: `figma`,
    parent: null,
    children: [],
    content: allVersions,
    internal: {
      type: `Figma`,
      contentDigest: createContentDigest(allVersions),
    },
  })
}
