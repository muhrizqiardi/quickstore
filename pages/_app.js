import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/style.css"

import Head from "next/head"
import Script from "next/script"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Bootstrap CSS */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossOrigin="anonymous" />

        {/* CSS */}
        <link rel="stylesheet" href="/styles/style.css" />

        {/* Bootstrap Icons */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />

        {/* Favicon */}
        <link rel="shortcut icon" href="/assets/favicon/favicon.ico" type="image/x-icon" />
        <title>Quickstore</title>
      </Head>
      
      {/* Bootstrap JS */}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin></Script>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
