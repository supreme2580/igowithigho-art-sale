import { StarIcon } from "@heroicons/react/solid"

interface Stars {
    stars: String
}

const Rating = ({stars }: Stars) => {
    return(
        <div>
            <div className="flex space-x-2">
                {
                    /**
                     * if stars (i.e the number of stars) is greater than the
                     * number of stars (i.e destructured props) the StarIcon should be
                     * golden else the rest should be inactive
                     * I use string for this because strings are easy to manipulate
                     */
                }
                <StarIcon className={`w-6 h-6 ${Number(stars) >= Number("1") ? "text-gold" : "text-inactive"}`} />
                <StarIcon className={`w-6 h-6 ${Number(stars) >= Number("2") ? "text-gold" : "text-inactive"}`} />
                <StarIcon className={`w-6 h-6 ${Number(stars) >= Number("3") ? "text-gold" : "text-inactive"}`} />
                <StarIcon className={`w-6 h-6 ${Number(stars) >= Number("4") ? "text-gold" : "text-inactive"}`} />
                <StarIcon className={`w-6 h-6 ${Number(stars) >= Number("5") ? "text-gold" : "text-inactive"}`} />
            </div>
        </div>
    )
}

export default Rating