import React from "react";
import App from "next/app";
import { wrapper } from "../store";
import Head from "next/head";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <link
            href="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css"
            rel="stylesheet"
          />
          <title>Map app</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default wrapper.withRedux(MyApp);
