import React from 'react'
import ph1 from '@/assets/images/ShoppingCart/shopCart1.svg'
import { Trash2 } from 'lucide-react';
import Button from '@/components/sections/Universals/Button'
const Goods = () => {
  return (
    <div className='h-fit md:h-[525px] w-full  flex items-center justify-center'>
      <div className="int h-[150vh] md:h-[390px] w-[90%] flex flex-col md:flex-row md:items-center md:justify-between ">

        <div className='w-full md:w-[70%] md:h-full flex flex-col md:mr-[30px] '>

          <div className="pr-info w-full h-[55px] hidden md:flex">
            <div className="flex justify-evenly w-full h-[55px] items-center text-[24px]  bg-[#F9F1E7] text-center text-black">
              <div>Product</div>
              <div className='ml-10'>Price</div>
              <div>Quantity</div>
              <div>Subtotal</div>
            </div>
          </div>


          <div className="pr-block h-fit md:w-full  md:h-fit mt-[55px] bg-[#F9F1E7] rounded-2xl md:rounded-[0px] md:bg-white ">
            <div className="pr-single w-full flex flex-col md:flex-row justify-between items-center gap-4 p-4">
          
              <div className="item-img w-full bg-[#F9F1E7] h-[200px] md:w-[108px] md:h-[105px] rounded-2xl flex justify-center items-center">
                <img src={ph1} alt="#" className="object-cover w-full h-full" />
              </div>

 
              <div className="item-price flex flex-col md:flex-row gap-5 w-full md:w-[703px] items-center justify-between text-center md:text-left">
                <div className="name text-[24px] md:text-[20px] md:text-base">Asgaard sofa</div>
                <div className="price hidden md:block text-[24px] md:text-[14px] md:text-base">Rs. 250,000.00</div>
                <div className="qnty w-[50px] h-[50px] md:w-[32px] md:h-[32px] rounded-[8px] border-2 flex justify-center text-2xl items-center border-black">
                  1
                </div>
                <div className="subtotal text-3xl md:text-[14px] md:text-base">
                  Rs. 250,000.00
                </div>
              </div>

      
              <div className="delete-btn md:mr-5">
                <button>
                  <Trash2 stroke="#B88E2F" size={40}/>
                </button>
              </div>
            </div>
          </div>
        </div>


        <div className='g-2 w-full rounded-2xl md:rounded-[0px] h-full md:w-[30%] bg-[#F9F1E7]  md:h-full flex flex-col justify-around items-center mt-10 md:mt-0'>
          <h2 className="text-2xl font-bold">Cart Totals</h2>

          <div className="flex justify-between w-[60%] items-center">
            <span className="text-[16px]">Subtotal</span>
            <span className="text-gray-500 text-[16px]">Rs. 250,000.00</span>
          </div>

          <div className="flex justify-between w-[60%] items-center">
            <span className="text-[16px]">Total</span>
            <span className="text-[#B88E2F] font-bold text-[20px]">Rs. 250,000.00</span>
          </div>

          <Button text={"CHECK OUT"} width={"196px"} height={"48px"}></Button>

          
        </div>
      </div>
    </div>
  )
}

export default Goods
