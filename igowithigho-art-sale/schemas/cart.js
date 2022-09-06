export default {
    name: "cart",
    title: "Cart",
    type: "document",
    fields: [
        {
            title: "Name of product",
            name: "product_name",
            type: "string",
        },
        {
            title: "Image of product",
            name: "thumbnail",
            type: "string"
        },
        {
            title: "Product Id",
            name: "product_id",
            type: "string"
        },
        {
            title: "Name of customer",
            name: "name",
            type: "string"
        },
        {
            title: "Customer Id",
            name: "customer_id",
            type: "string"
        },
        {
            title: "Item price",
            name: "price",
            type: "number"
        }
    ]
}