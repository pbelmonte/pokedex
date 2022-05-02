import React from 'react'
import { Link } from 'gatsby'

interface Props {
  pageTitle: string
  children: React.ReactNode
}

const Layout = ({ pageTitle, children }: Props) => {
  return (
    <div className="m-auto max-w-7xl main-container">
      <title>{pageTitle}</title>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <main className="m-auto max-w-5xl content-wrapper">
        <h1 className="text-3xl mt-20 font-bold underline">{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout