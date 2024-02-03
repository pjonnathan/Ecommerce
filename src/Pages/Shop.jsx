import Hero from "../componets/Hero/Hero"
import NewCollections from "../componets/NewCollections/NewCollections"
import NewsLetter from "../componets/NewsLetter/NewsLetter"
import Oferta from "../componets/Oferta/Oferta"
import Popular from "../componets/Popular/Popular"

const Shop = () => {
    return (
        <div>
            <Hero />
            <Popular />
            <Oferta />
            <NewCollections />
            <NewsLetter />
        </div>
    )
}

export default Shop