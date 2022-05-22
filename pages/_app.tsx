import '../styles/globals.css';
import '../styles/globals-animations.css';
import '../styles/globals-utility.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Melvynx</title>
      </Head>
      <div className="min-h-full max-w-6xl m-auto p-4 relative">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
