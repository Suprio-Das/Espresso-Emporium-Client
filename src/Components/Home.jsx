import React from 'react';
import './Styles.css';

const Home = () => {
    return (
        <div>
            {/* Hero Banner */}
            <div className='hero h-[550px] lg:flex justify-center items-center'>
                <div className='lg:w-2/5'></div>
                <div className='lg:w-2/5 p-2 space-y-2'>
                    <h1 className='text-4xl header-title'>Would you like a Cup of Delicious Coffee?</h1>
                    <p className='text-white text-xs'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;