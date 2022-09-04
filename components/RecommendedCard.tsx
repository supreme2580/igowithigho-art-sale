import Image from "next/image"

const RecommendedCard = () => {
    return(
        <div className="max-w-[300px] flex flex-col items-center justify-center -space-y-2">
            <div className="rounded-t-xl"><Image src="/cardImg.png" width={300} height={175} /></div>
            <div className="bg-green rounded-b-xl">
                <div>
                    <p className="w-full p-2 text-base font-semibold text-center text-white">Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>
                <button className="bg-white text-green p-2.5 my-2.5 mx-2 w-64 rounded-full">Add to cart</button>
            </div>
        </div>
    )
}

export default RecommendedCard