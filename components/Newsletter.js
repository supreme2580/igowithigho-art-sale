const Newsletter = () => {
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
    return (
        <div className="px-2.5 sm:px-16">
            <div className="bg-gradient-to-r from-leftGrad via-midGrad to-rightGrad px-5 pt-10 rounded-xl flex flex-col
                lg:flex-row justify-center items-center space-x-4 max-w-4xl mx-auto">
                <div className="max-w-xs p-2 space-y-2">
                    <h1 className="text-3xl text-center font-bold text-ash">Sign up for our newsletter!</h1>
                    <p className="text-base text-center text-black h-24 sm:h-20">Get notified about updates andbe the first to get early access to new episodes.</p>
                </div>
                <div className="w-full max-w-sm mx-auto pb-10">
                    <div className="relative flex items-center">
                        <input type="email" className="absolute left-0 py-3 pl-5 pr-28 sm:pr-36 rounded-full w-full border-2 border-green outline-none"
                            placeholder="Enter Your Email" id="email" />
                        <button className="absolute right-0 bg-ash py-3.5 sm:px-9 px-5 rounded-full text-white" id="subscribe" onClick={Subscribe}>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter