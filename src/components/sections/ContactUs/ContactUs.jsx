import React from 'react'
import { useState } from "react";
import Header from '@/layouts/Header/Header'
import Banner from '@/components/sections/Banner/Banner'
import Form from './AdditionalParts/Form'
import CompanyInfo from '../CompanyInfo/CompanyInfo';
import ClonnedFooter from '../ClonnedFooter/ClonnedFooter';
import SideBar from "@/components/sections/ShoppingCardSideBar/SideBar";
const ContactUs = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Header setIsOpen={setIsOpen}/>
      {isOpen && <SideBar open={isOpen} setOpen={setIsOpen}  />}
      <Banner catName={"Contact"} catLabel={"Contact"} ></Banner>
      <Form></Form>
      <CompanyInfo></CompanyInfo>
      <ClonnedFooter></ClonnedFooter>
    </div>
  )
}

export default ContactUs
