import React, { useEffect } from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'


const Home = () => {

  const dispatch = useDispatch()
  const {allProdutcs,loading,errorMsg}=useSelector(state=>state.productReducer)
  console.log(allProdutcs,loading,errorMsg);
  

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

          allProdutcs?.map(product=>(
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
     </>
     }
   </div>
    </>
  )
}

export default Home