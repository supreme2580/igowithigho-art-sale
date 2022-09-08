export default {
    name: "verified",
    title: "Verified Orders",
    type: "document",
    fields: [
        {
            name: "shipped_out",
            title: "Shipped out",
            type: "boolean"
        },
        {
            name: "address",
            title: "Address",
            type: "string"
        },
        {
            name: "items",
            title: "Items",
            type: "array",
            of: [{type: "string"}]
        },
        {
            name: "price",
            title: "Price",
            type: "string"
        }
    ]
}