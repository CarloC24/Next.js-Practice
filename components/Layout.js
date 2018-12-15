import Navbar from './NavBar';
import Head from 'next/head';

const Layout = props => {
  return (
    <div>
      <Head>
        <title>BitzPrice</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
        />
      </Head>
      <Navbar />
      <div className="container">{props.children}</div>
    </div>
  );
};

export default Layout;