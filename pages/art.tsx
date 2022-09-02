import Head from "next/head"
import AvailableProducts from "../components/AvailableProducts"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import ProductList from "../components/ProductList"

const Art = () => {
    return(
        <div>
            <Head>
                <title>igowithIGHO Art Sale</title>
                <meta name="description" content="igowithIGHO Art Sale" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <Navbar page={"art"} />
            <main className="absolute inset-x-0 top-0 h-full mt-24 space-y-8">
                <div className="w-full px-2.5 sm:px-16 lg:px-10 py-10 lg:py-20 flex flex-col items-center justify-center space-y-8">
                    <h1 className="text-2xl font-semibold text-black">Available <span className="text-green">Arts</span></h1>
                    <ProductList />
                </div>
                <Newsletter />
                <Footer />
            </main>
        </div>
    )
}

export default Art