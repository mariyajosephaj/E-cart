import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'


const View = () => {
  const dispatch = useDispatch()
  const userWishlist = useSelector(state=>state.wishlistReducer)

  const [product,setProduct]= useState({})

  // for getting dynamic value from the url
  const {id} = useParams()
  console.log(id);
  console.log(product);
  

  useEffect(()=>{
    if(sessionStorage.getItem("allProducts")){
      const allProducts=JSON.parse(sessionStorage.getItem("allProducts"))
      setProduct(allProducts.find(item=>item.id==id))
    }

  },[])

  const handleWishlist = ()=>{

    const existingProduct = userWishlist?.find(item=>item?.id==id)
    if(existingProduct){
      alert("Product allready in your wishlist")
    }
    else{
      alert("Product added in your wish list")
      dispatch(addToWishlist(product))
    }
  }
  
  return (
    <>
    <Header/>
    <div className='flex flex-col mx-5'> 
        <div className="grid grid-cols-2 items-center h-screen">
            <img width={'350px'} height={"250px"}  className='ms-40' src={product?.thumbnail} alt="" />
            <div>
                <h3 className="font-bold">PID :{product?.id}</h3>
                <h1 className="text-5xl font-bold">{product?.title}</h1>
                <h4 className="font-bold text-red-600 text-2xl">$ {product?.price}</h4>
                <h4>Brand : {product?.brand}</h4>
                <h4>Categogry : {product?.category}</h4>
                <p><span className='font-bold'>Description</span>
                {product?.description}</p>
                <div className="flex justify-between mt-5">
                  <button onClick={handleWishlist} className="rounded bg-blue-600 text-white pt-2">ADD TO WISHLIST</button>
                  <button className="rounded bg-green-600 text-white pt-2">ADD TO CART</button>
                </div>
            </div>
        </div>


    </div>
    </>
  )
}

export default View