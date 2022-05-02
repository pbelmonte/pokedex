import React from 'react'
import { Link } from 'gatsby'

interface Props {
  pageTitle: string
  children: React.ReactNode
}

const Layout = ({ pageTitle, children }: Props) => {
  return (
    <div className="mx-auto max-w-7xl main-container">
      <title>{pageTitle}</title>
      <main className="mx-auto py-5 max-w-5xl content-wrapper">
        <h1 className="text-3xl mx-20 mt-10">{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout