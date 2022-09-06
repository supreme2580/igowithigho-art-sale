import Image from "next/image"
import Link from "next/link"
import Message from "./message"
import { messageState } from "../atoms/messageAtom"
import { useRecoilState } from "recoil"
import { useSession } from "next-auth/react"

interface Data {
    id: string
    image: string
    description: string
    slug: string
    price: string
    title: string
}

const RecommendedCard = ({ image, description, price, slug, title, id }: Data) => {
    
    {
        //const cartItem provides static data for our testing
    }
    const { data: session } = useSession()
    const customer_name = session?.user?.name
    const customer_id = session?.user?.id
    const customer_mail = session?.user?.email
    const cost = Number(price)
    const name = customer_name
    const product_id = id
    const product_name = title
    const thumbnail = image
    const item = {
        thumbnail,
        product_name,
        cost,
        product_id,
        name,
        customer_id,
        customer_mail
    }
    const [status, setStatus] = useRecoilState(messageState)
    const AddItemToCart = () => {
        function saveItem() {
            fetch("/api/addItem", {
                method: "POST",
                body: JSON.stringify(item)
            }).then(() => {
                setStatus(true)
            }).catch(() => {
                setStatus(false)
            })
            return true
        }
        saveItem()
    }
    return(
        <div className="max-w-[300px] flex flex-col items-center justify-center -space-y-2">
            <Link href={`/items/${slug}`}>
                <a>
                    <div className="rounded-t-xl"><Image src={image} width={300} height={175} className="rounded-t-xl" /></div>
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
                <button className="bg-white text-green p-2.5 my-2.5 mx-2 w-64 rounded-full" onClick={AddItemToCart}>Add to cart</button>
            </div>
            <Message />
        </div>
    )
}

export default RecommendedCard