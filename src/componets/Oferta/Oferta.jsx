import './Oferta.css'
import exclusive_img from '../Assets/exclusive_image.png'

const Oferta = () => {
    return (
        <div className="oferta">
            <div className="oferta-left">
                <h1>Exclusive</h1>
                <h1>Ofertas para você</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check Now</button>
            </div>
            <div className="oferta-right">
                <img src={exclusive_img} alt="" />
            </div>
        </div>
    )
}

export default Oferta