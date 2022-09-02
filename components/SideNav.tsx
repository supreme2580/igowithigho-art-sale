import Link from "next/link"

interface Page {
    page: string;
}

const SideNav = ({ page }: Page) => {
    return (
        <nav className="fixed z-20 w-64 min-h-screen px-3 py-5 space-y-5 transition duration-200 ease-in-out transform -translate-x-full bg-white border-r border-ash sidebar md:hidden">
            <div>
                <Link href="/">
                    <a>
                        <div className="px-6 py-2 text-center text-white rounded-full bg-ash">
                            <button>Login</button>
                        </div>
                    </a>
                </Link>
            </div>
            <div className="space-y-2.5">
                <div className="w-full p-3 hover:bg-lightBg hover:cursor-pointer">
                    <h3 className={`text-lg ${page == "home" && "font-bold"}`}>
                        <Link href="/"><a>Home</a></Link>
                    </h3>
                </div>
                <div className="w-full p-3 hover:bg-lightBg hover:cursor-pointer">
                    <h3 className={`text-lg ${page == "art" && "font-bold"}`}>
                        <Link href="/art"><a>Art</a></Link>
                    </h3>
                </div>
                <div className="w-full p-3 hover:bg-lightBg hover:cursor-pointer">
                    <h3 className={`text-lg ${page == "init" && "font-bold"}`}>
                        <Link href="/"><a>Initiative</a></Link>
                    </h3>
                </div>
            </div>
        </nav>
    )
}

export default SideNav