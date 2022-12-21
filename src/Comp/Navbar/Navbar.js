import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className='flex justify-between items-center px-80 py-3 transition-all shadow-lg'>
                <div>
                <Link className='capitalize text-xl font-medium hover:shadow-lg rounded-md p-2 transition-all' to='/'>screen shot of life</Link>
                </div>

                <div className='flex gap-3'>
                <Link className='hover:shadow-lg rounded-md p-2 transition-all' to='/'>Home</Link>
                <Link className='hover:shadow-lg rounded-md p-2 transition-all'>Memores</Link>
                <Link className='hover:shadow-lg rounded-md p-2 transition-all'>Plus<sup>+</sup></Link>
                </div>

                <div>
                    <Link className='hover:shadow-lg rounded-md p-2 transition-all'>Log in</Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;