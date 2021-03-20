import React from "react";
import App from "next/app";
import { wrapper } from "../store";
import Head from "next/head";

class MyApp extends App {
  static getInitialProps = async ({ Component, ctx }) => {
    //Preload from the server side
    ctx.store.dispatch({
      type: "TOE",
      payload: "was set in _app",
    });

    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
        // Some custom thing for all pages
        pathname: ctx.pathname,
      },
    };
  };

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

// import App from "next/app";
// import { Provider } from "react-redux";
// import withRedux from "next-redux-wrapper";
// import makeStore from "../store";
//
// class MyApp extends App {
//   static async getInitialProps({ Component, ctx }) {
//     //Preload from the server side
//     ctx.store.dispatch({
//       type: "reducerA/setCounter",
//       payload: 10,
//     });
//     return {
//       pageProps: {
//         ...(Component.getInitialProps
//           ? await Component.getInitialProps(ctx)
//           : {}),
//       },
//     };
//   }
//   render() {
//     const { Component, pageProps, store } = this.props;
//     return (
//       <Provider store={store}>
//         <div>
//           <Component {...pageProps} />
//         </div>
//       </Provider>
//     );
//   }
// }
// export default withRedux(makeStore)(MyApp);
