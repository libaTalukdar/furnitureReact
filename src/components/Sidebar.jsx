import React, { useEffect }  from 'react'
import { FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal, removeItem } from '../redux/CartSlice';
import { Link } from 'react-router-dom';

const Sidebar = ({isSidebarOpen, closeSidebar}) => {
  const dispatch= useDispatch();

  const {data:cartProducts,totalAmount} = useSelector(
    (state)=>state.cart
  );

  const cartSelector = useSelector((state)=>state.cart);
  useEffect(()=>{
  dispatch(getCartTotal())
  },[cartSelector])

  const removeFromCart= (itemId)=>{
    dispatch(removeItem({id:itemId}));
    dispatch(getCartTotal());
  };
  return (
    <div >
      <div
      style={{transform:`translateX(${isSidebarOpen ? '0' : '100%'})`}}
       className='fixed top-0 right-0 bg-white shadow-lg h-full w-[300px] p-4 transition-transform duration-300 ease-in-out
      overflow-y-auto z-50'>
        <div className='border-b mb-4'>
            <h1 className='text-3xl py-4'> Your Cart</h1>
        </div>
        <div className='p-4'>
            <span className='absolute top-0 right-0 p-4' onClick={closeSidebar}>
              <FaTimes/>
            </span>
        </div>

        {cartProducts.length === 0?(
       <div className='text-3xl font-bold uppercase'>
       Your Cart Has No Product

   </div>
        ):(
          cartProducts.map((val,index)=>(
            <div key={index} className=' grid grid-cols-4 gap-1 mb-2 items-center'>
              <div className='relative'>
                <img src={val.img} alt="" height={84} width={84}/>
                <span className='top-0 absolute mt-2 ml-2 bg-red-800 rounded-full text-white'
                onClick={()=>removeFromCart(val.id)}
                >
                  <FaTimes/>
                </span>
              </div>
              <div>
                <p>{val.title}</p>
              </div>

              <div>
                <p>{val.price}$</p>
                
              </div>
              <div>
              <p>Qty:{val.quantity}</p>
              </div>
              
            </div>
          ))
        )}

        <div className='flex p-6 items-center w-full font-bold bg-slate-100'>
          <h2>Sub Total: <span>{totalAmount}</span></h2>
          <div className='ml-4 bg-red-300 p-2 rounded-sm whitespace-nowrap'>
            <Link to='/cart'>View Cart</Link>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Sidebar
