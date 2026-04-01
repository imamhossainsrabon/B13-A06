

const Performance = () => {
    return (
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-15 px-4">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row  justify-between items-center gap-10 md:gap-0">
                <div className="flex flex-col gap-3 justify-between items-center">
                    <h2 className="font-extrabold text-[60px]">50K+</h2>
                    <p className="font-medium text-[20px]">Active Users</p>
                </div>
                <hr className="bg-white opacity-40 border-1 h-[1px] w-[200px] md:w-[100px] md:rotate-90"/>
                <div className="flex flex-col gap-3 justify-between items-center">
                    <h2 className="font-extrabold text-[60px]">200+</h2>
                    <p className="font-medium text-[20px]">Premium Tools</p>
                </div>
                <hr className="bg-white opacity-40 border-1 h-[1px] w-[200px] md:w-[100px] md:rotate-90" />
                <div className="flex flex-col gap-3 justify-between items-center">
                    <h2 className="font-extrabold text-[60px]">4.9</h2>
                    <p className="font-medium text-[20px]">Rating</p>
                </div>                
            </div>
        </div>
    );
};

export default Performance;