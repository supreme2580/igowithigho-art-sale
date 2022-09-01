import Link from "next/link"

const SideNav = () => {
    return (
        <nav className="min-h-screen fixed w-64 border-r border-ash z-20
            bg-white transform -translate-x-full transition duration-200 ease-in-out sidebar md:hidden
            space-y-5 px-3 py-5">
            <div>
                <Link href="/">
                    <a>
                        <div className="bg-ash text-white py-2 px-6 rounded-full text-center">
                            <button>Login</button>
                        </div>
                    </a>
                </Link>
            </div>
            <div className="space-y-2.5">
                <div className="hover:bg-lightBg w-full hover:cursor-pointer p-3"><h3 className="text-lg font-bold"><Link href="/"><a>Home</a></Link></h3></div>
                <div className="hover:bg-lightBg w-full hover:cursor-pointer p-3"><h3 className="text-lg"><Link href="/"><a>Art</a></Link></h3></div>
                <div className="hover:bg-lightBg w-full hover:cursor-pointer p-3"><h3 className="text-lg"><Link href="/"><a>Initiative</a></Link></h3></div>
            </div>
        </nav>
    )
}

export default SideNav