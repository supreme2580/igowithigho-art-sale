import ItemDescription from "../../components/ItemDescription"
import Navbar from "../../components/Navbar"
import Recommendation from "../../components/Recommendation"
import ItemNewsletter from "../../components/ItemNewsletter"
import ItemFooter from "../../components/ItemFooter"
import Head from "next/head"
import { sanityClient } from "../../sanity"
import { GetStaticProps } from "next"

interface Data {
  items: {
    _id: string
      title: string
      description: string
      thumbnail: {
        asset: {
          _ref: string
        }
      }
      price: string
      slug: {
        current: string
      },
      rating: number
}
    
    info: [
      {
        _id: string
        title: string
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

  interface Slugs {
    _id: string
    slug: {
      current: string
    }
  }

const Description = ({items, info}: Data) => {
  console.log(items)
    return(
        <div>
            <Head>
                <title>igowithIGHO Art Sale</title>
                <meta name="description" content="igowithIGHO Art Sale" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <Navbar page="art" />
            {
                //description of item
            }
            <main className="absolute inset-x-0 top-0 h-full mt-24 space-y-12">
                <ItemDescription items={items} />
                {
                        //recommendations
                }
                <Recommendation info={info} />
                <ItemNewsletter />
                <ItemFooter />
            </main>
        </div>
    )
}

export default Description

export const getStaticPaths = async () => {
  const query = `
  *[_type == "items"]{
    _id,
    slug {
       current
    }
  }`
  const pathItems = await sanityClient.fetch(query)
  const paths = pathItems.map((path: Slugs) => ({
    params: {
      slug: path.slug.current
    }
  }))
  return {
    paths, 
    fallback: "blocking"
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `
  *[_type == "items" && slug.current == $slug][0]{
    _id,
    title,
    thumbnail,
    description,
    price,
    slug {
      current
    },
    rating
  }`
  const infoQuery = `
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
  const items = await sanityClient.fetch(query, {
    slug: params?.slug
  })
  const info = await sanityClient.fetch(infoQuery)
  if (!items) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      items,
      info
    },
    revalidate: 60
  }
}