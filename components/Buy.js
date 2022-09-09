import { ShoppingCartIcon } from "@heroicons/react/outline"
import { useSession } from "next-auth/react"

const Buy = ({ price, id, item }) => {
    const { data: session } = useSession()
    const AddItemToCart = () => {
        document.getElementById(id+"price").innerHTML = "Adding item to cart..."
        function saveItem() {
            fetch("/api/addItem", {
                method: "POST",
                body: JSON.stringify(item)
            }).then(() => {
                document.getElementById(id+"price").innerHTML = "Item added to cart"
            }).catch(() => {
                document.getElementById(id+"price").innerHTML = "Error"
            })
            return true
        }
        saveItem()
    }
    return(
        <div className="space-x-2.5 flex items-center">
            <button className="flex items-center px-5 py-2 font-semibold border-2 rounded-lg border-green bg-green" onClick={ session != null && AddItemToCart }>
                <div>
                    <ShoppingCartIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h1 className="text-lg text-white" id={id+"price"}>${price}</h1>
                </div>
            </button>
        </div>
    )
}

export default Buy
