import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import Post from "../components/Post"

type Props = {
  data: {
    markdownRemark: {
      frontmatter: {
        slug: string
        description: string
        title: string
        date: string
        tags: string[]
      }, 
      html: string,
      timeToRead: string
    }
  }
}

const BlogPost: React.FC<Props> = ({ 
  data: { markdownRemark: { frontmatter: { slug, description, title, date, tags }, html, timeToRead } } 
}) => (
  <Layout>
    <Seo 
      title={title}
      description={description}
    />
    <Post
      date={date}
      timeToRead={timeToRead}
      title={title}
      description={description}
      tags={tags}
      html={html}
    />
  </Layout>
)

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        image
        tags
      }
      html
      timeToRead
    }
  }
`

export default BlogPost
