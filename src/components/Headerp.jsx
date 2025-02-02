import React, {  useState } from 'react'
import { navbar } from '../api/Data'
import { IoMenu } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";

import { Link,useLocation } from 'react-router-dom'
import {  HiOutlineShoppingBag, HiOutlineUser } from 'react-icons/hi';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';
const Headerp = () => {
  const location = useLocation();
   
    const [isSidebarOpen,setIsSidebarOpen]= useState(false);

    const toggleSidebar = ()=>{
      setIsSidebarOpen(!isSidebarOpen);

    }

    // menu toggle
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen);
    }

    const {totalItems} = useSelector((state)=>state.cart);
  return (
   <div >
    
        <div className='fixed inset-0 px-6 bg-white h-[70px] w-10/12 shadow-lg z-50
         mx-auto flex flex-wrap justify-between items-center '>
        <Link to='/' className='text-lg sm:text-3xl text-pink-950 font-bold font-mono'>Furniture</Link>
                <div className=' hidden md:flex flex-wrap text-base py-3'>
                    {navbar.map((val,key)=>(
                        <div key={key} className='mr-5'>
                            <Link 
                            className={`link-hover transition-all ${ location.pathname === val.path ? 'active' : '' }`}
                             to={val.path} > {val.nav} </Link>
                        </div>
                    ))}
                </div>
                <li className='flex flex-wrap space-x-4 '>
                    
                    <Link className='text-2xl'>
                    <HiOutlineUser/>
                    </Link>
                    <Link className=' relative text-2xl'onClick={toggleSidebar} >
                    <HiOutlineShoppingBag  />
                   <div className='text-sm absolute bottom-2 left-5 bg-yellow-500 py-1 px-2 rounded-full'>
                   <span>{totalItems}</span>
                   </div>
                    </Link>
                     {/* hmburger  */}
                <button className='md:hidden text-2xl' onClick={handleMenuToggle}>
          {isMenuOpen ? <IoCloseCircleOutline /> : <IoMenu />}
        </button>
        
                </li>


                {isMenuOpen &&(
                  <div className='absolute top-[70px]
                   left-0 w-full bg-white flex flex-col items-center space-y-4 py-4 shadow-lg z-40'>
                {navbar.map((val,key)=>(
                  <div key={key} className='w-full text-center'>
                     <Link className='block py-2' to={val.path} onClick={() => setIsMenuOpen(false)}>
                {val.nav}
              </Link>

                  </div>
                ))}
                  </div>
                )} 

               
        </div>
        {/* sidebar */}
        <div>
          <Sidebar isSidebarOpen={isSidebarOpen} 

          closeSidebar={()=>toggleSidebar()}
          />
        </div>
        </div>
      
    
  )
}

export default Headerp
