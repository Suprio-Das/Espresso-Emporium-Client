import React from 'react';
import './Styles.css';
import Cup from '../images/icons/cup_icon.png';
import Badge from '../images/icons/badge.png';
import Grains from '../images/icons/grains.png';
import Coffee from '../images/icons/coffee.png';

const Home = () => {
    return (
        <div>
            {/* Hero Banner */}
            <div className='hero h-[550px] lg:flex justify-center items-center'>
                <div className='lg:w-2/5'></div>
                <div className='lg:w-2/5 p-2 space-y-2'>
                    <h1 className='text-4xl title text-white'>Would you like a Cup of Delicious Coffee?</h1>
                    <p className='text-white text-xs'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                </div>
            </div>
            <div className='bg-[#ECEAE3]'>
                <div className='w-[70%] mx-auto p-5'>
                    <div className='grid lg:grid-cols-4 grid-cols-1 gap-6'>
                        {/* Feature One */}
                        <div className='space-y-1'>
                            <div>
                                <img src={Cup} alt="" className='w-11' />
                            </div>
                            <h2 className='title text-[#331A15] text-xl'>Awesome Aroma</h2>
                            <p className='text-xs text-[#1B1A1A]'>You will definitely be a fan of the design & aroma of your coffee</p>
                        </div>
                        {/* Feature Two */}
                        <div className='space-y-1'>
                            <div>
                                <img src={Badge} alt="" className='w-11' />
                            </div>
                            <h2 className='title text-[#331A15] text-xl'>High Quality</h2>
                            <p className='text-xs text-[#1B1A1A]'>We served the coffee to you maintaining the best quality</p>
                        </div>
                        {/* Feature Three */}
                        <div className='space-y-1'>
                            <div>
                                <img src={Grains} alt="" className='w-11' />
                            </div>
                            <h2 className='title text-[#331A15] text-xl'>Pure Grades</h2>
                            <p className='text-xs text-[#1B1A1A]'>The coffee is made of the green coffee beans which you will love</p>
                        </div>
                        {/* Feature Four */}
                        <div className='space-y-1'>
                            <div>
                                <img src={Coffee} alt="" className='w-11' />
                            </div>
                            <h2 className='title text-[#331A15] text-xl'>Proper Roasting</h2>
                            <p className='text-xs text-[#1B1A1A]'>Your coffee is brewed by first roasting the green coffee beans</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;