import React from 'react'
import { banners } from '../api/Data';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import { MdOutlineChair } from 'react-icons/md';
import { Link } from 'react-router-dom';






// Custom Arrow Components
  const SamplePrevArrow = (props) => {
      const { className, style, onClick } = props;
   return ( <IoIosArrowRoundBack className={className}
      style={{ ...style, display: 'block', color: 'black', borderRadius:'50%',marginLeft:'50px',background:'blue', fontSize: '44px', zIndex: 1 }} 
      onClick={onClick} /> );
     };
      const SampleNextArrow = (props) =>{
          const { className, style, onClick } = props; 
      return ( <IoIosArrowRoundForward className={className}
          style={{ ...style, display: 'block', color: 'black', fontSize: '24px', background:'blue', borderRadius:'50%',marginRight:'50px', zIndex: 1 }}
          onClick={onClick} /> ); };

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 2000,
         arrows: true,
          prevArrow: <SamplePrevArrow />,
           nextArrow: <SampleNextArrow />,
 
       
      };
  return (
    <div >
        <div className='w-10/12 m-auto
        '>
            
            <div className='py-20 w-full '>
            <div className='pt-6' >
            
                <h1 className='text-3xl lg:text-5xl text-blue-800 font-bold flex gap-2'><MdOutlineChair className='text-5xl text-violet-600'/> 
                    Decorate Your House With 
                </h1>
                <div className='flex items-center mb-10 gap-4'>
                <p className='text-3xl lg:text-5xl text-violet-900 font-bold mb-4'>Our Furniture </p>
                <Link to='/shop' className='bg-blue-500 hover:bg-blue-700 text-white
                 font-bold  px-2 h-10 rounded-xl flex items-center justify-center'>Buy Now</Link>
                </div>
            </div>
                <Slider {...settings}>
                {banners.map((val,i)=>(
                   <div key={i}>
                    <img src={val.banner} alt="" className='w-full h-96' />

                   </div>
                ))}
                </Slider>
            </div>

        </div>
      
    </div>
  )
}

export default Banner
