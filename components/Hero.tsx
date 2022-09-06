import Card from "./Card"

interface Data {
    image: string
    description: string
    id: string
    price: number
}

const Hero = ({ image, description, id, price }: Data) => {
    return(
        <div className="flex justify-center px-2.5 sm:px-16 pt-10">
            <div className="w-full space-y-5 flex flex-col md:flex-row items-center md:space-y-0 space-x-0 md:space-x-5 md:max-w-4xl">
                <div className="space-y-6">
                    <h1 className="text-3xl lg:text-6xl text-center lg:text-left font-bold text-ash">
                        Lorem ipsum dolor sit met, <span className="text-green">consectetur</span> adipiscing elit
                    </h1>
                    <p className="text-lg lg:text-2xl text-center lg:text-left text-black">
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit ut
                        aliquam, purus sit amet
                        luctus venenatis
                    </p>
                </div>
                <div>
                    <div className="flex items-center justify-center">
                        <Card image={image} description={description} id={id} price={price} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero