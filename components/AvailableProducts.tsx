import Link from "next/link"
import Card from "./Card"

const AvailableProducts = () => {
    return (
        <div className="lg:bg-lightBg w-full px-2.5 sm:px-16 lg:px-10 py-10 lg:py-20 flex flex-col items-center justify-center space-y-8">
            <h1 className="text-black font-semibold text-2xl">Available <span className="text-green">Arts</span></h1>
            {
                /** 
                 * Show grid of cards on large view and show horizontal scroll
                 * on small or mobile screen
                 * scrollbar-hide is imported from tailwind-scrollbar-hide
                 * plugin
                 */
            }
            <div className="lg:grid lg:grid-cols-3 lg:gap-4 space-x-4 lg:space-x-0 flex overflow-x-scroll w-full xl:w-auto scrollbar-hide">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <Link href="/"><a><div className="bg-ash text-white py-2 px-6 rounded-full"><button>View more</button></div></a></Link>
        </div>
    )
}

export default AvailableProducts