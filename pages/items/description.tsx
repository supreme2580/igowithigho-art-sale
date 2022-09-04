import ItemDescription from "../../components/ItemDescription"
import Navbar from "../../components/Navbar"
import Recommendation from "../../components/Recommendation"
import ItemNewsletter from "../../components/ItemNewsletter"
import ItemFooter from "../../components/ItemFooter"

const Description = () => {
    return(
        <div>
            <Navbar page="art" />
            {
                //description of item
            }
            <main className="absolute inset-x-0 top-0 h-full mt-24 space-y-12">
                <ItemDescription />
                {
                        //recommendations
                }
                <Recommendation />
                <ItemNewsletter />
                <ItemFooter />
            </main>
        </div>
    )
}

export default Description