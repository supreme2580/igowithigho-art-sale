import ItemDescription from "../../components/ItemDescription"
import Navbar from "../../components/Navbar"
import Recommendation from "../../components/Recommendation"
import ItemNewsletter from "../../components/ItemNewsletter"
import ItemFooter from "../../components/ItemFooter"
import Head from "next/head"

const Description = () => {
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
                <Recommendation />
                <ItemNewsletter />
                <ItemFooter />
            </main>
        </div>
    )
}

export default Description