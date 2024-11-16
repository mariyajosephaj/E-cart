import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>
    <div className=" bg-violet-600 fixed w-full p-5 text-white ">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
        <Link className='text-2xl font-bold' to={'/'}> <i className='fa-solid fa-truck-fast me-1'></i> Daily Cart
        </Link>
          <p className=" text-sm mt-2">
            Designed and build with all the love in the world by the luminar team with the healp of our contributers.<br/>
            Code licensed Luminar,
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className=" flex flex-col gap-2">
          <Link to={'/'}>Landing </Link>
            <Link to={'/wishlist'}>Wishlist </Link>
            <Link to={'/wishlist'}>Cart </Link>
            
            
            
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Guides</h1>
          <nav className=" flex flex-col gap-2">
            {/* <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              Cappuccino
            </a> */}
            
            <p>React</p>
           <p>React Bootstrap</p>
           <p>React Router </p>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            
          
          <input type="text" style={{width:'300px'}} className='rounded p-1 ' placeholder='Enter your Email !' />
         <div className='flex'>
         <i class="fa-brands fa-facebook me-3"></i>
          <i class="fa-solid fa-phone me-3"></i>
          <i class="fa-brands fa-github me-3"></i>
          <i class="fa-brands fa-instagram me-3"></i>
          <i class="fa-brands fa-twitter me-3"></i>
          <i class="fa-brands fa-linkedin-in me-3"></i>
         </div>
          </nav>
        </div>
      </div>
      <div>
        <p>
        <p className='text-center mb-8'>Copyright &copy; Mariya Joseph, &reg; E-Cart</p>
          {/* <p className="text-white text-center py-4">
            @copyright developed by
            <span >
              {" "}
              Mariya Joseph{" "}
            </span>
            | All rights reserved
          </p> */}
        </p>
      </div>
    </div>
    </>
  )
}

export default Footer