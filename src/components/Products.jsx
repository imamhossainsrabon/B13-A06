import { use } from "react";
import Product from "./Product";


const Products = ({sendData}) => {
    const data = use(sendData)
    
    return (
        <div className='px-3 md:py-30 py-10 bg-[#F9FAFC] '>
            <div className='page-width'>
                <div>
                    <h2 className='text-[#101727] text-[48px] font-black text-center mb-[16px] [@media(max-width:767px)]:text-[36px]'>Premium Digital Tools</h2>
                    <p className='text-[#627382] text-[16px] leading-[125%] text-center max-w-[550px] mx-[auto] my-[0] mb-[16px]'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>                    
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
                    { data.map(item => <Product key={item.id} product={item} />) }
                </div>

            </div>
        </div>
    );
};

export default Products;