export default function handler({data}) {
return data
}

export async function getServerSideProps(context){
const id = context?.query?.user
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
return {
props: {data}
}
}
