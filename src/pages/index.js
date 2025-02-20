import * as React from "react";
import { Layout } from "../components/layout";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const IndexPage = ({ data }) => {
  const { contentfulPage } = data;
  const gatsbyImage = getImage(contentfulPage.image);
  return (
    <Layout>
      <GatsbyImage image={gatsbyImage} />
      <h1 className="text-3xl">{contentfulPage.title}</h1>
      <p>{contentfulPage.description.description}</p>
    </Layout>
  );
};
export const query = graphql`
  query MyQuery {
    contentfulPage(title: { eq: "Home" }) {
      title
      description {
        description
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, width: 1500, placeholder: BLURRED)
      }
    }
  }
`;

export default IndexPage;

export const Head = () => <title>Portfolio</title>;
