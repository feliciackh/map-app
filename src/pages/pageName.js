import React from "react";
import { useSelector } from "react-redux";
import { wrapper } from "../store";

export const getStaticProps = wrapper.getStaticProps(({ store, preview }) => {
  console.log("2. Page.getStaticProps uses the store to dispatch things");
  store.dispatch({
    type: "TICK",
    payload: "was set in other page " + preview,
  });
});

// you can also use `connect()` instead of hooks
const Page = () => {
  const { tick } = useSelector((state) => state);
  return <div>{tick}</div>;
};

// req, res may not be avai if getInitialProps called on client side
Page.getInitialProps = ({ store, pathname, req, res }) => {
  console.log("2. Page.getInitialProps uses the store to dispatch things");
  store.dispatch({
    type: "TICK",
    payload: "was set in error page " + pathname,
  });
};

export default Page;
