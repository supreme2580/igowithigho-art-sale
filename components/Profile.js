import { signOut } from "next-auth/react"

const Profile = ({ image, name }) => {

    {
        //collect session data
    }
    
    return (
        <div>
            <div className="flex flex-col space-y-2.5 md:space-y-0 md:flex-row items-center space-x-2.5">
                {
                    /**
                     * We do not use <Image /> because we do know
                     * exactly how the image url will look like and
                     * nextjs do not like suprises
                     */
                }
                <img src={image} className="w-16 h-16 p-0.5 border-2 rounded-full border-lightBg" />
                <div className="text-center">
                    <h1 className="font-bold">{name}</h1>
                    <h1 onClick={signOut} className="font-bold hover:cursor-pointer">Sign Out</h1>
                </div>
            </div>
        </div>
    )
}

export default Profile