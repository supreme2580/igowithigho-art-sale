import { sanityClient } from "../sanity"
import RecommendedProductList from "./RecommendedProductList"

interface Data {
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

const Recommendation = ({ info }: Data) => {
    return(
        <div className="flex flex-col items-center justify-center mt-16 ml-2.5 sm:ml-0 space-y-8">
            <h1 className="text-2xl font-semibold text-center text-black">Recommendation</h1>
            <div className="flex max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl overflow-x-scroll scrollbar-hide ml-2.5 sm:ml-0 md:ml-8 lg:ml-0">
                <RecommendedProductList items={info} />
            </div>
        </div>
    )
}

export default Recommendation