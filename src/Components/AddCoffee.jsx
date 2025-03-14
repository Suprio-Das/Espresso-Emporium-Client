import React from 'react';
import { HiMiniArrowLeftStartOnRectangle } from "react-icons/hi2";

const AddCoffee = () => {
    return (
        <div className='w-[70%] mx-auto'>
            <h1 className='title text-2xl flex items-center my-3'>
                <HiMiniArrowLeftStartOnRectangle /> Back to home
            </h1>
            <div className='bg-[#F4F3F0] p-11'>
                <h1 className='text-3xl title text-center'>Add New Coffee</h1>
                <p className='text-[14px]'>Enhance your coffee collection by adding a new blend! Provide details such as name, origin, flavor profile, and price. This form ensures each coffee entry is well-documented, making it easier to manage and showcase your premium selections.</p>
            </div>
        </div>
    );
};

export default AddCoffee;