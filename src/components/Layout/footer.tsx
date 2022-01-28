import * as React from "react"
import { ArrowUpward } from "styled-icons/material-outlined"
import { Github } from "styled-icons/boxicons-logos"
import * as S from './styled'


const Footer: React.FC = () => (
  <S.Footer>
    <div className="content">
      <a href="https://github.com/diasjoaovitor" target="_blank">
        <Github />
      </a>
      <ArrowUpward 
        title="Ir para o topo"
        onClick={() => document.querySelector('.tl-edges').scrollTop = 0} 
      />
    </div>
  </S.Footer>
)

export default Footer
