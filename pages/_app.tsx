import '../styles/globals.css';
import '../styles/globals-animations.css';
import '../styles/globals-utility.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

const gtag = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Melvyn Malherbe • Développeur</title>
      </Head>
      <div className="min-h-full max-w-6xl m-auto p-4 relative">
        <Component {...pageProps} />
      </div>

      <Script async src={gtag}></Script>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-6KERZBPZXK');`,
        }}
      />
    </>
  );
}

export default MyApp;
