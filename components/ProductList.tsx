import { urlFor } from "../sanity"
import Card from "./Card"

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

const ProductList = ({ page, data }: Page) => {
    return(
        <div className={`flex ${page == "art" && "flex-col items-center justify-center space-y-4"} lg:space-y-0 w-full max-w-4xl ${page == "home" && "space-x-4"} overflow-x-scroll lg:grid lg:grid-cols-3 lg:gap-4 lg:space-x-0 xl:w-auto scrollbar-hide`}>
            {
                //render everyother card but the first cart because it has been renderd already on the hero component
                data.map((item, index) => (
                    index != 0 && page == "home" ? <Card
                        key={item._id} 
                        image={urlFor(item.thumbnail.asset._ref).url()}
                        description={item.description}
                        id={item._id} slug={item.slug.current}
                        price={item.price} title={item.title}
                    /> : 
                    page == "art" && <Card
                    key={item._id} 
                    image={urlFor(item.thumbnail.asset._ref).url()}
                    description={item.description}
                    id={item._id} slug={item.slug.current}
                    price={item.price} title={item.title} />
                ))
            }
        </div>
    )
}

export default ProductList