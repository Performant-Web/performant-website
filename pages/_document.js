import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
      <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-R2F19FE31M`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R2F19FE31M', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
      <title>Performant Web Development</title>
        <meta name="description" content="Performant Web Development Services. Solving your business problems with technology." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}