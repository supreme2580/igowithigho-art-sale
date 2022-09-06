import Image from "next/image"
import Link from "next/link"

interface Data {
    id: string
    image: string
    description: string
    slug: string
    price: string
    title: string
}

const Card = ({ image, description, price, slug, title }: Data) => {
    {
        //const cartItem provides static data for our testing
    }
    const AddItemToCart = () => {
        {
            //cart item
        }
        {
            //this function adds the item to cart in sanity cms
        }
        function saveItem() {
            console.log("Save Item")
            return true
        }
        {
            /**
             * add item to local array of items
             */
        }
        if (saveItem()) {
            console.log("Saved")
        }
    }
    return (
        <div className="max-w-[300px] border-2 border-ash rounded-2xl flex flex-col items-center justify-center">
            <Link href={`/items/${slug}`}>
                <a>
                    <Image src={image} width={300} height={175} className="rounded-t-2xl" />
                    <div>
                        <p className="w-full p-2 text-base font-semibold text-center text-ash">{description}</p>
                    </div>
                </a>
            </Link>
            <button className="bg-ash text-white p-2.5 my-2.5 mx-2 w-64 rounded-full" onClick={AddItemToCart}>Add to cart</button>
        </div> 
    )
}

export default Card