import React from 'react';
import cardImg from '../assets/images/cardimg.png';
import { Link } from 'react-router';
import { SlCalender } from "react-icons/sl";
import { FaLocationDot, FaUserDoctor} from "react-icons/fa6";
import { MdArrowRightAlt } from "react-icons/md";

const CampCard = () => {
    return (
        <div className='max-h-112.5 rounded-md bg-[#F8FAFC30] border border-[#2563EB30] hover:scale-105'>
            <img className='max-h-50 rounded-t-md w-full' src={cardImg} alt="camp banner" />
            <h3 className='font-inter font-semibold text-[#0F172A] text-2xl  ml-3 mt-1'>DNA Health Hackathon</h3>
            <div className='flex gap-1 items-center ml-3'>
                <SlCalender size={14}/>
                <p className='text-[#334155] text-[15px] font-inter font-light'> 25 Aug 2026 . 10:00 AM</p>
            </div>
            <div className='flex gap-1 items-center ml-3'>
                <FaLocationDot size={14}/>
                <p className='text-[#64748B] text-[15px] font-inter font-light'> Chattogram Medical Collage</p>
            </div>
            <div className='flex gap-1 items-center ml-3 mt-3'>
                <FaUserDoctor size={15}/>
                <p className='text-[#334155] text-md font-inter font-normal'>Dr. Rahman</p>
            </div>
            <p className='ml-8 text-[#64748B] text-[15px] font-inconsolata font-normal'>Cardiologist</p>
            <hr className='w-11/12 mx-auto text-[#00000060] my-4'/>
            <div className='flex justify-between w-11/12 mx-auto font-inter text-[#0D9488] font-normal text-'>
                <p>32 participant</p>
                <p>Free</p>
            </div>
            <Link className='flex items-center text-md text-[#2563EB80] hover:text-[#2563EB] font-normal font-poppins my-1 ml-3'>Learn More & Join<MdArrowRightAlt /></Link>
        </div>
    );
};

export default CampCard;