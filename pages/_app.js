import App, { Container } from 'next/app';
import Router from 'next/router';
import Head from './Head';
import Navbar from './NavBar';
import Page from './Page';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers';

const store = createStore(reducer);

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
        <Provider store={store}>
          <Head />
          <Navbar />
          <Page>
            <Component {...pageProps} />
          </Page>
        </Provider>
      </Container>
    );
  }
}

export default MyApp;
