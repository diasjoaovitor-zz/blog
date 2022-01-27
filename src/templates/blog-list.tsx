import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Pagination from '../components/Pagination'
import Seo from "../components/seo"
import PostItem from "../components/PostItem"

type Props = {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          frontmatter: {
            description: string
            title: string
            date: string
            tags: string[]
          }, 
          fields: {
            slug: string
          }
        }
      }[]
    }
  },
  pageContext: {
    currentPage: number
    numberOfPages: number
  }
}

const BlogList: React.FC<Props> = ({ 
    data: { allMarkdownRemark: { edges: posts } },
    pageContext: { currentPage, numberOfPages },
  }) => (
  <Layout>
    <Seo title="Home" />
    {posts.map(({ node: { frontmatter: { date, title, description, tags }, fields: { slug } } }, index) => (
      <PostItem
        key={index}
        slug={slug}
        date={date}
        title={title}
        description={description}
        tags={tags} 
      />
    ))}
    <Pagination currentPage={currentPage} numberOfPages={numberOfPages} />
  </Layout>
)

export const query = graphql`
  query PostList($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            description
            title
            date(locale: "pt-br", formatString: "DD [de] MMMM [de]  YYYY")
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogList
