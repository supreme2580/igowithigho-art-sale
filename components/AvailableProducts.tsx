import Link from "next/link"
import Card from "./Card"
import ProductList from "./ProductList"

interface Page {
    page: String
    data: [
        {
            _id: string
            description: string
            price: string
            thumbnail: {
                asset: {
                    _ref: string
                }
            }
            slug: {
                current: string
            }
            title: string
        }
    ]
}

const AvailableProducts = ({ page, data }: Page) => {
    return (
        <div className="lg:bg-lightBg w-full px-2.5 sm:px-16 lg:px-10 py-10 lg:py-20 flex flex-col items-center justify-center space-y-8">
            <h1 className="text-2xl font-semibold text-black">Available <span className="text-green">Arts</span></h1>
            {
                /** 
                 * Show grid of cards on large view and show horizontal scroll
                 * on small or mobile screen
                 * scrollbar-hide is imported from tailwind-scrollbar-hide
                 * plugin
                 */
            }
            <ProductList page={page} data={data} />
            <Link href="/art"><a><div className="px-6 py-2 text-white rounded-full bg-ash"><button>View more</button></div></a></Link>
        </div>
    )
}

export default AvailableProducts