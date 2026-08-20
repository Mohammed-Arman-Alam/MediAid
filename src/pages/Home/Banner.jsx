import React from 'react';
import bannerImg from '../../assets/images/banner.png'

const Banner = () => {
    return (
        <div className='bg-[#F8FAFC]'>
            <div className='max-h-150 py-14 flex mx-auto justify-between w-11/12'>
                <div className='max-w-6/12'>
                    <h2 className='font-bold font-inter text-[50px] text-[#0F172A] w-11/12 py-4'>Bringing essential healthcare to every community</h2>
                    <h5 className='font-medium font-inter text-[19px] text-[#64748B] w-full p-0'>MediCamp Connect makes it simple to find, organize, and join medical camps near you. We connect communities with the care they need, when they need it.</h5>
                </div>
                <div className='max-w-117.25 flex justify-end'>
                    <img className='w-full h-auto object-contain' src={bannerImg} alt="" />
                </div>
            </div>
        </div>
        
    );
};

export default Banner;