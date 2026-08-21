import React from 'react';
import CampCard from '../../components/CampCard';
import { Link } from 'react-router';

const PopularCamps = () => {
    return (
        <div className='bg-[#ffffff]'>
            <div className='w-11/12 mx-auto py-10'>
                <h1 className='font-inter font-bold text-[#0F172A] text-[40px] text-center h-13'>Popular Medical Camps</h1>
                <h6 className='font-poppins font-medium text-[#334155] text-[17px] text-center'>The camps with highest participant count </h6>
                <div className='grid grid-cols-3 md:gap-6 lg:gap-9 py-8'>
                    <CampCard></CampCard>
                    <CampCard></CampCard>
                    <CampCard></CampCard>
                    <CampCard></CampCard>
                    <CampCard></CampCard>
                    <CampCard></CampCard>
                </div>
                <div className='flex justify-center'>
                    <Link to='allCamps'>
                        <button className='text-[#2563EB] border border-[#2563EB] font-inter text-[27px] font-medium rounded-md py-1 px-2 hover:bg-[#2563EB] hover:text-[#ffffff] hover:scale-105'>View All Camps</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PopularCamps;