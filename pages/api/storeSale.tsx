import sanityClient from '@sanity/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === "production",
    token: process.env.SANITY_API_TOKEN
}

const client = sanityClient(config)

export default async function storeSale(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const {
        customer_name,
        shipped_out,
        address,
        items,
        price
    } = JSON.parse(req.body)
    try {
        await client.create({
            _type: "verified",
            customer_name,
            shipped_out,
            address,
            items,
            price
        })
    } catch (err) {
      return res.status(500).json({message: "Couldn't submit item", err})
    }
    res.status(200).json({ message: "Item submitted" })
  }