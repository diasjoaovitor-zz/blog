import * as React from "react"
import { Tag } from 'styled-icons/boxicons-regular'
import * as S from './styled'

type Props = {
  tags: string[]
}

const Tags: React.FC<Props> = ({ tags }) => (
  <S.Div>
      <Tag />
      {tags.map((tag, index) => index < tags.length - 1 ? `${tag}, ` : tag)}
  </S.Div>
)

export default Tags
