import React from 'react';

export const NavBar = () => {
    return (
        <div className="container">
           <div className="nav">
                <div className="nav__brand">
                    <a className="nav__link" href="#">Mi Marca</a>
                </div>
                <ul className='nav__list'>
                    <li>
                        <a className="nav__link" href="#">Catergoria 1</a>
                    </li>
                    <li>
                        <a className="nav__link" href="#">Categoria 2</a>
                    </li>
                    <li>
                        <a className="nav__link" href="#">Carrito</a>
                    </li>
                </ul>


            </div>
        </div>
    );
}

export default NavBar;