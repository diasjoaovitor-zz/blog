import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import AnyLink from 'gatsby-plugin-transition-link/AniLink'
import { StaticImage }  from 'gatsby-plugin-image'
import { Search, Lightbulb } from "styled-icons/material-outlined"
import getThemeColor from '../../utils/getThemeColor'

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
    <header>
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
            <p>{description}</p>
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
    </header>
  )
}

export default Header
