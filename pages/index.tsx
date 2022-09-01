import Head from 'next/head'
import AvailableProducts from '../components/AvailableProducts'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import IFrame from '../components/IFrame'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>igowithIGHO Art Sale</title>
        <meta name="description" content="igowithIGHO Art Sale" />
        <link rel="icon" href="/logo.png" />
      </Head>
      {
        /** Navbar component for small and large screen */
      }
      <Navbar />
      <div className="absolute top-0 inset-x-0 mt-24 h-full">
        <main className="space-y-8">
            <Hero />
            <div className="px-2.5 sm:px-16 pt-10"><IFrame /></div>
            <AvailableProducts />
            <Newsletter />
            <Footer />
        </main>
      </div>
    </div>
  )
}

export default Home