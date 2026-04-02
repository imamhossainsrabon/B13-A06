import { use, useState } from "react";
import Product from "./Product";
import Cart from "./Cart";


const Products = ({sendData, cart, setCart}) => {
    const data = use(sendData)
    const [activeTab, setActiveTab] = useState("product")
    
    
    return (
        <div className='px-3 md:py-30 py-10 bg-[#fff] '>
            <div className='page-width'>
                <div>
                    <h2 className='text-[#101727] text-[48px] font-black text-center mb-[16px] [@media(max-width:767px)]:text-[36px]'>Premium Digital Tools</h2>
                    <p className='text-[#627382] text-[16px] leading-[125%] text-center max-w-[550px] mx-[auto] my-[0] mb-[16px]'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>                    
                </div>
                
                    <div className="tabs mt-4 mb-10 border-[1px] border-solid border-[#F6F6F6] w-max mr-auto ml-auto rounded-[100px]  py-1 px-1 ">
                        <input type="radio" name="my_tabs_1" className='tab checked:bg-[linear-gradient(90deg,_#4F39F6,_#9514FA)] checked:text-[white] checked:font-bold checked:px-4 checked:rounded-full font-medium text-[#25065D]' aria-label="Products" defaultChecked onClick={()=> setActiveTab("product")} />
                        <input type="radio" name="my_tabs_1" className='tab  checked:bg-[linear-gradient(90deg,_#4F39F6,_#9514FA)] checked:text-[white] checked:font-bold checked:px-4 checked:rounded-full font-medium text-[#25065D]' aria-label={`Cart (${cart.length})`} onClick={()=> setActiveTab("cart")} />
                    </div>
                
                { activeTab === "product" && <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
                    { data.map(item => <Product cart={cart} setCart={setCart} key={item.id} product={item} />) }
                </div>
                }

                {activeTab === "cart" && <Cart cart={cart} setCart={setCart}/> }

            </div>
        </div>
    );
};

export default Products;