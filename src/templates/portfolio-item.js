import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
const { Layout } = require("../components/layout");

const PortfolioItemTemplate = ({ data }) => {
  const { contentfulPortfolioItem } = data;
  const gatsbyImage = getImage(contentfulPortfolioItem.image);
  return (
    <Layout>
      <div className="flex gap-10 pb-3 px-40 my-10">
        <a href={contentfulPortfolioItem.demoLink} target="_blank">
          <GatsbyImage image={gatsbyImage} className=" rounded-md border " />
        </a>
        <div>
          <h2 className="text-xl font-semibold mb-2">
            {contentfulPortfolioItem.title}
          </h2>
          <p className=" max-w-10 ">
            {contentfulPortfolioItem.description.description}
          </p>
          {
            <div className="flex flex-col items-center gap-3 my-4">
              <a
                href={contentfulPortfolioItem.demoLink}
                className="bg-[#292736] px-6 py-1 rounded-md"
                target="_blank"
              >
                Live demo
              </a>
              <a
                href={contentfulPortfolioItem.githubLink}
                className="bg-[#292736] px-6 py-1 rounded-md"
                target="_blank"
              >
                View the code
              </a>
            </div>
          }
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query PortfolioItemQuery($slug: String!) {
    contentfulPortfolioItem(slug: { eq: $slug }) {
      demoLink
      githubLink
      slug
      title
      description {
        description
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, width: 1200, placeholder: BLURRED)
      }
    }
  }
`;

export default PortfolioItemTemplate;
