export default function getCartItems() {}

export async function getServerSideProps(context){

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
    const data = await sanityClient.fetch(query)
    const data1 = await sanityClient.fetch(query)
return {
props: {data, data1}
}
}
