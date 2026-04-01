import React from "react";
import logo from "../assets/DigiTools.png"
import cartIcon from "../assets/cart-icon.png"


const Navbar = () => {
  return (
    <section className="px-2 py-6 border-b border-[#f2f2f2] ">
        <div className="flex justify-between items-center max-w-[1200px] mx-auto  ">
            <div><img className="w-[180px] h-[40px] md:w-[130px] md:h-[30px] " src={logo} alt="" /></div>
            <ul className="hidden md:flex gap-8 font-semibold">
                <li> <a href="#">Products</a></li>
                <li> <a href="#">Features</a></li>
                <li> <a href="#">Pricing</a></li>
                <li> <a href="#">Testimonials</a></li>
                <li> <a href="#">FAQ</a></li>
            </ul>
            <div className="flex items-center justify-center gap-4">
                <div><img className="cursor-pointer" src={cartIcon} alt="" /></div>
                <h2 className="font-semibold hidden md:block">Login</h2>
                <button className="py-3 px-4 rounded-full font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white active:scale-99">Get Started</button>
            </div>
        </div>
    </section>
  );
};

export default Navbar;
