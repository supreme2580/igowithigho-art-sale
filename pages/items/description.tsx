import ItemDescription from "../../components/ItemDescription"
import Navbar from "../../components/Navbar"
import Recommendation from "../../components/Recommendation"
import ItemNewsletter from "../../components/ItemNewsletter"
import ItemFooter from "../../components/ItemFooter"
import Head from "next/head"
import { sanityClient } from "../../sanity"

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

const Description = ({ items }: Data) => {
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
                <ItemDescription />
                {
                        //recommendations
                }
                <Recommendation items={items} />
                <ItemNewsletter />
                <ItemFooter />
            </main>
        </div>
    )
}

export default Description

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