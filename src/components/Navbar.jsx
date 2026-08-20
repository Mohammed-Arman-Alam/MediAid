import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const navlinks =<>
                        <NavLink to='/' className={({isActive})=>
                            isActive?'text-[#00008B] font-medium border-b border-[#00008B] ':'hover:text-[#00008B] hover:font-semibold'
                        }>
                            Home
                        </NavLink>
                        <NavLink to='/allCamps' className={({isActive})=>
                            isActive?'text-[#00008B] font-medium border-b border-[#00008B] ':'hover:text-[#00008B] hover:font-semibold'
                        }>
                            Camps
                        </NavLink>
                        <NavLink to='/about' className={({isActive})=>
                            isActive?'text-[#00008B] font-medium border-b border-[#00008B] ':'hover:text-[#00008B] hover:font-semibold'
                        }>
                            About
                        </NavLink>
                    </>
    return (
        <div className='bg-[#ffffff] border border-[#E2E8F0] border-b-2'>
            <div className='w-11/12 mx-auto h-18  flex justify-between items-center'>
                <div><h1 className='text-[28px] text-[#00008B] font-bold font-montserrat'>MediAid</h1></div>
                <div className='text-[16px] text-[#475569] flex justify-between w-3/12 font-poppins'> 
                    {navlinks}
                </div>
                <div className='flex gap-3 w-2/12 justify-end font-poppins'>
                    <Link to='/register'>
                        <button className='text-[17px] text-[#ffffff] rounded-md font-semibold bg-[#16A34A] p-1 px-2 border border-[#16A34A] hover:scale-105 hover:bg-[#ffffff] hover:text-[#16A34A]'>Join Us</button>
                    </Link>
                    <Link to='login'>
                        <button className='text-[17px] text-[#ffffff] rounded-md font-semibold bg-[#2563EB] p-1 px-2 border border-[#2563eb] hover:scale-105 hover:bg-[#ffffff] hover:text-[#2563EB]'>Login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;