import * as React from "react";
import { Layout } from "../components/layout";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const AboutPage = ({ data }) => {
  const { contentfulPage } = data;
  const gatsbyImage = getImage(contentfulPage.image);
  return (
    <Layout>
      <div className="flex  mx-40">
        <div className="mt-3">
          <h1 className="text-3xl">{contentfulPage.title}</h1>
          <p>{contentfulPage.description.description}</p>
        </div>
        <GatsbyImage image={gatsbyImage} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    contentfulPage(title: { eq: "About" }) {
      title
      description {
        description
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, width: 800, placeholder: BLURRED)
      }
    }
  }
`;

export default AboutPage;
