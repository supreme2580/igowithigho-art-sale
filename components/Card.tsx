import Image from "next/image"
import Link from "next/link"
import { useSession } from "next-auth/react"
import Message from "./message"
import { messageState } from "../atoms/messageAtom"
import { useRecoilState } from "recoil"

interface Data {
    id: string
    image: string
    description: string
    slug: string
    price: string
    title: string
}

const Card = ({ image, description, price, slug, title, id }: Data) => {
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
        <Message />
    </div> 
    )
}

export default Card