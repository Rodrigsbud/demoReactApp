import React,{useState} from 'react'
import { link } from 'react-router-dom';

function NavigationBar() {
  return (
    <>
    <nav className="navbar">
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo">
                TRVL <i className='fab fa-typo3' />

            </Link>
        </div>
    </nav>
    
    </>
  )
}

export default NavigationBar