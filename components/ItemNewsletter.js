const ItemNewsLetter = () => {
    const Subscribe = () => {
        document.getElementById("subscribe").innerHTML = "Subscribing..."
        var email = document.getElementById("email").value
        function saveItem() {
            fetch("/api/addSub", {
                method: "POST",
                body: JSON.stringify({email})
            }).then(() => {
                document.getElementById("subscribe").innerHTML = "Subscribed"
            }).catch(() => {
                document.getElementById("subscribe").innerHTML = "Error"
            })
            return true
        }
        saveItem()
    }
    return(
        <div className="px-2.5 sm:px-16 md:pr-10 lg:pr-16">
            <div className="flex flex-col items-center justify-center max-w-xs px-5 pt-10 mx-auto space-x-4 sm:max-w-md md:max-w-3xl bg-gradient-to-r from-leftGrad via-midGrad to-rightGrad rounded-xl lg:flex-row">
                <div className="max-w-xs p-2 space-y-2">
                    <h1 className="text-3xl font-bold text-center text-ash">Sign up for our newsletter!</h1>
                    <p className="h-24 text-base text-center text-black sm:h-20">Get notified about updates andbe the first to get early access to new episodes.</p>
                </div>
                <div className="w-full max-w-sm pb-10 mx-auto">
                    <div className="relative flex items-center">
                        <input type="email" className="absolute left-0 w-full py-3 pl-5 border-2 rounded-full outline-none pr-28 sm:pr-36 border-green"
                            placeholder="Enter Your Email" id="email" />
                        <button className="absolute right-0 bg-ash py-3.5 sm:px-9 px-5 rounded-full text-white" id="subscribe" onClick={Subscribe}>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemNewsLetter