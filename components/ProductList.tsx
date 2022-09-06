import { urlFor } from "../sanity"
import Card from "./Card"

interface Page {
    page: String
    data: [
        {
            _id: string
            description: string
            price: number
            thumbnail: {
                asset: {
                    _ref: string
                }
            }
        }
    ]
}

const ProductList = ({ page, data }: Page) => {
    return(
        <div className={`flex ${page == "art" && "flex-col items-center justify-center space-y-4"} w-full max-w-4xl ${page == "home" && "space-x-4"} overflow-x-scroll lg:grid lg:grid-cols-3 lg:gap-4 lg:space-x-0 xl:w-auto scrollbar-hide`}>
            {
                data.map(item => <Card key={item._id} image={urlFor(item.thumbnail.asset._ref).url()} description={item.description} price={item.price} id={item._id} />)
            }
        </div>
    )
}

export default ProductList