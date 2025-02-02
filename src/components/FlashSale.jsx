import React, { useState } from 'react'
import { products } from '../api/Data'
import Heading from './Heading'
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Modal from './Modal';

const FlashSale = () => {
  const [isModalOpen,setIsModalOpen]= useState(false);
  const handleOpen = (productId)=>{
   setIsModalOpen(productId);
  //  alert();
  }
  const handleClose = (productId)=>{
    setIsModalOpen(null);
  }
  return (
    <div>
      <div className='w-10/12 m-auto'>
      <Heading heading={'product on sale'}/>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 px-8 py-6'>
          {products.map((item,id)=>(
            <div key={id} className='mt-8'>
            <div className='rounded-3xl relative'>
              <img src={item.img} alt="" className='rounded-3xl w-full h-[370px] bg-red-200' />
              <div className='absolute top-0 right-0 p-4'>
              <FaHeart />
              </div>
              <div className='absolute bottom-0 right-0 p-4 rounded-xl bg-white'> 
              <FaShoppingCart onClick={()=>handleOpen(item.id)}/>
              </div>
            </div>
            {/* view  */}
            <div className='flex justify-between px-6 mt-2'>
              <p>{item.title}</p>
              <p>${item.price}</p>
            </div>
            </div>
          ))}

        </div>
      </div>
      <Modal isModalOpen={isModalOpen} 
      data={products.find((item)=>item.id === isModalOpen)}
       handleClose={handleClose}/>
    </div>
  )
}

export default FlashSale
