import * as React from "react"
import { ArrowUpward } from "styled-icons/material-outlined"
import { Github } from "styled-icons/boxicons-logos"

const Footer: React.FC = () => (
  <footer>
    <div className="content">
      <a href="https://github.com/diasjoaovitor" target="_blank">
        <Github />
      </a>
      <ArrowUpward 
        title="Ir para o topo"
        onClick={() => document.querySelector('.tl-edges').scrollTop = 0} 
      />
    </div>
  </footer>
)

export default Footer
