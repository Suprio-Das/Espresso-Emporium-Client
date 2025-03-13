import React from 'react';
import CoffeeMug from '../images/1.png';
import { IoMdEye } from "react-icons/io";
import { HiPencil } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
const CoffeeCard = () => {
    return (
        <div className='bg-[#F5F4F1] p-2'>
            <div className='flex justify-between items-center'>
                <div>
                    <img className='max-w-[150px]' src={CoffeeMug} alt="" />
                </div>
                <div className='text-[14px] mr-5'>
                    <p><span className='font-semibold'>Name: </span> Americano Coffee</p>
                    <p><span className='font-semibold'>Chef: </span> Mr. Matin Paul</p>
                    <p><span className='font-semibold'>Price: </span> 890Tk.</p>
                </div>
                <div className='flex flex-col justify-center space-y-1 mr-7'>
                    <p className='bg-[#D2B48C] text-white p-2 w-8 rounded-sm cursor-pointer'><IoMdEye /></p>
                    <p className='bg-[#3C393B] text-white p-2 w-8 rounded-sm cursor-pointer'><HiPencil /></p>
                    <p className='bg-[#EA4744] text-white p-2 w-8 rounded-sm cursor-pointer'><MdDelete /></p>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;