import Card from "./Card"

const ProductList = () => {
    return(
        <div className="flex w-full max-w-4xl space-x-4 overflow-x-scroll lg:grid lg:grid-cols-3 lg:gap-4 lg:space-x-0 xl:w-auto scrollbar-hide">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default ProductList