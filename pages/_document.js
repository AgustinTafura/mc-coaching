/* eslint-disable @next/next/no-img-element */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <noscript>
          <img alt='fb-pixel-img' height="1" width="1" style={{ display: 'none' }} src={`https://www.facebook.com/tr?id=4978185172206246&ev=PageView&noscript=1`}
          />
        </noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}