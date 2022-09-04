import RecommendedProductList from "./RecommendedProductList"

const Recommendation = () => {
    return(
        <div className="flex flex-col items-center justify-center mt-16 ml-2.5 sm:ml-0 space-y-8">
            <h1 className="text-2xl font-semibold text-center text-black">Recommendation</h1>
            <div className="flex max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl overflow-x-scroll scrollbar-hide ml-2.5 sm:ml-0 md:ml-8 lg:ml-0">
                <RecommendedProductList />
            </div>
        </div>
    )
}

export default Recommendation