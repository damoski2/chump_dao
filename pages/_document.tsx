import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(): JSX.Element {
  return (
    <Html lang='en' >
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&family=Roboto:ital,wght@0,300;0,400;1,100&display=swap" rel="stylesheet" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}