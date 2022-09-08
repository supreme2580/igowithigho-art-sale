import { TrashIcon } from "@heroicons/react/outline"
import Image from "next/image"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import Head from "next/head"
import { sanityClient } from "../sanity"
import { useEffect } from "react"
import Script from "next/script"
import { useSession } from "next-auth/react"

const Cart = () => {

    let prices = []
    let amountToPay
    const { data: session } = useSession()
let data
let data1
async () => {
const query = `
        *[_type == "cart" && customer_id == "${id}"]{
            thumbnail,
            product_name,
            cost,
            product_id,
            name,
            customer_id,
            customer_mail
        }
    `
    data = await sanityClient.fetch(query)
    data1 = await sanityClient.fetch(query)
}
    const name = session?.user?.name
    const email = session?.user?.email
    const id = session?.user?.id
    function getPrice () {
        data.map(costs => prices.push(costs.cost))
        let arrDiff = prices.length-data.length
        prices.splice(0, arrDiff)
        let sum = prices.reduce(((a, b) => a + b), 0)
        amountToPay = sum
        document.getElementById("checkout").innerHTML = "Checkout $"+sum
        document.getElementById("total").innerHTML = "Checkout $"+sum
    }
    function reCalculate(price, index) {
        prices[index] = price
        let arrDiff = prices.length-data.length
        prices.splice(0, arrDiff)
        const sum = prices.reduce(((a, b) => a + b), 0)
        amountToPay = sum
        document.getElementById("checkout").innerHTML = "Checkout $"+sum
        document.getElementById("total").innerHTML = "Checkout $"+sum
    }
    useEffect(() => {getPrice()}, [])

    const pay = () => {
        const doc = document.getElementById("address")
        data1.map(item => {
            delete item.cost
            delete item.customer_id
            delete item.customer_mail
            delete item.name
            delete item.thumbnail
            item._key = Math.random()
    })
        if (doc.value != "") {
            doc.style = "border: 1px solid #F1F5F9"
            getPrice()
            PaystackPop.setup({
                key: process.env.NEXT_PUBLIC_PUBLIC_KEY, // Replace with your public key
                email: email,
                amount: amountToPay * 100,
                ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
                // label: "Optional string that replaces customer email"
                onClose: function(){
                    document.getElementById("checkout").innerHTML = "Item not purchased"
                },
                callback: function(response){
                    if (response.status == "success") {
                        storeSale(name, false, document.getElementById("address").value, data1,"$" + amountToPay)
                    }
                }
              }).openIframe()
        }
        else {
            doc.style = "border: 1px solid #FF0000"
        }
    }
    function removeItem(product_id, customer_id) {
        const item = {
            product_id,
            customer_id
        }
        fetch("/api/removeItem", {
            method: "POST",
            body: JSON.stringify(item)
        }).then(() => {
            window.location.href = "https://igowithigho-art-sale.vercel.app"
        })
    }
    
    function storeSale(
        customer_name,
        shipped_out,
        address,
        items,
        price
    ) {
        const item = {customer_name, shipped_out, address, items, price}
        fetch("/api/storeSale", {
            method: "POST",
            body: JSON.stringify(item)
        }).then(() => {
            document.getElementById("checkout").innerHTML = "Item Purchased"
        })
    }
    return(
        <div>
            <Head>
                <title>igowithIGHO Art Sale</title>
                <meta name="description" content="igowithIGHO Art Sale" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <Script src="https://js.paystack.co/v1/inline.js" />
            <Navbar page={""} />
            <div className="absolute inset-x-0 top-0 h-full mt-24 bg-lightBg">
                <main className="space-y-8 bg-white">
                    {
                        //cart and checkout
                    }
                    <div className="flex justify-center px-2.5 sm:px-16 pt-10">
                        <div className="flex flex-col w-full space-x-0 space-y-5 md:flex-row md:space-y-0 md:space-x-5 md:max-w-4xl">
                            <div className="flex flex-col flex-1 bg-white md:max-w-md border-2 border-lightBg">
                                <h1 className="py-4 text-lg font-semibold px-2.5">Cart</h1>
                                <div className="h-[2px] bg-lightBg space-y-2" />
                                    <div className="p-2.5 space-y-4">
                                    {
                                        //cart item
                                    }
                                    {
                                        data.map((info, index) => (
                                            <div className="flex items-center justify-between w-full space-x-2.5" key={info.product_id}>
                                                <div>
                                                    <Image src={info.thumbnail} width={75} height={75} className="rounded-xl" />
                                                </div>
                                                <div className="flex flex-col flex-wrap items-start flex-1 space-y-1">
                                                    <h1 className="max-w-[235px] break-words font-semibold">{info.product_name}</h1>
                                                    <div className="flex items-center justify-between w-full">
                                                        <div>
                                                            <div className="flex items-center border-2 max-w-auto rounded-xl border-green max-w-[100px]">
                                                                <button className="w-8 text-2xl font-semibold text-center" onClick={() => {
                                                                    let item = document.getElementById(info.product_id)
                                                                    let val = Number(item?.value)
                                                                    if (val > 1) {
                                                                        val -= 1
                                                                    }
                                                                    item.value = val
                                                                    let price = info.cost * val
                                                                    item.value = val
                                                                    const priceId = info.product_id+"price"
                                                                    document.getElementById(priceId).innerHTML = "= $" + price
                                                                    reCalculate(price, index)
                                                                }}>-</button>
                                                                <input type="text" value="1" id={info.product_id} className="w-8 text-center text-black border-2 outline-none border-x-green border-y-white" readOnly />
                                                                <button className="w-8 text-2xl font-semibold text-center" onClick={() => {
                                                                    let item = document.getElementById(info.product_id)
                                                                    let val = Number(item?.value)
                                                                    val += 1
                                                                    item.value = val
                                                                    let price = info.cost * val
                                                                    item.value = val
                                                                    const priceId = info.product_id+"price"
                                                                    document.getElementById(priceId).innerHTML = "= $" + price
                                                                    reCalculate(price, index)
                                                                }}>+</button>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <button onClick={() => removeItem(info.product_id, id)}>
                                                                <TrashIcon className="w-8 h-8" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    {
                                                        //create a unique id by joining the unique id with string price
                                                    }
                                                    <button className="text-lg font-semibold" id={`${info.product_id}price`}>= ${info.cost}</button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    {
                                        //cart item ends here
                                    }
                                </div>
                            </div>
                            <div className="flex-1 bg-white max-h-[270px] p-2.5 border-2 border-lightBg space-y-1.5">
                                <h1 className="py-4 text-lg font-semibold">CART SUMMARY</h1>
                                <div className="h-[2px] bg-lightBg space-y-2" />
                                <div className="flex justify-between">
                                    <h2 className="text-base font-semibold py-2.5">Subtotal</h2>
                                    <h2 className="text-base font-semibold py-2.5" id="total">$0</h2>
                                </div>
                                <p className="text-xs">Your full address should contain your state and country name</p>
                                <input type="text" id="address" placeholder="Enter your full house address" className="p-2.5 border border-lightBg w-full outline-none" />
                                <button className="w-full text-lg font-semibold text-white bg-green p-2.5" id="checkout" onClick={pay}>Checkout $0</button>
                            </div>
                        </div>
                    </div>
                    <Newsletter />
                    <Footer />
                </main>
            </div>
        </div>
    )
}

export default Cart
