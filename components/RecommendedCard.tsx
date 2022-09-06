import Image from "next/image"
import Link from "next/link"

interface Data {
    id: string
    image: string
    description: string
    slug: string
    price: string
}

const RecommendedCard = ({ image, description, price, slug }: Data) => {
    return(
        <div className="max-w-[300px] flex flex-col items-center justify-center -space-y-2">
            <Link href={`/items/${slug}`}>
                <a>
                    <div className="rounded-t-xl"><Image src={image} width={300} height={175} /></div>
                </a>
            </Link>
            <div className="bg-green rounded-b-xl">
                <Link href={`/items/${slug}`}>
                    <a>
                    <div>
                        <p className="w-full p-2 text-base font-semibold text-center text-white">{description}</p>
                    </div>
                    </a>
                </Link>
                <button className="bg-white text-green p-2.5 my-2.5 mx-2 w-64 rounded-full">Add to cart</button>
            </div>
        </div>
    )
}

export default RecommendedCard