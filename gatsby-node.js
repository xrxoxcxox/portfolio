exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: "https://www.keisukewatanuki.work/*",
    toPath: "https://keisukewatanuki.work/:splat",
    isPermanent: true,
    force: true
  });
};
