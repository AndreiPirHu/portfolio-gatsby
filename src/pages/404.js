import * as React from "react";
import { Link } from "gatsby";
import { Layout } from "../components/layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl my-4">Sorry, the page does not exist!</h1>
        <Link to="/" className="text-purple-800 underline cursor-pointer">
          Go back Home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
