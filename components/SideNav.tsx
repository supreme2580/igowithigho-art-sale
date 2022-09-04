import { useSession } from "next-auth/react";
import Link from "next/link"
import Profile from "./Profile";
import { useRecoilState } from "recoil"
import { modalState } from "../atoms/modalAtom"

interface Page {
    page: string;
}

const SideNav = ({ page }: Page) => {
    const { data: session } = useSession()
    const [open, setOpen] = useRecoilState(modalState)
    return (
        <nav className="fixed z-20 w-64 min-h-screen px-3 py-5 space-y-5 transition duration-200 ease-in-out transform -translate-x-full bg-white border-r border-ash sidebar md:hidden">
            <div className="flex flex-col items-center justify-center">
                    {
                        /**
                         * check if the name in a session exists to determine logged in or not
                         * if logged in display the image of the user
                         */
                    }
                    {
                        session != null ?
                            <Profile
                                image={session.user.image}
                                name={session.user.name}
                            /> : <Link href="/auth/signin">
                                    <a>
                                        <div className="px-6 py-2 text-white rounded-full bg-ash">
                                            <button>Login</button>
                                        </div>
                                    </a>
                                </Link>
                    }
            </div>
            <div className="space-y-2.5">
                <Link href="/">
                    <a className={`text-lg ${page == "home" && "font-bold"}`}>
                        <h2 className="w-full p-3 hover:bg-lightBg hover:cursor-pointer">Home</h2>
                    </a>
                </Link>
                <Link href="/art">
                    <a className={`text-lg ${page == "art" && "font-bold"}`}>
                        <h2 className="w-full p-3 hover:bg-lightBg hover:cursor-pointer">Art</h2>
                    </a>
                </Link>
                <Link href="/">
                    <a className={`text-lg ${page == "init" && "font-bold"}`}>
                        <h2 className="w-full p-3 hover:bg-lightBg hover:cursor-pointer">Initiative</h2>
                    </a>
                </Link>
                <Link href="/">
                    <a className="text-lg" onClick={() => setOpen(true)}>
                        <h2 className="w-full p-3 hover:bg-lightBg hover:cursor-pointer">Cart</h2>
                    </a>
                </Link>
            </div>
        </nav>
    )
}

export default SideNav