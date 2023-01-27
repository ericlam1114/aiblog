import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/Footer';

export default function Document() {
  return (
    <Html lang="en" className="bg-gradient-to-r from-white to-gray-100">
      <Head />

      <body>
        <Main />
        <NextScript />
      </body>
      <Footer/>
    </Html>
  )
}
