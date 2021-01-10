exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            id
            html
            fileAbsolutePath
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

  const edges = result.data.allMarkdownRemark.edges

  // news
  edges.filter(({node}) => node.fileAbsolutePath.match("/markdown-pages/news/")).forEach(({ node }) => {
    if (!node.html) {
      return
    }
    createPage({
      path: markdownPath(node.fileAbsolutePath),
      component: require.resolve(`./src/templates/news.js`),
      context: {
        // additional data can be passed via context
        id: node.id,
      },
    })
  })

  // discography
  edges.filter(({node}) => node.fileAbsolutePath.match("/markdown-pages/discography/")).forEach(({ node }) => {
    if (!node.html) {
      return
    }
    createPage({
      path: markdownPath(node.fileAbsolutePath),
      component: require.resolve(`./src/templates/discography.js`),
      context: {
        // additional data can be passed via context
        id: node.id,
      },
    })
  })
}

function markdownPath(absolutePath) {
  let path = absolutePath.replace(/.*\/src\/markdown-pages/, '')
  const splitPath = path.split('/')
  path = path.replace('/' + splitPath[splitPath.length - 1], '')
  return path
}