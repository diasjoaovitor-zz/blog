import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Tags from "../Tags"
import getThemeColor from "../../utils/getThemeColor"
import * as S from './styled'

type Props = {
  slug: string
  date: string
  title: string
  description: string
  tags: string[]
}

const PostItem: React.FC<Props> = ({ slug, date, title, description, tags }) => (
  <S.Section>
    <AniLink
      to={slug}
      cover
      direction="left"
      duration={0.6}
      bg={getThemeColor()}
    >
      <time>{date}</time>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <Tags tags={tags} />
    </AniLink>
  </S.Section>
)

export default PostItem

