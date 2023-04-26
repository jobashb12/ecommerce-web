import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Nav = () => {
    const { count } = useSelector((state) => state.cartReducer);
    return (
        <nav>
            <div className='container'>
                <div className='nav'>
                    <div className='nav-left'>
                        <Link to="/" className='link'><h1>Pak Express</h1></Link>
                    </div>
                    <div className='nav-right'>
                        <Link to="/cart" className='link'>
                            <FaCartPlus />
                            <span>{count}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
