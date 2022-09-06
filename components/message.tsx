import { useEffect } from "react"
import { messageState } from "../atoms/messageAtom"
import { useRecoilState } from "recoil"

const Message = () => {
    let message;
    const [status, setStatus] = useRecoilState(messageState)
    useEffect(() => {
        status ? message = "Item added to cart" : message = "Error adding item to cart"
        setTimeout(() => {
            setStatus(false)
        }, 2000);
    }, [status])
    return (
        <div className={`${status ? "bg-green" : "bg-red-600"} p-2 absolute bottom-0 right-0 mb-28 mr-5 text-white font-semibold ${status ? "block" : "hidden"}`}>
            {
                status ? "Item added to cart" : "Error adding item to cart"
            }
        </div>
    )
}

export default Message