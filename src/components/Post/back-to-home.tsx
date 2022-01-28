import * as React from "react"
import getThemeColor from "../../utils/getThemeColor"
import * as S from './styled'

const BackToHome: React.FC = () => (
  <S.BackToHome
    to="/"
    cover
    direction="right"
    duration={0.6}
    bg={getThemeColor()}
  >
    ← Voltar na listagem
  </S.BackToHome>
)

export default BackToHome
