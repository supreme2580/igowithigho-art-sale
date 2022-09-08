import sanityClient from '@sanity/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === "production",
    token: process.env.SANITY_API_TOKEN
}

const client = sanityClient(config)

export default async function addItem(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const { thumbnail,
        product_name,
        cost,
        product_id,
        name,
        customer_id,
        customer_mail
    } = JSON.parse(req.body)
res.setHeader('Cache-Control', 'no-store');
    try {
      const query = `
        *[_type == "cart" && product_id == "${product_id}" && customer_id == "${customer_id}"][0]{
            product_id
        }
      `
      const result = await client.fetch(query)
      if (!(result.product_id == product_id)) {
        await client.create({
          _type: "cart",
          thumbnail,
          product_name,
          cost,
          product_id,
          name,
          customer_id,
          customer_mail
        })
      }
    } catch (err) {
      return res.status(500).json({message: "Couldn't submit item", err})
    }
    res.status(200).json({ message: "Item submitted" })
  }
