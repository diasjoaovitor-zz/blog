import styled from 'styled-components'

export const Section = styled.section`
  border-bottom: 1px solid var(--border);
  padding: 1.5rem 1rem;

  h1 {
    font-size: 1.8rem;
    margin: .5rem 0;
  }

  h2 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    line-height: 1.2rem;
  }

  time, div {
    font-size: .9rem;
    color: var(--sub-text);
  }
`