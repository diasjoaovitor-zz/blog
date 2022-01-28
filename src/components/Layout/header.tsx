import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import AnyLink from 'gatsby-plugin-transition-link/AniLink'
import { StaticImage }  from 'gatsby-plugin-image'
import { Search, Lightbulb } from "styled-icons/material-outlined"
import getThemeColor from '../../utils/getThemeColor'
import * as S from './styled'

type DataProps = {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
}

const Header: React.FC = () => {
  const [ theme, setTheme ] = React.useState<string>(null)

  const {
    site: {
      siteMetadata: {
        title,
        description
      }
    }
  }: DataProps = useStaticQuery(graphql`
    query SiteMetaData {
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

  return (
    <S.Header>
      <div className="content">
        <AnyLink 
          to="/"
          cover
          direction="left"
          duration={0.6}
          bg={getThemeColor()}
        >
          <StaticImage
            src="../../images/avatar.png"
            alt="Avatar do João Vitor"
          />
          <div>
            <h1>{title}</h1>
            <h2>{description}</h2>
          </div>
        </AnyLink>
        <div>
          <Search title="Pesquisar no blog"/>
          <Lightbulb 
            title="Mudar o tema"
            onClick={() => window.__setPreferredTheme(theme === 'light' ? "dark" : "light")}            
          />
        </div>
      </div>
    </S.Header>
  )
}

export default Header
