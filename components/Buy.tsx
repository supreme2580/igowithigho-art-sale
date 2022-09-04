import { ShoppingCartIcon } from "@heroicons/react/outline"

const Buy = () => {
    return(
        <div className="space-x-2.5 flex items-center">
            <button className="px-5 py-2.5 border-2 rounded-lg border-green font-semibold text-green">$100</button>
            <button className="flex items-center px-5 py-2 font-semibold border-2 rounded-lg border-green bg-green">
                <div>
                    <ShoppingCartIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h1 className="text-lg text-white">$100</h1>
                </div>
            </button>
        </div>
    )
}

export default Buy