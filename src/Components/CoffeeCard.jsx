import React from 'react';
import { IoMdEye } from "react-icons/io";
import { HiPencil } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
const CoffeeCard = ({ coffee }) => {
    return (
        <div className='bg-[#F5F4F1] p-2'>
            <div className='flex justify-between items-center'>
                <div>
                    <img className='max-w-[150px] h-41' src={coffee.photo} alt="" />
                </div>
                <div className='text-[14px] lg:mr-5'>
                    <p><span className='font-semibold'>Name: </span> {coffee.name}</p>
                    <p><span className='font-semibold'>Chef: </span> {coffee.chef}</p>
                    <p><span className='font-semibold'>Price: </span> {coffee.price} Tk.</p>
                </div>
                <div className='flex flex-col justify-center space-y-1 lg:mr-7'>
                    <Link to={`coffees/${coffee._id}`}><p className='bg-[#D2B48C] text-white p-2 w-8 rounded-sm cursor-pointer'><IoMdEye /></p></Link>
                    <Link to={`updateCoffee/${coffee._id}`}><p className='bg-[#3C393B] text-white p-2 w-8 rounded-sm cursor-pointer'><HiPencil /></p></Link>
                    <p className='bg-[#EA4744] text-white p-2 w-8 rounded-sm cursor-pointer'><MdDelete /></p>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;