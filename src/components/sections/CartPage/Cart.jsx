import React from 'react'
import { useState } from 'react'
import Header from '@/layouts/Header/Header'
import Banner from '../Banner/Banner'
import Goods from './actualGoods/Goods'
import CompanyInfo from '../CompanyInfo/CompanyInfo'
import ClonnedFooter from '../ClonnedFooter/ClonnedFooter'
import SideBar from '../ShoppingCardSideBar/SideBar'

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';



const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);


  const location = useLocation();

  useEffect(() => {
    console.log('Cart component updated!');
  }, [location]); 
  return (
    <div>
      <Header setIsOpen={setIsOpen}/>
      {isOpen && <SideBar open={isOpen} setOpen={setIsOpen} />}
      <Banner catName={"Cart"} catLabel={"Cart"} ></Banner>
      <Goods></Goods>
      <CompanyInfo></CompanyInfo>
      <ClonnedFooter></ClonnedFooter>
    </div>
  )
}

export default Cart
