import Image from "next/image"
import Link from "next/link"
import ItemDivider from "./ItemDivider"

const ItemFooter = () => {
    return(
        <footer className="flex flex-col items-center justify-between space-y-2.5">
            <div className="text-center">
                <Image src="/logo.png" width={110} height={60} />
            </div>
            <div className="flex items-center justify-between max-w-3xl space-x-5">
                <Link href="/"><a><Image src="/twitter.png" width={50} height={50} /></a></Link>
                <Link href="/"><a><Image src="/instagram.png" width={50} height={50} /></a></Link>
                <Link href="/"><a><Image src="/spotify.png" width={50} height={50} /></a></Link>
            </div>
            <ItemDivider />
            <div className="pb-2.5">
                <h1 className="text-lg font-semibold">© 2021 All Rights Reserved</h1>
            </div>
        </footer>
    )
}

export default ItemFooter