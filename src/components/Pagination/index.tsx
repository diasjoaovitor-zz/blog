import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { PageContextProps } from "../../types/types"
import getThemeColor from "../../utils/getThemeColor"
import * as S from './styled'

const Pagination: React.FC<PageContextProps> = ({ currentPage, numberOfPages }) => {
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === numberOfPages
  const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  return (
    <S.Section>
      <div className="content">
        {!isFirstPage && (
          <AniLink
            to={prevPage}
            cover
            direction="left"
            bg={getThemeColor()}
            duration={0.6}
          >
            ← página anterior
          </AniLink>
        )}
        <p>{currentPage} de {numberOfPages}</p>
        {!isLastPage && (
          <AniLink
            to={nextPage}
            cover
            direction="right"
            bg={getThemeColor()}
            duration={0.6}
          >
            proxima página →
          </AniLink>
        )}
      </div>
    </S.Section>
  )
}
export default Pagination
