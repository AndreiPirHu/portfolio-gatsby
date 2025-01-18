import * as React from "react";
import { Layout } from "../components/layout";
import { graphql } from "gatsby";

const ContactPage = ({ data }) => {
  const { contentfulPage, allContentfulLink } = data;
  return (
    <Layout>
      <div className="px-40">
        <h1 className="text-3xl my-5">{contentfulPage.title}</h1>
        <p>{contentfulPage.description.description}</p>
        <div className="flex flex-col my-3 gap-2 text-purple-800 ">
          {allContentfulLink.nodes.map((link) => (
            <div className="flex items-center gap-2">
              <img src={link.image.url} className="size-5 " />
              <a href={link.url} className="hover:opacity-75">
                {link.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    contentfulPage(title: { eq: "Contact" }) {
      title
      description {
        description
      }
    }
    allContentfulLink {
      nodes {
        title
        url
        image {
          url
        }
      }
    }
  }
`;

export default ContactPage;
