import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import getThemeColor from "../../utils/getThemeColor"
import * as S from './styled'

const BackToHome: React.FC = () => (
  <AniLink
    to="/"
    cover
    direction="right"
    duration={0.6}
    bg={getThemeColor()}
  >
    ← Voltar na listagem
  </AniLink>
)

export default BackToHome
