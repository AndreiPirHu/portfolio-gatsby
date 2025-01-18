import { graphql, Link, useStaticQuery } from "gatsby";
import * as React from "react";

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPage {
        nodes {
          title
          url
        }
      }
    }
  `);
  return (
    <div className="bg-[#212025] h-screen text-white">
      <header className="flex justify-center items-center bg-[#292736] text-white h-14">
        <nav>
          <ul className="flex gap-5">
            {data.allContentfulPage.nodes.map((page) => (
              <li>
                <Link to={page.url}>{page.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
};
