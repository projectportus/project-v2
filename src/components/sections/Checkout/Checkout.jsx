import { useState } from 'react'
import Header from "@/layouts/Header/Header";
import Banner from '../Banner/Banner'
import CompanyInfo from '../CompanyInfo/CompanyInfo';
import ClonnedFooter from '../ClonnedFooter/ClonnedFooter';
import CheckoutMainBLock from './AdditionalParts/CheckoutMainBLock';
import SideBar from '@/components/sections/ShoppingCardSideBar/SideBar'

const Checkout = () => {

const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Header setIsOpen={setIsOpen}/>
      {isOpen && <SideBar open={isOpen} setOpen={setIsOpen} />}
      <Banner catName={"Checkout"} catLabel={"Checkout"} ></Banner>

      <CheckoutMainBLock></CheckoutMainBLock>
      
      <CompanyInfo></CompanyInfo>
      <ClonnedFooter></ClonnedFooter>
    </div>
  )
}

export default Checkout
