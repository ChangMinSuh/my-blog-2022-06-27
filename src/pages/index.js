import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";

// markup
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <h1>Home Page</h1>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        />
      </Layout>
    </main>
  );
};

export default IndexPage;
