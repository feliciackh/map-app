import Head from "next/head";
import React from "react";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 2rem;
  background: white;
  margin: 10px auto;
  outline: black;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.content}>
        <p>
          Hi, this is{" "}
          <a
            href="https://www.linkedin.com/in/felicia-chong-58878b4b/"
            target="_blank"
          >
            me!
          </a>
        </p>
        <p>
          Click on the button below to access your personalised dashboard,
          including a map to visualise all boat ramps and several charts for
          visualisation.
          <br />
        </p>
        <Link href={"/Dashboard"}>
          <StyledButton>DASHBOARD</StyledButton>
        </Link>
      </section>
    </Layout>
  );
};

export default Home;
