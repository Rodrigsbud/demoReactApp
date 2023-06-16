import React,{useState} from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
    const [click, setClick]= useState(false);

    const handleClick = () => setClick(!click);
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

                </li>
            </ul>
                

            
        </div>
    </nav>
    
    </>
  )
}

export default NavigationBar