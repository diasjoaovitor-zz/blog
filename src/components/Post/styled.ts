import styled from "styled-components"

export const Div = styled.div`
  padding: 0 1rem;

  header {
    padding: 2rem 0 1rem;

    a {
      display: block;
      color: var(--sub-text) !important;
      transition: .7s;

      &:hover {
        color: var(--highlight) !important;
      }
    }

    time {
      margin: 1.5rem 0 .5rem;
      display: block;
    }

    h1 {
      font-size: 2.5rem;
      font-weight: bold;
    }

    h2 {
      font-size: 1.5rem;
      margin: .5rem 0 1.5rem;
    }
  }

  main {
    p,
    h1,
    h2,
    h3,
    h4,
    ul,
    ol,
    .tags,
    iframe,
    .button-post {
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

    #twitter-widget-0,
    .instagram-media,
    .twitter-tweet {
      margin: 20px auto !important;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
      font-weight: 800;
      letter-spacing: 0.069rem;
      line-height: 1.4;
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

    .instagram-media {
      margin: 1rem auto !important;
    }

    a {
      border-bottom: 1px dashed var(--highlight);
      color: var(--highlight);
      text-decoration: none;
      transition: opacity 0.5s;

      &:hover {
        opacity: 0.8;
      }
    }

    .gatsby-highlight {
      pre {
        background-color: var(--wrapper);
        border-radius: .5rem;
      }
    }
  }
`