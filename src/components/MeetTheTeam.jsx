import user from  '../assets/user.png'

const MeetTheTeam = () => {
    return (
        <div className="md:py-30 py-15 px-3 bg-[#f2f2f2]" >
            <div className="max-w-[1200px] mx-auto">
                <h2 className='mb-4 text-[#101727] text-[32px] md:text-[48px] leading-[120%] font-extrabold text-center'>Get Started in 3 Steps</h2>
                <p className='mb-10 text-[#627382] md:text-[16px] text-[12px] leading-[140%] text-center '>Start using premium digital tools in minutes, not hours.</p>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8' >
                    <div className='bg-white p-6  rounded-2xl flex justify-between items-center gap-4 flex-col text-center'>
                        <div className='flex justify-end w-full'><p className='justify-items-end bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold px-3 py-2 rounded-full'>01</p></div>
                        

                        <img className='bg-linear-to-r from-[#4F39F61a] to-[#9514FA1a] bg-base-200-10 p-5 rounded-full'  src={user} />
                        
                        <h3 className='text-[#101727] font-bold text-2xl text-center'>Create Account</h3>
                        <p className='text-[#627382] text-[16px] text-cente pb-16  '>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    <div className='bg-white p-6  rounded-2xl flex justify-between items-center gap-4 flex-col text-center'>
                        <div className='flex justify-end w-full'><p className='justify-items-end bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold px-3 py-2 rounded-full'>01</p></div>
                        

                        <img className='bg-linear-to-r from-[#4F39F61a] to-[#9514FA1a] bg-base-200-10 p-5 rounded-full'  src={user} />
                        
                        <h3 className='text-[#101727] font-bold text-2xl text-center'>Create Account</h3>
                        <p className='text-[#627382] text-[16px] text-cente pb-16  '>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    <div className='bg-white p-6  rounded-2xl flex justify-between items-center gap-4 flex-col text-center'>
                        <div className='flex justify-end w-full'><p className='justify-items-end bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold px-3 py-2 rounded-full'>01</p></div>
                        

                        <img className='bg-linear-to-r from-[#4F39F61a] to-[#9514FA1a] bg-base-200-10 p-5 rounded-full'  src={user} />
                        
                        <h3 className='text-[#101727] font-bold text-2xl text-center'>Create Account</h3>
                        <p className='text-[#627382] text-[16px] text-cente pb-16  '>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default MeetTheTeam;