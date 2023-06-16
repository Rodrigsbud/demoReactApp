import React,{useState} from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
    const [click, setClick]= useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  return (
    <>
    <nav className="navbar">
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>
            Gaming <i className='fab fa-typo3' />
            </Link>
            <div className='menu-icon'onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        HOME
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        SERVICES
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/products' 
                    className='nav-links' 
                    onClick={closeMobileMenu}
                    >
                        PRODUCTS
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/sing-up' 
                    className='nav-links-mobile' 
                    onClick={closeMobileMenu}
                    >
                        SIGN UP
                    </Link>
                </li>
            </ul>
                

            
        </div>
    </nav>
    
    </>
  )
}

export default NavigationBar