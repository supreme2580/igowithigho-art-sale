import Head from 'next/head'
import AvailableProducts from '../components/AvailableProducts'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import IFrame from '../components/IFrame'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { sanityClient, urlFor } from "../sanity"

interface Data {
  items: [
    {
      _id: string
      description: string
      thumbnail: {
        asset: {
          _ref: string
        }
      }
      price: string
      slug: {
        current: string
      }
    }
  ]
}

const Home = ({ items }: Data) => {
  return (
    <div>
      <Head>
        <title>igowithIGHO Art Sale</title>
        <meta name="description" content="igowithIGHO Art Sale" />
        <link rel="icon" href="/logo.png" />
      </Head>
      {
        /** Navbar component for small and large screen */
      }
      <Navbar page={"home"} />
      <div className="absolute inset-x-0 top-0 h-full mt-24">
        <main className="space-y-8">
            <Hero image={urlFor(items[0].thumbnail.asset._ref).url()} description={items[0].description} id={items[0]._id} price={items[0].price} slug={items[0].slug.current} />
            <div className="px-2.5 sm:px-16 pt-10"><IFrame /></div>
            <AvailableProducts page={"home"} data={items} />
            <Newsletter />
            <Footer />
        </main>
      </div>
    </div>
  )
}

export default Home

export const getServerSideProps = async() => {
  const query = `
    *[_type == "items"]{
      _id,
      thumbnail,
      description,
      price,
      slug {
        current
      }
    }
  `
  const items = await sanityClient.fetch(query)
  return {
    props: {
      items
    }
  }
}