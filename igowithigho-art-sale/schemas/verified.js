export default {
    name: "verified",
    title: "Verified Orders",
    type: "document",
    fields: [
        {
            name: "customer_name",
            title: "Customer Name",
            type: "string"
        },
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
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "product_name", type: "string", title: "Product Name",
                        },
                        {
                            name: "product_id", type: "string", title: "Product Id"
                        }
                    ]
                }
            ]
        },
        {
            name: "price",
            title: "Price",
            type: "string"
        }
    ]
}