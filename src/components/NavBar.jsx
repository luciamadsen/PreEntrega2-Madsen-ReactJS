import CartWidget from "./CartWidget";
import { NavLink } from 'react-router-dom'

const NavBar = () => {

    return (
        <nav className="nav">
            <NavLink to='/logo.png'><img src="/logo.png" alt="" className="nav-logo" /></NavLink>
            <ul className="nav-menu">
                <NavLink className='nav-link' to='/'>Ver todo</NavLink>
                <NavLink className='nav-link' to='/category/Equipos'>Equipos</NavLink>
                <NavLink className='nav-link' to='/category/Indumentaria'>Indumentaria</NavLink>
                <NavLink className='nav-link' to='/category/Accesorios'>Accesorios</NavLink>
            </ul>
            <NavLink className='nav-link' to='/cart'><CartWidget /></NavLink>
        </nav>
    )
}

export default NavBar;