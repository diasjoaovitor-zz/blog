import styled from 'styled-components'

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
    color: var(--text);
    text-decoration: none;

    &:hover * {
      color: var(--highlight) !important;
      transition: all .7s;
    }
  }

  svg {
    height: 1.5rem;
    cursor: pointer;

    &:hover {
      fill: var(--highlight);
      transition: all .7s;
    }
  }

  > header, footer {
    background-color: var(--wrapper);
    padding: .5rem;
    position: sticky;
    z-index: 1;
  }

  > header {
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

        p {
          font-size: .8rem;
          font-weight: 300;
        }
      }

      > div:last-of-type svg:first-child {
        margin-right: 10px;
      }
    }
  }

  > main {
    background-color: var(--background);
    flex: 1;
  }

  > footer {
    text-align: center;
    bottom: 0;

    .content > svg {
       position: absolute;
       right: 0;
    }
  }
`