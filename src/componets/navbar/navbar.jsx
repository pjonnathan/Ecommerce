import './navbar.css'
import cartIcon from '../../assets/saco.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
const Navbar = () => {

    const { getTotalCartItems } = useContext(ShopContext);

    return (
        <div className="navbar">
            <h1>FASCO</h1>
            <ul className="menu-nav">
                <li className='nav'><Link style={{ color: 'black' }} to='/'>Shop</Link></li>
                <li className='nav'><Link style={{ color: 'black' }} to="/mens">Men</Link></li>
                <li className='nav'><Link style={{ color: 'black' }} to='/womens'>Women</Link></li>
                <li className='nav'><Link style={{ color: 'black' }} to='/kids'>Kids</Link></li>
                <li className='nav'>
                    <Link to='/cart'><img className='img-nav' src={cartIcon} alt="" /></Link>
                    <div className="nav-cart-cont">{getTotalCartItems()}</div>
                </li>
                <li className='signup'><Link style={{ color: 'white' }} to='/LoginSignup'>Login</Link></li>
            </ul>
        </div>
    )
}

export default Navbar