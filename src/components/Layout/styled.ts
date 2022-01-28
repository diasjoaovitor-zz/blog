import styled from 'styled-components'
import * as S from '../../styles/style'  
 
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  color: var(--text);

  .content {
    max-width: 768px;
    margin: auto;
    position: relative;
  }

  a {
    ${S.LinkTransition}
  }

  svg {
    ${S.SvgLinkTransition}
  }

  > header, footer {
    background-color: var(--wrapper);
    position: sticky;
    z-index: 1;
    padding: .5rem;
  }
`

export const Header = styled.header`
  top: 0;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > a {
      display: flex;
      align-items: center;

      .gatsby-image-wrapper {
        height: 2.8rem;
        width: 2.8rem;
        margin-right: 10px;
      }

      h1 {
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 2px;
      }

      h2 {
        font-size: .8rem;
        font-weight: 300;
      }
    }

    > div:last-of-type svg:first-child {
      margin-right: 10px;
    }
  }
`

export const Main = styled.main`
  background-color: var(--background);
  flex: 1;
  padding: 0 .8rem;
`

export const Footer = styled.footer`
  text-align: center;
  bottom: 0;

  .content > svg {
    position: absolute;
    right: 0;
  }
`