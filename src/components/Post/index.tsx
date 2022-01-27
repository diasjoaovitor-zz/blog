import * as React from "react"
import BackToHome from "./back-to-home"
import Tags from "../Tags"
import * as S from './styled'

type Props = {
  date: string
  timeToRead: string
  title: string
  description: string
  tags: string[]
  html: string
}

const Post: React.FC<Props> = ({ date, timeToRead, title, description, tags, html }) => (
  <S.Div>
    <header>
      <BackToHome />
      <time>{date} • {timeToRead} min de leitura </time>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <Tags tags={tags} />
    </header>
    <main>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </main>
  </S.Div>
)

export default Post
