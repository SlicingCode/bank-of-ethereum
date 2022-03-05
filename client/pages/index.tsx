import Head from 'next/head'

import {
  Navbar,
  Hero,
  Features,
  Savings,
  Transfers,
  Loans,
  Footer,
} from '../components'

const Home = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Bank of Ethereum</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/assets/fonts/MeedoriSans/MeedoriSans-Bold.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <div className="bg-primary">
        <Navbar />
        <Hero />
        <Features />
        <Savings />
        <Transfers />
        <Loans />
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home
