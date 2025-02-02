import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal, removeItem, updateQuantity } from '../redux/CartSlice';
import { FaTimes } from 'react-icons/fa';
import { PiMinus, PiPlus } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const Cart = () => {
  // const [qty,setQty] = useState(1);
  const dispatch = useDispatch();
  const {data:cartProducts, totalAmount} = useSelector(
    (state)=> state.cart
  );

  const removeFromCart = (itemId) =>{
    dispatch(removeItem({id:itemId}));
    dispatch(getCartTotal());
  };
const increaseQuantity = (itemId,currentQuantity)=>{
  dispatch(updateQuantity({id:itemId, quantity:currentQuantity + 1}));
  dispatch(getCartTotal());
}
const decreaseQuantity = (itemId,currentQuantity)=>{
  if(currentQuantity>1){
    dispatch(updateQuantity({id:itemId, quantity:currentQuantity - 1}));
    dispatch(getCartTotal());
  }
}

  return (
    <div className='m-auto w-10/12 '>
       <div className='mt-8 '>
        {cartProducts.length === 0 ?(
          <h1>Your Cart has No Product</h1>
        ) :(
          <div>
            <div className='  shadow-xl rounded-2xl p-6'>
              <table className='w-full my-8 '>
                <thead  className=' bg-red-400 text-black font-semibold ' >
                  <tr>
                    <th className='px-4 py-4'></th>
                    <th className='px-4 py-4 text-sm sm:text-lg'>Products </th>
                    <th className='px-4 py-4 text-sm sm:text-lg'>Price</th>
                    <th className='px-4 py-4 text-sm sm:text-lg'>Quantity</th>
                    <th className='px-4 py-4 text-sm sm:text-lg'>Sub Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts.map((item,key)=>

                  (
                        <tr key={key}>
                    <td className='text-center px-4 py-2'>
                      <span onClick={()=>removeFromCart(item.id)}><FaTimes/></span>
                    </td>
                    <td className='text-center px-4 py-2'>
                      <div className='flex flex-col items-center'>
                      <img src={item.img} alt="" className='h-40 w-40 object-contain mr-2'/>
                      <p>{item.title}</p>
                      </div>
                    </td>
                    {/* <td>{item.title}</td> */}
                    <td className='text-center px-4 py-2 '>${item.price}</td>
                    <td className='text-center px-4 py-2'>
                      <div className='flex '>
                     <button className='border mt-4  py-1 sm:py-3 px-1 sm:px-6'
                     onClick={()=> increaseQuantity(item.id,item.quantity)}
                     ><PiPlus/></button>
                     <span className='border mt-4 py-1 sm:py-3 px-1 sm:px-6'>{item.quantity}</span>
                     <button className='border mt-4 py-1 sm:py-3 px-1 sm:px-6'
                     onClick={()=> decreaseQuantity(item.id,item.quantity)}
                     ><PiMinus/></button>
                      </div>
                    </td>
                    <td className='text-center px-4 py-2'>${item.price * item.quantity}</td>
                  </tr>
                  ))}
                  
                </tbody>
              </table>
            </div>

            {/* total */}
            <div className='py-12 px-10 max-w-[500px] bg-white border border-gray-300  shadow-2xl mt-4 mb-6 '>
              <h1 className='mb-4 text-center text-3xl font-extrabold'>Cart Total</h1>
              <h2 className='flex justify-between mt-3'>Sub Total:<span>${totalAmount}</span></h2>
              <div className='flex justify-between mt-3'>
                Shipping Charge: <span>$10</span>
              </div>
              <div className='flex justify-between mt-3'>
                Grand Total:<span>${totalAmount + 10}</span>
              </div>
              <div className='flex flex-col sm:flex-row space-x-4 space-y-4  mt-4'>
                <div className='mt-2'>
                  <button className='bg-red-600 text-white whitespace-nowrap px-2 py-2 hover:bg-green-600'>Proceed To Checkout</button>
                </div>
                <div className='inline-block '>
                  <Link to={"/shop"} className='bg-green-600 text-white px-2 py-2 whitespace-nowrap  hover:bg-green-400'>Continue shopping</Link>
                </div>
              </div>
            </div>
          </div>
        )}
       </div>
    </div>
  )
}

export default Cart
