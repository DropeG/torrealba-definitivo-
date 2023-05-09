import React, { useEffect } from 'react';
import './navbar.css';

function Navbar() {
  useEffect(() => {
    const navMenu = document.getElementById('nav-menu');
    const toggleMenu = document.getElementById('toggle-menu');
    const closeMenu = document.getElementById('close-menu');

    toggleMenu.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });

    closeMenu.addEventListener('click', () => {
      navMenu.classList.remove('show');
    });
  }, []);

  return (
    <header>
      <div className='logo'>
            <h1 className='name'>TOKO-IR</h1>
            
      </div>   
      
      <nav className="nav" id='nav-menu'>
        <ion-icon name="close-outline" class='header_close' id='close-menu'></ion-icon>
        <ul className="nav_list">
            <li className="nav_item"><a href="" className="nav_link">Home</a></li>
            <li className="nav_item"><a href="" className="nav_link">Servicio</a></li>
            <li className="nav_item"><a href="" className="nav_link">Nosotros</a></li>
            <li className="nav_item"><a href="" className="nav_link">Contacto</a></li>
        </ul>
      </nav>

      <ion-icon name='menu-outline' class='header_toggle' id='toggle-menu'></ion-icon>


    </header>
  );
}

export default Navbar;