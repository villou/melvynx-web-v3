import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Melvynx</title>
      </Head>
      <div className="min-h-full max-w-5xl m-auto p-4">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
