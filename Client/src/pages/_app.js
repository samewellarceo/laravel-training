import '@/styles/globals.css';
import Layout from '../comps/Layout';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;