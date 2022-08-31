import Head from 'next/head'
import Hero from '../components/Hero'
import IFrame from '../components/IFrame'
import Navbar from '../components/Navbar'

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
      <div className="absolute top-0 inset-x-0 mt-24 px-2.5 sm:px-16 pt-10 h-full space-y-8">
        <Hero />
        <IFrame />
        <div>Hi</div>
      </div>
    </div>
  )
}

export default Home