import React from "react";

interface Props {
  pageTitle: string;
  children: React.ReactNode;
}

function Layout({ pageTitle, children }: Props) {
  return (
    <div className="mx-auto lg:max-w-7xl mt-10 bg-white bg-container-bg">
      <title>{pageTitle}</title>
      <main className="mx-auto max-w-5xl pt-10 bg-white">
        <h1 className="text-3xl mx-20 mt-10 mb-24">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
}

export default Layout;
