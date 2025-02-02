import React, { useState } from 'react'
import { products } from '../api/Data'
import Heading from '../components/Heading';
import Modal from '../components/Modal';
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
// import Slider from 'react-slick';
import Category from './../components/Category';
const Shop = () => {
   const [isModalOpen,setIsModalOpen]= useState(false);
    const handleOpen = (productId)=>{
     setIsModalOpen(productId);
    //  alert();
    }
    const handleClose = (productId)=>{
      setIsModalOpen(null);
    };

    const [filters,setFilters]= useState({
      categories:[],
      brands:[],
      priceRange:[0,1500],
    } );

    const categoryList = Array.from(
      new Set(products.map((product)=>product.category))
    );
    const brandList = Array.from(
      new Set(products.map((product)=>product.brand))
    );

    const filterproducts = products.filter((product)=>{
      if(
        filters.categories.length > 0 &&
         !filters.categories.includes(product.category))
         return false;
         if(
          filters.brands.length > 0 &&
           !filters.brands.includes(product.brand))
           return false;

           const price = parseFloat(product.price);

           if(price < filters.priceRange[0] || price > filters.priceRange[1])
            return false;

           return true;

      
    });

    const handlePriceChange = (value) => {
      setFilters({...filters, priceRange:value})
    };

    // const handleCheckboxChange = (filterType,value)=>{
    //   const updatedFilter = [...filters[filterType]];
    //   const index = updatedFilter.indexOf(value);
    //   if(index === -1){
    //     updatedFilter.push(value);

    //   }else{
    //     updatedFilter.splice(index,1);

    //   }
    //   setFilters({...filters,[filterType]:updatedFilter});
    // };

    // demo =====
    // const handleCheckboxChange = (filterType, value) => {
    //   if (filterType === "categories") {
    //     setFilters({ ...filters, categories: [value] });
    //   } else if (filterType === "brands") {
    //     const updatedFilter = [value];
    //     setFilters({ ...filters, [filterType]: updatedFilter });
    //   }
    // };

    // demo
    const handleCheckboxChange = (filterType, value) => {
      if (filterType === "categories") {
        setFilters({ ...filters, categories: [value] });
      } else {
        const updatedFilter = [...filters[filterType]];
        const index = updatedFilter.indexOf(value);
        if (index === -1) {
          updatedFilter.push(value);
        } else {
          updatedFilter.splice(index, 1);
        }
        setFilters({ ...filters, [filterType]: updatedFilter });
      }
    };
    
    
   
  return (
    <div className='py-20'>
      <div >
      <Heading heading={'Buy Our Furniture'}/>
      <hr  className='bg-black  h-2 w-10/12 m-auto'/>
      </div>

      {/* filter */}

      <div className=' flex flex-col sm:flex-row  w-10/12 m-auto items-start py-6 '>
      <div className='filterproduct w-full sm:w-1/4 bg-white shadow-xl border border-gray-300 px-12 sm:px-6 py-6'>
      
        <div>
         {/* {by categoy} */}

         <div className='flex flex-row sm:flex-col gap-4'>

         <div>
         <div className='my-4'>
            <h1 className='text-xl sm:text-2xl font-semibold mb-3'>By Category </h1>
         </div>

         <div>
          {categoryList.map((cate,key)=>(
            <div key={key} className='flex items-center'>
              <input
               type="checkbox" 
              checked={filters.categories.includes(cate)}
              onChange={()=>handleCheckboxChange("categories",cate)}
              />
              <div>{cate}</div>
            </div>
          ))}
         </div>

         </div>
         {/* brand */}

         <div>
         <div className='my-4'>
            <h1 className='text-xl sm:text-2xl font-semibold mb-3'>By Brand </h1>
         </div>

         <div>
          {brandList.map((brand,key)=>(
            <div key={key} className='flex items-center '>
              <input
               type="checkbox" 
              checked={filters.brands.includes(brand)}
              onChange={()=>handleCheckboxChange("brands",brand)}
              />
              <div className='whitespace-nowrap'>{brand}</div>
            </div>
          ))}
         </div>

         </div>

         </div>
         <div className='my-4'>
            <h1 className='text-xl sm:text-2xl font-semibold mb-3'>Price </h1>
         </div>
         <Slider min={0}
          max={1500}
           range
            defaultValue={filters.priceRange}
             onChange={handlePriceChange}/>
             <div className='flex justify-between'>
        <span>Min Price: $ {filters.priceRange[0]}</span>
        <span>Max Price: $ {filters.priceRange[1]}</span>

        </div>
          
          </div>

        
        
      </div>
      
      <div className=' w-full md:w-8/12 mx-auto '>
      
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 px-8 py-6'>
          {filterproducts.map((item,id)=>(
            <div key={id} className='mt-8'>
            <div className='rounded-3xl relative'>
              <img src={item.img} alt="" className='rounded-3xl w-full h-[300px] bg-red-200' />
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
      </div>
      <Modal isModalOpen={isModalOpen} 
      data={products.find((item)=>item.id === isModalOpen)}
       handleClose={handleClose}/>
    </div>
  )
}

export default Shop
