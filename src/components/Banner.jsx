import React from 'react';
import available from '../assets/available.png'
import play from '../assets/Play.png'
import banner from '../assets/banner.png'

const Banner = () => {
    return (
        <div className='max-w-[1200px] mx-auto py-15 flex flex-col md:flex-row justify-center items-center gap-16'>
            <div className='max-w-[640px] space-y-4'>
                <div className='bg-[#E1E7FF] rounded-full flex justify-center items-center w-max py-2 px-4 mx-auto md:mx-0'>
                    <img src={available} />
                    <p className='ml-[5px] bg-clip-text text-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-medium'>New: AI-Powered Tools Available</p>
                </div>
                <h2 className='text-[#101727] md:text-[72px] text-[55px]  font-extrabold tracking-normal leading-[84px] text-center md:text-left '>Supercharge Your Digital Workflow</h2>
                <p className='banner-desc'>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products</p>
                <div className='mt-4 banner-button'>
                    <button className='banner-button-1'>Explore Products</button>
                    <button className='banner-button-2'><div><img src={play}/></div>Watch Demo</button>
                </div>
            </div>
            <div>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;