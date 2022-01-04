import styled from 'styled-components'
import { Github } from "styled-icons/boxicons-logos"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  color: var(--text);

  .content {
    max-width: 940px;
    margin: auto;
    position: relative;
  }

  a {
    color: var(--text);
    text-decoration: none;

    &:hover {
      color: var(--highlight);
      transition: all .7s;
    }
  }

  svg {
    height: 1.8rem;
    cursor: pointer;

    &:hover {
      fill: var(--highlight);
      transition: all .7s;
    }
  }

  header, main, footer {
    padding: 1rem;
  }

  header, footer {
    background-color: var(--wrapper);
  }

  header .content {
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
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 2px;
      }

      p {
        font-size: .8rem;
        font-weight: 300;
      }
    }

    > div:last-of-type svg:first-child {
      margin-right: 10px;
    }
  }

  main {
    background-color: var(--background);
    flex: 1;
  }

  footer {
    text-align: center;

    .content > svg {
       position: absolute;
       right: 0;
    }
  }
`