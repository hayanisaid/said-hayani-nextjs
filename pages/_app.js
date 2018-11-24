import React from "react";
import App, { Container } from "next/app";
import ErrorBoundrais from "../components/ErrorBoundrais";

export default class MyApp extends App {
  state = {
    hasError: false
  };
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }
  render() {
    const { Component, pageProps } = this.props;

    return this.state.hasError ? (
      <ErrorBoundrais />
    ) : (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}
