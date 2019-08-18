exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: 'https://keisukewatanuki.work/*',
    toPath: 'https://www.keisukewatanuki.work/:splat',
    isPermanent: true,
    force: true,
  })
}
