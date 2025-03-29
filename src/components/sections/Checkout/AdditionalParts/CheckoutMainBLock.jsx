import React, { useState } from 'react';
import Button from '@/components/sections/Universals/Button'
import countries from '@/assets/data/countries/countries'
const CheckoutMainBLock = () => {
  
  
    
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [selectedMethod, setSelectedMethod] = React.useState('bank');
    
  return (
    <div className="checkout-main-block flex justify-center mt-[100px] md:mt-0 items-center w-full h-full md:h-[1829px]">


          <div className="w-[85%] h-[95%] flex flex-col items-center md:items-start gap-[100px] md:flex-row  md:justify-between ">

            <div className="billing-details  w-full h-fit md:w-[608px] p-5 md:p-[50px] md:gap-[36px] flex flex-col md:h-full">
                <div className="w-full md:w-[245px] text-[36px] font-semibold mb-5 md:mb-0">Billing details</div>
                <form action="">

                      <div className="flex justify-between w-full  h-[121px]">

                          <div className="h-fit md:gap-0 gap-2 md:h-full w-[48%] md:w-[45%]  flex flex-col justify-between">
                            <label className='text-[1.2rem] md:text-[16px]' htmlFor="">
                                First Name  
                            </label>
                            <input type="text" className='p-2 md:h-[75px] border-2 border-gray-500 rounded-[10px] outline-none md:p-5 text-2xl' />
                          </div>

                          <div className="h-fit md:gap-0 gap-2 md:h-full w-[48%] md:w-[45%]  flex flex-col justify-between">
                            <label className='text-[1.2rem] md:text-[16px]' htmlFor="">
                                Last Name  
                            </label>
                            <input type="text" className='p-2 md:h-[75px] border-2 border-gray-500 rounded-[10px] outline-none md:p-5 text-2xl' />
                          </div>
                      </div>
                      <div className="flex justify-between w-full  h-[121px]">

                          <div className="h-fit w-full  flex flex-col justify-between md:gap-0 gap-2 md:h-full ">
                            <label className='text-[1.2rem] md:text-[16px]' htmlFor="">
                                Company Name (Optional)
                            </label>
                            <input type="text" className='h-[75px] border-2 border-gray-500 rounded-[10px] outline-none p-5 text-2xl' />
                          </div>
                          
                      </div>

                      <div className="flex md:flex-row md:justify-between h-fit w-full  flex-col justify-between md:gap-0 gap-2  md:h-[121px] mt-[30px] md:mt-0">
                          <div className="h-full w-full flex flex-col justify-between ">
                            <label className='text-[1.2rem] md:text-[16px]' htmlFor="">
                                Country / Region
                            </label>
                            <div className="select-container ">
                              <select 
                                className='h-[75px]  w-full border-2 border-gray-500 rounded-[10px] appearance-none outline-none p-5 text-2xl'
                                value={selectedCountry.code}
                                style={{textAlignLast: 'left' }}
                                onChange={(e) =>
                                  setSelectedCountry(countries.find(c => c.code === e.target.value))
                                }
                              >
                                {countries.map((country) => (
                                  <option  key={country.code} value={country.code}>
                                  {country.name}
                                  </option>
                                ))}
                              </select>
                          </div>
                          </div>
                      </div>


                      <div className="flex justify-between w-full  h-[121px] mt-[30px] md:mt-0">
                          <div className="h-fit w-full  flex flex-col justify-between md:gap-0 gap-2 md:h-full ">
                            <label className='text-[1.2rem] md:text-[16px]' htmlFor="">
                            Street address
                            </label>
                            <input type="text" className='h-[75px] border-2 border-gray-500 rounded-[10px] outline-none p-5 text-2xl' />
                          </div>
                      </div>

                      <div className="flex justify-between w-full h-[121px] mt-[30px] md:mt-0">
                          <div className="h-fit w-full  flex flex-col justify-between md:gap-0 gap-2 md:h-full">
                            <label className='text-[1.2rem] md:text-[16px]' htmlFor="">
                            Town / City
                            </label>
                            <input type="text" className='h-[75px] border-2 border-gray-500 rounded-[10px] outline-none p-5 text-2xl' />
                          </div>
                      </div>     
                      <div className="flex justify-between w-full  h-[121px] mt-[30px] md:mt-0">
                          <div className="h-fit w-full  flex flex-col justify-between md:gap-0 gap-2 md:h-full">
                            <label className='text-[1.2rem] md:text-[16px]' htmlFor="">
                            Zip Code
                            </label>
                            <input type="text" className='h-[75px] border-2 border-gray-500 rounded-[10px] outline-none p-5 text-2xl' />
                          </div>
                      </div>           
                      <div className="flex justify-between w-full h-[121px] mt-[30px] md:mt-0">
                          <div className="h-fit w-full  flex flex-col justify-between md:gap-0 gap-2 md:h-full">
                            <label className='text-[1.2rem] md:text-[16px]' htmlFor="">
                            Phone
                            </label>
                            <input type="text" className='h-[75px] border-2 border-gray-500 rounded-[10px] outline-none p-5 text-2xl' />
                          </div>
                      </div>      
                      <div className="flex justify-between w-full  h-[121px] mt-[30px] md:mt-0">
                          <div className="h-fit w-full  flex flex-col justify-between md:gap-0 gap-2 md:h-full">
                            <label className='text-[1.2rem] md:text-[16px]' htmlFor="">
                            Email Address
                            </label>
                            <input type="text" className='h-[75px] border-2 border-gray-500 rounded-[10px] outline-none p-5 text-2xl' />
                          </div>
                      </div>     
                      <div className="flex justify-between w-full  h-[121px] mt-[20px]">
                          <div className="h-full w-full  flex flex-col justify-between">
                            <textarea
                              id="message"
                              className='h-fit border-2 border-gray-500 rounded-[10px] outline-none p-5 text-[1.2rem] md:text-2xl'
                              placeholder=" Additional Information"
                            />
                          </div>
                      </div>     
                </form>
            </div>


            <div className="pr-total p-5 w-full md:w-[508px] h-auto md:h-[789px] ">
                  <div className="order-summary flex flex-col w-full h-[205px] gap-5 border-b-1 border-gray-500">
                      <div className="line text-[1.2rem] md:text-[24px] gap-5 md:gap-0 font-semibold flex justify-between w-full  ">
                          <div>
                              Product
                          </div>
                          <div>
                              Subtotal
                          </div>
                      </div>
                      <div className="line text-[16px] font-semibold flex justify-between w-full ">
                          <div>
                          Asgaard sofa X 1
                          </div>
                          <div>
                          Rs. 250,000.00
                          </div>
                      </div>
                      <div className="line text-[16px] font-semibold flex justify-between w-full ">
                          <div>
                          Subtotal
                          </div>
                          <div>
                          Rs. 250,000.00
                          </div>
                      </div>
                      <div className="line text-[16px] font-semibold flex items-center justify-between w-full ">
                          <div>
                          Total
                          </div>
                          <div className='text-[24px] text-[#B88E2F]'> 
                          Rs. 250,000.00
                          </div>
                      </div>
                  </div> 
              <div className="mt-[22px]">
                <div className="flex items-center mb-4">
                  <span className="text-black text-xl">●</span>
                  <h3 className="text-lg font-bold ml-2">Direct Bank Transfer</h3>
                </div>
                <p className="text-gray-500 text-sm text-[16px] ">
                  Make your payment directly into our bank account. Please use your Order ID as the
                  payment reference. Your order will not be shipped until the funds have cleared in our account.
                </p>

                <div className="space-y-3 mt-[20px]">
                  {['bank', 'cod'].map((method) => (
                    <label
                      key={method}
                      className={`flex items-center cursor-pointer ${
                        selectedMethod === method ? 'text-gray-500 font-bold' : 'text-gray-400'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={method}
                        checked={selectedMethod === method}
                        onChange={() => setSelectedMethod(method)}
                        className="mr-2"
                      />
                      {method === 'bank' ? 'Direct Bank Transfer' : 'Cash On Delivery'}
                    </label>
                  ))}
                </div>
                <div className='mt-[20px]'>
                  <p className="text-gray-500 text-sm text-[16px] ">
                  Your personal data will be used to support your experience throughout this website, 
                  to manage access to your account, and for other purposes described in our privacy policy.
                  </p>
                </div>
                <div className='w-full flex justify-center'>
                <Button text={"PLACE ORDER"} width={"196px"} height={"48px"}></Button>
                </div>
              
              </div>
            </div>  

          </div>

      </div>
  )
}

export default CheckoutMainBLock
