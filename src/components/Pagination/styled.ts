import styled from 'styled-components'
import * as S from '../../styles/style'

export const Section = styled.section`
  border-top: 1px solid var(--border);
  padding: 1rem;
  background-color: var(--background);
  z-index: -1;

  .content {
    display: flex;
    justify-content: space-between;
    ${S.LinkTransition}
  }
`