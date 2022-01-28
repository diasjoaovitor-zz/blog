import { css } from 'styled-components'

export const Subtext = css`
  & {
    font-size: .9rem;
    color: var(--subtext);
    display: block;
  }
`

export const LinkTransition = css`
  & {
    color: var(--subtext);
    text-decoration: none;
    transition: all .7s;

    &:hover *, &:hover {
      color: var(--highlight) !important;
    }
  }
`

export const SvgLinkTransition = css`
  & {
    height: 1.6rem;
    cursor: pointer;
    transition: all .7s;

    &:hover {
      fill: var(--highlight);
    }
  }
`