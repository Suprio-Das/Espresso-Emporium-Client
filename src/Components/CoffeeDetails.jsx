import React from 'react';
import { HiMiniArrowLeftStartOnRectangle } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import CoffeeMug from '../images/1.png';

const CoffeeDetails = () => {
    return (
        <div className='w-[70%] mx-auto my-16'>
            <Link className='title text-2xl flex items-center my-3' to='/'>
                <HiMiniArrowLeftStartOnRectangle /> Back to home
            </Link>
            <div className='bg-[#F4F3F0] p-11'>
                <div className='lg:flex items-center'>
                    <div className='w-full'>
                        <img src={CoffeeMug} className='lg:w-[350px]' alt="" />
                    </div>
                    <div className='w-full'>
                        <h1 className='title text-2xl mb-3 text-[#331A15]'>Niceties</h1>
                        <p className='text-[14px] mt-1'><span className='font-semibold'>Name: </span> Americano Coffee</p>
                        <p className='text-[14px] mt-1'><span className='font-semibold'>Chef: </span> Mr. Matin Paul</p>
                        <p className='text-[14px] mt-1'><span className='font-semibold'>Supplier: </span> Cappu Authorizer</p>
                        <p className='text-[14px] mt-1'><span className='font-semibold'>Category: </span> Americano</p>
                        <p className='text-[14px] mt-1'><span className='font-semibold'>Details: </span> Espresso with Hot WATER.</p>
                        <p className='text-[14px] mt-1'><span className='font-semibold'>Price: </span> 890BDT</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;