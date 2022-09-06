import Image from "next/image"
import Link from "next/link"

interface Share {
    url: String
}

const Share = ({ url }: Share) => {
    return(
        <div className="flex items-center space-x-5">
            <h1 className="text-lg">Share</h1>
            <Link href={`http://twitter.com/share?text=Hi guys check out this item from igowithigho art sale&url=${url}`}><a><Image src="/twitter.png" width={25} height={25} /></a></Link>
            <Link href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}><a><Image src="/facebook.png" width={25} height={25} /></a></Link>
            <Link href={`https://pinterest.com/pin/create/button/?url=${url}&media=&description=Hi guys check out this item from igowithigho art sale`}><a><Image src="/printerest.png" width={25} height={25} /></a></Link>
        </div>
    )
}

export default Share