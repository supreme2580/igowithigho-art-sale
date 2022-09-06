import { useEffect } from "react"
import { waitingState, messageState } from "../atoms/messageAtom"
import { useRecoilState } from "recoil"

const Waiting = () => {
    let message;
    const [waiting, setWaiting] = useRecoilState(waitingState)
    const [status, setStatus] = useRecoilState(messageState)
    useEffect(() => {
        waiting ? message = "Adding item to cart..." : ""
        waiting ? message = "Item added to cart" : message = "Error adding item to cart"
        setTimeout(() => {
            setWaiting(false)
        }, 2000);
        if (status) {
            setWaiting(false)
        }
    }, [waiting])
    return (
        <div className={`bg-gold p-2 absolute bottom-0 right-0 mb-36 mr-5 text-white font-semibold ${waiting ? "block" : "hidden"}`}>
            {
                waiting ? "Item added to cart" : "Error adding item to cart"
            }
        </div>
    )
}

export default Waiting