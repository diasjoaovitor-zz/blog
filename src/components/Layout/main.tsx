import * as React from "react"
import * as S from './styled'

const Main: React.FC = ({ children }) => (
  <S.Main>
    <div className="content">
      {children}
    </div>
  </S.Main>
)

export default Main
