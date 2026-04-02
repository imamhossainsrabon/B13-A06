import { toast } from "react-toastify";

const Product = ({ product, cart, setCart }) => {
  
  function handleBuyButton(){
    const isFound = cart.find(item=> item.id === product.id)
    if(isFound){
      toast.error('Item already Added to Cart')
      return
    }
    setCart([...cart, product])
    toast.success('Product Added to cart')
    console.log(cart)
  }
  return (
    <div  className="border-[2px] border-solid border-[#F2F2F2] rounded-[16px] p-[24px] space-y-6 relative">
      <div>
        <img className="w-[60px]" src={product.icon} />
      </div>
      <h2 className="text-[#101727] font-bold text-[24px] leading-[125%]">
        {product.name}
      </h2>
      <p className="text-slate-500 text-base leading-[140%]">
        {product.description}
      </p>
      <h2 className="text-[#627382]">
        <span className="text-2xl font-bold text-gray-900 leading-[130%]">
          ${product.price}
        </span>
        /{product.period === "monthly" ? "mo" : "One-Time"}
      </h2>
      <ul>
        {product.features.map((li, index) => (
          <li key={index} className="text-slate-500 font-medium text-base leading-[125%] mb-2">
            <i className="fa-solid fa-check text-[#30B868]"></i> {li}
          </li>
        ))}
      </ul>
      <button onClick={handleBuyButton} className=" w-full p-[15px] bg-[linear-gradient(to_right,_#4F39F6,_#9514FA)] font-bold text-[#fff] cursor-pointer rounded-[100px] active:scale-99">
        Buy Now
      </button>
      <div
        className={`absolute top-[20px] right-[20px] px-[12px] py-[6px] rounded-[100px] font-medium text-[14px] ${
          product.tag === "Popular"
            ? "bg-[#E1E7FF]"
            : product.tag === "Best Seller"
              ? "bg-[#FEF3C6] text-[#BB4D00]"
              : product.tag === "New"
                ? "bg-[#DBFCE7] text-[#0A883E]"
                : ""
        }`}
      >
        <p
          className={`${
            product.tag === "Popular"
              ? "bg-[linear-gradient(to_right,#4F39F6,#9514FA)] bg-clip-text text-transparent"
              : ""
          }`}
        >
          {product.tag}
        </p>
      </div>
    </div>
  );
};

export default Product;
