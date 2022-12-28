import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';
import PhoneMenu from './PhoneMenu/PhoneMenu';

const Navbar = () => {
    const {theme,user,LogOut} = useContext(AuthContext);
    // console.log(user.uid)
    return (
        <div>
            <nav className={`flex justify-between items-center md:px-80 py-3 transition-all shadow-lg bg-skin-${theme.MainBg}`}>
                <div>
                <Link className='capitalize text-xl font-medium hover:shadow-lg rounded-md p-2 transition-all text-shadow-lg' to='/'>screen shot of life</Link>
                </div>

                <div className='hidden md:flex gap-3'>
                <Link className='hover:shadow-lg rounded-md p-2 transition-all' to='/'>Home</Link>
                <Link className='hover:shadow-lg rounded-md p-2 transition-all' to='/memories'>Memores</Link>
                <Link className='hover:shadow-lg rounded-md p-2 transition-all'>Plus<sup>+</sup></Link>
                </div>
                <div className='md:hidden relative left-0 top-0'>
                <PhoneMenu/>
                </div>
                <div className='hidden'>
                    {
                        user?.uid?<button onClick={LogOut} className='hover:shadow-lg rounded-md p-2 transition-all'>Log out</button>:
                        <Link className='hover:shadow-lg rounded-md p-2 transition-all' to='/login'>Log in</Link>
                        
                    }
                </div>
            </nav>
        </div>
    );
};

export default Navbar;