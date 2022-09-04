import Image from "next/image"
import Link from "next/link"

const Share = () => {
    return(
        <div className="flex items-center space-x-5">
            <h1 className="text-lg">Share</h1>
            <Link href="/"><a><Image src="/twitter.png" width={25} height={25} /></a></Link>
            <Link href="/"><a><Image src="/instagram.png" width={25} height={25} /></a></Link>
            <Link href="/"><a><Image src="/spotify.png" width={25} height={25} /></a></Link>
        </div>
    )
}

export default Share