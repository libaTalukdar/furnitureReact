import React, { useEffect, useState } from 'react'
import { products } from "../api/Data";
import { FaTimes } from 'react-icons/fa'
import { PiMinus, PiPlus } from 'react-icons/pi'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, getCartTotal, updateQuantity } from '../redux/CartSlice'

const Modal = ({isModalOpen,handleClose,data}) => {
  const [qty,setQty] = useState(1);
  const [addedItemToCart,setAddedItemToCart]= useState(false);

  const dispatch = useDispatch();
  const addItemToCart = (product)=>{
  let totalPrice = qty * product.price;
  const tempProduct = {
    ...product,
    quantity:qty,
    totalPrice,
  };

  dispatch(addToCart(tempProduct));
  dispatch(getCartTotal());
  setAddedItemToCart(true);
  };
useEffect(()=>{
  if(isModalOpen){
    document.body.classList.add("modal-open");
}
  else{
    setQty(1);
      setAddedItemToCart(false);
       document.body.classList.remove("modal-open");

    
  }
}, [isModalOpen]);

 const increaseQuantity = (itemId,currentQuantity)=>{
   const newQty = currentQuantity + 1;
  setQty(newQty);
  dispatch(updateQuantity({id:itemId, quantity:newQty}));
 }
 const decreaseQuantity = (itemId,currentQuantity)=>{
   const newQty = Math.max(currentQuantity - 1, 1);
   setQty(newQty);
   dispatch(updateQuantity({id:itemId, quantity:newQty}));
 }

  return (
    <div>
      {isModalOpen && (
        <div className='modal-overlay '>
            <div className='shadow-2xl p-6 w-2/3  relative bg-white overflow-hidden'>
          <span className='absolute top-0 right-0 p-4' onClick={()=>handleClose()}>
            <FaTimes/>
          </span>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
            <div className='justify-center items-center flex bg-slate-200 rounded-xl p-4'>
                <img src={data.img} alt=""className='w-3/5 h-[250px] rounded-xl ' />
            </div>
             <div className='space-y-1 font-bold'>
             <p>{data.short_description}</p>
             <p className='text-red-800'>{data.price}$</p>
             <p>{data.description}</p>
             <div className='flex items-center mb-2'>
                <p>Shades:</p>
                <select name="shades" id="Shades" className='border border-gray-300 rounded-md p-2 focus:outline-none'>
                <option value="option">choose</option>
                <option value="option">choose</option>
                <option value="option">xhkl</option>
                <option value="option"></option>
                </select>
             </div>
             <div className='flex  '>
              <button className='border border-gray-500 mt-4 py-3 px-6'
              onClick={()=>decreaseQuantity(data.id,qty)}>
                <PiMinus/>
              </button>
              <span className='border border-gray-500  mt-4 py-3 px-6'>{qty}</span>
              <button
               className='border border-gray-500  mt-4 py-3 px-6'
               onClick={()=>increaseQuantity(data.id,qty)}
              >
                <PiPlus/>
              </button>
             </div>
             <div className=' flex items-center mr-3'>
              {addedItemToCart ? (
               <button className='border mt-4 py-3 px-6 bg-red-500'>
                <Link to='/cart'> View Cart</Link>
               </button>
              
                
              ) : (
                <button className='border mt-4 py-3 px-6 bg-red-500'
               onClick={()=>addItemToCart(data)}>
                <Link > Add to Cart</Link>
               </button>
              )}
              
             </div>

             </div>
          </div>
                
            </div>
        </div>
      )
      }
    </div>
  )
}

export default Modal
