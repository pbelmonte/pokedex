import { Link } from "gatsby";
import React from "react";

import Layout from "../components/Layout";

function NotFoundPage() {
  return (
    <Layout pageTitle="Page not found">
      <div className="mx-20 pb-20 flex flex-col">
        <p>
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn’t find what you were looking for.
        </p>
        <Link
          to="/"
          className="w-24 py-2 mt-10 text-center text-white rounded-md bg-light-blue hover:bg-dark-blue"
        >
          Go home
        </Link>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
