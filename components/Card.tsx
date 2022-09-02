import Image from "next/image"

const Card = () => {
    return (
        <div className="max-w-[300px] border-2 border-ash rounded-2xl flex flex-col items-center justify-center">
            <Image src="/cardImg.png" width={300} height={175} />
            <div>
            <p className="w-full p-2 text-base font-semibold text-center text-ash">Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            </div>
            <button className="bg-ash text-white p-2.5 my-2.5 mx-2 w-64 rounded-full">Add to cart</button>
        </div>
    )
}

export default Card