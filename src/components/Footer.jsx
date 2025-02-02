import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-600 py-6 text-white'>
      <div className='w-10/12 m-auto'>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8'>
          <div className='space-y-4 '>
            <h1 className='py-2 font-bold text-2xl  lg:text-3xl'>Our Store</h1>
            <p>Lorem ipsum dolor, sit amet consectetur
               adipisicing elit. Porro, quae? Excepturi odit ad harum unde reiciendis!</p>
          </div>
          <div >
            <h1 className='py-2 font-bold text-2xl  lg:text-3xl'>Quick Links</h1> 
            <div className='space-y-4'> 
            <p>My Account</p>
            <p>Shopping Cart</p>
            <p>Wishlist</p>
            <p> Product Compare</p>
            </div>
           
          </div>
          <div>
            <h1 className='py-2 font-bold text-2xl  lg:text-3xl'>Information</h1>
           <div className='space-y-3'>
           <p>Privacy Policy</p>
            <p>Refund Policy</p>
            <p>Shipping and Return</p>
            <p>Terms and Conditions</p>
           </div>
          </div>
          <div>
            <h1 className='py-2 font-bold text-2xl  lg:text-3xl'>Lets Get In Touch</h1>
            <p>Sign Up for our Newsletter and Receive 10% Off</p>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Footer
