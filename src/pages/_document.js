import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/Footer';

export default function Document() {
  return (
    <Html lang="en" className="bg-gradient-to-r from-amber-300 to-yellow-400">
      <Head />

      <body>
        <Main />
        <NextScript />
      </body>
      <Footer/>
    </Html>
  )
}
