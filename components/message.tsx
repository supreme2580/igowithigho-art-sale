import { useEffect } from "react"

interface Data {
    message: string
}

const Message = ({ message }: Data) => {
    return (
        <div>
           <div className="absolute bottom-0 right-0 bg-green text-white font-semibold p-2.5 mb-28 hidden">
                {message}
            </div> 
        </div>
    )
}

export default Message