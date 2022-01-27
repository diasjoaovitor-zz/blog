import * as React from "react"
import Header from './header'
import Main from './main'
import Footer from './footer'
import * as S from './styled'
import GlobalStyle from '../../styles/global'

const Layout: React.FC = ({ children }) => (
  <S.Container>
    <GlobalStyle />
    <Header />
    <Main>
      {children}
    </Main>
    <Footer />
  </S.Container>
)

export default Layout
