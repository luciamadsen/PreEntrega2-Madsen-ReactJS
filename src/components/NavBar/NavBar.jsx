import React from 'react';
import  "./NavBar.css";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = () => {
  return <nav>
        <ul>
            <li>Home</li>
            <li>Equipos</li>
            <li>Sponsor</li>
            <li>Noticias</li>
            <li>Contacto</li>
            <li><ShoppingCartIcon /></li>

        </ul>

    </nav>
}

export default NavBar