import React from 'react'
import { Link } from "react-router-dom";
import { ShoppingBag } from 'lucide-react'
import { CircleX } from 'lucide-react';
import { X } from 'lucide-react';
import ph1 from '@/assets/images/ShoppingCart/shopCart1.svg'
import ph2 from '@/assets/images/ShoppingCart/shopCart2.svg'
const SideBar = ({open, setOpen}) => {
  if(!open) return null;
 

  return (
        <div className="fixed inset-0 bg-[rgba(49,49,49,0.8)] z-50">
            <div className="sidebar w-[100vw] md:max-w-[417px] min-h-[400px] max-h-[100vh] absolute right-0 flex flex-col justify-between bg-white overflow-y-auto">
            <div className="shop-cart-info w-full p-5 flex-1 overflow-auto ">
                <div className='flex justify-between items-center mb-4'>
                <h2 className='text-[24px] font-semibold'>Shopping Cart</h2>
                <button onClick={() => setOpen(false)}><ShoppingBag /></button>
                </div>
                <hr className="border-t border-gray-300" />
        
                <div className='shopBLock mt-4 flex flex-col gap-4'>
                {[{ image: ph1, title: "Asgaard sofa", price: 250000 }, 
                    { image: ph2, title: "Casaliving Wood", price: 270000 }].map((item, index) => (
                    <div key={index} className="singleShopEl flex justify-between gap-5 items-center">
                        <div className="product-pic w-[108px] h-[105px] rounded-2xl bg-[#F9F1E7] flex justify-center items-center">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className="pr-info flex flex-col justify-between">
                            <span className="item-name">{item.title}</span>
                            <div className="total-price flex items-center">
                            <span className="quantity">1</span><X size={16} />
                            <span className="price text-[12px] text-[#B88E2F] font-semibold">Rs. {item.price.toLocaleString()}</span>
                            </div>
                        </div>
                        <button>
                            <CircleX />
                        </button>
                    </div>
                ))}
                
                </div>
            </div>
                <div className="final-block p-5 border-t border-gray-300">
                    <div className="subtotal flex justify-between mb-4">
                        <span>Subtotal</span>
                        <span className="sub-p text-[#B88E2F]">Rs. 520,000.00</span>
                    </div>
                    <div className="btns-block md:w-fit py-2 flex md:flex-row justify-around md:justify-between flex-col items-center gap-5 ">
                        <button className="rounded-2xl w-[70vw] md:w-fit py-2 border-2 border-black  md:px-5  md:py-2">
                            <Link className='block w-full h-full' to="/shopping-cart ">Cart</Link>
                        </button>
                        <button className='rounded-2xl w-[70vw] md:w-fit py-2 border-2 border-black md:px-5 md:py-2'>
                            <Link className='block w-full h-full' to="/checkout">Checkout</Link>
                        </button>
                        <button className='rounded-2xl w-[70vw] md:w-fit py-2 border-2 border-black md:px-5 md:py-2'>Comparison</button>
                    </div>
                </div>
            </div>
    </div>
  
  )
}

export default SideBar
