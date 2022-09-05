import { TrashIcon } from "@heroicons/react/outline"
import Image from "next/image"

const CardItem = ({ id, amount }) => {
    let item = document.getElementById(id)
    let val = Number(item?.value)
    const increment = () => {
        val += 1
        item.value = val
        let price = amount * val
        document.getElementById(id+"price").innerHTML = "= $" + price
    }
    const decrease = () => {
        {
            //only reduce when no of items is greater than one
            //because you cannot have less than one of an item in a cart
        }
        if (val > 1) {
            val -= 1
            item.value = val
            let price = amount * val
            document.getElementById(id+"price").innerHTML = "= $" + price
        }
    }
    return(
        <div className="flex items-center justify-between w-full space-x-2.5">
            <div>
                <Image src="/cardImg.png" width={75} height={75} className="rounded-xl" />
            </div>
            <div className="flex flex-col flex-wrap items-start flex-1 space-y-1">
                <h1 className="max-w-[235px] break-words font-semibold">Picture of monalisa</h1>
                <div className="flex items-center justify-between w-full">
                    <div>
                        <div className="flex items-center border-2 max-w-auto rounded-xl border-green max-w-[100px]">
                            <button className="w-8 text-2xl font-semibold text-center" onClick={decrease}>-</button>
                            <input type="text" value="1" className="w-8 text-center text-black border-2 outline-none border-x-green border-y-white" id={id} readOnly />
                            <button className="w-8 text-2xl font-semibold text-center" onClick={increment}>+</button>
                        </div>
                    </div>
                    <div>
                        <button>
                            <TrashIcon className="w-8 h-8" />
                        </button>
                    </div>
                </div>
                {
                    //create a unique id by joining the unique id with string price
                }
                <button className="text-lg font-semibold" id={`${id}price`}>= ${amount}</button>
            </div>
        </div>
    )
}

export default CardItem