import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'


const Home = () => {

  const dispatch = useDispatch()
  const {allProdutcs,loading,errorMsg}=useSelector(state=>state.productReducer)
  console.log(allProdutcs,loading,errorMsg);
// pagination logic
  const [currentPage,setCurrentPage]= useState(1)
  const productPerPage = 8
  const totalPages = Math.ceil(allProdutcs?.length/productPerPage)
  const currentPageProductLastIndex = currentPage* productPerPage
  const currentPageProductFirstIndex = currentPageProductLastIndex-productPerPage
  const visibleAllProducts = allProdutcs?.slice(currentPageProductFirstIndex,currentPageProductLastIndex)
  
  const navigateToNextPage = ()=>{
    if(currentPage!=totalPages){
      setCurrentPage(currentPage+1)
    }

  }
  const navigateToPreviousPage = ()=>{
    if(currentPage!=1){
      setCurrentPage(currentPage-1)
    }
  }

  useEffect(()=>{

    dispatch(fetchProducts())

  },[])

  return (
    <>
    <Header insideHome={true}/>
   <div style={{paddingTop:'100px'}} className="container px-4 mx-auto">
    { loading ?
    <div className="flex justify-center items-center my-5 text-lg">
      <img height={'70px'} width={'70px'} className='me-3' src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" />
       Loading...
    </div>
    :
      <>
     <div className="grid grid-cols-4 gap-4">
        {
          allProdutcs?.length>0 ?

          visibleAllProducts?.map(product=>(
            <div className="rounded border p-2 shadow">
            <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="" />
            <div className="text-center">
                <h3 className="text-xl font-bold">{product?.title
                }</h3>
                <Link to={`/${product?.id}/view`} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'> View More
                </Link>
            </div>
        </div>
          ))
          
        
        :
        <div className="flex justify-center text-red-600 items-center my-5 text-lg">
          Product not found !!!
        </div>
        
        }
     </div>
     <div className="text-2x mt-20 text-center font-bold">
      <span className="cursor-pointer"><i onClick={navigateToPreviousPage} className="fa-solid fa-backward me-5"></i></span>
      <span>{currentPage} of {totalPages}</span>
      <span className="cursor-pointer"><i onClick={navigateToNextPage} className="fa-solid fa-forward ms-5"></i></span>

     </div>
     </>
     }
   </div>
    </>
  )
}

export default Home