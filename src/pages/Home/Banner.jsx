import React from 'react';
import bannerImg from '../../assets/images/banner.png'
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='bg-[#F8FAFC]'>
            <div className='max-h-150 py-14 flex mx-auto justify-between w-11/12'>
                <div className='max-w-6/12'>
                    <h2 className='font-bold font-inter text-[50px] text-[#0F172A] w-11/12 py-4'>Bringing essential healthcare to every community</h2>
                    <h5 className='font-medium font-inter text-[19px] text-[#64748B] w-full p-0'>MediCamp Connect makes it simple to find, organize, and join medical camps near you. We connect communities with the care they need, when they need it.</h5>
                    <div className='py-5 flex gap-4'>
                        <Link to='/allCamps'>
                            <button className='text-[20px] text-[#ffffff] rounded-md font-semibold bg-[#2563EB] p-1 px-3 border border-[#2563EB] hover:scale-105 hover:bg-[#ffffff] hover:text-[#2563EB]'>Explore Camps</button>
                        </Link>
                        <Link to='/register'>
                            <button className='text-[20px] text-[#ffffff] rounded-md font-semibold bg-[#16A34A] p-1 px-2 border border-[#16A34A] hover:scale-105 hover:bg-[#ffffff] hover:text-[#16A34A]'>Join Us</button>
                        </Link>
                    </div>
                </div>
                <div className='max-w-117.25 flex justify-end'>
                    <img className='w-full h-auto object-contain' src={bannerImg} alt="" />
                </div>
            </div>
        </div>
        
    );
};

export default Banner;