import './Header_com.css'
import { Link } from 'react-router-dom';
function Header_component(){
    return(
        <div>
        <div className="header">
            <Link to="/">Home</Link>
             <Link to="/about">About us</Link>
             <Link to="/contact">Contact us</Link>
            </div>
        </div>
    )   
}
export default Header_component