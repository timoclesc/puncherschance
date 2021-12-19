import Head from 'next/head'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Logo from '../components/logo'
import Intro from '../components/intro'
import styles from './layout.module.css'
import cn from 'classnames'

export default function Layout({ isHome, children }) {
  return (
    <>
      <Meta />
      <Head>
          <title>The Puncher's Chance Podcast</title>
          <link
            rel="preload"
            href="/fonts/FeVQS0BTqb0h60ACH5FQ2J5hm25mww.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/FeVQS0BTqb0h60ACH5BQ2J5hm25mww.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/FeVQS0BTqb0h60ACH55Q2J5hm24.woff2"
            as="font"
            crossOrigin=""
          />
      </Head>
      <div className="min-h-screen">
        <header className={styles.header}>
          <div className="container mx-auto md:flex items-center">
            <Logo url={'/'} />
            <Intro />
          </div>
        </header>
        <main className="container mx-auto">
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}
