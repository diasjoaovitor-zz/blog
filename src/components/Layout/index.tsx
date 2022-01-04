import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import AnyLink from 'gatsby-plugin-transition-link/AniLink'
import { StaticImage }  from 'gatsby-plugin-image'
import { Search, Lightbulb, ArrowUpward } from "styled-icons/material-outlined"
import { Github } from "styled-icons/boxicons-logos"
import * as S from './styled'
import GlobalStyle from '../../styles/global'

type DataProps = {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
}

const Layout: React.FC = ({ children }) => {
  const [ theme, setTheme ] = React.useState<string>(null)

  const {
    site: {
      siteMetadata: {
        title,
        description
      }
    }
  }: DataProps = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }  
  `)

  React.useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])
console.log(theme)
  return (
    <S.Container>
      <GlobalStyle />
      <header>
        <div className="content">
          <AnyLink 
            to="/blog-post"
            cover
            direction="left"
            duration={0.6}
            bg="#161B22"
          >
            <StaticImage
              src="../../images/avatar.svg"
              alt="Avatar do João Vitor"
            />
            <div>
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </AnyLink>
          <div>
            <Search />
            <Lightbulb 
              onClick={() => window.__setPreferredTheme(theme === 'light' ? "dark" : "light")}            
            />
          </div>
        </div>
      </header>
      <main>
        <div className="content">
          {children}
        </div>
      </main>
      <footer>
        <div className="content">
          <AnyLink to="https://github.com/diasjoaovitor" target="_blank">
            <Github />
          </AnyLink>
          <ArrowUpward />
        </div>
      </footer>
    </S.Container>
  )
}

export default Layout