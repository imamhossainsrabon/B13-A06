import { toast } from "react-toastify";


const Cart = ({cart, setCart}) => {
    const cartProducts = cart
    const totalPrice = cartProducts.reduce((sum, item) => {
  return sum + item.price;
}, 0);
    console.log(totalPrice)
    const handleDelete= (product)=> {
        const filteredCart = cartProducts.filter(cartProduct=> cartProduct.id !== product.id)
        setCart(filteredCart)
        toast.error('Item has been deleted from the cart')
    }
    const handlePurchase = ()=>{
        setCart([])
        toast.success("Order Placed successfully")
    }
    
    return (
        <div className="rounded-[16px] border-[1px] border-solid border-[#F2F2F2] p-[40px] grid gap-[24px]">
            <h2 className="font-bold text-[24px] text-[#101727]">Your Cart</h2>
            {cartProducts.length > 0 && <>
            <div className="space-y-4">
                {cartProducts.map(product=> <div className="bg-[#F9FAFC] rounded-[16px] p-5 flex justify-between">
                    <div className="flex gap-[16px] items-center">
                        <img className="w-[60px]" src={product.icon} />
                        <div>
                            <h2 className="font-semibold text-[20px] text-[#101727] mb-2">{product.name}</h2>
                            <p className="font-medium text-[16px] text-[#627382]">${product.price}</p>
                        </div>
                    </div>
                    <button onClick={()=> handleDelete(product)} className="font-bold text-[#FF3980] cursor-pointer">Remove</button>
                </div>)}
            </div> 
            <div className="flex justify-between">
                <h4 className="text-[#627382]">Total: </h4>
                <h6 className="text-[24px] font-bold text-[#101727]">${totalPrice}</h6>
            </div>
            <button onClick={handlePurchase} className="bg-[linear-gradient(90deg,_#4F39F6,_#9514FA)] text-white font-bold py-4 rounded-full cursor-pointer active:scale-99">Proceed to Checkout</button></> }
            {cartProducts.length === 0 && <div>
                <h5 className="text-center font-bold text-4xl text-[#101727]">Your Cart is Empty</h5>
            </div> }
        </div>
    );
};

export default Cart;