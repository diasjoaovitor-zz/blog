import styled from 'styled-components'
import * as T from '../../styles/style'

export const Section = styled.section`
  border-bottom: 1px solid var(--border);
  padding: 1.5rem 0;

  h1 {
    font-size: 1.8rem;
    margin: .5rem 0;
    line-height: 2rem;
  }

  h2 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    line-height: 1.6rem;
  }

  time, div {
    ${T.Subtext}
  }
`