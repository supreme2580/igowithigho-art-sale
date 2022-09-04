import Link from "next/link"

interface Name {
    name: String
}

const BreadCrumb = ({ name }: Name) => {
    return(
        <div className="items-center justify-center md:max-w-4xl">
            <h1 className="text-lg"><Link href={"/"}><a className="hover:underline">Home</a></Link> / <Link href={"/art"}><a className="hover:underline">Art</a></Link> / <span className="text-green">{name}</span></h1>
        </div>
    )
}

export default BreadCrumb