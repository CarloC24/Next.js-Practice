import App, { Container } from 'next/app';
import Router from 'next/router';
import Head from './Head';
import Navbar from './NavBar';
import Page from './Page';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    //this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head />
        <Navbar />
        <Page>
          <Component {...pageProps} />
        </Page>
      </Container>
    );
  }
}

export default MyApp;
