import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="meta/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="meta/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="meta/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="meta/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="color-scheme" content="dark" />
        {/* Primary Meta Tags */}
        ap <meta name="title" content="Melvyn Malherbe • Développeur" />
        <meta
          name="description"
          content="Software Engineer. Web creator about Code. Mentor for people who want to learn more and faster."
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://melvnyx.com/" />
        <meta property="og:title" content="Melvyn Malherbe • Développeur" />
        <meta
          property="og:description"
          content="Software Engineer. Web creator about Code. Mentor for people who want to learn more and faster."
        />
        <meta property="og:image" content="./images/cover-metatag.png" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://melvnyx.com/" />
        <meta
          property="twitter:title"
          content="Melvyn Malherbe • Développeur"
        />
        <meta
          property="twitter:description"
          content="Software Engineer. Web creator about Code. Mentor for people who want to learn more and faster."
        />
        <meta property="twitter:image" content="./images/cover-metatag.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
