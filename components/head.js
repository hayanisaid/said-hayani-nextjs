import React from "react";
import NextHead from "next/head";
import { string } from "prop-types";

const defaultDescription = "Said Hayani official website";
const defaultOGURL = "https://saidhayani.me";
const defaultOGImage = "https://saidhayani.me/./../said-hayani.png";

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || ""}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="./../static/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="./../favicon-16x16.png"
    />
    <link rel="manifest" href="./../site.webmanifest" />
    <link rel="mask-icon" href="./../safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ""} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
);
import NProgress from "nprogress";
import Router from "next/router";
NProgress.configure({
  template: "<div class='....'>loading...</div>"
});

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplet = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
  console.log("router Error");
};

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
};

export default Head;
