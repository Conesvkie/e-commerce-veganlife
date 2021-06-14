import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.ico';
import styled from 'styled-components';
import {ButtonContainer} from './Button';




export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className='navbar navbar-expand-sm navbar-dark justify-content-between px-sm-5'>
               <Link to='/aboutus'>
                <img src={logo} alt="store" className='navbar-brand' height='50rem'/>
               </Link>
               <ul className='navbar-nav align-items-center'>
                    <li className='nav-item ml-5'>
                        <Link to='/aboutus' className='nav-link'>
                            About Us
                        </Link>
                        <Link to='/' className='nav-link'>
                            Products
                        </Link>
                    </li>
               </ul>
               <Link to='/cart' className='ml-auto'>
                   <ButtonContainer>
                   <span className='me-2'>
                       <i className='fas fa-cart-plus'/> My Cart
                   </span>
                       
                   </ButtonContainer>
               </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background:var( --lightBackgroundColor);
.nav-link{
    color:var(--darkGreen) !important;
    font-size: 1.2rem;
    text-transform: capitalize;
    display: inline;
    padding: 2rem;
    
}
`

