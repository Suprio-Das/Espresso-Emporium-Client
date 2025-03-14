import React from 'react';
import { HiMiniArrowLeftStartOnRectangle } from "react-icons/hi2";

const AddCoffee = () => {
    return (
        <div className='w-[70%] mx-auto my-11'>
            <h1 className='title text-2xl flex items-center my-3'>
                <HiMiniArrowLeftStartOnRectangle /> Back to home
            </h1>
            <div className='bg-[#F4F3F0] p-11'>
                <div className='p-8'>
                    <h1 className='text-3xl title text-center'>Add New Coffee</h1>
                    <p className='text-[12px] text-center'>Enhance your coffee collection by adding a new blend! Provide details such as name, origin, flavor, and price. This form ensures each coffee entry is well-documented, making it easier to manage and showcase your premium selections.</p>
                </div>
                <form>
                    {/* Coffe & Chef name input field added */}
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                        <div>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Name</legend>
                                <input type="text" className="input w-full" placeholder="Enter coffee name" />
                            </fieldset>
                        </div>
                        <div>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Chef</legend>
                                <input type="text" className="input w-full" placeholder="Enter chef name" />
                            </fieldset>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;