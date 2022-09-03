import { getProviders, signIn as SignIntoProvider } from "next-auth/react"
import Navbar from "../../components/Navbar"

const signIn = ({ providers }) => {
    return(
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen">
                {
                    //loop through our list of login providers
                }
                {Object.values(providers).map((provider) => (
                    <div key={provider.name}>
                        <button className="px-6 py-2 text-white rounded-full bg-ash" onClick={() => SignIntoProvider(provider.id, { callbackUrl: "/" })}>
                            Sign in with {provider.name}
                        </button>
                    </div>
                ))}
            </div>
        </>
    )
}

//get our login providers from next-auth on the server
export async function getServerSideProps() {
    const providers = await getProviders()
    return {
        props: {
            providers
        }
    }
}

export default signIn