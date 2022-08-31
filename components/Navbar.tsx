import {
    MenuIcon
} from "@heroicons/react/solid"
import {
    ShoppingCartIcon
} from "@heroicons/react/outline"
import Image from "next/image"
import Link from "next/link"
import SideNav from "./SideNav"

const Navbar = () => {
    const toggleSideBar = () => {
        document.querySelector(".sidebar")?.classList.toggle("-translate-x-full")
    }
    return (
        <nav className="relative flex w-full">
            {
                //sidebar component for mobile screens
            }
            <SideNav />
            <div className="bg-white flex items-center justify-between px-2.5 sm:px-16 w-full h-32 absolute left-0 right-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <div><Image src="/logo.png" width={75} height={75} /></div>
                    {
                        //hide the menu icon when on medium screen and above
                    }
                    <button className="md:hidden" onClick={toggleSideBar}><MenuIcon className="w-8 h-8" /></button>
                </div>
                {
                    //hide the following menu items when on medium screen and above
                }
                <div className="md:flex items-center space-x-8 hidden">
                    <h3 className="text-lg font-bold"><Link href="/"><a>Home</a></Link></h3>
                    <h3 className="text-lg"><Link href="/"><a>Art</a></Link></h3>
                    <h3 className="text-lg"><Link href="/"><a>Initiative</a></Link></h3>
                </div>
                <div className="md:flex items-center justify-between space-x-4 hidden">
                    <div><Link href="/"><a><ShoppingCartIcon className="w-6 h-6" /></a></Link></div>
                    <Link href="/"><a><div className="bg-ash text-white py-2 px-6 rounded-full"><button>Login</button></div></a></Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar