import * as React from "react";
import { Layout } from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolioItem {
        nodes {
          demoLink
          githubLink
          slug
          title
          description {
            description
          }
          image {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 500
              placeholder: BLURRED
            )
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <main className="px-40 h-full my-3 bg-[#212025]">
        <h1 className="font-bold text-5xl mb-10">Portfolio</h1>
        <ul className="flex flex-col-reverse gap-10">
          {data.allContentfulPortfolioItem.nodes.map((node) => {
            const gatsbyImage = getImage(node.image);
            return (
              <a href={`/portfolio/${node.slug}`}>
                <div className="flex gap-10 hover:opacity-50 pb-3">
                  <GatsbyImage
                    image={gatsbyImage}
                    alt={node.title}
                    className="  rounded-md border"
                  />

                  <div>
                    <h2 className="text-xl font-semibold mb-2">{node.title}</h2>
                    <p>{node.description.description}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </ul>
      </main>
    </Layout>
  );
};

export default PortfolioPage;
