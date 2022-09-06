import { urlFor } from "../sanity"
import RecommendedCard from "./RecommendedCard"

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

const RecommendedProductList = ({ items }: Data) => {
    return(
        <div className="flex space-x-2.5 py-2.5">
            {
                items.map(item => <RecommendedCard key={item._id} image={urlFor(item.thumbnail.asset._ref).url()} description={item.description} id={item._id} slug={item.slug.current} price={item.price} />)
            }
        </div>
    )
}

export default RecommendedProductList