import Image from "next/image"

interface CardData {
    data: {
        id: String
        name: String
        image: String
        price: String
    }
}

const Card = () => {
    {
        //const cartItem provides static data for our testing
    }
    const AddItemToCart = () => {
        {
            //cart item
        }
        {
            //this function adds the item to cart in sanity cms
        }
        function saveItem() {
            console.log("Save Item")
            return true
        }
        {
            /**
             * add item to local array of items
             */
        }
        if (saveItem()) {
            console.log("Saved")
        }
    }
    return (
        <div className="max-w-[300px] border-2 border-ash rounded-2xl flex flex-col items-center justify-center">
            <Image src="/cardImg.png" width={300} height={175} />
            <div>
            <p className="w-full p-2 text-base font-semibold text-center text-ash">Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            </div>
            <button className="bg-ash text-white p-2.5 my-2.5 mx-2 w-64 rounded-full" onClick={AddItemToCart}>Add to cart</button>
        </div>
    )
}

export default Card