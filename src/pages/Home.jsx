import React from 'react'
import { useState } from 'react'
import Header from '@/layouts/Header/Header'
import Footer from '@/layouts/Footer/Footer'
import Herosection from '@/components/sections/HeroSection/Hero'
import Browse from '@/components/sections/Browse/Browse'
import Products from '@/components/sections/Productslist/Products'
import Inspiration from '@/components/sections/Inspirations/Inspiration'
import SideBar from '@/components/sections/ShoppingCardSideBar/SideBar'
import Furn from '@/components/sections/Furniro/Furn'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <Header setIsOpen={setIsOpen}/>
        {isOpen && <SideBar open={isOpen} setOpen={setIsOpen} />}
        <Herosection/>
        <Browse/>
        <Products label="Our Products"/>
        <Inspiration/>
        <Furn/>
        <Footer/>
    </div>
  )
}

export default Home
