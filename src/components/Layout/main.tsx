import * as React from "react"

const Main: React.FC = ({ children }) => (
  <main>
    <div className="content">
      {children}
    </div>
  </main>
)

export default Main
