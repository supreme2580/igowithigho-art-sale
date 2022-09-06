import Image from "next/image"
import { urlFor } from "../sanity"
import BreadCrumb from "./BreadCrumb"
import Buy from "./Buy"
import Rating from "./Rating"
import Share from "./Share"

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
              }
              rating: number
        }
    }
const ItemDescription = ({ items }: Data) => {
    return(
        <div className="px-2.5 sm:px-16 pt-10 space-y-8">
            <div className="flex justify-center">
                <div className="space-y-5">
                    <div className="flex mx-2.5 md:max-w-4xl">
                        <BreadCrumb name={items.title} />
                    </div>
                    <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:max-w-4xl md:space-x-10">
                        <div className="flex flex-col justify-center md:flex-row">
                            <div className="space-y-4">
                                <div className="flex items-center justify-center md:justify-start">
                                    <Image src={urlFor(items.thumbnail.asset._ref).url()} width={300} height={275} className="rounded-2xl" />
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 space-y-2 mx-2.5">
                            <div>
                                <h1 className="max-w-[300px] sm:max-w-md break-words text-xl font-bold">Monalisa</h1>
                            </div>
                            <div className="max-w-md space-y-2">
                                <h1 className="text-lg">
                                    {items.description}
                                </h1>
                                {
                                    //pass the number of stars to the rating component
                                }
                                <Rating stars={items.rating} />
                                <Share />
                                <Buy price={items.price} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDescription