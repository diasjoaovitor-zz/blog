import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import * as S from '../../styles/style'

export const BackToHome = styled(AniLink)`
  ${S.LinkTransition}
  margin-bottom: 1.4rem;
  display: block;
`

export const Header = styled.header`
  border-bottom: 1px solid var(--border);
  padding: 1.5rem 0;
  margin-bottom: 2rem;

  h1 {
    font-size: 2.6rem;
    font-weight: bold;
    line-height: 3rem;
    margin: .5rem 0;
  }

  h2 {
    font-size: 1.6rem;
    line-height: 2rem;
    margin-bottom: 1.6rem;
  }

  time, div {
    ${S.Subtext}
  }
`

export const Main = styled.main`
  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  iframe {
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
  }

  p {
    margin: 0 auto 1rem;
  }

  h2,
  h3,
  h4,
  h5 {
    margin: 1.8rem auto 1rem;
  }

  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }

  li {
    padding: 0.2rem 0;

    & > ul {
      margin-bottom: 0;
    }
  }

  p,
  li {
    code {
      word-wrap: break-word;
    }
  }

  img {
    display: block;
    max-width: 100%;
  }

  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
  }

  blockquote {
    border-left: 0.3rem solid var(--highlight);
    padding: 0 1.875rem;
    margin: 2rem auto;
  }

  hr {
    border: 1px solid var(--border);
    margin: 3rem auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
    border-bottom: 1px solid var(--border);
    padding-bottom: .5rem;
  }

  h1 {
    font-size: 2.8rem;
  }

  h2 {
    font-size: 2.1rem;
  }

  h3 {
    font-size: 1.6rem;
  }

  h4 {
    font-size: 1.4rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  strong {
    font-weight: 700;
  }

  a {
    color: var(--highlight);
    text-decoration: none;
    transition: opacity 0.5s;

    &:hover {
      text-decoration: underline;
    }
  }

  .gatsby-highlight {
    pre {
      background-color: var(--wrapper);
      border-radius: .5rem;
    }
  }
`
