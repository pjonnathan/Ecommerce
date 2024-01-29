import './Hero.css'
import Homenacadeira from '../../assets/cadeira.png';
import tijolo from '../../assets/tijolo.png';
import meninas from '../../assets/image.png';
import mulheres from '../../assets/mulheres.png'
import ultimate from '../../assets/ULTIMATE.png'
import sale from '../../assets/sale.png'

const Hero = () => {
    return (
        <div className="hero">
            <div className="container-left"><img src={tijolo} alt="" /></div>
            <div className="container-center">
                <div className='top'><img src={mulheres} alt="" /></div>
                <div className='center'>
                    <img src={ultimate} alt="ultimate" /><br />
                    <img src={sale} alt="sale" />
                    <button>SHOP NOW</button>
                </div>
                <div className="bottom"><img src={meninas} alt="" /></div>
            </div>
            <div className="container-right"><img src={Homenacadeira} alt="" /></div>
        </div>
    )
}

export default Hero