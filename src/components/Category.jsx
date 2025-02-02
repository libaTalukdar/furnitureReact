import React from 'react'
import { category } from '../api/Data'

const Category = () => {
  return (
    <div>
      <div className='w-10/12 m-auto py-6'>
      <div>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {category.map((cat,index)=>(
        <div className='m-2' key={index}>

           <div>
        {cat.img && (
           <div className='relative overflow-hidden rounded-3xl break-inside-avoid'>
            <img src={cat.img} alt="categoryImage" className="w-full h-auto object-cover rounded-3xl hover:scale-110 transition-transform duration-300" />
            <p className='absolute rounded-2xl rounded-s-none p-3 border-white bottom-0 text-xl bg-white'>{cat.name}</p>
           </div>
        )}

       
          </div>
              </div>
          ))}
        </div>
      </div>

      </div>
    </div>
  )
}

export default Category
