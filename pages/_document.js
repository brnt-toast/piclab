import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
        <link rel="stylesheet" href="https://cloud.typography.com/6929016/7418832/css/fonts.css" />
      </Head>
      <body className='bg-black text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

