import Navbar from "../../components/Navbar"
import Head from "next/head"
import { getProviders, signIn as SignIntoProvider } from "next-auth/react"

const SignIn = ({ providers }) => {
    return(
        <div>
            <Head>
            <title>Login to igowithIGHO Art Sale</title>
            <meta name="description" content="igowithIGHO Art Sale" />
            <link rel="icon" href="/logo.png" />
            </Head>
            <Navbar page="home" />
            <div className="flex items-center justify-center min-h-screen">
                {Object.values(providers).map((provider) => (
                    <div key={provider.name}>
                        <button className="p-3 text-white bg-red-500 rounded-lg" onClick={() => SignIntoProvider(provider.id, { callbackUrl: "/" })}>
                            Sign in with {provider.name}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    const providers = await getProviders()
    return {
        props: {
            providers
        }
    }
}

export default SignIn