import React from 'react'
import Heading from '../components/Heading'

const AboutUs = () => {
  return (
    <div>
       <div className="bg-gray-100 w-10/12 m-auto py-16">
      <div className=" px-8">
        <Heading heading={'About Us'}/>
        <p className="text-lg text-gray-600 mb-6 max-w-[700px] mx-auto">
          Welcome to our furniture store! We are dedicated to providing you with the highest quality furniture that combines
          style, comfort, and durability. Our team of passionate designers and craftsmen work tirelessly to bring you unique
          and timeless pieces that will enhance the beauty of your home.
        </p>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-center mb-2">Our Mission</h2>
            <p className="text-gray-600 max-w-[500px] mx-auto border-gray-600 border-4 rounded-md p-4 shadow-2xl">
              Our mission is to create furniture that not only looks stunning but also stands the test of time. We believe in
              sustainability and use eco-friendly materials in our production processes. Our goal is to make your living spaces
              more beautiful and functional with our thoughtfully designed furniture.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-center mb-2">Our Vision</h2>
            <p className="text-gray-600 max-w-[500px] mx-auto border-gray-600 border-4 rounded-md p-4 shadow-2xl">
              We envision a world where every home is a sanctuary filled with beautifully crafted furniture. Our vision is to be
              the leading provider of furniture that blends aesthetics with functionality, creating spaces where you can relax
              and thrive.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-center mb-2">Our Team</h2>
            <p className="text-gray-600 max-w-[500px] mx-auto border-gray-600 border-4 rounded-md p-4 shadow-2xl">
              Behind every piece of furniture we create is a team of talented individuals who are passionate about design and
              craftsmanship. From our designers to our craftsmen, each member of our team brings their expertise and creativity
              to the table, ensuring that every product we offer is of the highest quality.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutUs
