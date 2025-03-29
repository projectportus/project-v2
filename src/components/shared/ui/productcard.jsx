import React from 'react'
import { useNavigate } from 'react-router-dom';
import Icons from '@/assets/icons/header-icons/icons';

const productСard = ({product,offer, bagdeStatus, discount}) => {
  let color = discount ? "#E97171" : "#2EC1AC";

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/single-product', { state: { product }, replace: true  });
  };

  return (
        <div onClick={handleClick} className='card-product new mb-5 relative'>
          <div className="overlay"></div>

        {bagdeStatus &&(
          <div
            className="badge absolute top-[24px] right-[24px] w-[48px] h-[48px] rounded-4xl flex justify-center items-center text-white"
            style={{ backgroundColor: color }}
          >
            {offer}
          </div>
        )}
          <div className="hover-content text-white text-center ">
            <button className="bg-white text-[#B88E2F] w-[80%] h-[50px] font-semibold cursor-pointer ">Add to cart</button>
            <div className="flex justify-center gap-1 mt-5 items-center">
                <button className='flex items-center font-semibold gap-1'>{Icons.share}Share</button>
                <button className='flex items-center font-semibold gap-1'>{Icons.compare}Compare</button>
                <button className='flex items-center font-semibold gap-1'>{Icons.like}Like</button>
            </div>
          </div>

        <img src={product.image} alt="" />
        <div className="text-content flex flex-col justify-between h-35 p-2">
            <h1 className='text-pr-c text-4xl text-amber-50'>{product.title}</h1>
            <p>{product.desc}</p>
            <h2 className='font-bold' >{product.price}</h2>
        </div>
        </div>
     )
}

export default productСard
