import Head from "next/head";

import Header from "../ui/Header.js";
import Footer from "../ui/Footer.js";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head lang="en">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
        <meta
          name="keywords"
          content="Portfolio, Resume, Anmar Hani, Software Engineer, University of Jeddah, Personal"
        />
        <meta name="description" content="Anmar Hani's Portfolio Website" />
        <meta name="author" content="Anmar Hani" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/x-icon" href="/icons/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          href="/icons/favicon-32x32.png"
        ></link>
        <link rel="stylesheet" href="/globals.css" />
        <link
          rel="manifest"
          href="/site.webmanifest"
          crossorigin="use-credentials"
        />
        <title>Anmar Hani's Portfolio</title>
      </Head>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
