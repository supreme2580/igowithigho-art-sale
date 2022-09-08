import { useSession } from "next-auth/react"
import Image from "next/image"
import { urlFor } from "../sanity"
import BreadCrumb from "./BreadCrumb"
import Buy from "./Buy"
import Rating from "./Rating"
import Share from "./Share"

const ItemDescription = ({ items }) => {
    let href
    if (typeof window != "undefined") {
        href = window.location.href
    }
    const { data: session } = useSession()
    const thumbnail = items.thumbnail
    const product_name = items.title
    const cost = items.price
    const product_id = items._id
    const name = session?.user?.name
    const customer_id = session?.user?.id
    const customer_mail = session?.user?.email
    const item = {
        thumbnail,
        product_name,
        cost,
        product_id,
        name,
        customer_id,
        customer_mail
    }
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
                                <Share url={href || ""} />
                                <Buy price={items.price} id={items._id} item={item} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDescription