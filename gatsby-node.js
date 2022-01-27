const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`,
    })
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const {
    data: {
      allMarkdownRemark: {
        totalCount, 
        edges
      }
    }
  } = await graphql(`
    {
      allMarkdownRemark {
        totalCount
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

  const postsPerPage = 6
  const numberOfPages = Math.ceil(totalCount / postsPerPage)

  Array.from({ length: numberOfPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/` : `/page/${index + 1}`,
      component: path.resolve('./src/templates/blog-list.tsx'),
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        currentPage: index + 1,
        numberOfPages
      }
    })
  })

  edges.forEach(({ node: { fields: { slug } } }) => {
    createPage({
      path: slug,
      component: path.resolve('./src/templates/blog-post.tsx'),
      context: {
        slug
      }
    })
  })
}
